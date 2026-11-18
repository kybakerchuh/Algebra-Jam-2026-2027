# Security Specification — Algebra Jam OST Student Progress

## 1. Data Invariants
1. A `studentProgress` document lives exclusively at `/studentProgress/{userId}` where `userId == request.auth.uid`.
2. Unauthenticated or unverified-email requests cannot read, create, update, or delete any document.
3. Collection listing (`/studentProgress`) is strictly denied (`allow list: if false`) so no student can enumerate or scrape other students' records.
4. Every `studentProgress` document must contain strictly the allowed keys (`uid`, `displayName`, `lifetimeCorrect`, `lifetimeWrong`, `topics`, `createdAt`, `updatedAt`) with zero shadow keys.
5. `uid` must equal `request.auth.uid` on creation and is immutable forever.
6. `createdAt` must equal `request.time` on creation and is immutable forever; `updatedAt` must equal `request.time` on both creation and update.
7. `topics` must contain strictly the 10 OST Playbook topic keys (`LAZY_WAY`, `DATA_ANALYSIS`, `POLYNOMIALS`, `FUNCTIONS`, `QUADRATICS`, `EXPONENTIALS`, `LINEAR_1`, `LINEAR_2`, `SYSTEMS`, `EXPR_EQ_INEQ`), each mapping strictly to `{ correct: int, wrong: int }` within `[0, 1000000]`.
8. On update, `lifetimeCorrect`, `lifetimeWrong`, and topic counters may only stay equal or increment monotonically (never forged downward), and only allowed fields (`displayName`, `lifetimeCorrect`, `lifetimeWrong`, `topics`, `updatedAt`) can be modified.

## 2. The "Dirty Dozen" Adversarial Payloads (Must All Return PERMISSION_DENIED)
1. **Unauthenticated read/write**: `request.auth == null` targeting `/studentProgress/abc`.
2. **Unverified email write**: `request.auth.token.email_verified == false` targeting own doc.
3. **Cross-user read**: Signed-in user `uidA` calling `get` on `/studentProgress/uidB`.
4. **Cross-user collection list**: Signed-in user listing `/studentProgress`.
5. **Identity spoofing on create**: `uidA` creating `/studentProgress/uidA` with payload `{ uid: "uidB", ... }`.
6. **Shadow field injection**: Creating or updating `/studentProgress/uidA` with an extra field `{ isAdmin: true }`.
7. **ID poisoning**: Accessing `/studentProgress/` with invalid/oversized doc ID containing special characters (`$bad!id` or >128 chars).
8. **DisplayName overflow**: Updating `displayName` with a 500-character string (`> 120` limit).
9. **Client timestamp forgery**: Setting `createdAt` or `updatedAt` to a past/client Date instead of `request.time`.
10. **Immutable field tampering**: Attempting to alter `uid` or `createdAt` on an `update`.
11. **Topic key tampering / missing topic**: Sending `topics` missing `QUADRATICS` or containing an unknown topic key `HACKED`.
12. **Negative or overflowing counters**: Setting `lifetimeCorrect: -5` or `topics.LAZY_WAY.wrong: 99999999` or decrementing `lifetimeCorrect` below existing value.
