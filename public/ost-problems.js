// =============================================================================
// ALGEBRA 1 OST PLAYBOOK — 300 QUESTIONS ACROSS 10 PLAYBOOK TOPICS (30 EACH)
// Math notation uses [[...]] delimiters with \\frac{num}{den} and ^{exp}
// =============================================================================

window.OST_TOPICS = [
  {
    id: 'LAZY_WAY',
    title: 'The Lazy Way Strategies',
    shortTitle: 'Lazy Way',
    subtitle: 'Problem Types, Back-Solving, Desmos & Equivalent Expressions',
    badgeColor: '#f59e0b'
  },
  {
    id: 'DATA_ANALYSIS',
    title: 'Data Analysis',
    shortTitle: 'Data Analysis',
    subtitle: 'Box-Whisker, Dot Plots, Line of Best Fit & Two-Way Tables',
    badgeColor: '#06b6d4'
  },
  {
    id: 'POLYNOMIALS',
    title: 'All Things Polynomials',
    shortTitle: 'Polynomials',
    subtitle: 'Adding, Subtracting, Multiplying & Equivalent Expressions',
    badgeColor: '#8b5cf6'
  },
  {
    id: 'FUNCTIONS',
    title: 'Functions and Function Notations',
    shortTitle: 'Functions',
    subtitle: 'Function Rules, Vertical Line Test, Tables & Evaluating f(x)',
    badgeColor: '#10b981'
  },
  {
    id: 'QUADRATICS',
    title: 'Factoring, Solving, Modeling, Analyzing Quadratics',
    shortTitle: 'Quadratics',
    subtitle: 'Factoring, Roots/Zeros, Vertex & Projectile Motion',
    badgeColor: '#f97316'
  },
  {
    id: 'EXPONENTIALS',
    title: 'Create, Analyze, Model Exponential Functions',
    shortTitle: 'Exponentials',
    subtitle: 'Growth & Decay Models, Percent Rates & Word Problems',
    badgeColor: '#ec4899'
  },
  {
    id: 'LINEAR_1',
    title: 'Creating, Graphing, Modeling Linear (Part 1)',
    shortTitle: 'Linear Pt. 1',
    subtitle: 'Slope, Intercepts, Tables & Matching Graphs to Equations',
    badgeColor: '#3b82f6'
  },
  {
    id: 'LINEAR_2',
    title: 'Creating, Graphing, Modeling Linear (Part 2)',
    shortTitle: 'Linear Pt. 2',
    subtitle: 'Slope-Intercept & Standard Form Real-World Models',
    badgeColor: '#6366f1'
  },
  {
    id: 'SYSTEMS',
    title: 'Creating, Solving, Modeling Systems of Equations',
    shortTitle: 'Systems',
    subtitle: 'Systems of Equations, Inequalities & Word Problems',
    badgeColor: '#ef4444'
  },
  {
    id: 'EXPR_EQ_INEQ',
    title: 'Expressions, Equations, and Inequalities',
    shortTitle: 'Equations',
    subtitle: 'Simplifying, Multi-Step Equations & Spot-the-Error',
    badgeColor: '#14b8a6'
  }
];

window.OST_PROBLEMS = [
  // ===========================================================================
  // 1. THE LAZY WAY STRATEGIES (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'LW01', topic: 'LAZY_WAY',
    prompt: 'Which type of function is modeled by a situation where a population "doubles every 4 years"?',
    choices: ['Exponential', 'Linear', 'Quadratic', 'System of Equations'],
    correctIndex: 0,
    explanation: 'Words like "doubles every" or "triples each" indicate exponential growth.'
  },
  {
    id: 'LW02', topic: 'LAZY_WAY',
    prompt: 'A word problem asks for the "maximum height" of a rocket launched into the air. Which type of function fits this problem?',
    choices: ['Quadratic', 'Linear', 'Exponential', 'Inequality'],
    correctIndex: 0,
    explanation: 'Projectile motion and "max height" or "min value" are Quadratic clues.'
  },
  {
    id: 'LW03', topic: 'LAZY_WAY',
    prompt: 'A table of values increases by adding 6 to [[y]] each time [[x]] increases by 1. Which type of function is shown?',
    choices: ['Linear', 'Quadratic', 'Exponential', 'Absolute Value'],
    correctIndex: 0,
    explanation: 'Adding or subtracting the same constant amount each step means Linear.'
  },
  {
    id: 'LW04', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]] using back-solving: [[\\frac{3x - 1}{2} = 7]]',
    choices: ['[[5]]', '[[3]]', '[[4]]', '[[6]]'],
    correctIndex: 0,
    explanation: 'Plugging in 5 gives (15 − 1)/2 = 14/2 = 7.'
  },
  {
    id: 'LW05', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]]: [[4x - 7 = 2x + 9]]',
    choices: ['[[8]]', '[[4]]', '[[6]]', '[[7]]'],
    correctIndex: 0,
    explanation: 'Plugging in 8 gives 4(8) − 7 = 25 and 2(8) + 9 = 25.'
  },
  {
    id: 'LW06', topic: 'LAZY_WAY',
    prompt: 'If [[f(x) = -2x + 9]], find [[x]] such that [[f(x) = 1]].',
    choices: ['[[4]]', '[[3]]', '[[5]]', '[[6]]'],
    correctIndex: 0,
    explanation: 'f(4) = −2(4) + 9 = 1.'
  },
  {
    id: 'LW07', topic: 'LAZY_WAY',
    prompt: 'A taxi charges $4.50 for the first mile and $2.25 for each additional mile. If a passenger paid $13.50, how many total miles did they travel?',
    choices: ['[[5]]', '[[3]]', '[[4]]', '[[6]]'],
    correctIndex: 0,
    explanation: '1st mile = $4.50, plus 4 additional miles ($9.00) = $13.50, so 5 miles total.'
  },
  {
    id: 'LW08', topic: 'LAZY_WAY',
    prompt: 'What are the solutions to [[x^{2} - 5x + 8 = 2]]?',
    choices: ['[[x = 2, 3]]', '[[x = -2, -3]]', '[[x = 1, 6]]', '[[x = -1, 5]]'],
    correctIndex: 0,
    explanation: 'Move 2 over: x² − 5x + 6 = 0 factors to (x − 2)(x − 3) = 0.'
  },
  {
    id: 'LW09', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]]: [[\\frac{2}{3}(3x - 9) + 5 = 11]]',
    choices: ['[[x = 6]]', '[[x = 3]]', '[[x = 9]]', '[[x = 12]]'],
    correctIndex: 0,
    explanation: '2x − 6 + 5 = 11 simplifies to 2x − 1 = 11, so x = 6.'
  },
  {
    id: 'LW10', topic: 'LAZY_WAY',
    prompt: 'Find the vertex of the parabola [[y = 2x^{2} - 8x + 3]].',
    choices: ['[[(2, -5)]]', '[[(-2, 27)]]', '[[(4, 3)]]', '[[(2, 3)]]'],
    correctIndex: 0,
    explanation: 'x = −b/(2a) = 8/4 = 2, and y = 2(4) − 16 + 3 = −5.'
  },
  {
    id: 'LW11', topic: 'LAZY_WAY',
    prompt: 'A town starts with 500 residents and its population doubles every 3 years: [[P = 500(2)^{\\frac{t}{3}}]]. What will the population be after 6 years?',
    choices: ['[[2,000]]', '[[1,000]]', '[[1,500]]', '[[4,000]]'],
    correctIndex: 0,
    explanation: 'When t = 6, the exponent is 6/3 = 2, so 500(2)² = 2,000.'
  },
  {
    id: 'LW12', topic: 'LAZY_WAY',
    prompt: 'Using [[P = 500(2)^{\\frac{t}{3}}]], after how many years will the town population reach 1,000?',
    choices: ['[[3]] years', '[[2]] years', '[[6]] years', '[[1.5]] years'],
    correctIndex: 0,
    explanation: 'Doubling from 500 to 1,000 happens at t = 3 years.'
  },
  {
    id: 'LW13', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[4x^{2} - 81]]?',
    choices: ['[[(2x - 9)(2x + 9)]]', '[[(2x - 3)(2x + 27)]]', '[[(2x + 9)^{2}]]', '[[(4x - 9)(x + 9)]]'],
    correctIndex: 0,
    explanation: 'Difference of two squares: (2x)² − 9² = (2x − 9)(2x + 9).'
  },
  {
    id: 'LW14', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[\\frac{1}{2}(6x - 8) + 3]]?',
    choices: ['[[3x - 1]]', '[[3x - 5]]', '[[3x + 4]]', '[[\\frac{6x + 4}{2}]]'],
    correctIndex: 0,
    explanation: '(1/2)(6x − 8) + 3 = 3x − 4 + 3 = 3x − 1.'
  },
  {
    id: 'LW15', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[4x^{2} + 14x + 6]]?',
    choices: ['[[2(2x + 1)(x + 3)]]', '[[2(x + 3)(x + 1)]]', '[[(4x + 2)(x + 3)]]', '[[2x(x + 7) + 3]]'],
    correctIndex: 0,
    explanation: 'Factor out 2 first: 2(2x² + 7x + 3) = 2(2x + 1)(x + 3).'
  },
  {
    id: 'LW16', topic: 'LAZY_WAY',
    prompt: 'Which equation is equivalent to [[y = 2(x - 3) + 5]]?',
    choices: ['[[y = 2x - 1]]', '[[y = 2x + 1]]', '[[y = 2x + 2]]', '[[y = 2(x + 3) + 4]]'],
    correctIndex: 0,
    explanation: 'Distribute 2: 2x − 6 + 5 = 2x − 1.'
  },
  {
    id: 'LW17', topic: 'LAZY_WAY',
    prompt: 'Which equation clue identifies a Quadratic function?',
    choices: ['[[y = Ax^{2} + Bx + C]]', '[[y = mx + b]]', '[[y = a(b)^{x}]]', '[[Ax + By = C]]'],
    correctIndex: 0,
    explanation: 'Quadratics have x squared as the highest power of x.'
  },
  {
    id: 'LW18', topic: 'LAZY_WAY',
    prompt: 'If two lines in a system overlap completely on a graph, how many solutions does the system have?',
    choices: ['Infinite solutions', 'No solution', 'One solution', 'Two solutions'],
    correctIndex: 0,
    explanation: 'Overlapping lines share every point, meaning infinite solutions.'
  },
  {
    id: 'LW19', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]] by back-solving: [[\\frac{5x + 2}{3} = 9]]',
    choices: ['[[5]]', '[[3]]', '[[4]]', '[[7]]'],
    correctIndex: 0,
    explanation: '(5(5) + 2)/3 = 27/3 = 9.'
  },
  {
    id: 'LW20', topic: 'LAZY_WAY',
    prompt: 'If [[g(x) = 3x - 8]], find [[x]] when [[g(x) = 13]].',
    choices: ['[[7]]', '[[5]]', '[[6]]', '[[9]]'],
    correctIndex: 0,
    explanation: '3(7) − 8 = 21 − 8 = 13.'
  },
  {
    id: 'LW21', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[-(9 - 2x)(2x + 9)]]?',
    choices: ['[[4x^{2} - 81]]', '[[81 - 4x^{2}]]', '[[4x^{2} + 81]]', '[[4x^{2} - 36x + 81]]'],
    correctIndex: 0,
    explanation: '−(9 − 2x) = 2x − 9, so (2x − 9)(2x + 9) = 4x² − 81.'
  },
  {
    id: 'LW22', topic: 'LAZY_WAY',
    prompt: 'Which equation clue shows an Exponential function?',
    choices: ['[[x]] is in the exponent', '[[x]] is squared', 'Lines never cross', 'Constant rate per hour'],
    correctIndex: 0,
    explanation: 'Exponential equations have the variable x in the exponent, y = a(b)^x.'
  },
  {
    id: 'LW23', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]]: [[\\frac{3}{4}(4x + 8) - 2 = 10]]',
    choices: ['[[x = 2]]', '[[x = 4]]', '[[x = 6]]', '[[x = 1]]'],
    correctIndex: 0,
    explanation: '3x + 6 − 2 = 10 gives 3x + 4 = 10, so x = 2.'
  },
  {
    id: 'LW24', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[\\frac{6x + 4}{2}]]?',
    choices: ['[[3x + 2]]', '[[3x + 4]]', '[[6x + 2]]', '[[3x - 2]]'],
    correctIndex: 0,
    explanation: 'Divide both terms in the numerator by 2: 6x/2 + 4/2 = 3x + 2.'
  },
  {
    id: 'LW25', topic: 'LAZY_WAY',
    prompt: 'A streaming plan costs $12 per month plus a $15 setup fee. What type of function models the total cost?',
    choices: ['Linear', 'Quadratic', 'Exponential', 'Inverse'],
    correctIndex: 0,
    explanation: '"Per month" plus a one-time fee is a steady rate of change (Linear).'
  },
  {
    id: 'LW26', topic: 'LAZY_WAY',
    prompt: 'What are the solutions to [[x^{2} - 7x + 14 = 4]]?',
    choices: ['[[x = 2, 5]]', '[[x = -2, -5]]', '[[x = 1, 10]]', '[[x = 3, 4]]'],
    correctIndex: 0,
    explanation: 'Subtract 4: x² − 7x + 10 = (x − 2)(x − 5) = 0.'
  },
  {
    id: 'LW27', topic: 'LAZY_WAY',
    prompt: 'Solve for [[x]] by back-solving: [[6x - 5 = 3x + 13]]',
    choices: ['[[6]]', '[[4]]', '[[5]]', '[[8]]'],
    correctIndex: 0,
    explanation: '6(6) − 5 = 31 and 3(6) + 13 = 31.'
  },
  {
    id: 'LW28', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[9x^{2} - 25]]?',
    choices: ['[[(3x - 5)(3x + 5)]]', '[[(3x - 5)^{2}]]', '[[(9x - 5)(x + 5)]]', '[[(3x + 25)(3x - 1)]]'],
    correctIndex: 0,
    explanation: 'Difference of squares: (3x − 5)(3x + 5) = 9x² − 25.'
  },
  {
    id: 'LW29', topic: 'LAZY_WAY',
    prompt: 'In a table, the [[y]]-values multiply by 3 at every step as [[x]] increases by 1. Which graph shape does this make?',
    choices: ['A curve going up quickly', 'A straight line', 'A U-shaped parabola', 'Two parallel lines'],
    correctIndex: 0,
    explanation: 'Multiplying by a constant factor each step produces a fast exponential curve.'
  },
  {
    id: 'LW30', topic: 'LAZY_WAY',
    prompt: 'Which expression is equivalent to [[3(2x - 4) + 7]]?',
    choices: ['[[6x - 5]]', '[[6x + 3]]', '[[6x - 19]]', '[[5x - 5]]'],
    correctIndex: 0,
    explanation: 'Distribute 3: 6x − 12 + 7 = 6x − 5.'
  },

  // ===========================================================================
  // 2. DATA ANALYSIS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'DA01', topic: 'DATA_ANALYSIS',
    prompt: 'Jurrell tracks daily bakery customers for 1 month. Which box plot matches: Min = 32, Q1 = 51, Median = 77.5, Q3 = 89, Max = 103?',
    visual: {
      type: 'table',
      headers: ['Statistic', 'Value'],
      rows: [['Minimum', '32'], ['First Quartile (Q1)', '51'], ['Median', '77.5'], ['Third Quartile (Q3)', '89'], ['Maximum', '103']]
    },
    choices: [
      'Whiskers 32 to 103; box 51 to 89; line at 77.5',
      'Whiskers 32 to 103; box 51 to 89; line at 68.5',
      'Whiskers 32 to 89; box 51 to 77.5; line at 68.5',
      'Whiskers 51 to 103; box 68.5 to 89; line at 80'
    ],
    correctIndex: 0,
    explanation: 'A box plot uses the 5-number summary: Min, Q1, Median, Q3, and Max.'
  },
  {
    id: 'DA02', topic: 'DATA_ANALYSIS',
    prompt: 'Based on Jurrell’s bakery summary (Min = 32, Q1 = 51, Median = 77.5, Q3 = 89, Max = 103), what is the interquartile range (IQR)?',
    choices: ['[[38]]', '[[71]]', '[[26.5]]', '[[11.5]]'],
    correctIndex: 0,
    explanation: 'IQR = Q3 − Q1 = 89 − 51 = 38.'
  },
  {
    id: 'DA03', topic: 'DATA_ANALYSIS',
    prompt: 'Molly wants to live in a city with the least variation in temperature over 6 months. Based on the table, where should she live and why?',
    visual: {
      type: 'table',
      headers: ['Month', 'Chicago, IL', 'Honolulu, HI'],
      rows: [['January', '33°F', '79°F'], ['March', '46°F', '80°F'], ['May', '67°F', '83°F'], ['June', '77°F', '85°F']]
    },
    choices: [
      'Honolulu, Hawaii — lower standard deviation',
      'Chicago, Illinois — higher standard deviation',
      'Honolulu, Hawaii — higher mean',
      'Chicago, Illinois — lower median'
    ],
    correctIndex: 0,
    explanation: 'Honolulu temperatures stay between 79°F and 85°F, giving a much lower standard deviation.'
  },
  {
    id: 'DA04', topic: 'DATA_ANALYSIS',
    prompt: 'Class 5’s reading box plot has Q1 = 20 and Q3 = 40. Which other class has an interquartile range (IQR) equal to Class 5?',
    visual: {
      type: 'boxplot',
      axisMin: 0, axisMax: 60, step: 10,
      plots: [
        { label: 'Class 5', min: 10, q1: 20, med: 30, q3: 40, max: 50, color: '#f59e0b' },
        { label: 'Class 2', min: 20, q1: 30, med: 40, q3: 50, max: 60, color: '#38bdf8' }
      ]
    },
    choices: [
      'Class 2 (Q1 = 30, Q3 = 50)',
      'Class 1 (Q1 = 15, Q3 = 30)',
      'Class 3 (Q1 = 15, Q3 = 25)',
      'Class 4 (Q1 = 35, Q3 = 50)'
    ],
    correctIndex: 0,
    explanation: 'Class 5 IQR = 40 − 20 = 20; Class 2 IQR = 50 − 30 = 20.'
  },
  {
    id: 'DA05', topic: 'DATA_ANALYSIS',
    prompt: 'In a survey rating two products from 1 to 10, what is the difference between the ranges of the two dot plots?',
    visual: {
      type: 'dotplot',
      axisMin: 1, axisMax: 10,
      plots: [
        { label: 'Product A', minVal: 1, maxVal: 10, color: '#38bdf8', counts: {1:1,2:2,5:4,6:5,7:6,8:4,9:5,10:2} },
        { label: 'Product B', minVal: 3, maxVal: 10, color: '#f97316', counts: {3:1,4:2,6:3,7:4,8:5,9:6,10:3} }
      ]
    },
    choices: ['[[2]]', '[[1]]', '[[3]]', '[[7]]'],
    correctIndex: 0,
    explanation: 'Product A range = 10 − 1 = 9; Product B range = 10 − 3 = 7; difference = 9 − 7 = 2.'
  },
  {
    id: 'DA06', topic: 'DATA_ANALYSIS',
    prompt: 'Rasheed and Valentina each read 10 books. What is the difference in the median number of pages per book they read?',
    visual: {
      type: 'boxplot',
      axisMin: 200, axisMax: 450, step: 50,
      plots: [
        { label: 'Rasheed', min: 275, q1: 300, med: 350, q3: 375, max: 425, color: '#38bdf8' },
        { label: 'Valentina', min: 200, q1: 275, med: 300, q3: 375, max: 400, color: '#10b981' }
      ]
    },
    choices: ['[[50]] pages', '[[25]] pages', '[[75]] pages', '[[100]] pages'],
    correctIndex: 0,
    explanation: 'Rasheed’s median is 350 and Valentina’s median is 300; 350 − 300 = 50.'
  },
  {
    id: 'DA07', topic: 'DATA_ANALYSIS',
    prompt: 'A restaurant survey of 200 diners has Median = 8.00 and Mean = 7.35. Which statement justifies why the median is greater than the mean?',
    visual: {
      type: 'histogram',
      bins: [{l:'1-2',v:5},{l:'3-4',v:10},{l:'5-6',v:25},{l:'7-8',v:60},{l:'9-10',v:100}],
      yMax: 100
    },
    choices: [
      'The data are skewed',
      'There is a large standard deviation',
      'There are gaps in the data distribution',
      'The distribution is roughly symmetrical'
    ],
    correctIndex: 0,
    explanation: 'Left-skewed data pull the mean lower than the median.'
  },
  {
    id: 'DA08', topic: 'DATA_ANALYSIS',
    prompt: 'Ava has 48 fiction books and 22 nonfiction books. She has 18 total signed books, and 40 fiction books are unsigned. How many nonfiction books are signed?',
    visual: {
      type: 'table',
      headers: ['', 'Signed', 'Unsigned', 'Total'],
      rows: [['Fiction', '?', '40', '48'], ['Nonfiction', '?', '?', '22'], ['Total', '18', '?', '70']]
    },
    choices: ['[[10]]', '[[8]]', '[[12]]', '[[14]]'],
    correctIndex: 0,
    explanation: 'Signed fiction = 48 − 40 = 8, so signed nonfiction = 18 − 8 = 10.'
  },
  {
    id: 'DA09', topic: 'DATA_ANALYSIS',
    prompt: 'The two-way table shows vehicle interiors at a dealership. How many trucks have leather seats?',
    visual: {
      type: 'table',
      headers: ['Car Interiors', 'Cloth', 'Leather', 'Total'],
      rows: [['Cars', '21', '?', '55'], ['Trucks', '?', '?', '45'], ['Total', '51', '?', '100']]
    },
    choices: ['[[15]]', '[[30]]', '[[34]]', '[[24]]'],
    correctIndex: 0,
    explanation: 'Trucks with cloth = 51 − 21 = 30, so trucks with leather = 45 − 30 = 15.'
  },
  {
    id: 'DA10', topic: 'DATA_ANALYSIS',
    prompt: 'Of 680 households: 540 stream video, 80% have cable TV, and among those with NO cable, 7 times as many stream as do not stream. How many have cable AND stream?',
    choices: ['[[421]]', '[[119]]', '[[123]]', '[[544]]'],
    correctIndex: 0,
    explanation: 'No cable = 136, so 8k = 136 → 119 no-cable households stream; 540 − 119 = 421.'
  },
  {
    id: 'DA11', topic: 'DATA_ANALYSIS',
    prompt: 'A scatterplot passes near (0, 0), (2, 6), (4, 12), and (6, 18). Which equation best describes the line of best fit?',
    visual: {
      type: 'graph', xMin: 0, xMax: 8, yMin: 0, yMax: 20, xStep: 2, yStep: 4,
      dots: [[1,2],[2,7],[3,9],[4,13],[5,14],[6,18]]
    },
    choices: ['[[y = 3x]]', '[[y = \\frac{1}{2}x]]', '[[y = \\frac{1}{3}x]]', '[[y = 2x]]'],
    correctIndex: 0,
    explanation: 'From (0, 0) to (6, 18), the slope is 18/6 = 3, giving y = 3x.'
  },
  {
    id: 'DA12', topic: 'DATA_ANALYSIS',
    prompt: 'A scatterplot starts near (0, 3) and rises through (4, 10). Which equation best describes the line of best fit?',
    visual: {
      type: 'graph', xMin: 0, xMax: 8, yMin: 0, yMax: 12, xStep: 2, yStep: 2,
      dots: [[0,3],[1,4.5],[1,5],[2,7],[3,7.5],[4,10],[5,11]]
    },
    choices: ['[[y = 1.75x + 3]]', '[[y = 3x + 1.75]]', '[[y = 3x + 3]]', '[[y = 1.75x]]'],
    correctIndex: 0,
    explanation: 'The y-intercept is 3 and slope is (10 − 3)/4 = 1.75.'
  },
  {
    id: 'DA13', topic: 'DATA_ANALYSIS',
    prompt: 'Ms. Musto recorded coffee shop customers for 20 days, starting around 20 on Day 0 and reaching 60 around Day 20. Which line best fits the data?',
    visual: {
      type: 'graph', xMin: 0, xMax: 24, yMin: 0, yMax: 80, xStep: 5, yStep: 20,
      dots: [[1,25],[3,20],[5,38],[8,28],[10,46],[12,39],[15,56],[18,62],[20,64]]
    },
    choices: ['[[y = 2x + 20]]', '[[y = 3x + 10]]', '[[y = 3x + 30]]', '[[y = x + 20]]'],
    correctIndex: 0,
    explanation: 'Slope ≈ (60 − 20)/20 = 2 and y-intercept ≈ 20, so y = 2x + 20.'
  },
  {
    id: 'DA14', topic: 'DATA_ANALYSIS',
    prompt: 'What percentage of the data in a box-and-whisker plot falls inside the box (between Q1 and Q3)?',
    choices: ['[[50\\%]]', '[[25\\%]]', '[[75\\%]]', '[[100\\%]]'],
    correctIndex: 0,
    explanation: 'Each quartile section holds 25%, so the box from Q1 to Q3 holds the middle 50%.'
  },
  {
    id: 'DA15', topic: 'DATA_ANALYSIS',
    prompt: 'If a dot plot has one extremely high outlier far to the right of the other dots, which measure is affected the most?',
    choices: ['Mean', 'Median', 'Mode', 'Interquartile Range'],
    correctIndex: 0,
    explanation: 'Outliers pull the mean strongly toward the tail while the median resists them.'
  },
  {
    id: 'DA16', topic: 'DATA_ANALYSIS',
    prompt: 'A dot plot has a long tail extending to the left and most dots clustered on the right. How is the distribution described?',
    choices: ['Skewed left', 'Skewed right', 'Symmetrical', 'Uniform'],
    correctIndex: 0,
    explanation: 'A distribution is named by the direction of its tail: tail on the left = skewed left.'
  },
  {
    id: 'DA17', topic: 'DATA_ANALYSIS',
    prompt: 'On a scatterplot, points trend downward from left to right closely along a straight line. What kind of correlation is this?',
    choices: ['Strong negative correlation', 'Strong positive correlation', 'Weak positive correlation', 'No correlation'],
    correctIndex: 0,
    explanation: 'Going down left-to-right tightly along a line is a strong negative correlation.'
  },
  {
    id: 'DA18', topic: 'DATA_ANALYSIS',
    prompt: 'A box plot has Minimum = 12, Q1 = 18, Median = 24, Q3 = 31, and Maximum = 45. What is the range of the data?',
    choices: ['[[33]]', '[[13]]', '[[19]]', '[[27]]'],
    correctIndex: 0,
    explanation: 'Range = Maximum − Minimum = 45 − 12 = 33.'
  },
  {
    id: 'DA19', topic: 'DATA_ANALYSIS',
    prompt: 'In the line of best fit [[y = 4.2x + 15]], where [[x]] is hours studied and [[y]] is test score, what does [[4.2]] represent?',
    choices: ['Expected score increase per hour studied', 'Starting test score with 0 hours', 'Total number of students', 'Highest possible test score'],
    correctIndex: 0,
    explanation: 'The slope in a line of best fit gives the predicted change in y per 1-unit increase in x.'
  },
  {
    id: 'DA20', topic: 'DATA_ANALYSIS',
    prompt: 'A correlation coefficient of [[r = -0.94]] describes what type of relationship?',
    choices: ['Strong negative linear trend', 'Weak negative linear trend', 'Strong positive linear trend', 'No linear trend'],
    correctIndex: 0,
    explanation: 'Values near −1.0 indicate a very strong negative linear correlation.'
  },
  {
    id: 'DA21', topic: 'DATA_ANALYSIS',
    prompt: 'In a class survey of 80 students, 50 play a sport. Of the 30 who do NOT play a sport, 12 play an instrument. How many students neither play a sport nor an instrument?',
    choices: ['[[18]]', '[[12]]', '[[30]]', '[[38]]'],
    correctIndex: 0,
    explanation: '30 − 12 = 18 students play neither a sport nor an instrument.'
  },
  {
    id: 'DA22', topic: 'DATA_ANALYSIS',
    prompt: 'Two box plots share the same median of 50, but Team A has IQR = 8 and Team B has IQR = 22. Which statement is true?',
    choices: ['Team A has less spread in the middle 50%', 'Team B has less variation overall', 'Team A has a higher median', 'Team B has a smaller range'],
    correctIndex: 0,
    explanation: 'A smaller IQR means the middle 50% of values are packed closer together.'
  },
  {
    id: 'DA23', topic: 'DATA_ANALYSIS',
    prompt: 'A line of best fit is [[y = -2.5x + 90]]. Predict [[y]] when [[x = 8]].',
    choices: ['[[70]]', '[[110]]', '[[80]]', '[[65]]'],
    correctIndex: 0,
    explanation: 'y = −2.5(8) + 90 = −20 + 90 = 70.'
  },
  {
    id: 'DA24', topic: 'DATA_ANALYSIS',
    prompt: 'Which data set has the greatest standard deviation?',
    choices: ['[[10, 25, 50, 75, 90]]', '[[48, 49, 50, 51, 52]]', '[[50, 50, 50, 50, 50]]', '[[45, 48, 50, 52, 55]]'],
    correctIndex: 0,
    explanation: 'Standard deviation measures spread from the mean; 10 to 90 is the most spread out.'
  },
  {
    id: 'DA25', topic: 'DATA_ANALYSIS',
    prompt: 'In a box plot, what percent of the data values are greater than or equal to the lower quartile (Q1)?',
    choices: ['[[75\\%]]', '[[25\\%]]', '[[50\\%]]', '[[10\\%]]'],
    correctIndex: 0,
    explanation: 'Q1 marks the 25th percentile, so 75% of the data lie at or above Q1.'
  },
  {
    id: 'DA26', topic: 'DATA_ANALYSIS',
    prompt: 'A two-way table shows 120 shoppers: 75 bought coffee, and 45 of the coffee buyers also bought a muffin. How many coffee buyers did NOT buy a muffin?',
    choices: ['[[30]]', '[[45]]', '[[75]]', '[[15]]'],
    correctIndex: 0,
    explanation: '75 − 45 = 30 coffee buyers did not buy a muffin.'
  },
  {
    id: 'DA27', topic: 'DATA_ANALYSIS',
    prompt: 'Which correlation coefficient represents the weakest linear relationship?',
    choices: ['[[r = 0.08]]', '[[r = -0.89]]', '[[r = 0.72]]', '[[r = -0.55]]'],
    correctIndex: 0,
    explanation: 'Correlation closest to 0 indicates the weakest linear relationship.'
  },
  {
    id: 'DA28', topic: 'DATA_ANALYSIS',
    prompt: 'A dot plot of shoe sizes has values 7, 8, 8, 9, 9, 9, 10, 10, 11. What is the shape of this distribution?',
    choices: ['Symmetrical', 'Skewed left', 'Skewed right', 'Bimodal'],
    correctIndex: 0,
    explanation: 'The frequencies (1, 2, 3, 2, 1) are mirror images around 9, so it is symmetrical.'
  },
  {
    id: 'DA29', topic: 'DATA_ANALYSIS',
    prompt: 'On a box plot, the left whisker extends from 10 to 30 and the box goes from 30 to 40. Why is the left whisker longer than the left half of the box?',
    choices: ['The lowest 25% of data is more spread out', 'The lowest 25% has more data values', 'The median is at 20', 'There are no values between 10 and 30'],
    correctIndex: 0,
    explanation: 'Every section still holds 25% of the values; a longer whisker simply means greater spread.'
  },
  {
    id: 'DA30', topic: 'DATA_ANALYSIS',
    prompt: 'A linear regression through (2, 11) and (6, 23) gives which equation for the line of best fit?',
    choices: ['[[y = 3x + 5]]', '[[y = 3x + 11]]', '[[y = 4x + 3]]', '[[y = \\frac{1}{3}x + 5]]'],
    correctIndex: 0,
    explanation: 'Slope = (23 − 11)/(6 − 2) = 3; 11 = 3(2) + b gives b = 5.'
  },

  // ===========================================================================
  // 3. ALL THINGS POLYNOMIALS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'PO01', topic: 'POLYNOMIALS',
    prompt: 'Simplify the expression: [[(3x^{2} + 2x + 5) + (x^{2} + 4x - 1)]]',
    choices: ['[[4x^{2} + 6x + 4]]', '[[4x^{2} + 6x + 6]]', '[[3x^{2} + 6x + 4]]', '[[4x^{4} + 6x^{2} + 4]]'],
    correctIndex: 0,
    explanation: 'Combine like terms: 3x² + x² = 4x², 2x + 4x = 6x, 5 − 1 = 4.'
  },
  {
    id: 'PO02', topic: 'POLYNOMIALS',
    prompt: 'Simplify the expression: [[(5x^{2} + 3x - 2) - (2x^{2} - x + 4)]]',
    choices: ['[[3x^{2} + 4x - 6]]', '[[3x^{2} + 2x + 2]]', '[[3x^{2} + 2x - 6]]', '[[7x^{2} + 2x - 6]]'],
    correctIndex: 0,
    explanation: 'Flip all signs in the second polynomial: 5x² + 3x − 2 − 2x² + x − 4 = 3x² + 4x − 6.'
  },
  {
    id: 'PO03', topic: 'POLYNOMIALS',
    prompt: 'Multiply using the box method: [[(2x - 5)(x + 3)]]',
    choices: ['[[2x^{2} + x - 15]]', '[[2x^{2} - x - 15]]', '[[2x^{2} + 11x - 15]]', '[[2x^{2} - 15]]'],
    correctIndex: 0,
    explanation: '2x² + 6x − 5x − 15 = 2x² + x − 15.'
  },
  {
    id: 'PO04', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(2x - 3) + [4x(3x + 2)]]]?',
    choices: ['[[12x^{2} + 10x - 3]]', '[[12x^{2} + 2x - 1]]', '[[14x + 5]]', '[[9x - 1]]'],
    correctIndex: 0,
    explanation: '4x(3x + 2) = 12x² + 8x; add 2x − 3 to get 12x² + 10x − 3.'
  },
  {
    id: 'PO05', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(2x^{2} + 3)(x + 4)]]?',
    choices: ['[[2x^{3} + 8x^{2} + 3x + 12]]', '[[2x^{3} + 12]]', '[[2x^{2} + 11x + 12]]', '[[2x^{3} + 6x^{2} + 4x + 12]]'],
    correctIndex: 0,
    explanation: 'Multiply each term: 2x³ + 8x² + 3x + 12.'
  },
  {
    id: 'PO06', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(2x + 3)(6x - 12)]]?',
    choices: ['[[6(2x^{2} - x - 6)]]', '[[12x^{2} - 36]]', '[[12x^{2} + 6x - 36]]', '[[12x^{2} - 42x - 36]]'],
    correctIndex: 0,
    explanation: '(2x + 3)(6x − 12) = 12x² − 6x − 36 = 6(2x² − x − 6).'
  },
  {
    id: 'PO07', topic: 'POLYNOMIALS',
    prompt: 'An equation is given: [[(7x - 4)(5x + 3) = Fx^{2} + Gx + H]]. What is the value of [[H]]?',
    choices: ['[[-12]]', '[[-1]]', '[[1]]', '[[8]]'],
    correctIndex: 0,
    explanation: 'The constant term H comes from (−4)(3) = −12.'
  },
  {
    id: 'PO08', topic: 'POLYNOMIALS',
    prompt: 'Write an equivalent expression using the fewest terms possible: [[(3x^{2} + 3) + (-2x^{2} + 7)]]',
    choices: ['[[x^{2} + 10]]', '[[5x^{2} + 10]]', '[[x^{2} - 4]]', '[[x^{4} + 10]]'],
    correctIndex: 0,
    explanation: '3x² + (−2x²) = x² and 3 + 7 = 10.'
  },
  {
    id: 'PO09', topic: 'POLYNOMIALS',
    prompt: 'Write an equivalent expression using the fewest terms possible: [[(3x^{2} - 4x + 1) - (-x^{2} + 6)]]',
    choices: ['[[4x^{2} - 4x - 5]]', '[[2x^{2} - 4x - 5]]', '[[4x^{2} - 4x + 7]]', '[[2x^{2} - 4x + 7]]'],
    correctIndex: 0,
    explanation: '3x² − (−x²) = 4x², keep −4x, and 1 − 6 = −5.'
  },
  {
    id: 'PO10', topic: 'POLYNOMIALS',
    prompt: 'What is the value of [[G]] in [[(7x - 4)(5x + 3) = Fx^{2} + Gx + H]]?',
    choices: ['[[1]]', '[[-1]]', '[[41]]', '[[-12]]'],
    correctIndex: 0,
    explanation: 'Middle term: 7x(3) + (−4)(5x) = 21x − 20x = 1x, so G = 1.'
  },
  {
    id: 'PO11', topic: 'POLYNOMIALS',
    prompt: 'Simplify: [[(4x^{2} - 7x + 2) - (x^{2} - 3x - 5)]]',
    choices: ['[[3x^{2} - 4x + 7]]', '[[3x^{2} - 10x - 3]]', '[[5x^{2} - 4x + 7]]', '[[3x^{2} - 4x - 3]]'],
    correctIndex: 0,
    explanation: '4x² − x² = 3x², −7x + 3x = −4x, 2 + 5 = 7.'
  },
  {
    id: 'PO12', topic: 'POLYNOMIALS',
    prompt: 'Multiply: [[(3x + 4)(3x - 4)]]',
    choices: ['[[9x^{2} - 16]]', '[[9x^{2} + 16]]', '[[9x^{2} - 24x - 16]]', '[[6x^{2} - 16]]'],
    correctIndex: 0,
    explanation: 'Conjugate pair: 9x² − 12x + 12x − 16 = 9x² − 16.'
  },
  {
    id: 'PO13', topic: 'POLYNOMIALS',
    prompt: 'Expand and simplify: [[(x - 6)^{2}]]',
    choices: ['[[x^{2} - 12x + 36]]', '[[x^{2} - 36]]', '[[x^{2} + 36]]', '[[x^{2} - 6x + 36]]'],
    correctIndex: 0,
    explanation: '(x − 6)(x − 6) = x² − 6x − 6x + 36 = x² − 12x + 36.'
  },
  {
    id: 'PO14', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[5x(2x^{2} - 3x + 1) - 4x^{2}]]?',
    choices: ['[[10x^{3} - 19x^{2} + 5x]]', '[[10x^{3} - 11x^{2} + 5x]]', '[[10x^{3} - 7x^{2} + 5x]]', '[[10x^{2} - 19x + 5]]'],
    correctIndex: 0,
    explanation: '10x³ − 15x² + 5x − 4x² = 10x³ − 19x² + 5x.'
  },
  {
    id: 'PO15', topic: 'POLYNOMIALS',
    prompt: 'A rectangle has length [[(3x + 2)]] and width [[(x - 5)]]. What is its area?',
    choices: ['[[3x^{2} - 13x - 10]]', '[[3x^{2} + 17x - 10]]', '[[4x - 3]]', '[[3x^{2} - 10]]'],
    correctIndex: 0,
    explanation: '(3x + 2)(x − 5) = 3x² − 15x + 2x − 10 = 3x² − 13x − 10.'
  },
  {
    id: 'PO16', topic: 'POLYNOMIALS',
    prompt: 'A rectangle has length [[(4x + 1)]] and width [[(2x + 3)]]. What is its perimeter?',
    choices: ['[[12x + 8]]', '[[6x + 4]]', '[[8x^{2} + 14x + 3]]', '[[12x + 4]]'],
    correctIndex: 0,
    explanation: 'Perimeter = 2(4x + 1) + 2(2x + 3) = 8x + 2 + 4x + 6 = 12x + 8.'
  },
  {
    id: 'PO17', topic: 'POLYNOMIALS',
    prompt: 'Simplify: [[(-2x^{2} + 5x - 8) + (6x^{2} - 9x + 3)]]',
    choices: ['[[4x^{2} - 4x - 5]]', '[[8x^{2} - 4x - 5]]', '[[4x^{2} + 14x - 5]]', '[[4x^{2} - 4x - 11]]'],
    correctIndex: 0,
    explanation: '−2x² + 6x² = 4x², 5x − 9x = −4x, −8 + 3 = −5.'
  },
  {
    id: 'PO18', topic: 'POLYNOMIALS',
    prompt: 'Multiply: [[(x + 2)(x^{2} - 3x + 4)]]',
    choices: ['[[x^{3} - x^{2} - 2x + 8]]', '[[x^{3} + 5x^{2} - 2x + 8]]', '[[x^{3} - 3x^{2} + 8]]', '[[x^{3} - x^{2} + 10x + 8]]'],
    correctIndex: 0,
    explanation: 'x³ − 3x² + 4x + 2x² − 6x + 8 = x³ − x² − 2x + 8.'
  },
  {
    id: 'PO19', topic: 'POLYNOMIALS',
    prompt: 'Subtract [[(4x^{2} - 2x + 7)]] from [[(9x^{2} + 3x - 1)]].',
    choices: ['[[5x^{2} + 5x - 8]]', '[[-5x^{2} - 5x + 8]]', '[[5x^{2} + x + 6]]', '[[13x^{2} + x + 6]]'],
    correctIndex: 0,
    explanation: '(9x² + 3x − 1) − (4x² − 2x + 7) = 5x² + 5x − 8.'
  },
  {
    id: 'PO20', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(2x + 5)^{2}]]?',
    choices: ['[[4x^{2} + 20x + 25]]', '[[4x^{2} + 25]]', '[[4x^{2} + 10x + 25]]', '[[2x^{2} + 20x + 25]]'],
    correctIndex: 0,
    explanation: '(2x + 5)(2x + 5) = 4x² + 10x + 10x + 25 = 4x² + 20x + 25.'
  },
  {
    id: 'PO21', topic: 'POLYNOMIALS',
    prompt: 'Simplify: [[2(3x^{2} - x + 4) - 3(x^{2} + 2x - 1)]]',
    choices: ['[[3x^{2} - 8x + 11]]', '[[3x^{2} + 4x + 5]]', '[[3x^{2} - 8x + 5]]', '[[9x^{2} - 8x + 11]]'],
    correctIndex: 0,
    explanation: '6x² − 2x + 8 − 3x² − 6x + 3 = 3x² − 8x + 11.'
  },
  {
    id: 'PO22', topic: 'POLYNOMIALS',
    prompt: 'What is the degree of the polynomial [[7x^{3} - 4x^{5} + 2x - 9]]?',
    choices: ['[[5]]', '[[3]]', '[[4]]', '[[7]]'],
    correctIndex: 0,
    explanation: 'The degree is the highest exponent on the variable, which is 5.'
  },
  {
    id: 'PO23', topic: 'POLYNOMIALS',
    prompt: 'What is the leading coefficient of [[6x - 3x^{4} + 8x^{2} + 1]] when written in standard form?',
    choices: ['[[-3]]', '[[6]]', '[[8]]', '[[4]]'],
    correctIndex: 0,
    explanation: 'Standard form puts the highest power first: −3x⁴ + 8x² + 6x + 1, so leading coefficient is −3.'
  },
  {
    id: 'PO24', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(4x - 1)(2x + 5) - 3x]]?',
    choices: ['[[8x^{2} + 15x - 5]]', '[[8x^{2} + 18x - 5]]', '[[8x^{2} + 21x - 5]]', '[[8x^{2} + 15x + 5]]'],
    correctIndex: 0,
    explanation: '(8x² + 18x − 5) − 3x = 8x² + 15x − 5.'
  },
  {
    id: 'PO25', topic: 'POLYNOMIALS',
    prompt: 'If [[(3x + A)(2x - 5) = 6x^{2} - 7x - 20]], what is the value of [[A]]?',
    choices: ['[[4]]', '[[-4]]', '[[8]]', '[[-2]]'],
    correctIndex: 0,
    explanation: 'Constant term A(−5) = −20 gives A = 4; check middle: −15x + 8x = −7x.'
  },
  {
    id: 'PO26', topic: 'POLYNOMIALS',
    prompt: 'Simplify: [[(x^{3} + 4x^{2} - 2) + (2x^{3} - 4x^{2} + 7x)]]',
    choices: ['[[3x^{3} + 7x - 2]]', '[[3x^{3} + 8x^{2} + 7x - 2]]', '[[3x^{6} + 7x - 2]]', '[[2x^{3} + 7x - 2]]'],
    correctIndex: 0,
    explanation: 'x³ + 2x³ = 3x³, and 4x² − 4x² = 0.'
  },
  {
    id: 'PO27', topic: 'POLYNOMIALS',
    prompt: 'Multiply: [[-3x^{2}(2x^{3} - 4x + 5)]]',
    choices: ['[[-6x^{5} + 12x^{3} - 15x^{2}]]', '[[-6x^{6} + 12x^{2} - 15x^{2}]]', '[[-6x^{5} - 12x^{3} - 15x^{2}]]', '[[-6x^{5} + 12x^{3} + 5]]'],
    correctIndex: 0,
    explanation: 'Add exponents when multiplying like bases: −6x⁵ + 12x³ − 15x².'
  },
  {
    id: 'PO28', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[3(x + 2)^{2} - 4]]?',
    choices: ['[[3x^{2} + 12x + 8]]', '[[3x^{2} + 8]]', '[[9x^{2} + 36x + 32]]', '[[3x^{2} + 6x + 8]]'],
    correctIndex: 0,
    explanation: '3(x² + 4x + 4) − 4 = 3x² + 12x + 12 − 4 = 3x² + 12x + 8.'
  },
  {
    id: 'PO29', topic: 'POLYNOMIALS',
    prompt: 'Simplify: [[(8x^{2} - 3x) - (2x^{2} + 5x - 9)]]',
    choices: ['[[6x^{2} - 8x + 9]]', '[[6x^{2} + 2x - 9]]', '[[6x^{2} - 8x - 9]]', '[[10x^{2} - 8x + 9]]'],
    correctIndex: 0,
    explanation: '8x² − 2x² = 6x², −3x − 5x = −8x, −(−9) = +9.'
  },
  {
    id: 'PO30', topic: 'POLYNOMIALS',
    prompt: 'Which expression is equivalent to [[(5x - 2)(x + 4) - (5x^{2} - 8)]]',
    choices: ['[[18x]]', '[[18x - 16]]', '[[10x^{2} + 18x - 16]]', '[[22x]]'],
    correctIndex: 0,
    explanation: '(5x² + 18x − 8) − 5x² + 8 = 18x.'
  },

  // ===========================================================================
  // 4. FUNCTIONS AND FUNCTION NOTATIONS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'FN01', topic: 'FUNCTIONS',
    prompt: 'Which ordered pair could be added to [[(1, 3), (2, 4), (5, 6)]] so that the set remains a function?',
    choices: ['[[(3, 4)]]', '[[(2, 2)]]', '[[(5, 7)]]', '[[(1, 6)]]'],
    correctIndex: 0,
    explanation: 'An x-value cannot repeat with a different y-value; x = 3 is not already in the domain.'
  },
  {
    id: 'FN02', topic: 'FUNCTIONS',
    prompt: 'Which table represents [[y]] as a function of [[x]]?',
    choices: [
      'x: 3, 5, 7 | y: 0, 0, 0',
      'x: 0, 0, 0 | y: 3, 5, 7',
      'x: 0, 4, 4 | y: 0, 2, -2',
      'x: 1, 9, 9 | y: 0, -3, 3'
    ],
    correctIndex: 0,
    explanation: 'In (3,0), (5,0), (7,0), no x-value repeats; y-values are allowed to repeat.'
  },
  {
    id: 'FN03', topic: 'FUNCTIONS',
    prompt: 'A function is given: [[f(x) = 2^{x} + 3]]. What is the value of [[f(-2)]]?',
    choices: ['[[\\frac{13}{4}]]', '[[-1]]', '[[7]]', '[[\\frac{11}{4}]]'],
    correctIndex: 0,
    explanation: '2^(−2) + 3 = 1/4 + 3 = 13/4 (or 3.25).'
  },
  {
    id: 'FN04', topic: 'FUNCTIONS',
    prompt: 'A function is shown: [[f(x) = \\frac{2}{3}x + 3]]. What is the value of [[f(12)]]?',
    choices: ['[[11]]', '[[8]]', '[[21]]', '[[9]]'],
    correctIndex: 0,
    explanation: '(2/3)(12) + 3 = 8 + 3 = 11.'
  },
  {
    id: 'FN05', topic: 'FUNCTIONS',
    prompt: 'Ryan’s daily delivery pay is modeled by [[f(n) = 7n + 96]], where [[n]] is the number of deliveries. What is his pay for 10 deliveries?',
    choices: ['[[166]] dollars', '[[103]] dollars', '[[96]] dollars', '[[170]] dollars'],
    correctIndex: 0,
    explanation: 'f(10) = 7(10) + 96 = 70 + 96 = 166.'
  },
  {
    id: 'FN06', topic: 'FUNCTIONS',
    prompt: 'To make [[g(x)]] NOT a function in the table below, which value can replace the missing [[x]]?',
    visual: {
      type: 'table',
      headers: ['x', 'g(x)'],
      rows: [['-1', '5'], ['?', '-8'], ['6', '2']]
    },
    choices: ['[[-1]]', '[[0]]', '[[4]]', '[[10]]'],
    correctIndex: 0,
    explanation: 'Using x = −1 pairs the same input −1 with two different outputs (5 and −8).'
  },
  {
    id: 'FN07', topic: 'FUNCTIONS',
    prompt: 'How does the Vertical Line Test (VLT) tell you if a graph is NOT a function?',
    choices: [
      'A vertical line hits the graph more than once',
      'A horizontal line hits the graph more than once',
      'The graph crosses the x-axis twice',
      'The graph has a negative slope'
    ],
    correctIndex: 0,
    explanation: 'One hit per vertical line = function; more than one hit = NOT a function.'
  },
  {
    id: 'FN08', topic: 'FUNCTIONS',
    prompt: 'Given [[f(x) = 2x + 3]], find the value of [[x]] when [[f(x) = 11]].',
    choices: ['[[x = 4]]', '[[x = 25]]', '[[x = 7]]', '[[x = 5]]'],
    correctIndex: 0,
    explanation: 'Solve 2x + 3 = 11 → 2x = 8 → x = 4.'
  },
  {
    id: 'FN09', topic: 'FUNCTIONS',
    prompt: 'Which set of ordered pairs is NOT a function?',
    choices: [
      '[[(2, 3), (2, 5), (0, -4), (-5, 2)]]',
      '[[(1, 5), (2, 5), (3, 5), (4, 5)]]',
      '[[(-2, 4), (-1, 1), (0, 0), (1, 1)]]',
      '[[(0, 1), (1, 2), (2, 3), (3, 4)]]'
    ],
    correctIndex: 0,
    explanation: 'The x-value 2 repeats with different outputs 3 and 5.'
  },
  {
    id: 'FN10', topic: 'FUNCTIONS',
    prompt: 'Given [[h(x) = x^{2} - 4x + 7]], what is [[h(-3)]]?',
    choices: ['[[28]]', '[[4]]', '[[-14]]', '[[10]]'],
    correctIndex: 0,
    explanation: '(−3)² − 4(−3) + 7 = 9 + 12 + 7 = 28.'
  },
  {
    id: 'FN11', topic: 'FUNCTIONS',
    prompt: 'If [[f(x) = -\\frac{3}{4}x + 10]], find [[f(8)]].',
    choices: ['[[4]]', '[[16]]', '[[-4]]', '[[7]]'],
    correctIndex: 0,
    explanation: '(−3/4)(8) + 10 = −6 + 10 = 4.'
  },
  {
    id: 'FN12', topic: 'FUNCTIONS',
    prompt: 'If [[g(x) = 5x - 7]], what value of [[x]] makes [[g(x) = 18]]?',
    choices: ['[[5]]', '[[83]]', '[[3]]', '[[11]]'],
    correctIndex: 0,
    explanation: '5x − 7 = 18 → 5x = 25 → x = 5.'
  },
  {
    id: 'FN13', topic: 'FUNCTIONS',
    prompt: 'Which equation does NOT represent [[y]] as a function of [[x]]?',
    choices: ['[[x = y^{2}]]', '[[y = x^{2}]]', '[[y = 3x - 2]]', '[[y = 2^{x}]]'],
    correctIndex: 0,
    explanation: 'x = y² is a sideways parabola and fails the Vertical Line Test (e.g. x = 4 gives y = 2 and −2).'
  },
  {
    id: 'FN14', topic: 'FUNCTIONS',
    prompt: 'What is the value of [[f(0)]] for [[f(x) = 3(x - 2)^{2} + 5]]?',
    choices: ['[[17]]', '[[5]]', '[[-7]]', '[[11]]'],
    correctIndex: 0,
    explanation: '3(0 − 2)² + 5 = 3(4) + 5 = 17.'
  },
  {
    id: 'FN15', topic: 'FUNCTIONS',
    prompt: 'The function [[f(x) = 4x - 1]] has domain [[\\{-1, 0, 2, 5\\}]]. What is its range?',
    choices: ['[[\\{-5, -1, 7, 19\\}]]', '[[\\{-1, 0, 2, 5\\}]]', '[[\\{-3, -1, 7, 21\\}]]', '[[\\{3, 1, 9, 19\\}]]'],
    correctIndex: 0,
    explanation: 'Evaluate at each domain value: −5, −1, 7, 19.'
  },
  {
    id: 'FN16', topic: 'FUNCTIONS',
    prompt: 'If [[f(x) = \\frac{1}{2}x + 6]] and [[f(x) = 10]], what is [[x]]?',
    choices: ['[[8]]', '[[11]]', '[[2]]', '[[16]]'],
    correctIndex: 0,
    explanation: '(1/2)x + 6 = 10 → (1/2)x = 4 → x = 8.'
  },
  {
    id: 'FN17', topic: 'FUNCTIONS',
    prompt: 'In the table, which value for the blank makes [[f(x)]] a valid function?',
    visual: {
      type: 'table',
      headers: ['x', 'f(x)'],
      rows: [['-2', '7'], ['4', '1'], ['?', '9']]
    },
    choices: ['[[5]]', '[[-2]]', '[[4]]', 'Any number except 9'],
    correctIndex: 0,
    explanation: 'x = 5 is a new input, whereas −2 or 4 would repeat an x-value with a different y.'
  },
  {
    id: 'FN18', topic: 'FUNCTIONS',
    prompt: 'If [[p(t) = 120 - 15t]], what does [[p(4) = 60]] mean?',
    choices: [
      'After 4 units of time, the value is 60',
      'After 60 units of time, the value is 4',
      'The starting value is 4',
      'The rate of change is 60'
    ],
    correctIndex: 0,
    explanation: 'In function notation p(input) = output, t = 4 gives output 60.'
  },
  {
    id: 'FN19', topic: 'FUNCTIONS',
    prompt: 'Given [[f(x) = 3^{x} - 4]], what is [[f(-1)]]?',
    choices: ['[[-\\frac{11}{3}]]', '[[-7]]', '[[-\\frac{13}{3}]]', '[[-1]]'],
    correctIndex: 0,
    explanation: '3^(−1) − 4 = 1/3 − 12/3 = −11/3.'
  },
  {
    id: 'FN20', topic: 'FUNCTIONS',
    prompt: 'If [[f(x) = 2x^{2} + 1]] and [[g(x) = 3x - 4]], what is [[f(3) + g(2)]]?',
    choices: ['[[21]]', '[[19]]', '[[15]]', '[[25]]'],
    correctIndex: 0,
    explanation: 'f(3) = 2(9) + 1 = 19, g(2) = 6 − 4 = 2, and 19 + 2 = 21.'
  },
  {
    id: 'FN21', topic: 'FUNCTIONS',
    prompt: 'Which graph fails the Vertical Line Test?',
    choices: ['A circle', 'A parabola opening upward', 'An exponential curve', 'A diagonal straight line'],
    correctIndex: 0,
    explanation: 'A vertical line through the interior of a circle hits the graph twice.'
  },
  {
    id: 'FN22', topic: 'FUNCTIONS',
    prompt: 'A tutor charges according to [[C(h) = 35h + 20]]. How many hours [[h]] correspond to [[C(h) = 160]]?',
    choices: ['[[4]] hours', '[[5]] hours', '[[3]] hours', '[[6]] hours'],
    correctIndex: 0,
    explanation: '35h + 20 = 160 → 35h = 140 → h = 4.'
  },
  {
    id: 'FN23', topic: 'FUNCTIONS',
    prompt: 'What is the domain of the relation [[\\{(-3, 4), (0, 2), (5, 4), (7, -1)\\}]]?',
    choices: ['[[\\{-3, 0, 5, 7\\}]]', '[[\\{-1, 2, 4\\}]]', '[[\\{-3, 7\\}]]', 'All real numbers'],
    correctIndex: 0,
    explanation: 'The domain is the set of all x-values (inputs).'
  },
  {
    id: 'FN24', topic: 'FUNCTIONS',
    prompt: 'If [[f(x) = \\frac{x + 5}{3}]], find [[f(10)]].',
    choices: ['[[5]]', '[[15]]', '[[\\frac{15}{2}]]', '[[3]]'],
    correctIndex: 0,
    explanation: '(10 + 5)/3 = 15/3 = 5.'
  },
  {
    id: 'FN25', topic: 'FUNCTIONS',
    prompt: 'Which ordered pair is on the graph of [[f(x) = x^{2} - 3x]]?',
    choices: ['[[(4, 4)]]', '[[(4, 16)]]', '[[(2, 2)]]', '[[(-1, -2)]]'],
    correctIndex: 0,
    explanation: 'f(4) = 4² − 3(4) = 16 − 12 = 4.'
  },
  {
    id: 'FN26', topic: 'FUNCTIONS',
    prompt: 'What is the value of [[x]] if [[f(x) = \\frac{2}{5}x - 4]] and [[f(x) = 6]]?',
    choices: ['[[25]]', '[[10]]', '[[4]]', '[[5]]'],
    correctIndex: 0,
    explanation: '(2/5)x − 4 = 6 → (2/5)x = 10 → x = 25.'
  },
  {
    id: 'FN27', topic: 'FUNCTIONS',
    prompt: 'For the function [[f(x) = 4 - x^{2}]], what is [[f(-2)]]?',
    choices: ['[[0]]', '[[8]]', '[[-4]]', '[[4]]'],
    correctIndex: 0,
    explanation: '4 − (−2)² = 4 − 4 = 0.'
  },
  {
    id: 'FN28', topic: 'FUNCTIONS',
    prompt: 'A sequence is defined by [[a(n) = 5n - 3]]. What is [[a(7)]]?',
    choices: ['[[32]]', '[[38]]', '[[29]]', '[[35]]'],
    correctIndex: 0,
    explanation: 'a(7) = 5(7) − 3 = 35 − 3 = 32.'
  },
  {
    id: 'FN29', topic: 'FUNCTIONS',
    prompt: 'Which relation IS a function?',
    choices: [
      '[[(1, 9), (2, 9), (3, 9)]]',
      '[[(9, 1), (9, 2), (9, 3)]]',
      '[[(1, 2), (1, 3), (4, 5)]]',
      '[[(0, 0), (3, 1), (3, -1)]]'
    ],
    correctIndex: 0,
    explanation: 'Each input (1, 2, 3) has exactly one output (9).'
  },
  {
    id: 'FN30', topic: 'FUNCTIONS',
    prompt: 'If [[f(x) = \\frac{3}{2}x - 7]], find [[f(6) - f(2)]].',
    choices: ['[[6]]', '[[2]]', '[[9]]', '[[4]]'],
    correctIndex: 0,
    explanation: 'f(6) = 9 − 7 = 2 and f(2) = 3 − 7 = −4; 2 − (−4) = 6.'
  },

  // ===========================================================================
  // 5. FACTORING, SOLVING, MODELING, ANALYZING QUADRATICS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'QD01', topic: 'QUADRATICS',
    prompt: 'An equation is shown: [[2x^{2} - 5x - 3 = 0]]. What values of [[x]] make the equation true?',
    choices: ['[[x = -\\frac{1}{2}, 3]]', '[[x = \\frac{1}{2}, -3]]', '[[x = -1, 3]]', '[[x = -\\frac{3}{2}, 1]]'],
    correctIndex: 0,
    explanation: 'Factor as (2x + 1)(x − 3) = 0, giving x = −1/2 and x = 3.'
  },
  {
    id: 'QD02', topic: 'QUADRATICS',
    prompt: 'An equation is given: [[40 = x^{2} - 3x]]. What is one solution to the equation?',
    choices: ['[[x = 8]]', '[[x = 5]]', '[[x = -8]]', '[[x = 10]]'],
    correctIndex: 0,
    explanation: 'x² − 3x − 40 = (x − 8)(x + 5) = 0, so solutions are x = 8 and x = −5.'
  },
  {
    id: 'QD03', topic: 'QUADRATICS',
    prompt: 'What is one solution to the equation [[x^{2} + 3.5x - 2 = 0]]?',
    choices: ['[[x = \\frac{1}{2}]]', '[[x = 4]]', '[[x = -\\frac{1}{2}]]', '[[x = 2]]'],
    correctIndex: 0,
    explanation: '2x² + 7x − 4 = (2x − 1)(x + 4) = 0 gives x = 1/2 (or 0.5) and x = −4.'
  },
  {
    id: 'QD04', topic: 'QUADRATICS',
    prompt: 'Which correctly factored form of [[f(x) = 36x^{2} + 15x - 6]] can be used to identify the zeros?',
    choices: [
      '[[f(x) = 3(4x - 1)(3x + 2)]]',
      '[[f(x) = (4x - 1)(3x + 2)]]',
      '[[f(x) = (12x - 2)(3x + 3)]]',
      '[[f(x) = 3(12x - 2)(3x + 3)]]'
    ],
    correctIndex: 0,
    explanation: 'Factor out GCF = 3 first: 3(12x² + 5x − 2) = 3(4x − 1)(3x + 2).'
  },
  {
    id: 'QD05', topic: 'QUADRATICS',
    prompt: 'The function [[f(x) = x^{2} + 2x - 24]] is equivalent to [[f(x) = (x + a)(x + b)]]. What are the values of [[a]] and [[b]]?',
    choices: ['[[6]] and [[-4]]', '[[-6]] and [[4]]', '[[8]] and [[-3]]', '[[12]] and [[-2]]'],
    correctIndex: 0,
    explanation: '6 + (−4) = 2 and 6(−4) = −24, so (x + 6)(x − 4).'
  },
  {
    id: 'QD06', topic: 'QUADRATICS',
    prompt: 'A diver jumps from a springboard. The graph has y-intercept (0, 5), peak (0.56, 9), and hits the water at (1.31, 0). What is the maximum height above the water?',
    visual: {
      type: 'graph', xMin: 0, xMax: 2.5, yMin: 0, yMax: 10, xStep: 0.5, yStep: 2,
      quads: [{ a: -12.75, b: 14.3, c: 5, color: '#38bdf8' }]
    },
    choices: ['[[9]] feet', '[[5]] feet', '[[1.31]] feet', '[[0.75]] feet'],
    correctIndex: 0,
    explanation: 'The vertex gives the maximum height, which is y = 9 feet.'
  },
  {
    id: 'QD07', topic: 'QUADRATICS',
    prompt: 'A diver reaches peak height at [[t = 0.56]] seconds and hits the water at [[t = 1.31]] seconds. How long does it take to hit the water AFTER reaching the peak?',
    choices: ['[[0.75]] seconds', '[[1.31]] seconds', '[[0.56]] seconds', '[[1.87]] seconds'],
    correctIndex: 0,
    explanation: '1.31 − 0.56 = 0.75 seconds after the peak.'
  },
  {
    id: 'QD08', topic: 'QUADRATICS',
    prompt: 'A grasshopper jumps off a tree stump with height [[h(t) = -t^{2} + \\frac{4}{3}t + \\frac{1}{4}]]. After how many seconds will it land on the ground?',
    choices: ['[[\\frac{3}{2}]] seconds', '[[\\frac{1}{4}]] seconds', '[[\\frac{4}{3}]] seconds', '[[2]] seconds'],
    correctIndex: 0,
    explanation: 'Set h(t) = 0 and multiply by −12: 12t² − 16t − 3 = (2t − 3)(6t + 1) = 0 → t = 3/2 (1.5 s).'
  },
  {
    id: 'QD09', topic: 'QUADRATICS',
    prompt: 'A parabola opens downward and has its vertex at [[(1, 3)]]. What is the maximum value of the function?',
    visual: {
      type: 'graph', xMin: -4, xMax: 6, yMin: -4, yMax: 6, xStep: 2, yStep: 2,
      quads: [{ a: -1, b: 2, c: 2, color: '#f97316' }]
    },
    choices: ['[[3]]', '[[1]]', '[[2]]', '[[6]]'],
    correctIndex: 0,
    explanation: 'The maximum value of a quadratic is the y-coordinate of its vertex (3).'
  },
  {
    id: 'QD10', topic: 'QUADRATICS',
    prompt: 'A function is shown: [[f(x) = 5(x - 2)^{2} + 3]]. What is the minimum value of the function?',
    choices: ['[[3]]', '[[2]]', '[[-2]]', '[[5]]'],
    correctIndex: 0,
    explanation: 'In vertex form a(x − h)² + k, the vertex is (2, 3), so the minimum y-value is 3.'
  },
  {
    id: 'QD11', topic: 'QUADRATICS',
    prompt: 'The parabola shown opens upward with vertex at [[(4, 2)]]. What is the minimum value of the function?',
    visual: {
      type: 'graph', xMin: 0, xMax: 8, yMin: 0, yMax: 10, xStep: 2, yStep: 2,
      quads: [{ a: 1, b: -8, c: 18, color: '#10b981' }]
    },
    choices: ['[[2]]', '[[4]]', '[[0]]', '[[8]]'],
    correctIndex: 0,
    explanation: 'The lowest point on the graph is (4, 2), so the minimum value is 2.'
  },
  {
    id: 'QD12', topic: 'QUADRATICS',
    prompt: 'For [[f(x) = (2x - 2)(x - 3)]], what are the zeros and the vertex?',
    choices: [
      'Zeros: [[1, 3]]; Vertex: [[(2, -2)]]',
      'Zeros: [[-1, -3]]; Vertex: [[(-2, -2)]]',
      'Zeros: [[2, 3]]; Vertex: [[(2.5, -1)]]',
      'Zeros: [[1, 3]]; Vertex: [[(2, 2)]]'
    ],
    correctIndex: 0,
    explanation: 'Set factors to 0: x = 1 and x = 3; midpoint x = 2 gives f(2) = (2)(−1) = −2.'
  },
  {
    id: 'QD13', topic: 'QUADRATICS',
    prompt: 'Factor completely: [[3x^{2} - 27]]',
    choices: ['[[3(x - 3)(x + 3)]]', '[[(3x - 9)(x + 3)]]', '[[3(x - 3)^{2}]]', '[[(x - 9)(3x + 3)]]'],
    correctIndex: 0,
    explanation: 'Factor out 3: 3(x² − 9) = 3(x − 3)(x + 3).'
  },
  {
    id: 'QD14', topic: 'QUADRATICS',
    prompt: 'What is the axis of symmetry of [[y = x^{2} - 6x + 5]]?',
    choices: ['[[x = 3]]', '[[x = -3]]', '[[x = 6]]', '[[y = -4]]'],
    correctIndex: 0,
    explanation: 'Axis of symmetry is x = −b/(2a) = 6/2 = 3.'
  },
  {
    id: 'QD15', topic: 'QUADRATICS',
    prompt: 'A ball’s height is [[h(t) = -16t^{2} + 48t + 4]]. What does the [[4]] represent?',
    choices: [
      'The initial starting height of 4 feet',
      'The maximum height of the ball',
      'The time when the ball hits the ground',
      'The speed of the ball'
    ],
    correctIndex: 0,
    explanation: 'The y-intercept (when t = 0) gives the starting height.'
  },
  {
    id: 'QD16', topic: 'QUADRATICS',
    prompt: 'Factor completely: [[6x^{2} + 11x - 10]]',
    choices: ['[[(3x - 2)(2x + 5)]]', '[[(6x - 2)(x + 5)]]', '[[(3x + 2)(2x - 5)]]', '[[(3x - 5)(2x + 2)]]'],
    correctIndex: 0,
    explanation: '(3x − 2)(2x + 5) = 6x² + 15x − 4x − 10 = 6x² + 11x − 10.'
  },
  {
    id: 'QD17', topic: 'QUADRATICS',
    prompt: 'Solve for [[x]]: [[x^{2} - 12x + 36 = 0]]',
    choices: ['[[x = 6]]', '[[x = -6]]', '[[x = 6, -6]]', '[[x = 12]]'],
    correctIndex: 0,
    explanation: '(x − 6)² = 0 has one repeated root at x = 6.'
  },
  {
    id: 'QD18', topic: 'QUADRATICS',
    prompt: 'What are the x-intercepts of [[y = (x + 7)(3x - 2)]]?',
    choices: ['[[(-7, 0)]] and [[(\\frac{2}{3}, 0)]]', '[[(7, 0)]] and [[(-\\frac{2}{3}, 0)]]', '[[(-7, 0)]] and [[(\\frac{3}{2}, 0)]]', '[[(0, -14)]]'],
    correctIndex: 0,
    explanation: 'Set each factor equal to 0: x = −7 and x = 2/3.'
  },
  {
    id: 'QD19', topic: 'QUADRATICS',
    prompt: 'Rewrite [[y = x^{2} + 8x + 12]] in factored form to reveal its zeros.',
    choices: ['[[y = (x + 6)(x + 2)]]', '[[y = (x + 4)(x + 3)]]', '[[y = (x - 6)(x - 2)]]', '[[y = (x + 12)(x + 1)]]'],
    correctIndex: 0,
    explanation: '6 + 2 = 8 and 6(2) = 12.'
  },
  {
    id: 'QD20', topic: 'QUADRATICS',
    prompt: 'A rocket’s height is [[h(t) = -16t^{2} + 64t]]. After how many seconds does it reach its maximum height?',
    choices: ['[[2]] seconds', '[[4]] seconds', '[[64]] seconds', '[[1]] second'],
    correctIndex: 0,
    explanation: 't = −b/(2a) = −64/(−32) = 2 seconds.'
  },
  {
    id: 'QD21', topic: 'QUADRATICS',
    prompt: 'Using [[h(t) = -16t^{2} + 64t]], what is the rocket’s maximum height?',
    choices: ['[[64]] feet', '[[128]] feet', '[[32]] feet', '[[48]] feet'],
    correctIndex: 0,
    explanation: 'At t = 2, h(2) = −16(4) + 64(2) = −64 + 128 = 64 feet.'
  },
  {
    id: 'QD22', topic: 'QUADRATICS',
    prompt: 'Solve for [[x]]: [[3x^{2} = 75]]',
    choices: ['[[x = 5, -5]]', '[[x = 5]]', '[[x = 25, -25]]', '[[x = 15, -15]]'],
    correctIndex: 0,
    explanation: 'Divide by 3: x² = 25 → x = ±5.'
  },
  {
    id: 'QD23', topic: 'QUADRATICS',
    prompt: 'Factor completely: [[2x^{2} + 10x + 12]]',
    choices: ['[[2(x + 2)(x + 3)]]', '[[(2x + 4)(x + 3)]]', '[[2(x + 1)(x + 6)]]', '[[(2x + 6)(x + 2)]]'],
    correctIndex: 0,
    explanation: 'GCF is 2: 2(x² + 5x + 6) = 2(x + 2)(x + 3).'
  },
  {
    id: 'QD24', topic: 'QUADRATICS',
    prompt: 'Which quadratic function has zeros at [[x = -4]] and [[x = 5]]?',
    choices: ['[[f(x) = x^{2} - x - 20]]', '[[f(x) = x^{2} + x - 20]]', '[[f(x) = x^{2} - 9x + 20]]', '[[f(x) = x^{2} + 9x + 20]]'],
    correctIndex: 0,
    explanation: '(x + 4)(x − 5) = x² − x − 20.'
  },
  {
    id: 'QD25', topic: 'QUADRATICS',
    prompt: 'What is the vertex of [[f(x) = -2(x + 4)^{2} + 9]]?',
    choices: ['[[(-4, 9)]]', '[[(4, 9)]]', '[[(-4, -9)]]', '[[(-2, 9)]]'],
    correctIndex: 0,
    explanation: 'In a(x − h)² + k, x + 4 means h = −4, and k = 9.'
  },
  {
    id: 'QD26', topic: 'QUADRATICS',
    prompt: 'How many real solutions does [[x^{2} + 4x + 9 = 0]] have?',
    choices: ['[[0]] real solutions', '[[1]] real solution', '[[2]] real solutions', 'Infinite solutions'],
    correctIndex: 0,
    explanation: 'Discriminant b² − 4ac = 16 − 36 = −20 < 0, so the parabola never crosses the x-axis.'
  },
  {
    id: 'QD27', topic: 'QUADRATICS',
    prompt: 'Factor completely: [[4x^{2} - 12x + 9]]',
    choices: ['[[(2x - 3)^{2}]]', '[[(2x + 3)^{2}]]', '[[(2x - 3)(2x + 3)]]', '[[(4x - 3)(x - 3)]]'],
    correctIndex: 0,
    explanation: 'Perfect square trinomial: (2x − 3)(2x − 3) = 4x² − 12x + 9.'
  },
  {
    id: 'QD28', topic: 'QUADRATICS',
    prompt: 'Solve for [[x]]: [[(x - 4)^{2} = 49]]',
    choices: ['[[x = 11, -3]]', '[[x = 11]]', '[[x = 53, -45]]', '[[x = 7, -7]]'],
    correctIndex: 0,
    explanation: 'x − 4 = ±7 gives x = 4 + 7 = 11 and x = 4 − 7 = −3.'
  },
  {
    id: 'QD29', topic: 'QUADRATICS',
    prompt: 'What is the y-intercept of [[f(x) = 3(x - 1)^{2} - 7]]?',
    choices: ['[[(0, -4)]]', '[[(0, -7)]]', '[[(0, -10)]]', '[[(1, -7)]]'],
    correctIndex: 0,
    explanation: 'Plug in x = 0: f(0) = 3(−1)² − 7 = 3 − 7 = −4.'
  },
  {
    id: 'QD30', topic: 'QUADRATICS',
    prompt: 'Factor completely: [[5x^{2} - 13x - 6]]',
    choices: ['[[(5x + 2)(x - 3)]]', '[[(5x - 2)(x + 3)]]', '[[(5x - 3)(x + 2)]]', '[[(5x + 6)(x - 1)]]'],
    correctIndex: 0,
    explanation: '(5x + 2)(x − 3) = 5x² − 15x + 2x − 6 = 5x² − 13x − 6.'
  },

  // ===========================================================================
  // 6. CREATE, ANALYZE, MODEL EXPONENTIAL FUNCTIONS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'EX01', topic: 'EXPONENTIALS',
    prompt: 'Isaac deposits money into an account modeled by [[200(1 + 0.08)^{n}]]. What does [[200]] represent?',
    choices: [
      'The original amount of money deposited into the account',
      'The percent interest earned annually',
      'The number of times interest is compounded',
      'The total amount of money after n years'
    ],
    correctIndex: 0,
    explanation: 'In y = a(1 + r)^n, a = 200 is the initial starting deposit.'
  },
  {
    id: 'EX02', topic: 'EXPONENTIALS',
    prompt: 'A company buys $15,000 of equipment that decreases by 12.5% per year. Alfred writes [[15,000(0.125)^{t} < 8,000]]. Which change corrects his inequality?',
    choices: [
      'Replace 0.125 with 0.875',
      'Replace 0.125 with 12.5',
      'Replace 8,000 with 7,000',
      'Replace 15,000 with 2,018'
    ],
    correctIndex: 0,
    explanation: 'For 12.5% decay, the factor is 1 − r = 1 − 0.125 = 0.875.'
  },
  {
    id: 'EX03', topic: 'EXPONENTIALS',
    prompt: 'A landscaper puts 5 fish into a new pond. The number of fish doubles each month. Write a function [[f(x)]] after [[x]] months.',
    choices: ['[[f(x) = 5(2)^{x}]]', '[[f(x) = 2(5)^{x}]]', '[[f(x) = 5 + 2x]]', '[[f(x) = 5(1.02)^{x}]]'],
    correctIndex: 0,
    explanation: 'Start a = 5, doubling factor b = 2 → f(x) = 5(2)^x.'
  },
  {
    id: 'EX04', topic: 'EXPONENTIALS',
    prompt: 'Mark counts 80 snails in an aquarium tank, and the population triples every year. Write a function [[f(n)]] after [[n]] years.',
    choices: ['[[f(n) = 80(3)^{n}]]', '[[f(n) = 3(80)^{n}]]', '[[f(n) = 80 + 3n]]', '[[f(n) = 80(1.3)^{n}]]'],
    correctIndex: 0,
    explanation: 'Start a = 80, tripling factor b = 3 → f(n) = 80(3)^n.'
  },
  {
    id: 'EX05', topic: 'EXPONENTIALS',
    prompt: 'An insect colony is modeled by [[P = 10,000(1.08)^{t}]]. By what percent does the insect population grow each year?',
    choices: ['[[8\\%]]', '[[1.08\\%]]', '[[108\\%]]', '[[0.08\\%]]'],
    correctIndex: 0,
    explanation: '1.08 = 1 + 0.08, so r = 0.08 = 8% annual growth.'
  },
  {
    id: 'EX06', topic: 'EXPONENTIALS',
    prompt: 'Which situation could be represented by an exponential function [[g(t)]], where [[t]] is time in years?',
    choices: [
      'A house increases in value by 3% each year',
      'A city’s population increases by 300 people each year',
      'A checking account decreases by $150 in one year',
      'A car decreases in value by 17% in one year'
    ],
    correctIndex: 0,
    explanation: 'Repeated constant percent change ("3% each year") is exponential.'
  },
  {
    id: 'EX07', topic: 'EXPONENTIALS',
    prompt: 'Which situation represents exponential growth or decay?',
    choices: [
      'The population of a town grows by 3% each year',
      'The population of a town grows by 200 each year',
      'The population grows 3% one year, then drops 3% the next',
      'The population grows 200 one year, then drops 200 the next'
    ],
    correctIndex: 0,
    explanation: 'A constant percent rate every year creates an exponential curve.'
  },
  {
    id: 'EX08', topic: 'EXPONENTIALS',
    prompt: 'Which situation describes a quantity that increases by a constant percent rate?',
    choices: [
      'Magazine subscribers each year are 15% greater than the previous year',
      'One photo is 15% larger than another photo',
      'Plants in a pond are 85% of the previous year’s number',
      'One city’s population is 85% greater than another city'
    ],
    correctIndex: 0,
    explanation: 'Increasing by 15% each year over the previous year is constant percent growth.'
  },
  {
    id: 'EX09', topic: 'EXPONENTIALS',
    prompt: 'A radioactive substance decays exponentially from an initial 3 grams and approaches 0 over time. Which graph feature must be true?',
    visual: {
      type: 'graph', xMin: 0, xMax: 8, yMin: 0, yMax: 7, xStep: 2, yStep: 1,
      exps: [{ a: 3, base: 0.55, color: '#ec4899' }]
    },
    choices: [
      'Starts at (0, 3) and curves down toward 0',
      'Starts at (0, 0) and curves up toward 3',
      'Starts at (0, 6) and curves down toward 3',
      'Starts at (0, 3) and curves up toward 6'
    ],
    correctIndex: 0,
    explanation: 'Initial amount 3 means y-intercept (0, 3); decay approaches 0 as t increases.'
  },
  {
    id: 'EX10', topic: 'EXPONENTIALS',
    prompt: 'A substance starts at 500 grams and decreases by 30% each year. Which equation models its mass [[y]] after [[x]] years?',
    choices: ['[[y = 500(0.7)^{x}]]', '[[y = 500(0.3)^{x}]]', '[[y = 500(1.3)^{x}]]', '[[y = 500 - 0.3x]]'],
    correctIndex: 0,
    explanation: '1 − 0.30 = 0.70, so y = 500(0.7)^x.'
  },
  {
    id: 'EX11', topic: 'EXPONENTIALS',
    prompt: 'An investment starts at $1,000 and grows by 5% each year. Which equation models its value [[y]] after [[x]] years?',
    choices: ['[[y = 1,000(1.05)^{x}]]', '[[y = 1,000(1.5)^{x}]]', '[[y = 1,000(0.05)^{x}]]', '[[y = 1,000(0.95)^{x}]]'],
    correctIndex: 0,
    explanation: '5% = 0.05, so growth factor is 1 + 0.05 = 1.05.'
  },
  {
    id: 'EX12', topic: 'EXPONENTIALS',
    prompt: 'Does [[y = 450(0.84)^{x}]] represent exponential growth or decay, and by what percent per step?',
    choices: ['Decay by 16%', 'Decay by 84%', 'Growth by 84%', 'Growth by 16%'],
    correctIndex: 0,
    explanation: '0.84 < 1 is decay, and 1 − 0.84 = 0.16 = 16% decrease.'
  },
  {
    id: 'EX13', topic: 'EXPONENTIALS',
    prompt: 'Does [[y = 120(1.25)^{x}]] represent exponential growth or decay, and by what percent?',
    choices: ['Growth by 25%', 'Growth by 125%', 'Decay by 25%', 'Decay by 75%'],
    correctIndex: 0,
    explanation: '1.25 = 1 + 0.25 means 25% exponential growth.'
  },
  {
    id: 'EX14', topic: 'EXPONENTIALS',
    prompt: 'A bacterial culture starts at 100 cells and quadruples every hour. How many cells are there after 3 hours?',
    choices: ['[[6,400]]', '[[1,200]]', '[[1,600]]', '[[400]]'],
    correctIndex: 0,
    explanation: 'y = 100(4)³ = 100(64) = 6,400.'
  },
  {
    id: 'EX15', topic: 'EXPONENTIALS',
    prompt: 'A car bought for $24,000 loses 20% of its value each year. What is its value after 2 years?',
    choices: ['$15,360', '$14,400', '$19,200', '$9,600'],
    correctIndex: 0,
    explanation: '24,000(0.8)² = 24,000(0.64) = $15,360.'
  },
  {
    id: 'EX16', topic: 'EXPONENTIALS',
    prompt: 'In the exponential function [[f(x) = a(b)^{x}]], what must be true about [[b]] for the function to represent decay?',
    choices: ['[[0 < b < 1]]', '[[b > 1]]', '[[b < 0]]', '[[b = 1]]'],
    correctIndex: 0,
    explanation: 'Exponential decay occurs when the base b is between 0 and 1.'
  },
  {
    id: 'EX17', topic: 'EXPONENTIALS',
    prompt: 'An exponential table shows: [[(0, 12), (1, 18), (2, 27)]]. What is the equation?',
    choices: ['[[y = 12(1.5)^{x}]]', '[[y = 12(6)^{x}]]', '[[y = 6x + 12]]', '[[y = 18(1.5)^{x}]]'],
    correctIndex: 0,
    explanation: 'Initial value at x = 0 is 12; ratio 18/12 = 1.5.'
  },
  {
    id: 'EX18', topic: 'EXPONENTIALS',
    prompt: 'An exponential table shows: [[(0, 64), (1, 16), (2, 4)]]. What is the value when [[x = 3]]?',
    choices: ['[[1]]', '[[\\frac{1}{4}]]', '[[0]]', '[[2]]'],
    correctIndex: 0,
    explanation: 'Each step multiplies by 1/4: 4 × (1/4) = 1.'
  },
  {
    id: 'EX19', topic: 'EXPONENTIALS',
    prompt: 'A medicine dose of 400 mg decreases by half every 4 hours: [[M(t) = 400(\\frac{1}{2})^{\\frac{t}{4}}]]. How much remains after 8 hours?',
    choices: ['[[100]] mg', '[[200]] mg', '[[50]] mg', '[[25]] mg'],
    correctIndex: 0,
    explanation: '8/4 = 2 half-lives, so 400(1/2)² = 100 mg.'
  },
  {
    id: 'EX20', topic: 'EXPONENTIALS',
    prompt: 'Which expression is equivalent to [[300(1.06)^{2t}]]?',
    choices: ['[[300(1.1236)^{t}]]', '[[300(2.12)^{t}]]', '[[600(1.06)^{t}]]', '[[300(1.12)^{t}]]'],
    correctIndex: 0,
    explanation: '(1.06)^2 = 1.1236, so 300(1.06)^(2t) = 300(1.1236)^t.'
  },
  {
    id: 'EX21', topic: 'EXPONENTIALS',
    prompt: 'A population grows by 4.5% each year starting at 8,000. Which equation models the population?',
    choices: ['[[P = 8,000(1.045)^{t}]]', '[[P = 8,000(1.45)^{t}]]', '[[P = 8,000(0.045)^{t}]]', '[[P = 8,000(0.955)^{t}]]'],
    correctIndex: 0,
    explanation: '4.5% = 0.045, so 1 + 0.045 = 1.045.'
  },
  {
    id: 'EX22', topic: 'EXPONENTIALS',
    prompt: 'Compare [[f(x) = 10x + 50]] and [[g(x) = 2(1.8)^{x}]] as [[x]] grows very large. Which statement is true?',
    choices: [
      '[[g(x)]] will eventually exceed [[f(x)]]',
      '[[f(x)]] will always stay greater than [[g(x)]]',
      'Both functions grow at the same rate',
      '[[g(x)]] decreases to 0'
    ],
    correctIndex: 0,
    explanation: 'An exponential growth function always eventually overtakes any linear function.'
  },
  {
    id: 'EX23', topic: 'EXPONENTIALS',
    prompt: 'In [[y = 600(0.92)^{t}]], what is the annual percent rate of decrease?',
    choices: ['[[8\\%]]', '[[92\\%]]', '[[0.08\\%]]', '[[1.08\\%]]'],
    correctIndex: 0,
    explanation: '1 − 0.92 = 0.08 = 8% decrease.'
  },
  {
    id: 'EX24', topic: 'EXPONENTIALS',
    prompt: 'A value of a rare card starts at $50 and grows by 10% every year. What is the value after 2 years?',
    choices: ['$60.50', '$60.00', '$55.00', '$70.00'],
    correctIndex: 0,
    explanation: '50(1.10)² = 50(1.21) = $60.50.'
  },
  {
    id: 'EX25', topic: 'EXPONENTIALS',
    prompt: 'What is the y-intercept of [[f(x) = 75(0.6)^{x}]]?',
    choices: ['[[(0, 75)]]', '[[(0, 0.6)]]', '[[(0, 45)]]', '[[(0, 1)]]'],
    correctIndex: 0,
    explanation: 'At x = 0, (0.6)⁰ = 1, so f(0) = 75(1) = 75.'
  },
  {
    id: 'EX26', topic: 'EXPONENTIALS',
    prompt: 'A forest has 2,400 trees and loses 15% of its trees each decade. Which equation models the number of trees after [[d]] decades?',
    choices: ['[[T = 2,400(0.85)^{d}]]', '[[T = 2,400(0.15)^{d}]]', '[[T = 2,400(1.15)^{d}]]', '[[T = 2,400 - 360d]]'],
    correctIndex: 0,
    explanation: '1 − 0.15 = 0.85 per decade.'
  },
  {
    id: 'EX27', topic: 'EXPONENTIALS',
    prompt: 'If [[f(x) = 3(2)^{x}]] and [[f(x) = 48]], what is [[x]]?',
    choices: ['[[4]]', '[[3]]', '[[5]]', '[[8]]'],
    correctIndex: 0,
    explanation: '48/3 = 16 = 2⁴, so x = 4.'
  },
  {
    id: 'EX28', topic: 'EXPONENTIALS',
    prompt: 'A savings account formula is [[A = 500(1 + \\frac{0.04}{12})^{12t}]]. What does [[0.04]] represent?',
    choices: ['The annual interest rate (4%)', 'The monthly interest rate', 'The starting deposit', 'The number of months'],
    correctIndex: 0,
    explanation: '0.04 is the annual interest rate (4%) divided across 12 months.'
  },
  {
    id: 'EX29', topic: 'EXPONENTIALS',
    prompt: 'Which exponential function passes through [[(0, 9)]] and [[(1, 3)]]?',
    choices: ['[[y = 9(\\frac{1}{3})^{x}]]', '[[y = 9(3)^{x}]]', '[[y = 3(\\frac{1}{9})^{x}]]', '[[y = 9 - 6x]]'],
    correctIndex: 0,
    explanation: 'a = 9 at x = 0, and 3/9 = 1/3 gives b = 1/3.'
  },
  {
    id: 'EX30', topic: 'EXPONENTIALS',
    prompt: 'A city’s population is modeled by [[P(t) = 42,000(1.02)^{t}]]. By what factor does the population multiply every 1 year?',
    choices: ['[[1.02]]', '[[0.02]]', '[[42,000]]', '[[1.2]]'],
    correctIndex: 0,
    explanation: 'The base b = 1.02 is the yearly growth multiplier.'
  },

  // ===========================================================================
  // 7. CREATING, GRAPHING, MODELING LINEAR (PART 1) (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'L101', topic: 'LINEAR_1',
    prompt: 'An equation is given: [[5y - 2x = 5]]. Which ordered pair represents a point on the graph of this equation?',
    choices: ['[[(0, 1)]]', '[[(1, 0)]]', '[[(5, 1)]]', '[[(2, 1)]]'],
    correctIndex: 0,
    explanation: 'Plug in (0, 1): 5(1) − 2(0) = 5.'
  },
  {
    id: 'L102', topic: 'LINEAR_1',
    prompt: 'A table of values for a linear function is shown. What is the missing value in the table?',
    visual: {
      type: 'table',
      headers: ['x', 'f(x)'],
      rows: [['0', '4'], ['1', '6'], ['3', '10'], ['5', '14'], ['6', '?']]
    },
    choices: ['[[16]]', '[[15]]', '[[18]]', '[[12]]'],
    correctIndex: 0,
    explanation: 'f(x) = 2x + 4, so f(6) = 2(6) + 4 = 16.'
  },
  {
    id: 'L103', topic: 'LINEAR_1',
    prompt: 'What is the x-intercept of the graph of the function [[f(x) = 2x + 9]]?',
    choices: ['[[-\\frac{9}{2}]]', '[[9]]', '[[\\frac{9}{2}]]', '[[-9]]'],
    correctIndex: 0,
    explanation: 'Set f(x) = 0: 2x + 9 = 0 → x = −9/2.'
  },
  {
    id: 'L104', topic: 'LINEAR_1',
    prompt: 'The linear graph passes through [[(0, 4)]], [[(4, 6)]], and [[(8, 8)]]. What is the equation of the linear function?',
    visual: {
      type: 'graph', xMin: -2, xMax: 10, yMin: -2, yMax: 10, xStep: 2, yStep: 2,
      lines: [{ m: 0.5, b: 4, color: '#38bdf8' }],
      dots: [[0,4],[4,6],[8,8]]
    },
    choices: ['[[f(x) = \\frac{1}{2}x + 4]]', '[[f(x) = 2x + 4]]', '[[f(x) = 4x + 2]]', '[[f(x) = 4x + \\frac{1}{2}]]'],
    correctIndex: 0,
    explanation: 'y-intercept b = 4; slope = rise/run = (6 − 4)/(4 − 0) = 2/4 = 1/2.'
  },
  {
    id: 'L105', topic: 'LINEAR_1',
    prompt: 'Which description matches the graph of [[f(x) = 2x - 1]]?',
    visual: {
      type: 'graph', xMin: -5, xMax: 5, yMin: -5, yMax: 5, xStep: 1, yStep: 1,
      lines: [{ m: 2, b: -1, color: '#f59e0b' }]
    },
    choices: [
      'Crosses y-axis at (0, −1) and rises through (1, 1) and (3, 5)',
      'Crosses y-axis at (0, 2) and rises through (1, 3)',
      'Crosses y-axis at (0, −1) and rises through (2, 0)',
      'Crosses y-axis at (0, 1) and rises through (2, 5)'
    ],
    correctIndex: 0,
    explanation: 'y-intercept is (0, −1) and slope 2 goes up 2, right 1 to (1, 1) and (3, 5).'
  },
  {
    id: 'L106', topic: 'LINEAR_1',
    prompt: 'Find the slope of the line passing through [[(-2, 7)]] and [[(4, -5)]].',
    choices: ['[[-2]]', '[[2]]', '[[-\\frac{1}{2}]]', '[[\\frac{1}{2}]]'],
    correctIndex: 0,
    explanation: 'm = (−5 − 7)/(4 − (−2)) = −12/6 = −2.'
  },
  {
    id: 'L107', topic: 'LINEAR_1',
    prompt: 'What are the x-intercept and y-intercept of [[3x - 4y = 24]]?',
    choices: [
      'x-int: [[(8, 0)]]; y-int: [[(0, -6)]]',
      'x-int: [[(0, 8)]]; y-int: [[(-6, 0)]]',
      'x-int: [[(-8, 0)]]; y-int: [[(0, 6)]]',
      'x-int: [[(6, 0)]]; y-int: [[(0, -8)]]'
    ],
    correctIndex: 0,
    explanation: 'Set y = 0 → 3x = 24 → (8, 0); set x = 0 → −4y = 24 → (0, −6).'
  },
  {
    id: 'L108', topic: 'LINEAR_1',
    prompt: 'Write the equation of the line that passes through [[(0, -3)]] and [[(5, 7)]].',
    choices: ['[[y = 2x - 3]]', '[[y = \\frac{1}{2}x - 3]]', '[[y = 2x + 7]]', '[[y = -2x - 3]]'],
    correctIndex: 0,
    explanation: 'Slope = (7 − (−3))/(5 − 0) = 10/5 = 2, and b = −3.'
  },
  {
    id: 'L109', topic: 'LINEAR_1',
    prompt: 'Which table represents a linear function?',
    choices: [
      'x: 0, 2, 4 | y: 5, 11, 17',
      'x: 0, 1, 2 | y: 1, 3, 9',
      'x: 0, 1, 2 | y: 0, 1, 4',
      'x: 1, 2, 3 | y: 2, 5, 10'
    ],
    correctIndex: 0,
    explanation: 'In (0,5), (2,11), (4,17), the rate of change is a constant +6 per +2 (+3 per 1).'
  },
  {
    id: 'L110', topic: 'LINEAR_1',
    prompt: 'Which point lies on the line [[y = -\\frac{3}{2}x + 8]]?',
    choices: ['[[(4, 2)]]', '[[(4, 14)]]', '[[(2, 11)]]', '[[(6, 1)]]'],
    correctIndex: 0,
    explanation: 'y = (−3/2)(4) + 8 = −6 + 8 = 2.'
  },
  {
    id: 'L111', topic: 'LINEAR_1',
    prompt: 'A line has slope [[\\frac{2}{3}]] and passes through [[(6, 7)]]. What is its y-intercept?',
    choices: ['[[3]]', '[[4]]', '[[5]]', '[[-3]]'],
    correctIndex: 0,
    explanation: '7 = (2/3)(6) + b → 7 = 4 + b → b = 3.'
  },
  {
    id: 'L112', topic: 'LINEAR_1',
    prompt: 'What is the slope of the line [[4x + 6y = 18]]?',
    choices: ['[[-\\frac{2}{3}]]', '[[\\frac{2}{3}]]', '[[-\\frac{3}{2}]]', '[[4]]'],
    correctIndex: 0,
    explanation: '6y = −4x + 18 → y = (−2/3)x + 3.'
  },
  {
    id: 'L113', topic: 'LINEAR_1',
    prompt: 'What is the slope of a horizontal line passing through [[(3, -5)]] and [[(8, -5)]]?',
    choices: ['[[0]]', 'Undefined', '[[-5]]', '[[5]]'],
    correctIndex: 0,
    explanation: 'Rise is 0 (−5 − (−5) = 0), so a horizontal line has slope 0.'
  },
  {
    id: 'L114', topic: 'LINEAR_1',
    prompt: 'What is the equation of a vertical line passing through [[(4, -2)]]?',
    choices: ['[[x = 4]]', '[[y = -2]]', '[[y = 4x - 2]]', '[[x = -2]]'],
    correctIndex: 0,
    explanation: 'Every point on a vertical line through (4, −2) has x-coordinate 4.'
  },
  {
    id: 'L115', topic: 'LINEAR_1',
    prompt: 'Find the missing value [[k]] so that [[(2, 5)]], [[(5, 11)]], and [[(8, k)]] are collinear.',
    choices: ['[[17]]', '[[15]]', '[[19]]', '[[14]]'],
    correctIndex: 0,
    explanation: 'Slope is (11 − 5)/(5 − 2) = 2; from 5 to 8 (+3 in x), y rises +6 to 11 + 6 = 17.'
  },
  {
    id: 'L116', topic: 'LINEAR_1',
    prompt: 'Which line is parallel to [[y = \\frac{3}{4}x - 2]]?',
    choices: ['[[y = \\frac{3}{4}x + 9]]', '[[y = -\\frac{4}{3}x - 2]]', '[[y = \\frac{4}{3}x - 2]]', '[[y = -\\frac{3}{4}x + 5]]'],
    correctIndex: 0,
    explanation: 'Parallel lines have the exact same slope (3/4).'
  },
  {
    id: 'L117', topic: 'LINEAR_1',
    prompt: 'Write the equation of the line through [[(-3, 4)]] and [[(3, 8)]].',
    choices: ['[[y = \\frac{2}{3}x + 6]]', '[[y = \\frac{3}{2}x + 6]]', '[[y = \\frac{2}{3}x + 4]]', '[[y = 2x + 10]]'],
    correctIndex: 0,
    explanation: 'Slope = (8 − 4)/(3 − (−3)) = 4/6 = 2/3; 8 = (2/3)(3) + b → b = 6.'
  },
  {
    id: 'L118', topic: 'LINEAR_1',
    prompt: 'Where does [[f(x) = -\\frac{1}{3}x + 5]] cross the x-axis?',
    choices: ['[[(15, 0)]]', '[[(0, 5)]]', '[[(-15, 0)]]', '[[(\\frac{5}{3}, 0)]]'],
    correctIndex: 0,
    explanation: 'Set y = 0: (1/3)x = 5 → x = 15.'
  },
  {
    id: 'L119', topic: 'LINEAR_1',
    prompt: 'A line crosses the x-axis at [[(6, 0)]] and the y-axis at [[(0, -4)]]. What is its equation?',
    choices: ['[[y = \\frac{2}{3}x - 4]]', '[[y = -\\frac{2}{3}x - 4]]', '[[y = \\frac{3}{2}x - 4]]', '[[y = \\frac{2}{3}x + 6]]'],
    correctIndex: 0,
    explanation: 'Slope = (0 − (−4))/(6 − 0) = 4/6 = 2/3 and y-intercept is −4.'
  },
  {
    id: 'L120', topic: 'LINEAR_1',
    prompt: 'Another ordered pair on [[5y - 2x = 5]] besides [[(0, 1)]] is:',
    choices: ['[[(5, 3)]]', '[[(5, 2)]]', '[[(2, 5)]]', '[[(10, 4)]]'],
    correctIndex: 0,
    explanation: '5(3) − 2(5) = 15 − 10 = 5.'
  },
  {
    id: 'L121', topic: 'LINEAR_1',
    prompt: 'For the linear function [[f(x)]], [[f(2) = 9]] and [[f(5) = 21]]. What is [[f(0)]]?',
    choices: ['[[1]]', '[[3]]', '[[4]]', '[[-1]]'],
    correctIndex: 0,
    explanation: 'Slope = (21 − 9)/(5 − 2) = 4; 9 = 4(2) + b → b = 1.'
  },
  {
    id: 'L122', topic: 'LINEAR_1',
    prompt: 'Rewrite [[y - 5 = 3(x + 2)]] in slope-intercept form.',
    choices: ['[[y = 3x + 11]]', '[[y = 3x + 7]]', '[[y = 3x - 1]]', '[[y = 3x + 1]]'],
    correctIndex: 0,
    explanation: 'y − 5 = 3x + 6 → y = 3x + 11.'
  },
  {
    id: 'L123', topic: 'LINEAR_1',
    prompt: 'Which equation has a slope of [[-4]] and passes through [[(1, 2)]]?',
    choices: ['[[y = -4x + 6]]', '[[y = -4x + 2]]', '[[y = -4x - 2]]', '[[y = 4x - 2]]'],
    correctIndex: 0,
    explanation: '2 = −4(1) + b → b = 6.'
  },
  {
    id: 'L124', topic: 'LINEAR_1',
    prompt: 'If a line goes down 3 units for every 5 units to the right, what is its slope?',
    choices: ['[[-\\frac{3}{5}]]', '[[-\\frac{5}{3}]]', '[[\\frac{3}{5}]]', '[[\\frac{5}{3}]]'],
    correctIndex: 0,
    explanation: 'Slope = rise/run = −3/5.'
  },
  {
    id: 'L125', topic: 'LINEAR_1',
    prompt: 'Does the point [[(-4, 10)]] lie on [[2x + 3y = 22]]?',
    choices: ['Yes, because [[2(-4) + 3(10) = 22]]', 'No, because [[2(-4) + 3(10) = 38]]', 'No, because [[2(-4) + 3(10) = 18]]', 'Yes, because [[-4 + 10 = 6]]'],
    correctIndex: 0,
    explanation: '−8 + 30 = 22, so the point satisfies the equation.'
  },
  {
    id: 'L126', topic: 'LINEAR_1',
    prompt: 'Find the missing value in the linear table below.',
    visual: {
      type: 'table',
      headers: ['x', 'y'],
      rows: [['-1', '11'], ['1', '5'], ['3', '-1'], ['5', '?']]
    },
    choices: ['[[-7]]', '[[-5]]', '[[-3]]', '[[-9]]'],
    correctIndex: 0,
    explanation: 'Each +2 in x decreases y by 6: −1 − 6 = −7.'
  },
  {
    id: 'L127', topic: 'LINEAR_1',
    prompt: 'Which linear equation has the steepest positive slope?',
    choices: ['[[y = \\frac{5}{2}x - 10]]', '[[y = 2x + 15]]', '[[y = \\frac{3}{4}x + 100]]', '[[y = -6x + 4]]'],
    correctIndex: 0,
    explanation: '5/2 = 2.5 is the largest positive slope (greater than 2 and 0.75).'
  },
  {
    id: 'L128', topic: 'LINEAR_1',
    prompt: 'What is the y-intercept of [[5x - 2y = 14]]?',
    choices: ['[[(0, -7)]]', '[[(0, 7)]]', '[[(0, \\frac{14}{5})]]', '[[(0, -2)]]'],
    correctIndex: 0,
    explanation: 'Set x = 0: −2y = 14 → y = −7.'
  },
  {
    id: 'L129', topic: 'LINEAR_1',
    prompt: 'A line passes through [[(2, 3)]] and [[(10, 7)]]. What is its slope?',
    choices: ['[[\\frac{1}{2}]]', '[[2]]', '[[\\frac{4}{5}]]', '[[\\frac{2}{5}]]'],
    correctIndex: 0,
    explanation: 'Slope = (7 − 3)/(10 − 2) = 4/8 = 1/2.'
  },
  {
    id: 'L130', topic: 'LINEAR_1',
    prompt: 'If [[g(x) = mx + b]] has [[g(0) = -6]] and [[g(4) = 6]], what is [[g(x)]]?',
    choices: ['[[g(x) = 3x - 6]]', '[[g(x) = 4x - 6]]', '[[g(x) = \\frac{1}{3}x - 6]]', '[[g(x) = 3x + 6]]'],
    correctIndex: 0,
    explanation: 'b = −6; slope = (6 − (−6))/4 = 12/4 = 3.'
  },

  // ===========================================================================
  // 8. CREATING, GRAPHING, MODELING LINEAR (PART 2) (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'L201', topic: 'LINEAR_2',
    prompt: 'Jamal distributes charity items: [[800 - 60w]], where [[w]] is weeks. What does the coefficient [[-60]] represent?',
    choices: [
      'The number of items Jamal distributes every week',
      'The number of weeks to distribute 800 items',
      'The number of weeks to distribute 60 items',
      'The total number of items Jamal started with'
    ],
    correctIndex: 0,
    explanation: 'The slope −60 is the rate of change: 60 items distributed per week.'
  },
  {
    id: 'L202', topic: 'LINEAR_2',
    prompt: 'Samantha sells rope and beaded wristbands, charging MORE for beaded. Total money is [[5x + 8y]]. What does [[y]] represent?',
    choices: [
      'The number of beaded wristbands sold',
      'The number of rope wristbands sold',
      'The selling price of one rope wristband',
      'The selling price of one beaded wristband'
    ],
    correctIndex: 0,
    explanation: 'Since $8 > $5, $8 is the beaded wristband price, so y is the number of beaded wristbands sold.'
  },
  {
    id: 'L203', topic: 'LINEAR_2',
    prompt: 'A descending hot air balloon’s altitude after [[x]] minutes is [[-375x + 1,500]]. What does [[-375]] represent?',
    choices: [
      'The rate of descent of the hot air balloon',
      'The altitude after x minutes',
      'The total descent after x minutes',
      'The starting altitude before descending'
    ],
    correctIndex: 0,
    explanation: '−375 ft/min is the rate of descent.'
  },
  {
    id: 'L204', topic: 'LINEAR_2',
    prompt: 'A shipping company’s cost for [[x]] pounds is [[f(x) = 4.99x + 5.75]]. Which part represents the fixed fee?',
    choices: ['[[5.75]]', '[[4.99]]', '[[x]]', '[[4.99x]]'],
    correctIndex: 0,
    explanation: 'The constant y-intercept 5.75 is the one-time fixed fee.'
  },
  {
    id: 'L205', topic: 'LINEAR_2',
    prompt: 'A landscape company charges [[40 + 23t]] dollars for [[t]] hours of labor. What is the hourly rate?',
    choices: ['$23', '$40', '[[23t]]', '[[40 + 23t]]'],
    correctIndex: 0,
    explanation: '23 is multiplied by hours t, so $23 is the hourly rate (and $40 is the consultation fee).'
  },
  {
    id: 'L206', topic: 'LINEAR_2',
    prompt: 'Trent plants a 6-inch sunflower that grows 1.5 inches per day. Which equation finds the days [[x]] to reach 45 inches?',
    choices: ['[[1.5x + 6 = 45]]', '[[6x + 1.5 = 45]]', '[[1.5x - 6 = 45]]', '[[45x + 6 = 1.5]]'],
    correctIndex: 0,
    explanation: 'Starting height b = 6 and rate m = 1.5 → 1.5x + 6 = 45.'
  },
  {
    id: 'L207', topic: 'LINEAR_2',
    prompt: 'Trent’s 6-inch sunflower grows 1.5 inches per day. How many days will it take to reach 45 inches?',
    choices: ['[[26]] days', '[[30]] days', '[[34]] days', '[[24]] days'],
    correctIndex: 0,
    explanation: '1.5x = 45 − 6 = 39 → x = 39 / 1.5 = 26 days.'
  },
  {
    id: 'L208', topic: 'LINEAR_2',
    prompt: 'Madison bought [[b]] pounds of bananas ($0.60/lb) and [[p]] pounds of pears ($1.74/lb) for $10.38 total. Which equation models this?',
    choices: [
      '[[0.60b + 1.74p = 10.38]]',
      '[[1.74b + 0.60p = 10.38]]',
      '[[0.60b - 1.74p = 10.38]]',
      '[[2.34(b + p) = 10.38]]'
    ],
    correctIndex: 0,
    explanation: 'Standard form Ax + By = C: 0.60b + 1.74p = 10.38.'
  },
  {
    id: 'L209', topic: 'LINEAR_2',
    prompt: 'A subscription costs $10 per month plus a $20 setup fee. Which equation models total cost [[y]] after [[x]] months?',
    choices: ['[[y = 10x + 20]]', '[[y = 20x + 10]]', '[[y = 30x]]', '[[10x + 20y = 1]]'],
    correctIndex: 0,
    explanation: 'm = 10 per month, b = 20 setup fee → y = 10x + 20.'
  },
  {
    id: 'L210', topic: 'LINEAR_2',
    prompt: 'A café sells coffee for $3 each ([[x]]) and muffins for $2 each ([[y]]) with $60 total sales. Which equation models this?',
    choices: ['[[3x + 2y = 60]]', '[[2x + 3y = 60]]', '[[y = 3x + 2]]', '[[5(x + y) = 60]]'],
    correctIndex: 0,
    explanation: 'Standard form: 3x + 2y = 60.'
  },
  {
    id: 'L211', topic: 'LINEAR_2',
    prompt: 'In the hot air balloon model [[-375x + 1,500]], what does [[1,500]] represent?',
    choices: [
      'The starting altitude before descending',
      'The total time to reach the ground',
      'The speed of the balloon',
      'The altitude after 4 minutes'
    ],
    correctIndex: 0,
    explanation: 'At x = 0 minutes, the altitude is 1,500 feet.'
  },
  {
    id: 'L212', topic: 'LINEAR_2',
    prompt: 'Using [[-375x + 1,500]], after how many minutes does the hot air balloon reach the ground (altitude 0)?',
    choices: ['[[4]] minutes', '[[3]] minutes', '[[5]] minutes', '[[6]] minutes'],
    correctIndex: 0,
    explanation: '−375x + 1,500 = 0 → 375x = 1,500 → x = 4 minutes.'
  },
  {
    id: 'L213', topic: 'LINEAR_2',
    prompt: 'A store sells pencils ([[x]]) and notebooks ([[y]]) modeled by [[2x + 3y = 50]]. If 10 notebooks are sold, how many pencils were sold?',
    choices: ['[[10]] pencils', '[[15]] pencils', '[[20]] pencils', '[[8]] pencils'],
    correctIndex: 0,
    explanation: '2x + 3(10) = 50 → 2x = 20 → x = 10.'
  },
  {
    id: 'L214', topic: 'LINEAR_2',
    prompt: 'A water tank starts with 500 gallons and drains at 12 gallons per minute. Which equation gives remaining water [[W]] after [[m]] minutes?',
    choices: ['[[W = 500 - 12m]]', '[[W = 500 + 12m]]', '[[W = 12 - 500m]]', '[[12W + 500m = 0]]'],
    correctIndex: 0,
    explanation: 'Starting amount 500 minus 12 per minute → W = 500 − 12m.'
  },
  {
    id: 'L215', topic: 'LINEAR_2',
    prompt: 'A gym charges $35 per month plus a $50 enrollment fee. What is the total cost for 6 months?',
    choices: ['$260', '$210', '$335', '$300'],
    correctIndex: 0,
    explanation: '35(6) + 50 = 210 + 50 = $260.'
  },
  {
    id: 'L216', topic: 'LINEAR_2',
    prompt: 'In [[f(x) = 0.15x + 25]], [[x]] is text messages over the limit and [[f(x)]] is the phone bill. What does [[0.15]] mean?',
    choices: ['$0.15 cost per extra message', '$0.15 base monthly fee', '15 free text messages', 'Total bill for 1 message'],
    correctIndex: 0,
    explanation: 'The slope 0.15 is the cost per additional text message.'
  },
  {
    id: 'L217', topic: 'LINEAR_2',
    prompt: 'A baker uses 3 cups of flour per cake ([[c]]) and 2 cups per pie ([[p]]) from a 36-cup bag: [[3c + 2p = 36]]. What does the c-intercept (12, 0) mean?',
    choices: [
      'Making 12 cakes and 0 pies uses all 36 cups',
      'Making 0 cakes and 12 pies uses all 36 cups',
      'Each cake costs $12',
      'The baker makes 12 cakes and 12 pies'
    ],
    correctIndex: 0,
    explanation: 'When p = 0 pies, 3c = 36 gives 12 cakes.'
  },
  {
    id: 'L218', topic: 'LINEAR_2',
    prompt: 'Maria earns $18 per hour tutoring plus a $12 travel bonus per session. Which equation gives her earnings [[E]] for an [[h]]-hour session?',
    choices: ['[[E = 18h + 12]]', '[[E = 12h + 18]]', '[[18E + 12h = 1]]', '[[E = 30h]]'],
    correctIndex: 0,
    explanation: 'Rate = 18 per hour, fixed bonus = 12 → E = 18h + 12.'
  },
  {
    id: 'L219', topic: 'LINEAR_2',
    prompt: 'A car travels 65 miles per hour. Which function models remaining distance on a 325-mile trip after [[t]] hours?',
    choices: ['[[d(t) = 325 - 65t]]', '[[d(t) = 65t + 325]]', '[[d(t) = 65t]]', '[[d(t) = 325t - 65]]'],
    correctIndex: 0,
    explanation: 'Remaining distance starts at 325 and decreases by 65 each hour.'
  },
  {
    id: 'L220', topic: 'LINEAR_2',
    prompt: 'If [[800 - 60w = 200]], how many weeks has Jamal been distributing items?',
    choices: ['[[10]] weeks', '[[12]] weeks', '[[8]] weeks', '[[15]] weeks'],
    correctIndex: 0,
    explanation: '60w = 600 → w = 10 weeks.'
  },
  {
    id: 'L221', topic: 'LINEAR_2',
    prompt: 'A phone battery starts at 100% and drops 8% every hour of streaming. After how many hours is it at 36%?',
    choices: ['[[8]] hours', '[[6]] hours', '[[12.5]] hours', '[[4.5]] hours'],
    correctIndex: 0,
    explanation: '100 − 8h = 36 → 8h = 64 → h = 8 hours.'
  },
  {
    id: 'L222', topic: 'LINEAR_2',
    prompt: 'Tickets cost $12 for adults ([[x]]) and $7 for students ([[y]]). Total ticket sales are $420. Which equation models this?',
    choices: ['[[12x + 7y = 420]]', '[[7x + 12y = 420]]', '[[y = 12x + 7]]', '[[19xy = 420]]'],
    correctIndex: 0,
    explanation: '12x + 7y = 420 in standard form Ax + By = C.'
  },
  {
    id: 'L223', topic: 'LINEAR_2',
    prompt: 'A plumber charges a $65 service call plus $45 per hour. If the bill was $245, how many hours did the plumber work?',
    choices: ['[[4]] hours', '[[3]] hours', '[[5]] hours', '[[6]] hours'],
    correctIndex: 0,
    explanation: '45h + 65 = 245 → 45h = 180 → h = 4 hours.'
  },
  {
    id: 'L224', topic: 'LINEAR_2',
    prompt: 'In [[C(n) = 1.25n + 4.50]], [[n]] is toppings on a pizza. What does [[1.25n]] represent?',
    choices: [
      'Total cost of the n toppings',
      'Cost of a plain cheese pizza',
      'Number of pizzas ordered',
      'Price of 1 topping plus crust'
    ],
    correctIndex: 0,
    explanation: '1.25 per topping times n toppings gives the total cost of the toppings.'
  },
  {
    id: 'L225', topic: 'LINEAR_2',
    prompt: 'A candle is 12 inches tall and burns [[\\frac{3}{4}]] inch per hour. Write an equation for height [[h]] after [[t]] hours.',
    choices: ['[[h = 12 - \\frac{3}{4}t]]', '[[h = 12 + \\frac{3}{4}t]]', '[[h = \\frac{3}{4} - 12t]]', '[[h = 12t - \\frac{3}{4}]]'],
    correctIndex: 0,
    explanation: 'Initial height 12 minus 3/4 per hour.'
  },
  {
    id: 'L226', topic: 'LINEAR_2',
    prompt: 'A fundraiser sells candles for $10 and soaps for $6. To raise $300, [[10c + 6s = 300]]. If they sell 18 candles, how many soaps must they sell?',
    choices: ['[[20]] soaps', '[[15]] soaps', '[[25]] soaps', '[[30]] soaps'],
    correctIndex: 0,
    explanation: '10(18) + 6s = 300 → 6s = 120 → s = 20.'
  },
  {
    id: 'L227', topic: 'LINEAR_2',
    prompt: 'A pool holds 2,000 gallons and is being filled at 25 gallons per minute. Which equation gives total gallons [[G]] after [[m]] minutes if it starts with 300 gallons?',
    choices: ['[[G = 25m + 300]]', '[[G = 300m + 25]]', '[[G = 2,000 - 25m]]', '[[G = 25m + 2,000]]'],
    correctIndex: 0,
    explanation: 'Starts at 300 gallons and adds 25 per minute → G = 25m + 300.'
  },
  {
    id: 'L228', topic: 'LINEAR_2',
    prompt: 'Convert [[3x + 4y = 24]] to slope-intercept form.',
    choices: ['[[y = -\\frac{3}{4}x + 6]]', '[[y = \\frac{3}{4}x + 6]]', '[[y = -\\frac{4}{3}x + 6]]', '[[y = -3x + 24]]'],
    correctIndex: 0,
    explanation: '4y = −3x + 24 → y = (−3/4)x + 6.'
  },
  {
    id: 'L229', topic: 'LINEAR_2',
    prompt: 'A scooter rental costs $2 to unlock plus $0.35 per minute. Which equation models a ride costing $9.00?',
    choices: ['[[0.35m + 2 = 9]]', '[[2m + 0.35 = 9]]', '[[0.35m - 2 = 9]]', '[[2.35m = 9]]'],
    correctIndex: 0,
    explanation: '0.35 per minute plus $2 unlock fee equals $9.'
  },
  {
    id: 'L230', topic: 'LINEAR_2',
    prompt: 'Using [[0.35m + 2 = 9]], how many minutes was the scooter ride?',
    choices: ['[[20]] minutes', '[[15]] minutes', '[[25]] minutes', '[[18]] minutes'],
    correctIndex: 0,
    explanation: '0.35m = 7 → m = 7 / 0.35 = 20 minutes.'
  },

  // ===========================================================================
  // 9. CREATING, SOLVING, MODELING SYSTEMS OF EQUATIONS (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'SY01', topic: 'SYSTEMS',
    prompt: 'Which statement is true about a system of linear equations that has NO solution?',
    choices: [
      'The graphs of the equations are parallel lines',
      'The graphs of the equations are the same line',
      'The graphs of the equations are perpendicular lines',
      'The graphs intersect at one point'
    ],
    correctIndex: 0,
    explanation: 'Parallel lines have the same slope and different y-intercepts, so they never intersect.'
  },
  {
    id: 'SY02', topic: 'SYSTEMS',
    prompt: 'A system of two lines crosses at [[(6, 3)]]. What is the solution to the system?',
    visual: {
      type: 'graph', xMin: -6, xMax: 8, yMin: -6, yMax: 6, xStep: 2, yStep: 2,
      lines: [{ m: 0.5, b: 0, color: '#38bdf8' }, { m: -3, b: 21, color: '#f97316' }],
      dots: [[6,3]]
    },
    choices: ['[[(6, 3)]]', '[[(3, 6)]]', '[[(0, 0)]]', '[[(7, 0)]]'],
    correctIndex: 0,
    explanation: 'The solution to a system is the (x, y) intersection point: (6, 3).'
  },
  {
    id: 'SY03', topic: 'SYSTEMS',
    prompt: 'Solve the system: [[y = 2x + 5]] and [[y = \\frac{1}{4}x - \\frac{1}{4}]]',
    choices: ['[[(-3, -1)]]', '[[(3, 11)]]', '[[(-1, 3)]]', '[[(4, 1)]]'],
    correctIndex: 0,
    explanation: '2x + 5 = (1/4)x − 1/4 → (7/4)x = −21/4 → x = −3, y = 2(−3) + 5 = −1.'
  },
  {
    id: 'SY04', topic: 'SYSTEMS',
    prompt: 'Ticket sales are modeled by [[a + c = 256]] and [[8a + 5c = 1,673]]. How many TOTAL tickets were sold?',
    choices: ['[[256]]', '[[131]]', '[[125]]', '[[1,673]]'],
    correctIndex: 0,
    explanation: 'a + c represents total adult + child tickets, which is given directly as 256.'
  },
  {
    id: 'SY05', topic: 'SYSTEMS',
    prompt: 'Given [[f(x) = 3x + 4]] and [[g(x) = 7x - 2]], what value of [[x]] makes [[f(x) = g(x)]] true?',
    choices: ['[[\\frac{3}{2}]]', '[[\\frac{2}{3}]]', '[[6]]', '[[\\frac{1}{2}]]'],
    correctIndex: 0,
    explanation: '3x + 4 = 7x − 2 → 6 = 4x → x = 6/4 = 3/2.'
  },
  {
    id: 'SY06', topic: 'SYSTEMS',
    prompt: 'What two numbers have a sum of 217 and a difference of 85?',
    choices: ['[[151]] and [[66]]', '[[132]] and [[85]]', '[[141]] and [[76]]', '[[161]] and [[56]]'],
    correctIndex: 0,
    explanation: 'x + y = 217 and x − y = 85 → 2x = 302 → x = 151, y = 66.'
  },
  {
    id: 'SY07', topic: 'SYSTEMS',
    prompt: 'Lower-level tickets cost $35 and upper-level tickets cost $25. A theater sells 350 tickets for $10,250. How many of each were sold?',
    choices: [
      '150 lower, 200 upper',
      '200 lower, 150 upper',
      '175 lower, 175 upper',
      '125 lower, 225 upper'
    ],
    correctIndex: 0,
    explanation: '35L + 25(350 − L) = 10,250 → 10L = 1,500 → L = 150 and U = 200.'
  },
  {
    id: 'SY08', topic: 'SYSTEMS',
    prompt: 'A linear-quadratic system crosses at [[(1, 5)]] and [[(5, -3)]]. Which ordered pair is a solution to the system?',
    visual: {
      type: 'graph', xMin: -2, xMax: 8, yMin: -6, yMax: 10, xStep: 2, yStep: 2,
      quads: [{ a: -1, b: 6, c: 0, color: '#38bdf8' }],
      lines: [{ m: -2, b: 7, color: '#f97316' }],
      dots: [[1,5],[5,-3]]
    },
    choices: ['[[(1, 5)]]', '[[(0, 7)]]', '[[(3, 9)]]', '[[(0, 0)]]'],
    correctIndex: 0,
    explanation: 'Both graphs intersect at (1, 5) and (5, −3).'
  },
  {
    id: 'SY09', topic: 'SYSTEMS',
    prompt: 'Luke compares System 1 and System 2 below. How do their solutions compare?',
    visual: {
      type: 'table',
      headers: ['System 1', 'System 2'],
      rows: [['y + 2x = 3', '−3y − 6x = −9'], ['3y + 3x = −4.5', '3y + 3x = −4.5']]
    },
    choices: [
      'Same solution: Eq. 1 in System 2 is −3 times Eq. 1 in System 1',
      'Different solutions: the slopes changed',
      'No solution in System 2 because of negatives',
      'Infinite solutions in both systems'
    ],
    correctIndex: 0,
    explanation: 'Multiplying y + 2x = 3 by −3 gives −3y − 6x = −9, so the systems are equivalent.'
  },
  {
    id: 'SY10', topic: 'SYSTEMS',
    prompt: 'Which system of equations has the same solution as [[x + 3y = 1]] and [[-2x - y = -2]]?',
    choices: [
      '[[2x + 6y = 2]] and [[-2x - y = -2]]',
      '[[-2x + 3y = 1]] and [[-2x - y = -2]]',
      '[[2x + 6y = 1]] and [[2x + y = 2]]',
      '[[x + 3y = 1]] and [[-x - y = -2]]'
    ],
    correctIndex: 0,
    explanation: 'Multiplying every term of x + 3y = 1 by 2 gives 2x + 6y = 2.'
  },
  {
    id: 'SY11', topic: 'SYSTEMS',
    prompt: 'For the system [[y \\le x + 4]] and [[y > 3x - 1]], describe the boundary lines and shading.',
    choices: [
      'Solid line for [[y \\le x + 4]], dotted for [[y > 3x - 1]]; shaded below solid, above dotted',
      'Dotted line for [[y \\le x + 4]], solid for [[y > 3x - 1]]; shaded above both',
      'Both solid lines; shaded between them',
      'Both dotted lines; shaded below both'
    ],
    correctIndex: 0,
    explanation: '≤ uses a solid line (shade below); > uses a dotted line (shade above).'
  },
  {
    id: 'SY12', topic: 'SYSTEMS',
    prompt: 'Which ordered pair is a solution to the system of inequalities [[x \\le 4]] and [[y > 0]]?',
    choices: ['[[(-4, 6)]]', '[[(5, 2)]]', '[[(3, 0)]]', '[[(-7, -1)]]'],
    correctIndex: 0,
    explanation: '−4 ≤ 4 and 6 > 0 are both true; (3, 0) fails y > 0.'
  },
  {
    id: 'SY13', topic: 'SYSTEMS',
    prompt: 'David has 30 coins totaling $4.80, made of dimes ([[D]]) and quarters ([[Q]]). Which pair of equations models David’s coins?',
    choices: [
      '[[D + Q = 30]] and [[0.10D + 0.25Q = 4.80]]',
      '[[D + Q = 4.80]] and [[0.10D + 0.25Q = 30]]',
      '[[D + Q = 30]] and [[0.25D + 0.10Q = 4.80]]',
      '[[D - Q = 30]] and [[0.10D + 0.25Q = 4.80]]'
    ],
    correctIndex: 0,
    explanation: 'Total coins D + Q = 30 and total money 0.10D + 0.25Q = 4.80.'
  },
  {
    id: 'SY14', topic: 'SYSTEMS',
    prompt: 'Product X costs $3.50/unit and Product Y costs $2.50/unit. Costs must not exceed $3,000, and at least 1,000 total units must be made. Which constraints apply?',
    choices: [
      '[[x + y \\ge 1000]] and [[3.5x + 2.5y \\le 3000]]',
      '[[x + y \\le 1000]] and [[3.5x + 2.5y \\ge 3000]]',
      '[[x + y \\ge 1000]] and [[x + y \\le 3000]]',
      '[[3.5x + 2.5y \\le 1000]] and [[x + y \\ge 3000]]'
    ],
    correctIndex: 0,
    explanation: '"At least 1,000" is ≥ 1000; "must not exceed $3,000" is ≤ 3000.'
  },
  {
    id: 'SY15', topic: 'SYSTEMS',
    prompt: 'Solve the system: [[x + y = 20]] and [[12x + 8y = 200]] (adult and child tickets).',
    choices: ['[[(10, 10)]]', '[[(12, 8)]]', '[[(8, 12)]]', '[[(15, 5)]]'],
    correctIndex: 0,
    explanation: '12(10) + 8(10) = 120 + 80 = 200 and 10 + 10 = 20.'
  },
  {
    id: 'SY16', topic: 'SYSTEMS',
    prompt: 'You can spend no more than $18 on apples ($3) and bananas ($2), and must buy at least 5 fruits: [[3x + 2y \\le 18]] and [[x + y \\ge 5]]. Which point is valid?',
    choices: ['[[(2, 4)]]', '[[(5, 2)]]', '[[(2, 2)]]', '[[(6, 1)]]'],
    correctIndex: 0,
    explanation: 'For (2, 4): 3(2) + 2(4) = 14 ≤ 18 and 2 + 4 = 6 ≥ 5.'
  },
  {
    id: 'SY17', topic: 'SYSTEMS',
    prompt: 'How many solutions does the system [[y = 3x + 2]] and [[6x - 2y = -4]] have?',
    choices: ['Infinitely many solutions', 'No solution', 'Exactly one solution', 'Two solutions'],
    correctIndex: 0,
    explanation: '6x − 2y = −4 rearranges to y = 3x + 2, the exact same line.'
  },
  {
    id: 'SY18', topic: 'SYSTEMS',
    prompt: 'How many solutions does the system [[y = -2x + 5]] and [[4x + 2y = 14]] have?',
    choices: ['No solution', 'Infinitely many solutions', 'One solution at (0, 5)', 'One solution at (2, 1)'],
    correctIndex: 0,
    explanation: '4x + 2y = 14 simplifies to y = −2x + 7, which is parallel to y = −2x + 5.'
  },
  {
    id: 'SY19', topic: 'SYSTEMS',
    prompt: 'Solve using elimination: [[3x + 2y = 19]] and [[5x - 2y = 5]].',
    choices: ['[[(3, 5)]]', '[[(5, 2)]]', '[[(4, 3.5)]]', '[[(2, 6.5)]]'],
    correctIndex: 0,
    explanation: 'Add the equations: 8x = 24 → x = 3; 3(3) + 2y = 19 → y = 5.'
  },
  {
    id: 'SY20', topic: 'SYSTEMS',
    prompt: 'Using David’s coin system [[D + Q = 30]] and [[0.10D + 0.25Q = 4.80]], how many quarters [[Q]] does David have?',
    choices: ['[[12]] quarters', '[[18]] quarters', '[[15]] quarters', '[[10]] quarters'],
    correctIndex: 0,
    explanation: '0.10(30 − Q) + 0.25Q = 4.80 → 3 + 0.15Q = 4.80 → Q = 12.'
  },
  {
    id: 'SY21', topic: 'SYSTEMS',
    prompt: 'Solve the system: [[y = 4x - 3]] and [[2x + y = 15]].',
    choices: ['[[(3, 9)]]', '[[(4, 13)]]', '[[(2, 5)]]', '[[(5, 17)]]'],
    correctIndex: 0,
    explanation: 'Substitute y: 2x + 4x − 3 = 15 → 6x = 18 → x = 3, y = 9.'
  },
  {
    id: 'SY22', topic: 'SYSTEMS',
    prompt: 'Which point is NOT in the solution set of [[y < 2x - 1]]?',
    choices: ['[[(3, 5)]]', '[[(3, 2)]]', '[[(4, 0)]]', '[[(1, -2)]]'],
    correctIndex: 0,
    explanation: 'At (3, 5), 5 < 2(3) − 1 → 5 < 5 is FALSE because < is strict (dotted line).'
  },
  {
    id: 'SY23', topic: 'SYSTEMS',
    prompt: 'Plan A costs $25 plus $0.10/min. Plan B costs $10 plus $0.25/min. At how many minutes do both plans cost the same?',
    choices: ['[[100]] minutes', '[[150]] minutes', '[[75]] minutes', '[[50]] minutes'],
    correctIndex: 0,
    explanation: '25 + 0.10m = 10 + 0.25m → 15 = 0.15m → m = 100.'
  },
  {
    id: 'SY24', topic: 'SYSTEMS',
    prompt: 'Solve for [[y]] in the system: [[2x - 3y = -11]] and [[4x + y = 13]].',
    choices: ['[[y = 5]]', '[[y = 2]]', '[[y = 3]]', '[[y = -1]]'],
    correctIndex: 0,
    explanation: 'Double Eq. 1: 4x − 6y = −22; subtract from Eq. 2: 7y = 35 → y = 5.'
  },
  {
    id: 'SY25', topic: 'SYSTEMS',
    prompt: 'When graphing [[y \\ge -x + 2]], how is the line drawn and shaded?',
    choices: [
      'Solid line, shaded above',
      'Dotted line, shaded above',
      'Solid line, shaded below',
      'Dotted line, shaded below'
    ],
    correctIndex: 0,
    explanation: '≥ has "or equal to" (solid line) and "greater than" (shade above).'
  },
  {
    id: 'SY26', topic: 'SYSTEMS',
    prompt: 'A perimeter of a rectangle is 54 cm. Its length [[L]] is 5 cm more than its width [[W]]. What are [[L]] and [[W]]?',
    choices: ['[[L = 16, W = 11]]', '[[L = 18, W = 13]]', '[[L = 15, W = 12]]', '[[L = 29, W = 24]]'],
    correctIndex: 0,
    explanation: 'L + W = 27 and L − W = 5 → 2L = 32 → L = 16, W = 11.'
  },
  {
    id: 'SY27', topic: 'SYSTEMS',
    prompt: 'For what value of [[k]] will the system [[y = 5x + 1]] and [[10x - 2y = k]] have infinitely many solutions?',
    choices: ['[[k = -2]]', '[[k = 2]]', '[[k = 1]]', '[[k = -1]]'],
    correctIndex: 0,
    explanation: 'Multiply y = 5x + 1 by −2: 10x − 2y = −2.'
  },
  {
    id: 'SY28', topic: 'SYSTEMS',
    prompt: 'Which system of equations has the solution [[(2, -4)]]?',
    choices: [
      '[[x + y = -2]] and [[3x - y = 10]]',
      '[[x - y = -2]] and [[3x + y = 10]]',
      '[[2x + y = 8]] and [[x - y = 6]]',
      '[[x + 2y = 6]] and [[2x - y = 0]]'
    ],
    correctIndex: 0,
    explanation: '2 + (−4) = −2 and 3(2) − (−4) = 6 + 4 = 10.'
  },
  {
    id: 'SY29', topic: 'SYSTEMS',
    prompt: 'Where do [[y = \\frac{2}{3}x - 1]] and [[y = -\\frac{1}{3}x + 5]] intersect?',
    choices: ['[[(6, 3)]]', '[[(3, 1)]]', '[[(9, 5)]]', '[[(6, 7)]]'],
    correctIndex: 0,
    explanation: '(2/3)x − 1 = (−1/3)x + 5 → x = 6, y = (2/3)(6) − 1 = 3.'
  },
  {
    id: 'SY30', topic: 'SYSTEMS',
    prompt: 'Two friends buy snacks: 2 tacos + 3 drinks = $13, and 4 tacos + 1 drink = $16. What is the price of 1 taco?',
    choices: ['$3.50', '$2.00', '$3.00', '$4.00'],
    correctIndex: 0,
    explanation: 'Multiply Eq. 2 by 3: 12t + 3d = 48; subtract Eq. 1: 10t = 35 → t = $3.50.'
  },

  // ===========================================================================
  // 10. EXPRESSIONS, EQUATIONS, AND INEQUALITIES (30 QUESTIONS)
  // ===========================================================================
  {
    id: 'EE01', topic: 'EXPR_EQ_INEQ',
    prompt: 'Simplify the expression: [[2(x + 3) + 4x - 5]]',
    choices: ['[[6x + 1]]', '[[6x - 2]]', '[[5x + 1]]', '[[6x + 11]]'],
    correctIndex: 0,
    explanation: 'Distribute 2: 2x + 6 + 4x − 5 = 6x + 1.'
  },
  {
    id: 'EE02', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[2(x + 3) + 4 = 10]]',
    choices: ['[[x = 0]]', '[[x = 5]]', '[[x = 3]]', '[[x = 1]]'],
    correctIndex: 0,
    explanation: '2x + 6 + 4 = 10 → 2x + 10 = 10 → 2x = 0 → x = 0.'
  },
  {
    id: 'EE03', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the solution to the equation [[12(x + 5) = 4x]]?',
    choices: ['[[x = -\\frac{15}{2}]]', '[[x = \\frac{15}{2}]]', '[[x = -15]]', '[[x = -\\frac{5}{8}]]'],
    correctIndex: 0,
    explanation: '12x + 60 = 4x → 8x = −60 → x = −60/8 = −15/2.'
  },
  {
    id: 'EE04', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve the equation: [[\\frac{3}{4}x = \\frac{1}{2}(9x + 150)]]',
    choices: ['[[x = -20]]', '[[x = 20]]', '[[x = -40]]', '[[x = -15]]'],
    correctIndex: 0,
    explanation: 'Multiply by 4: 3x = 2(9x + 150) = 18x + 300 → −15x = 300 → x = −20.'
  },
  {
    id: 'EE05', topic: 'EXPR_EQ_INEQ',
    prompt: 'An equation is shown: [[3x + 4 - \\frac{x}{2} = 19]]. What is [[x]]?',
    choices: ['[[x = 6]]', '[[x = 5]]', '[[x = 10]]', '[[x = \\frac{30}{7}]]'],
    correctIndex: 0,
    explanation: '(5/2)x = 15 → 5x = 30 → x = 6.'
  },
  {
    id: 'EE06', topic: 'EXPR_EQ_INEQ',
    prompt: 'Tia solves [[\\frac{1}{3}(10x - 15) = 5x + 20]]. Where does Tia’s error FIRST appear?',
    visual: {
      type: 'steps',
      steps: [
        { label: 'Line 1', expr: '[[\\frac{1}{3}(10x - 15) = 5x + 20]]' },
        { label: 'Line 2', expr: '[[10x - 15 = 3(5x + 20)]]' },
        { label: 'Line 3', expr: '[[10x - 15 = 15x + 20]]' },
        { label: 'Line 4', expr: '[[-35 = 5x]]' }
      ]
    },
    choices: [
      'Line 3: 3(5x + 20) should be 15x + 60, not 15x + 20',
      'Line 2: should divide by 3 instead of multiply',
      'Line 4: −15 − 20 is +5, not −35',
      'Line 1: the equation has no solution'
    ],
    correctIndex: 0,
    explanation: 'Tia forgot to distribute 3 to the +20 in Line 3.'
  },
  {
    id: 'EE07', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the CORRECT solution to Tia’s equation [[\\frac{1}{3}(10x - 15) = 5x + 20]]?',
    choices: ['[[x = -15]]', '[[x = -7]]', '[[x = 15]]', '[[x = -9]]'],
    correctIndex: 0,
    explanation: '10x − 15 = 15x + 60 → −75 = 5x → x = −15.'
  },
  {
    id: 'EE08', topic: 'EXPR_EQ_INEQ',
    prompt: 'A student solved [[4x + 5 = 31 - (x - 4)]]. In which step did the student make an error?',
    visual: {
      type: 'steps',
      steps: [
        { label: 'Given', expr: '[[4x + 5 = 31 - (x - 4)]]' },
        { label: 'Step 1', expr: '[[4x + 5 = 31 - x - 4]]' },
        { label: 'Step 2', expr: '[[4x + x = 31 - 4 - 5]]' },
        { label: 'Step 3', expr: '[[5x = 22]]' }
      ]
    },
    choices: ['Step 1', 'Step 2', 'Step 3', 'No error was made'],
    correctIndex: 0,
    explanation: 'In Step 1, −(x − 4) distributes to −x + 4, not −x − 4.'
  },
  {
    id: 'EE09', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the CORRECT solution to [[4x + 5 = 31 - (x - 4)]]?',
    choices: ['[[x = 6]]', '[[x = 4.4]]', '[[x = 5]]', '[[x = \\frac{30}{3}]]'],
    correctIndex: 0,
    explanation: '4x + 5 = 31 − x + 4 = 35 − x → 5x = 30 → x = 6.'
  },
  {
    id: 'EE10', topic: 'EXPR_EQ_INEQ',
    prompt: 'Eleanor solves [[\\frac{1}{2}(x + 18) = 4(2x - 6) - 9]]. In Step 1 she writes [[x + 18 = 8(2x - 6) - 9]]. What was her error?',
    choices: [
      'She multiplied 4(2x − 6) by 2, but forgot to multiply −9 by 2',
      'She forgot to multiply (x + 18) by 2',
      'She should have multiplied 4 by [[\\frac{1}{2}]] instead of 2',
      'She added 18 to the wrong side'
    ],
    correctIndex: 0,
    explanation: 'Multiplying the entire equation by 2 requires multiplying −9 by 2 to get −18.'
  },
  {
    id: 'EE11', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the CORRECT solution to [[\\frac{1}{2}(x + 18) = 4(2x - 6) - 9]]?',
    choices: ['[[x = \\frac{84}{15}]] ([[5.6]])', '[[x = 11]]', '[[x = 4]]', '[[x = \\frac{24}{5}]]'],
    correctIndex: 0,
    explanation: 'x + 18 = 16x − 48 − 18 → x + 18 = 16x − 66 → 84 = 15x → x = 84/15 = 28/5 (5.6).'
  },
  {
    id: 'EE12', topic: 'EXPR_EQ_INEQ',
    prompt: 'Fred solved [[8(3x - 7) = -6(x + 7) + 4]]. In which step did Fred make an error?',
    visual: {
      type: 'steps',
      steps: [
        { label: 'Given', expr: '[[8(3x - 7) = -6(x + 7) + 4]]' },
        { label: 'Step 1', expr: '[[24x - 56 = -6x - 42 + 4]]' },
        { label: 'Step 2', expr: '[[24x - 56 = -6x + 46]]' },
        { label: 'Step 3', expr: '[[30x = 102]]' },
        { label: 'Step 4', expr: '[[x = \\frac{17}{5}]]' }
      ]
    },
    choices: ['Step 2', 'Step 1', 'Step 3', 'Step 4'],
    correctIndex: 0,
    explanation: 'In Step 2, −42 + 4 = −38, NOT +46.'
  },
  {
    id: 'EE13', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the CORRECT solution to Fred’s equation [[8(3x - 7) = -6(x + 7) + 4]]?',
    choices: ['[[x = \\frac{3}{5}]]', '[[x = \\frac{17}{5}]]', '[[x = \\frac{5}{3}]]', '[[x = -\\frac{3}{5}]]'],
    correctIndex: 0,
    explanation: '24x − 56 = −6x − 38 → 30x = 18 → x = 18/30 = 3/5.'
  },
  {
    id: 'EE14', topic: 'EXPR_EQ_INEQ',
    prompt: 'Simplify completely: [[-3(2x - 5) + 4(x + 2)]]',
    choices: ['[[-2x + 23]]', '[[-2x - 7]]', '[[-2x + 7]]', '[[-10x + 23]]'],
    correctIndex: 0,
    explanation: '−6x + 15 + 4x + 8 = −2x + 23.'
  },
  {
    id: 'EE15', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve the inequality: [[-4x + 7 \\le 23]]',
    choices: ['[[x \\ge -4]]', '[[x \\le -4]]', '[[x \\ge 4]]', '[[x \\le -7.5]]'],
    correctIndex: 0,
    explanation: '−4x ≤ 16; dividing by −4 flips the inequality sign → x ≥ −4.'
  },
  {
    id: 'EE16', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[\\frac{2x + 5}{3} - 1 = 7]]',
    choices: ['[[x = \\frac{19}{2}]]', '[[x = 8]]', '[[x = 10]]', '[[x = \\frac{13}{2}]]'],
    correctIndex: 0,
    explanation: '(2x + 5)/3 = 8 → 2x + 5 = 24 → 2x = 19 → x = 19/2.'
  },
  {
    id: 'EE17', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[5(x - 2) = 5x + 3]]',
    choices: ['No solution', 'Infinitely many solutions', '[[x = 0]]', '[[x = 13]]'],
    correctIndex: 0,
    explanation: '5x − 10 = 5x + 3 simplifies to −10 = 3, which is false (no solution).'
  },
  {
    id: 'EE18', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[3(2x + 4) = 6x + 12]]',
    choices: ['Infinitely many solutions', 'No solution', '[[x = 0]]', '[[x = 2]]'],
    correctIndex: 0,
    explanation: '6x + 12 = 6x + 12 is always true for every real number.'
  },
  {
    id: 'EE19', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve the inequality: [[3(x - 4) > 5x + 2]]',
    choices: ['[[x < -7]]', '[[x > -7]]', '[[x < 7]]', '[[x > -5]]'],
    correctIndex: 0,
    explanation: '3x − 12 > 5x + 2 → −2x > 14 → divide by −2 and flip → x < −7.'
  },
  {
    id: 'EE20', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[w]] in the literal equation [[P = 2L + 2w]].',
    choices: ['[[w = \\frac{P - 2L}{2}]]', '[[w = P - 2L]]', '[[w = \\frac{P}{2} - 2L]]', '[[w = P - L]]'],
    correctIndex: 0,
    explanation: 'Subtract 2L: P − 2L = 2w, then divide by 2.'
  },
  {
    id: 'EE21', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[\\frac{x}{4} + \\frac{x}{6} = 10]]',
    choices: ['[[x = 24]]', '[[x = 12]]', '[[x = 48]]', '[[x = 10]]'],
    correctIndex: 0,
    explanation: 'Multiply by LCD = 12: 3x + 2x = 120 → 5x = 120 → x = 24.'
  },
  {
    id: 'EE22', topic: 'EXPR_EQ_INEQ',
    prompt: 'Simplify: [[7 - 2(3x - 4) + x]]',
    choices: ['[[-5x + 15]]', '[[-5x - 1]]', '[[-6x + 15]]', '[[5x + 15]]'],
    correctIndex: 0,
    explanation: '7 − 6x + 8 + x = −5x + 15.'
  },
  {
    id: 'EE23', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve the compound inequality: [[-7 < 2x + 3 \\le 11]]',
    choices: ['[[-5 < x \\le 4]]', '[[-2 < x \\le 7]]', '[[-5 \\le x < 4]]', '[[-10 < x \\le 8]]'],
    correctIndex: 0,
    explanation: 'Subtract 3: −10 < 2x ≤ 8; divide by 2 → −5 < x ≤ 4.'
  },
  {
    id: 'EE24', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[r]] in [[A = P + Prt]].',
    choices: ['[[r = \\frac{A - P}{Pt}]]', '[[r = \\frac{A}{Pt}]]', '[[r = A - P - Pt]]', '[[r = \\frac{A - Pt}{P}]]'],
    correctIndex: 0,
    explanation: 'Subtract P: A − P = Prt, then divide by Pt.'
  },
  {
    id: 'EE25', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the solution to [[\\frac{3}{5}(10x - 25) = 2x + 9]]?',
    choices: ['[[x = 6]]', '[[x = 3]]', '[[x = -6]]', '[[x = \\frac{15}{2}]]'],
    correctIndex: 0,
    explanation: '6x − 15 = 2x + 9 → 4x = 24 → x = 6.'
  },
  {
    id: 'EE26', topic: 'EXPR_EQ_INEQ',
    prompt: 'An elevator holds at most 1,600 lbs. A delivery worker (180 lbs) loads [[b]] boxes weighing 40 lbs each. Which inequality models this?',
    choices: ['[[40b + 180 \\le 1600]]', '[[40b + 180 \\ge 1600]]', '[[40b + 180 < 1600]]', '[[180b + 40 \\le 1600]]'],
    correctIndex: 0,
    explanation: '"At most 1,600" means ≤ 1600.'
  },
  {
    id: 'EE27', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[0.4(x + 15) = 0.2x + 10]]',
    choices: ['[[x = 20]]', '[[x = 10]]', '[[x = 8]]', '[[x = 25]]'],
    correctIndex: 0,
    explanation: '0.4x + 6 = 0.2x + 10 → 0.2x = 4 → x = 20.'
  },
  {
    id: 'EE28', topic: 'EXPR_EQ_INEQ',
    prompt: 'Which step uses the Distributive Property on [[5(x - 3) + 2 = 22]]?',
    choices: ['[[5x - 15 + 2 = 22]]', '[[5(x - 3) = 20]]', '[[x - 3 = 4]]', '[[5x - 13 = 22]]'],
    correctIndex: 0,
    explanation: 'Multiplying 5 across (x − 3) gives 5x − 15.'
  },
  {
    id: 'EE29', topic: 'EXPR_EQ_INEQ',
    prompt: 'What is the largest integer [[x]] that satisfies [[-3x + 5 > -10]]?',
    choices: ['[[4]]', '[[5]]', '[[-4]]', '[[6]]'],
    correctIndex: 0,
    explanation: '−3x > −15 → x < 5, so the largest integer strictly less than 5 is 4.'
  },
  {
    id: 'EE30', topic: 'EXPR_EQ_INEQ',
    prompt: 'Solve for [[x]]: [[\\frac{5}{2}x - 7 = \\frac{1}{2}x + 11]]',
    choices: ['[[x = 9]]', '[[x = 6]]', '[[x = 2]]', '[[x = 18]]'],
    correctIndex: 0,
    explanation: 'Subtract (1/2)x: 2x − 7 = 11 → 2x = 18 → x = 9.'
  }
];
