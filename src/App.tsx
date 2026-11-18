/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';

export default function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      ref={iframeRef}
      title="NBA Jam: On Fire Edition (2026-27 Season)"
      src="/heights-jam.html"
      onLoad={() => iframeRef.current?.contentWindow?.focus()}
      className="w-screen h-screen border-0 block bg-[#080c14]"
    />
  );
}
