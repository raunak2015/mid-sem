const mathsQuestions = [
    {
        "id": 1,
        "question": "A function f(x) is continuous at x = a if:",
        "options": [
            "lim (x->a) f(x) exists",
            "lim (x->a) f(x) = f(a)",
            "f(a) is defined",
            "All of the above"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 2,
        "question": "What type of discontinuity occurs when the left-hand limit and right-hand limit both exist but are not equal?",
        "options": [
            "Jump discontinuity",
            "Infinite discontinuity",
            "Oscillating discontinuity",
            "Removable discontinuity"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 3,
        "question": "Which theorem states that if f(x) is continuous on [a, b] and f(a) ≠ f(b), then for any value k between f(a) and f(b), there exists c in (a, b) such that f(c) = k?",
        "options": [
            "Taylor's Theorem",
            "Intermediate Value Theorem",
            "Mean Value Theorem",
            "Rolle's Theorem"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 4,
        "question": "If lim (x->a) f(x) = f(a), then f is said to be ___ at x=a.",
        "options": [
            "Constant",
            "Integrable",
            "Continuous",
            "Differentiable"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 5,
        "question": "The Maclaurin series expansion for e^x is:",
        "options": [
            "1 + x + x^2/2! + x^3/3! + ...",
            "x + x^2/2! + x^3/3! + ...",
            "1 - x + x^2/2! - x^3/3! + ...",
            "1 + x - x^2/2! + x^3/3! - ..."
        ],
        "answer": 0,
        "topic": "Taylor and Maclaurin"
    },
    {
        "id": 6,
        "question": "A Taylor series is a Maclaurin series if the expansion is centered at:",
        "options": [
            "x = infinity",
            "x = 0",
            "x = 1",
            "x = e"
        ],
        "answer": 1,
        "topic": "Taylor and Maclaurin"
    },
    {
        "id": 7,
        "question": "The Maclaurin series for cos(x) contains only:",
        "options": [
            "Positive integers",
            "Odd powers of x",
            "Prime powers of x",
            "Even powers of x"
        ],
        "answer": 3,
        "topic": "Taylor and Maclaurin"
    },
    {
        "id": 8,
        "question": "If z = f(x, y), the partial derivative with respect to x is calculated by:",
        "options": [
            "Treating x as constant",
            "Treating y as constant",
            "Treating both as constants",
            "Treating both as variables"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 9,
        "question": "Clairaut’s Theorem states that f_xy = f_yx provided:",
        "options": [
            "The function is linear",
            "x and y are independent",
            "The function is periodic",
            "The partial derivatives are continuous"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 10,
        "question": "The gradient of a function f(x, y), denoted as ∇f, is a:",
        "options": [
            "Vector",
            "Scalar",
            "Matrix",
            "Tensor"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 11,
        "question": "What does the gradient vector ∇f(a, b) represent?",
        "options": [
            "The direction of maximum decrease",
            "The average value of the function",
            "The direction of zero change",
            "The direction of maximum increase"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 12,
        "question": "At a critical point (a, b) of f(x, y), which of the following must be true?",
        "options": [
            "f_xx(a, b) = 0",
            "f_y(a, b) = 1",
            "f_x(a, b) = 0 and f_y(a, b) = 0",
            "f_x(a, b) = 1"
        ],
        "answer": 2,
        "topic": "Maxima and Minima"
    },
    {
        "id": 13,
        "question": "The Second Derivative Test for f(x, y) involves the discriminant D = f_xx f_yy - (f_xy)^2. If D > 0 and f_xx < 0, then the point is a:",
        "options": [
            "Local maximum",
            "Inconclusive",
            "Local minimum",
            "Saddle point"
        ],
        "answer": 0,
        "topic": "Maxima and Minima"
    },
    {
        "id": 14,
        "question": "If the discriminant D < 0 at a critical point, the point is called a:",
        "options": [
            "Saddle point",
            "Inflection point",
            "Local minimum",
            "Local maximum"
        ],
        "answer": 0,
        "topic": "Maxima and Minima"
    },
    {
        "id": 15,
        "question": "For a single-variable function f(x), if f'(c) = 0 and f''(c) > 0, then x=c is a point of:",
        "options": [
            "Local maximum",
            "Local minimum",
            "Inflexion",
            "Discontinuity"
        ],
        "answer": 1,
        "topic": "Maxima and Minima"
    },
    {
        "id": 16,
        "question": "Mean Squared Error (MSE) is commonly used as a loss function for:",
        "options": [
            "Regression",
            "Dimensionality reduction",
            "Clustering",
            "Classification"
        ],
        "answer": 0,
        "topic": "Applications"
    },
    {
        "id": 17,
        "question": "Which loss function is typically used for binary classification tasks?",
        "options": [
            "Mean Squared Error",
            "Cross-Entropy Loss",
            "Hinge Loss",
            "Absolute Error"
        ],
        "answer": 1,
        "topic": "Applications"
    },
    {
        "id": 18,
        "question": "Optimization in machine learning is often achieved using which algorithm?",
        "options": [
            "Newton-Raphson",
            "Bisection Method",
            "Gradient Descent",
            "Gauss Elimination"
        ],
        "answer": 2,
        "topic": "Applications"
    },
    {
        "id": 19,
        "question": "In the context of Loss Functions, 'minimizing the loss' corresponds to:",
        "options": [
            "Ignoring data",
            "Setting parameters to zero",
            "Increasing error",
            "Improving model accuracy"
        ],
        "answer": 3,
        "topic": "Applications"
    },
    {
        "id": 20,
        "question": "The Chain Rule is used for differentiating:",
        "options": [
            "Sum of functions",
            "Product of functions",
            "Quotient of functions",
            "Composite functions"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 21,
        "question": "The derivative of a constant is always:",
        "options": [
            "Infinity",
            "0",
            "1",
            "The constant itself"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 22,
        "question": "Which of the following is a necessary condition for a function to be differentiable at a point?",
        "options": [
            "It must be even",
            "It must be linear",
            "It must be continuous",
            "It must be periodic"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 23,
        "question": "The second derivative test is inconclusive if the discriminant D equals:",
        "options": [
            "0",
            "1",
            "Infinity",
            "-1"
        ],
        "answer": 0,
        "topic": "Maxima and Minima"
    },
    {
        "id": 24,
        "question": "A square matrix A is called symmetric if:",
        "options": [
            "A^2 = I",
            "A = A^T",
            "A = A^(-1)",
            "A = -A^T"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 25,
        "question": "A matrix whose inverse equals its transpose is called:",
        "options": [
            "Diagonal",
            "Orthogonal",
            "Skew-symmetric",
            "Symmetric"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 26,
        "question": "What is the determinant of an orthogonal matrix?",
        "options": [
            "Always 1",
            "Infinity",
            "0",
            "1 or -1"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 27,
        "question": "The rank of a null matrix is:",
        "options": [
            "Infinite",
            "0",
            "1",
            "Undefined"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 28,
        "question": "The eigenvalues of a triangular matrix are its:",
        "options": [
            "Off-diagonal elements",
            "Determinant",
            "Diagonal elements",
            "Trace"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 29,
        "question": "According to Cayley-Hamilton theorem, every square matrix satisfies its own:",
        "options": [
            "Differential equation",
            "Linear equation",
            "Integral equation",
            "Characteristic equation"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 30,
        "question": "The order of a differential equation is the order of the:",
        "options": [
            "Highest degree term",
            "Highest derivative",
            "Lowest derivative",
            "Constant term"
        ],
        "answer": 1,
        "topic": "Differential Equations"
    },
    {
        "id": 31,
        "question": "The degree of a differential equation is the degree of the:",
        "options": [
            "Dependent variable",
            "Lowest power",
            "Highest derivative",
            "Independent variable"
        ],
        "answer": 2,
        "topic": "Differential Equations"
    },
    {
        "id": 32,
        "question": "An integrating factor is used to solve which type of differential equation?",
        "options": [
            "Second order homogeneous",
            "Linear first order",
            "Partial differential equations",
            "Non-linear first order"
        ],
        "answer": 1,
        "topic": "Differential Equations"
    },
    {
        "id": 33,
        "question": "Euler's formula states that e^(ix) equals:",
        "options": [
            "cos(x) + i sin(x)",
            "sin(x) - i cos(x)",
            "sin(x) + i cos(x)",
            "cos(x) - i sin(x)"
        ],
        "answer": 0,
        "topic": "Complex Numbers"
    },
    {
        "id": 34,
        "question": "The modulus of a complex number z = a + ib is given by:",
        "options": [
            "a^2 + b^2",
            "sqrt(a^2 + b^2)",
            "a + b",
            "sqrt(a^2 - b^2)"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 35,
        "question": "A function f(z) = u + iv is analytic if it satisfies:",
        "options": [
            "Cauchy-Riemann equations",
            "Euler's equation",
            "Bernoulli's equation",
            "Laplace equation"
        ],
        "answer": 0,
        "topic": "Complex Numbers"
    },
    {
        "id": 36,
        "question": "The divergence of the curl of any vector field is:",
        "options": [
            "0",
            "A vector",
            "1",
            "A non-zero scalar"
        ],
        "answer": 0,
        "topic": "Vector Calculus"
    },
    {
        "id": 37,
        "question": "The curl of the gradient of any scalar function is:",
        "options": [
            "1",
            "A scalar",
            "A vector",
            "0"
        ],
        "answer": 3,
        "topic": "Vector Calculus"
    },
    {
        "id": 38,
        "question": "Stokes' theorem relates a surface integral to a:",
        "options": [
            "Volume integral",
            "Double integral",
            "Line integral",
            "Derivative"
        ],
        "answer": 2,
        "topic": "Vector Calculus"
    },
    {
        "id": 39,
        "question": "Divergence theorem (Gauss's theorem) relates a volume integral to a:",
        "options": [
            "Surface integral",
            "Derivative",
            "Line integral",
            "Gradient"
        ],
        "answer": 0,
        "topic": "Vector Calculus"
    },
    {
        "id": 40,
        "question": "What is the limit of (sin(15x)) / x as x approaches 0?",
        "options": [
            "15",
            "1/15",
            "0",
            "Infinity"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 41,
        "question": "What is the limit of (sin(7x)) / x as x approaches 0?",
        "options": [
            "0",
            "7",
            "Infinity",
            "1/7"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 42,
        "question": "What is the limit of (sin(2x)) / x as x approaches 0?",
        "options": [
            "0",
            "2",
            "1/2",
            "Infinity"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 43,
        "question": "What is the limit of (sin(9x)) / x as x approaches 0?",
        "options": [
            "Infinity",
            "1/9",
            "0",
            "9"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 44,
        "question": "What is the limit of (sin(16x)) / x as x approaches 0?",
        "options": [
            "0",
            "1/16",
            "16",
            "Infinity"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 45,
        "question": "What is the limit of (sin(11x)) / x as x approaches 0?",
        "options": [
            "1/11",
            "0",
            "Infinity",
            "11"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 46,
        "question": "What is the limit of (sin(11x)) / x as x approaches 0?",
        "options": [
            "Infinity",
            "0",
            "1/11",
            "11"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 47,
        "question": "What is the limit of (sin(8x)) / x as x approaches 0?",
        "options": [
            "0",
            "Infinity",
            "8",
            "1/8"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 48,
        "question": "What is the limit of (sin(19x)) / x as x approaches 0?",
        "options": [
            "Infinity",
            "1/19",
            "19",
            "0"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 49,
        "question": "What is the limit of (sin(3x)) / x as x approaches 0?",
        "options": [
            "1/3",
            "3",
            "Infinity",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 50,
        "question": "What is the limit of (sin(12x)) / x as x approaches 0?",
        "options": [
            "0",
            "Infinity",
            "1/12",
            "12"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 51,
        "question": "What is the limit of (sin(6x)) / x as x approaches 0?",
        "options": [
            "0",
            "Infinity",
            "6",
            "1/6"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 52,
        "question": "What is the limit of (sin(11x)) / x as x approaches 0?",
        "options": [
            "Infinity",
            "11",
            "1/11",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 53,
        "question": "What is the limit of (sin(13x)) / x as x approaches 0?",
        "options": [
            "0",
            "1/13",
            "Infinity",
            "13"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 54,
        "question": "What is the limit of (sin(16x)) / x as x approaches 0?",
        "options": [
            "1/16",
            "16",
            "Infinity",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 55,
        "question": "What is the limit of (sin(8x)) / x as x approaches 0?",
        "options": [
            "1/8",
            "8",
            "Infinity",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 56,
        "question": "What is the limit of (sin(15x)) / x as x approaches 0?",
        "options": [
            "0",
            "Infinity",
            "1/15",
            "15"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 57,
        "question": "What is the limit of (sin(5x)) / x as x approaches 0?",
        "options": [
            "1/5",
            "5",
            "0",
            "Infinity"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 58,
        "question": "What is the limit of (sin(6x)) / x as x approaches 0?",
        "options": [
            "0",
            "1/6",
            "Infinity",
            "6"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 59,
        "question": "What is the limit of (sin(11x)) / x as x approaches 0?",
        "options": [
            "1/11",
            "0",
            "11",
            "Infinity"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 60,
        "question": "What is the limit of (e^(13x) - 1) / x as x approaches 0?",
        "options": [
            "0",
            "e^13",
            "13",
            "1"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 61,
        "question": "What is the limit of (e^(12x) - 1) / x as x approaches 0?",
        "options": [
            "12",
            "e^12",
            "0",
            "1"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 62,
        "question": "What is the limit of (e^(26x) - 1) / x as x approaches 0?",
        "options": [
            "26",
            "e^26",
            "0",
            "1"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 63,
        "question": "What is the limit of (e^(19x) - 1) / x as x approaches 0?",
        "options": [
            "19",
            "1",
            "e^19",
            "0"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 64,
        "question": "What is the limit of (e^(16x) - 1) / x as x approaches 0?",
        "options": [
            "16",
            "1",
            "0",
            "e^16"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 65,
        "question": "What is the limit of (e^(25x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "e^25",
            "0",
            "25"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 66,
        "question": "What is the limit of (e^(7x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "e^7",
            "7",
            "0"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 67,
        "question": "What is the limit of (e^(16x) - 1) / x as x approaches 0?",
        "options": [
            "16",
            "0",
            "1",
            "e^16"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 68,
        "question": "What is the limit of (e^(30x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "30",
            "e^30",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 69,
        "question": "What is the limit of (e^(10x) - 1) / x as x approaches 0?",
        "options": [
            "10",
            "1",
            "e^10",
            "0"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 70,
        "question": "What is the limit of (e^(4x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "0",
            "e^4",
            "4"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 71,
        "question": "What is the limit of (e^(15x) - 1) / x as x approaches 0?",
        "options": [
            "15",
            "1",
            "e^15",
            "0"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 72,
        "question": "What is the limit of (e^(3x) - 1) / x as x approaches 0?",
        "options": [
            "0",
            "1",
            "3",
            "e^3"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 73,
        "question": "What is the limit of (e^(25x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "25",
            "0",
            "e^25"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 74,
        "question": "What is the limit of (e^(14x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "0",
            "14",
            "e^14"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 75,
        "question": "What is the limit of (e^(29x) - 1) / x as x approaches 0?",
        "options": [
            "0",
            "1",
            "e^29",
            "29"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 76,
        "question": "What is the limit of (e^(5x) - 1) / x as x approaches 0?",
        "options": [
            "1",
            "5",
            "0",
            "e^5"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 77,
        "question": "What is the limit of (e^(21x) - 1) / x as x approaches 0?",
        "options": [
            "21",
            "1",
            "0",
            "e^21"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 78,
        "question": "What is the limit of (e^(27x) - 1) / x as x approaches 0?",
        "options": [
            "e^27",
            "27",
            "1",
            "0"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 79,
        "question": "What is the limit of (e^(19x) - 1) / x as x approaches 0?",
        "options": [
            "0",
            "e^19",
            "1",
            "19"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 80,
        "question": "What is the value of limit (1 + 5/x)^x as x approaches infinity?",
        "options": [
            "e^(0.2)",
            "e^5",
            "1",
            "5"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 81,
        "question": "What is the value of limit (1 + 20/x)^x as x approaches infinity?",
        "options": [
            "20",
            "e^(0.05)",
            "1",
            "e^20"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 82,
        "question": "What is the value of limit (1 + 15/x)^x as x approaches infinity?",
        "options": [
            "e^15",
            "e^(0.06666666666666667)",
            "1",
            "15"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 83,
        "question": "What is the value of limit (1 + 21/x)^x as x approaches infinity?",
        "options": [
            "e^21",
            "e^(0.047619047619047616)",
            "21",
            "1"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 84,
        "question": "What is the value of limit (1 + 23/x)^x as x approaches infinity?",
        "options": [
            "1",
            "23",
            "e^(0.043478260869565216)",
            "e^23"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 85,
        "question": "What is the value of limit (1 + 4/x)^x as x approaches infinity?",
        "options": [
            "e^4",
            "e^(0.25)",
            "1",
            "4"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 86,
        "question": "What is the value of limit (1 + 13/x)^x as x approaches infinity?",
        "options": [
            "e^(0.07692307692307693)",
            "1",
            "13",
            "e^13"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 87,
        "question": "What is the value of limit (1 + 22/x)^x as x approaches infinity?",
        "options": [
            "22",
            "1",
            "e^(0.045454545454545456)",
            "e^22"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 88,
        "question": "What is the value of limit (1 + 14/x)^x as x approaches infinity?",
        "options": [
            "1",
            "e^(0.07142857142857142)",
            "e^14",
            "14"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 89,
        "question": "What is the value of limit (1 + 20/x)^x as x approaches infinity?",
        "options": [
            "e^20",
            "e^(0.05)",
            "1",
            "20"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 90,
        "question": "What is the value of limit (1 + 8/x)^x as x approaches infinity?",
        "options": [
            "e^(0.125)",
            "1",
            "e^8",
            "8"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 91,
        "question": "What is the value of limit (1 + 2/x)^x as x approaches infinity?",
        "options": [
            "e^2",
            "1",
            "e^(0.5)",
            "2"
        ],
        "answer": 0,
        "topic": "Limits and Continuity"
    },
    {
        "id": 92,
        "question": "What is the value of limit (1 + 6/x)^x as x approaches infinity?",
        "options": [
            "1",
            "e^6",
            "e^(0.16666666666666666)",
            "6"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 93,
        "question": "What is the value of limit (1 + 8/x)^x as x approaches infinity?",
        "options": [
            "1",
            "e^(0.125)",
            "e^8",
            "8"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 94,
        "question": "What is the value of limit (1 + 17/x)^x as x approaches infinity?",
        "options": [
            "e^(0.058823529411764705)",
            "e^17",
            "1",
            "17"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 95,
        "question": "What is the value of limit (1 + 10/x)^x as x approaches infinity?",
        "options": [
            "1",
            "10",
            "e^(0.1)",
            "e^10"
        ],
        "answer": 3,
        "topic": "Limits and Continuity"
    },
    {
        "id": 96,
        "question": "What is the value of limit (1 + 19/x)^x as x approaches infinity?",
        "options": [
            "e^(0.05263157894736842)",
            "1",
            "e^19",
            "19"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 97,
        "question": "What is the value of limit (1 + 15/x)^x as x approaches infinity?",
        "options": [
            "1",
            "15",
            "e^15",
            "e^(0.06666666666666667)"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 98,
        "question": "What is the value of limit (1 + 25/x)^x as x approaches infinity?",
        "options": [
            "e^(0.04)",
            "e^25",
            "25",
            "1"
        ],
        "answer": 1,
        "topic": "Limits and Continuity"
    },
    {
        "id": 99,
        "question": "What is the value of limit (1 + 2/x)^x as x approaches infinity?",
        "options": [
            "e^(0.5)",
            "1",
            "e^2",
            "2"
        ],
        "answer": 2,
        "topic": "Limits and Continuity"
    },
    {
        "id": 100,
        "question": "Find the derivative of f(x) = x^25 with respect to x.",
        "options": [
            "25x^24",
            "25x^25",
            "24x^25",
            "x^24"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 101,
        "question": "Find the derivative of f(x) = x^16 with respect to x.",
        "options": [
            "16x^15",
            "16x^16",
            "x^15",
            "15x^16"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 102,
        "question": "Find the derivative of f(x) = x^7 with respect to x.",
        "options": [
            "7x^7",
            "x^6",
            "6x^7",
            "7x^6"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 103,
        "question": "Find the derivative of f(x) = x^16 with respect to x.",
        "options": [
            "16x^15",
            "15x^16",
            "16x^16",
            "x^15"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 104,
        "question": "Find the derivative of f(x) = x^37 with respect to x.",
        "options": [
            "x^36",
            "36x^37",
            "37x^36",
            "37x^37"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 105,
        "question": "Find the derivative of f(x) = x^11 with respect to x.",
        "options": [
            "11x^11",
            "x^10",
            "11x^10",
            "10x^11"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 106,
        "question": "Find the derivative of f(x) = x^37 with respect to x.",
        "options": [
            "37x^37",
            "x^36",
            "36x^37",
            "37x^36"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 107,
        "question": "Find the derivative of f(x) = x^27 with respect to x.",
        "options": [
            "26x^27",
            "27x^26",
            "27x^27",
            "x^26"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 108,
        "question": "Find the derivative of f(x) = x^37 with respect to x.",
        "options": [
            "37x^37",
            "36x^37",
            "37x^36",
            "x^36"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 109,
        "question": "Find the derivative of f(x) = x^16 with respect to x.",
        "options": [
            "x^15",
            "16x^16",
            "16x^15",
            "15x^16"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 110,
        "question": "Find the derivative of f(x) = x^3 with respect to x.",
        "options": [
            "x^2",
            "3x^2",
            "2x^3",
            "3x^3"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 111,
        "question": "Find the derivative of f(x) = x^34 with respect to x.",
        "options": [
            "34x^33",
            "x^33",
            "33x^34",
            "34x^34"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 112,
        "question": "Find the derivative of f(x) = x^34 with respect to x.",
        "options": [
            "34x^33",
            "x^33",
            "34x^34",
            "33x^34"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 113,
        "question": "Find the derivative of f(x) = x^15 with respect to x.",
        "options": [
            "x^14",
            "15x^14",
            "14x^15",
            "15x^15"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 114,
        "question": "Find the derivative of f(x) = x^25 with respect to x.",
        "options": [
            "25x^24",
            "24x^25",
            "25x^25",
            "x^24"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 115,
        "question": "Find the derivative of f(x) = x^17 with respect to x.",
        "options": [
            "17x^17",
            "x^16",
            "17x^16",
            "16x^17"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 116,
        "question": "Find the derivative of f(x) = x^8 with respect to x.",
        "options": [
            "7x^8",
            "8x^7",
            "x^7",
            "8x^8"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 117,
        "question": "Find the derivative of f(x) = x^18 with respect to x.",
        "options": [
            "17x^18",
            "x^17",
            "18x^17",
            "18x^18"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 118,
        "question": "Find the derivative of f(x) = x^24 with respect to x.",
        "options": [
            "23x^24",
            "24x^23",
            "24x^24",
            "x^23"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 119,
        "question": "Find the derivative of f(x) = x^19 with respect to x.",
        "options": [
            "19x^18",
            "18x^19",
            "x^18",
            "19x^19"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 120,
        "question": "What is the first derivative of f(x) = sin(8x)?",
        "options": [
            "-8 sin(8x)",
            "cos(8x)",
            "8 cos(8x)",
            "-8 cos(8x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 121,
        "question": "What is the first derivative of f(x) = sin(2x)?",
        "options": [
            "-2 sin(2x)",
            "-2 cos(2x)",
            "cos(2x)",
            "2 cos(2x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 122,
        "question": "What is the first derivative of f(x) = sin(10x)?",
        "options": [
            "-10 cos(10x)",
            "-10 sin(10x)",
            "10 cos(10x)",
            "cos(10x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 123,
        "question": "What is the first derivative of f(x) = sin(8x)?",
        "options": [
            "cos(8x)",
            "8 cos(8x)",
            "-8 cos(8x)",
            "-8 sin(8x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 124,
        "question": "What is the first derivative of f(x) = sin(7x)?",
        "options": [
            "7 cos(7x)",
            "-7 cos(7x)",
            "-7 sin(7x)",
            "cos(7x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 125,
        "question": "What is the first derivative of f(x) = sin(5x)?",
        "options": [
            "cos(5x)",
            "5 cos(5x)",
            "-5 cos(5x)",
            "-5 sin(5x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 126,
        "question": "What is the first derivative of f(x) = sin(11x)?",
        "options": [
            "-11 cos(11x)",
            "cos(11x)",
            "-11 sin(11x)",
            "11 cos(11x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 127,
        "question": "What is the first derivative of f(x) = sin(11x)?",
        "options": [
            "-11 cos(11x)",
            "11 cos(11x)",
            "cos(11x)",
            "-11 sin(11x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 128,
        "question": "What is the first derivative of f(x) = sin(5x)?",
        "options": [
            "cos(5x)",
            "5 cos(5x)",
            "-5 sin(5x)",
            "-5 cos(5x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 129,
        "question": "What is the first derivative of f(x) = sin(9x)?",
        "options": [
            "cos(9x)",
            "-9 sin(9x)",
            "-9 cos(9x)",
            "9 cos(9x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 130,
        "question": "What is the first derivative of f(x) = sin(15x)?",
        "options": [
            "-15 sin(15x)",
            "-15 cos(15x)",
            "15 cos(15x)",
            "cos(15x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 131,
        "question": "What is the first derivative of f(x) = sin(10x)?",
        "options": [
            "10 cos(10x)",
            "-10 cos(10x)",
            "cos(10x)",
            "-10 sin(10x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 132,
        "question": "What is the first derivative of f(x) = sin(4x)?",
        "options": [
            "-4 sin(4x)",
            "-4 cos(4x)",
            "cos(4x)",
            "4 cos(4x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 133,
        "question": "What is the first derivative of f(x) = sin(13x)?",
        "options": [
            "-13 sin(13x)",
            "-13 cos(13x)",
            "13 cos(13x)",
            "cos(13x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 134,
        "question": "What is the first derivative of f(x) = sin(2x)?",
        "options": [
            "cos(2x)",
            "-2 cos(2x)",
            "-2 sin(2x)",
            "2 cos(2x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 135,
        "question": "What is the first derivative of f(x) = e^(11x)?",
        "options": [
            "x e^(11x - 1)",
            "(1/11)e^(11x)",
            "11e^(11x)",
            "e^(11x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 136,
        "question": "What is the first derivative of f(x) = e^(9x)?",
        "options": [
            "e^(9x)",
            "9e^(9x)",
            "x e^(9x - 1)",
            "(1/9)e^(9x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 137,
        "question": "What is the first derivative of f(x) = e^(3x)?",
        "options": [
            "3e^(3x)",
            "(1/3)e^(3x)",
            "e^(3x)",
            "x e^(3x - 1)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 138,
        "question": "What is the first derivative of f(x) = e^(11x)?",
        "options": [
            "11e^(11x)",
            "x e^(11x - 1)",
            "e^(11x)",
            "(1/11)e^(11x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 139,
        "question": "What is the first derivative of f(x) = e^(3x)?",
        "options": [
            "x e^(3x - 1)",
            "e^(3x)",
            "3e^(3x)",
            "(1/3)e^(3x)"
        ],
        "answer": 2,
        "topic": "Differentiation"
    },
    {
        "id": 140,
        "question": "What is the first derivative of f(x) = e^(6x)?",
        "options": [
            "e^(6x)",
            "x e^(6x - 1)",
            "(1/6)e^(6x)",
            "6e^(6x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 141,
        "question": "What is the first derivative of f(x) = e^(12x)?",
        "options": [
            "12e^(12x)",
            "(1/12)e^(12x)",
            "x e^(12x - 1)",
            "e^(12x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 142,
        "question": "What is the first derivative of f(x) = e^(2x)?",
        "options": [
            "x e^(2x - 1)",
            "e^(2x)",
            "(1/2)e^(2x)",
            "2e^(2x)"
        ],
        "answer": 3,
        "topic": "Differentiation"
    },
    {
        "id": 143,
        "question": "What is the first derivative of f(x) = e^(8x)?",
        "options": [
            "8e^(8x)",
            "(1/8)e^(8x)",
            "x e^(8x - 1)",
            "e^(8x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 144,
        "question": "What is the first derivative of f(x) = e^(12x)?",
        "options": [
            "x e^(12x - 1)",
            "12e^(12x)",
            "e^(12x)",
            "(1/12)e^(12x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 145,
        "question": "What is the first derivative of f(x) = e^(9x)?",
        "options": [
            "e^(9x)",
            "9e^(9x)",
            "x e^(9x - 1)",
            "(1/9)e^(9x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 146,
        "question": "What is the first derivative of f(x) = e^(13x)?",
        "options": [
            "x e^(13x - 1)",
            "13e^(13x)",
            "(1/13)e^(13x)",
            "e^(13x)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 147,
        "question": "What is the first derivative of f(x) = e^(12x)?",
        "options": [
            "12e^(12x)",
            "e^(12x)",
            "x e^(12x - 1)",
            "(1/12)e^(12x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 148,
        "question": "What is the first derivative of f(x) = e^(3x)?",
        "options": [
            "e^(3x)",
            "3e^(3x)",
            "(1/3)e^(3x)",
            "x e^(3x - 1)"
        ],
        "answer": 1,
        "topic": "Differentiation"
    },
    {
        "id": 149,
        "question": "What is the first derivative of f(x) = e^(8x)?",
        "options": [
            "8e^(8x)",
            "e^(8x)",
            "x e^(8x - 1)",
            "(1/8)e^(8x)"
        ],
        "answer": 0,
        "topic": "Differentiation"
    },
    {
        "id": 150,
        "question": "Find the partial derivative of f(x, y) = x^7 y^9 with respect to x.",
        "options": [
            "9 x^7 y^8",
            "7 x^6 y^9",
            "63 x^6 y^8",
            "7 x^6"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 151,
        "question": "Find the partial derivative of f(x, y) = x^3 y^5 with respect to x.",
        "options": [
            "5 x^3 y^4",
            "15 x^2 y^4",
            "3 x^2",
            "3 x^2 y^5"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 152,
        "question": "Find the partial derivative of f(x, y) = x^3 y^5 with respect to x.",
        "options": [
            "3 x^2 y^5",
            "3 x^2",
            "5 x^3 y^4",
            "15 x^2 y^4"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 153,
        "question": "Find the partial derivative of f(x, y) = x^4 y^7 with respect to x.",
        "options": [
            "28 x^3 y^6",
            "4 x^3",
            "4 x^3 y^7",
            "7 x^4 y^6"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 154,
        "question": "Find the partial derivative of f(x, y) = x^7 y^3 with respect to x.",
        "options": [
            "7 x^6",
            "21 x^6 y^2",
            "3 x^7 y^2",
            "7 x^6 y^3"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 155,
        "question": "Find the partial derivative of f(x, y) = x^4 y^8 with respect to x.",
        "options": [
            "4 x^3",
            "4 x^3 y^8",
            "8 x^4 y^7",
            "32 x^3 y^7"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 156,
        "question": "Find the partial derivative of f(x, y) = x^2 y^9 with respect to x.",
        "options": [
            "2 x^1",
            "18 x^1 y^8",
            "9 x^2 y^8",
            "2 x^1 y^9"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 157,
        "question": "Find the partial derivative of f(x, y) = x^9 y^7 with respect to x.",
        "options": [
            "9 x^8",
            "9 x^8 y^7",
            "7 x^9 y^6",
            "63 x^8 y^6"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 158,
        "question": "Find the partial derivative of f(x, y) = x^6 y^5 with respect to x.",
        "options": [
            "30 x^5 y^4",
            "6 x^5 y^5",
            "6 x^5",
            "5 x^6 y^4"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 159,
        "question": "Find the partial derivative of f(x, y) = x^5 y^5 with respect to x.",
        "options": [
            "5 x^4 y^5",
            "5 x^5 y^4",
            "5 x^4",
            "25 x^4 y^4"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 160,
        "question": "Find the partial derivative of f(x, y) = x^9 y^6 with respect to x.",
        "options": [
            "9 x^8",
            "9 x^8 y^6",
            "6 x^9 y^5",
            "54 x^8 y^5"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 161,
        "question": "Find the partial derivative of f(x, y) = x^3 y^3 with respect to x.",
        "options": [
            "3 x^2",
            "3 x^2 y^3",
            "9 x^2 y^2",
            "3 x^3 y^2"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 162,
        "question": "Find the partial derivative of f(x, y) = x^8 y^5 with respect to x.",
        "options": [
            "8 x^7",
            "40 x^7 y^4",
            "5 x^8 y^4",
            "8 x^7 y^5"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 163,
        "question": "Find the partial derivative of f(x, y) = x^8 y^6 with respect to x.",
        "options": [
            "6 x^8 y^5",
            "48 x^7 y^5",
            "8 x^7 y^6",
            "8 x^7"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 164,
        "question": "Find the partial derivative of f(x, y) = x^2 y^5 with respect to x.",
        "options": [
            "5 x^2 y^4",
            "2 x^1 y^5",
            "10 x^1 y^4",
            "2 x^1"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 165,
        "question": "Find the partial derivative of f(x, y) = x^7 y^5 with respect to x.",
        "options": [
            "5 x^7 y^4",
            "7 x^6 y^5",
            "35 x^6 y^4",
            "7 x^6"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 166,
        "question": "Find the partial derivative of f(x, y) = x^4 y^4 with respect to x.",
        "options": [
            "4 x^3",
            "4 x^4 y^3",
            "4 x^3 y^4",
            "16 x^3 y^3"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 167,
        "question": "Find the partial derivative of f(x, y) = x^5 y^2 with respect to x.",
        "options": [
            "2 x^5 y^1",
            "5 x^4 y^2",
            "10 x^4 y^1",
            "5 x^4"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 168,
        "question": "Find the partial derivative of f(x, y) = x^3 y^4 with respect to x.",
        "options": [
            "3 x^2",
            "12 x^2 y^3",
            "3 x^2 y^4",
            "4 x^3 y^3"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 169,
        "question": "Find the partial derivative of f(x, y) = x^3 y^3 with respect to x.",
        "options": [
            "9 x^2 y^2",
            "3 x^2 y^3",
            "3 x^2",
            "3 x^3 y^2"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 170,
        "question": "Find the partial derivative of f(x, y) = x^2 y^6 with respect to x.",
        "options": [
            "2 x^1",
            "2 x^1 y^6",
            "6 x^2 y^5",
            "12 x^1 y^5"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 171,
        "question": "Find the partial derivative of f(x, y) = x^4 y^8 with respect to x.",
        "options": [
            "4 x^3",
            "32 x^3 y^7",
            "4 x^3 y^8",
            "8 x^4 y^7"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 172,
        "question": "Find the partial derivative of f(x, y) = x^6 y^8 with respect to x.",
        "options": [
            "48 x^5 y^7",
            "6 x^5 y^8",
            "8 x^6 y^7",
            "6 x^5"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 173,
        "question": "Find the partial derivative of f(x, y) = x^7 y^5 with respect to x.",
        "options": [
            "7 x^6 y^5",
            "5 x^7 y^4",
            "35 x^6 y^4",
            "7 x^6"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 174,
        "question": "Find the partial derivative of f(x, y) = x^2 y^4 with respect to x.",
        "options": [
            "2 x^1 y^4",
            "8 x^1 y^3",
            "2 x^1",
            "4 x^2 y^3"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 175,
        "question": "Find the partial derivative of f(x, y) = 9x^2 + 2y^3 with respect to y.",
        "options": [
            "2y^2",
            "6y^2",
            "6y^2 + 18x",
            "18x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 176,
        "question": "Find the partial derivative of f(x, y) = 9x^2 + 6y^3 with respect to y.",
        "options": [
            "6y^2",
            "18y^2",
            "18x",
            "18y^2 + 18x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 177,
        "question": "Find the partial derivative of f(x, y) = 4x^2 + 2y^3 with respect to y.",
        "options": [
            "2y^2",
            "6y^2",
            "8x",
            "6y^2 + 8x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 178,
        "question": "Find the partial derivative of f(x, y) = 7x^2 + 5y^3 with respect to y.",
        "options": [
            "14x",
            "5y^2",
            "15y^2 + 14x",
            "15y^2"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 179,
        "question": "Find the partial derivative of f(x, y) = 9x^2 + 3y^3 with respect to y.",
        "options": [
            "9y^2",
            "9y^2 + 18x",
            "3y^2",
            "18x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 180,
        "question": "Find the partial derivative of f(x, y) = 5x^2 + 3y^3 with respect to y.",
        "options": [
            "9y^2 + 10x",
            "9y^2",
            "3y^2",
            "10x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 181,
        "question": "Find the partial derivative of f(x, y) = 6x^2 + 7y^3 with respect to y.",
        "options": [
            "21y^2",
            "21y^2 + 12x",
            "7y^2",
            "12x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 182,
        "question": "Find the partial derivative of f(x, y) = 6x^2 + 6y^3 with respect to y.",
        "options": [
            "12x",
            "18y^2 + 12x",
            "18y^2",
            "6y^2"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 183,
        "question": "Find the partial derivative of f(x, y) = 3x^2 + 7y^3 with respect to y.",
        "options": [
            "6x",
            "21y^2",
            "21y^2 + 6x",
            "7y^2"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 184,
        "question": "Find the partial derivative of f(x, y) = 9x^2 + 9y^3 with respect to y.",
        "options": [
            "18x",
            "27y^2 + 18x",
            "27y^2",
            "9y^2"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 185,
        "question": "Find the partial derivative of f(x, y) = 3x^2 + 3y^3 with respect to y.",
        "options": [
            "3y^2",
            "9y^2",
            "9y^2 + 6x",
            "6x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 186,
        "question": "Find the partial derivative of f(x, y) = 5x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2 + 10x",
            "10x",
            "12y^2",
            "4y^2"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 187,
        "question": "Find the partial derivative of f(x, y) = 2x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2",
            "4y^2",
            "4x",
            "12y^2 + 4x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 188,
        "question": "Find the partial derivative of f(x, y) = 6x^2 + 6y^3 with respect to y.",
        "options": [
            "12x",
            "18y^2",
            "6y^2",
            "18y^2 + 12x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 189,
        "question": "Find the partial derivative of f(x, y) = 7x^2 + 4y^3 with respect to y.",
        "options": [
            "4y^2",
            "12y^2 + 14x",
            "14x",
            "12y^2"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 190,
        "question": "Find the partial derivative of f(x, y) = 9x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2",
            "4y^2",
            "18x",
            "12y^2 + 18x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 191,
        "question": "Find the partial derivative of f(x, y) = 6x^2 + 8y^3 with respect to y.",
        "options": [
            "24y^2",
            "24y^2 + 12x",
            "8y^2",
            "12x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 192,
        "question": "Find the partial derivative of f(x, y) = 7x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2",
            "4y^2",
            "14x",
            "12y^2 + 14x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 193,
        "question": "Find the partial derivative of f(x, y) = 4x^2 + 5y^3 with respect to y.",
        "options": [
            "5y^2",
            "15y^2",
            "15y^2 + 8x",
            "8x"
        ],
        "answer": 1,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 194,
        "question": "Find the partial derivative of f(x, y) = 8x^2 + 7y^3 with respect to y.",
        "options": [
            "7y^2",
            "21y^2 + 16x",
            "21y^2",
            "16x"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 195,
        "question": "Find the partial derivative of f(x, y) = 6x^2 + 9y^3 with respect to y.",
        "options": [
            "12x",
            "27y^2 + 12x",
            "27y^2",
            "9y^2"
        ],
        "answer": 2,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 196,
        "question": "Find the partial derivative of f(x, y) = 2x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2",
            "4y^2",
            "12y^2 + 4x",
            "4x"
        ],
        "answer": 0,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 197,
        "question": "Find the partial derivative of f(x, y) = 2x^2 + 9y^3 with respect to y.",
        "options": [
            "9y^2",
            "4x",
            "27y^2 + 4x",
            "27y^2"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 198,
        "question": "Find the partial derivative of f(x, y) = 3x^2 + 9y^3 with respect to y.",
        "options": [
            "9y^2",
            "27y^2 + 6x",
            "6x",
            "27y^2"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 199,
        "question": "Find the partial derivative of f(x, y) = 7x^2 + 4y^3 with respect to y.",
        "options": [
            "12y^2 + 14x",
            "4y^2",
            "14x",
            "12y^2"
        ],
        "answer": 3,
        "topic": "Multivariable Calculus"
    },
    {
        "id": 200,
        "question": "What is the determinant of the 2x2 matrix: [[1, 6], [8, 1]]?",
        "options": [
            "2",
            "49",
            "-2",
            "-47"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 201,
        "question": "What is the determinant of the 2x2 matrix: [[6, 9], [6, 4]]?",
        "options": [
            "30",
            "10",
            "78",
            "-30"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 202,
        "question": "What is the determinant of the 2x2 matrix: [[10, 8], [7, 10]]?",
        "options": [
            "20",
            "44",
            "156",
            "10"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 203,
        "question": "What is the determinant of the 2x2 matrix: [[7, 4], [1, 4]]?",
        "options": [
            "24",
            "32",
            "11",
            "24"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 204,
        "question": "What is the determinant of the 2x2 matrix: [[9, 9], [4, 6]]?",
        "options": [
            "15",
            "18",
            "57",
            "90"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 205,
        "question": "What is the determinant of the 2x2 matrix: [[5, 3], [4, 2]]?",
        "options": [
            "7",
            "7",
            "-2",
            "22"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 206,
        "question": "What is the determinant of the 2x2 matrix: [[9, 1], [8, 6]]?",
        "options": [
            "62",
            "46",
            "15",
            "-39"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 207,
        "question": "What is the determinant of the 2x2 matrix: [[3, 1], [6, 7]]?",
        "options": [
            "27",
            "15",
            "10",
            "-39"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 208,
        "question": "What is the determinant of the 2x2 matrix: [[1, 2], [8, 8]]?",
        "options": [
            "9",
            "-62",
            "-8",
            "24"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 209,
        "question": "What is the determinant of the 2x2 matrix: [[2, 6], [2, 7]]?",
        "options": [
            "9",
            "-2",
            "2",
            "26"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 210,
        "question": "What is the determinant of the 2x2 matrix: [[1, 5], [7, 1]]?",
        "options": [
            "2",
            "-2",
            "36",
            "-34"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 211,
        "question": "What is the determinant of the 2x2 matrix: [[1, 5], [5, 8]]?",
        "options": [
            "-17",
            "9",
            "33",
            "-35"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 212,
        "question": "What is the determinant of the 2x2 matrix: [[6, 3], [6, 4]]?",
        "options": [
            "-6",
            "10",
            "6",
            "42"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 213,
        "question": "What is the determinant of the 2x2 matrix: [[4, 8], [10, 1]]?",
        "options": [
            "22",
            "5",
            "84",
            "-76"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 214,
        "question": "What is the determinant of the 2x2 matrix: [[6, 9], [8, 6]]?",
        "options": [
            "6",
            "12",
            "108",
            "-36"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 215,
        "question": "What is the determinant of the 2x2 matrix: [[2, 1], [9, 7]]?",
        "options": [
            "23",
            "5",
            "9",
            "-61"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 216,
        "question": "What is the determinant of the 2x2 matrix: [[9, 9], [10, 9]]?",
        "options": [
            "-9",
            "-9",
            "171",
            "18"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 217,
        "question": "What is the determinant of the 2x2 matrix: [[1, 5], [9, 7]]?",
        "options": [
            "52",
            "-58",
            "8",
            "-38"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 218,
        "question": "What is the determinant of the 2x2 matrix: [[4, 5], [9, 4]]?",
        "options": [
            "61",
            "8",
            "-16",
            "-29"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 219,
        "question": "What is the determinant of the 2x2 matrix: [[6, 2], [6, 1]]?",
        "options": [
            "7",
            "18",
            "6",
            "-6"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 220,
        "question": "What is the determinant of the 2x2 matrix: [[3, 2], [4, 7]]?",
        "options": [
            "29",
            "13",
            "-22",
            "10"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 221,
        "question": "What is the determinant of the 2x2 matrix: [[6, 6], [8, 8]]?",
        "options": [
            "96",
            "14",
            "0",
            "-28"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 222,
        "question": "What is the determinant of the 2x2 matrix: [[8, 8], [9, 2]]?",
        "options": [
            "10",
            "88",
            "46",
            "-56"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 223,
        "question": "What is the determinant of the 2x2 matrix: [[3, 9], [2, 4]]?",
        "options": [
            "19",
            "30",
            "7",
            "-6"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 224,
        "question": "What is the determinant of the 2x2 matrix: [[5, 5], [4, 3]]?",
        "options": [
            "8",
            "35",
            "13",
            "-5"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 225,
        "question": "What is the determinant of the 2x2 matrix: [[4, 4], [7, 7]]?",
        "options": [
            "-33",
            "11",
            "56",
            "0"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 226,
        "question": "What is the determinant of the 2x2 matrix: [[2, 8], [8, 6]]?",
        "options": [
            "8",
            "76",
            "-52",
            "-32"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 227,
        "question": "What is the determinant of the 2x2 matrix: [[4, 7], [4, 3]]?",
        "options": [
            "7",
            "16",
            "-16",
            "40"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 228,
        "question": "What is the determinant of the 2x2 matrix: [[4, 6], [10, 8]]?",
        "options": [
            "-56",
            "12",
            "-28",
            "92"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 229,
        "question": "What is the determinant of the 2x2 matrix: [[7, 4], [4, 1]]?",
        "options": [
            "-9",
            "23",
            "8",
            "24"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 230,
        "question": "What is the trace of the 2x2 matrix: [[11, 3], [1, 5]]?",
        "options": [
            "55",
            "52",
            "4",
            "16"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 231,
        "question": "What is the trace of the 2x2 matrix: [[-10, -5], [-3, -6]]?",
        "options": [
            "60",
            "45",
            "-8",
            "-16"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 232,
        "question": "What is the trace of the 2x2 matrix: [[-2, -2], [5, 13]]?",
        "options": [
            "3",
            "11",
            "-16",
            "-26"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 233,
        "question": "What is the trace of the 2x2 matrix: [[-6, 3], [0, -5]]?",
        "options": [
            "-11",
            "3",
            "30",
            "30"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 234,
        "question": "What is the trace of the 2x2 matrix: [[3, 5], [2, -5]]?",
        "options": [
            "-25",
            "-2",
            "-15",
            "7"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 235,
        "question": "What is the trace of the 2x2 matrix: [[-8, 4], [0, 4]]?",
        "options": [
            "4",
            "-32",
            "-32",
            "-4"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 236,
        "question": "What is the trace of the 2x2 matrix: [[11, 2], [-2, 4]]?",
        "options": [
            "48",
            "15",
            "44",
            "0"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 237,
        "question": "What is the trace of the 2x2 matrix: [[-6, -4], [-5, 3]]?",
        "options": [
            "-18",
            "-3",
            "-38",
            "-9"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 238,
        "question": "What is the trace of the 2x2 matrix: [[-1, 2], [2, 2]]?",
        "options": [
            "4",
            "-2",
            "-6",
            "1"
        ],
        "answer": 3,
        "topic": "Linear Algebra"
    },
    {
        "id": 239,
        "question": "What is the trace of the 2x2 matrix: [[15, 1], [3, -6]]?",
        "options": [
            "4",
            "9",
            "-90",
            "-93"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 240,
        "question": "What is the trace of the 2x2 matrix: [[4, -4], [5, -9]]?",
        "options": [
            "1",
            "-36",
            "-5",
            "-16"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 241,
        "question": "What is the trace of the 2x2 matrix: [[6, 0], [-4, 11]]?",
        "options": [
            "66",
            "-4",
            "17",
            "66"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 242,
        "question": "What is the trace of the 2x2 matrix: [[9, 5], [1, 2]]?",
        "options": [
            "6",
            "18",
            "11",
            "13"
        ],
        "answer": 2,
        "topic": "Linear Algebra"
    },
    {
        "id": 243,
        "question": "What is the trace of the 2x2 matrix: [[10, -5], [1, 7]]?",
        "options": [
            "75",
            "17",
            "-4",
            "70"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 244,
        "question": "What is the trace of the 2x2 matrix: [[8, -3], [-4, -6]]?",
        "options": [
            "-48",
            "2",
            "-60",
            "-7"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 245,
        "question": "What is the trace of the 2x2 matrix: [[-2, 5], [1, -10]]?",
        "options": [
            "-12",
            "15",
            "6",
            "20"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 246,
        "question": "What is the trace of the 2x2 matrix: [[-4, 5], [-4, 5]]?",
        "options": [
            "1",
            "0",
            "1",
            "-20"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 247,
        "question": "What is the trace of the 2x2 matrix: [[6, -5], [3, -6]]?",
        "options": [
            "-36",
            "0",
            "-21",
            "-2"
        ],
        "answer": 1,
        "topic": "Linear Algebra"
    },
    {
        "id": 248,
        "question": "What is the trace of the 2x2 matrix: [[1, -4], [2, 8]]?",
        "options": [
            "9",
            "8",
            "-2",
            "16"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 249,
        "question": "What is the trace of the 2x2 matrix: [[-9, 3], [2, -10]]?",
        "options": [
            "-19",
            "90",
            "5",
            "84"
        ],
        "answer": 0,
        "topic": "Linear Algebra"
    },
    {
        "id": 250,
        "question": "Evaluate the indefinite integral of f(x) = 4 x^3 dx.",
        "options": [
            "x^3 + C",
            "(1/5) x^5 + C",
            "x^4 + C",
            "4 x^4 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 251,
        "question": "Evaluate the indefinite integral of f(x) = 11 x^10 dx.",
        "options": [
            "(1/12) x^12 + C",
            "x^10 + C",
            "11 x^11 + C",
            "x^11 + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 252,
        "question": "Evaluate the indefinite integral of f(x) = 2 x^1 dx.",
        "options": [
            "2 x^2 + C",
            "x^1 + C",
            "x^2 + C",
            "(1/3) x^3 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 253,
        "question": "Evaluate the indefinite integral of f(x) = 5 x^4 dx.",
        "options": [
            "(1/6) x^6 + C",
            "x^4 + C",
            "5 x^5 + C",
            "x^5 + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 254,
        "question": "Evaluate the indefinite integral of f(x) = 9 x^8 dx.",
        "options": [
            "(1/10) x^10 + C",
            "x^9 + C",
            "9 x^9 + C",
            "x^8 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 255,
        "question": "Evaluate the indefinite integral of f(x) = 11 x^10 dx.",
        "options": [
            "x^11 + C",
            "x^10 + C",
            "(1/12) x^12 + C",
            "11 x^11 + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 256,
        "question": "Evaluate the indefinite integral of f(x) = 2 x^1 dx.",
        "options": [
            "x^1 + C",
            "2 x^2 + C",
            "x^2 + C",
            "(1/3) x^3 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 257,
        "question": "Evaluate the indefinite integral of f(x) = 9 x^8 dx.",
        "options": [
            "x^8 + C",
            "x^9 + C",
            "9 x^9 + C",
            "(1/10) x^10 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 258,
        "question": "Evaluate the indefinite integral of f(x) = 3 x^2 dx.",
        "options": [
            "3 x^3 + C",
            "x^3 + C",
            "(1/4) x^4 + C",
            "x^2 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 259,
        "question": "Evaluate the indefinite integral of f(x) = 7 x^6 dx.",
        "options": [
            "(1/8) x^8 + C",
            "7 x^7 + C",
            "x^7 + C",
            "x^6 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 260,
        "question": "Evaluate the indefinite integral of f(x) = 11 x^10 dx.",
        "options": [
            "x^10 + C",
            "x^11 + C",
            "11 x^11 + C",
            "(1/12) x^12 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 261,
        "question": "Evaluate the indefinite integral of f(x) = 11 x^10 dx.",
        "options": [
            "x^10 + C",
            "x^11 + C",
            "11 x^11 + C",
            "(1/12) x^12 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 262,
        "question": "Evaluate the indefinite integral of f(x) = 8 x^7 dx.",
        "options": [
            "(1/9) x^9 + C",
            "x^8 + C",
            "8 x^8 + C",
            "x^7 + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 263,
        "question": "Evaluate the indefinite integral of f(x) = 2 x^1 dx.",
        "options": [
            "(1/3) x^3 + C",
            "x^1 + C",
            "2 x^2 + C",
            "x^2 + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 264,
        "question": "Evaluate the indefinite integral of f(x) = 5 x^4 dx.",
        "options": [
            "5 x^5 + C",
            "x^4 + C",
            "x^5 + C",
            "(1/6) x^6 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 265,
        "question": "Evaluate the indefinite integral of f(x) = 3 x^2 dx.",
        "options": [
            "x^3 + C",
            "3 x^3 + C",
            "x^2 + C",
            "(1/4) x^4 + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 266,
        "question": "Evaluate the indefinite integral of f(x) = 10 x^9 dx.",
        "options": [
            "(1/11) x^11 + C",
            "x^9 + C",
            "x^10 + C",
            "10 x^10 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 267,
        "question": "Evaluate the indefinite integral of f(x) = 5 x^4 dx.",
        "options": [
            "x^4 + C",
            "5 x^5 + C",
            "x^5 + C",
            "(1/6) x^6 + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 268,
        "question": "Evaluate the indefinite integral of f(x) = 5 x^4 dx.",
        "options": [
            "x^5 + C",
            "x^4 + C",
            "5 x^5 + C",
            "(1/6) x^6 + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 269,
        "question": "Evaluate the indefinite integral of f(x) = 12 x^11 dx.",
        "options": [
            "x^12 + C",
            "(1/13) x^13 + C",
            "12 x^12 + C",
            "x^11 + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 270,
        "question": "Evaluate the indefinite integral of f(x) = cos(7x) dx.",
        "options": [
            "(1/7) cos(7x) + C",
            "7 sin(7x) + C",
            "-7 sin(7x) + C",
            "(1/7) sin(7x) + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 271,
        "question": "Evaluate the indefinite integral of f(x) = cos(8x) dx.",
        "options": [
            "(1/8) cos(8x) + C",
            "(1/8) sin(8x) + C",
            "-8 sin(8x) + C",
            "8 sin(8x) + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 272,
        "question": "Evaluate the indefinite integral of f(x) = cos(8x) dx.",
        "options": [
            "(1/8) cos(8x) + C",
            "(1/8) sin(8x) + C",
            "-8 sin(8x) + C",
            "8 sin(8x) + C"
        ],
        "answer": 1,
        "topic": "Integration"
    },
    {
        "id": 273,
        "question": "Evaluate the indefinite integral of f(x) = cos(9x) dx.",
        "options": [
            "-9 sin(9x) + C",
            "9 sin(9x) + C",
            "(1/9) sin(9x) + C",
            "(1/9) cos(9x) + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 274,
        "question": "Evaluate the indefinite integral of f(x) = cos(2x) dx.",
        "options": [
            "2 sin(2x) + C",
            "-2 sin(2x) + C",
            "(1/2) cos(2x) + C",
            "(1/2) sin(2x) + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 275,
        "question": "Evaluate the indefinite integral of f(x) = cos(8x) dx.",
        "options": [
            "(1/8) cos(8x) + C",
            "8 sin(8x) + C",
            "(1/8) sin(8x) + C",
            "-8 sin(8x) + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 276,
        "question": "Evaluate the indefinite integral of f(x) = cos(7x) dx.",
        "options": [
            "(1/7) cos(7x) + C",
            "7 sin(7x) + C",
            "(1/7) sin(7x) + C",
            "-7 sin(7x) + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 277,
        "question": "Evaluate the indefinite integral of f(x) = cos(4x) dx.",
        "options": [
            "-4 sin(4x) + C",
            "4 sin(4x) + C",
            "(1/4) cos(4x) + C",
            "(1/4) sin(4x) + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 278,
        "question": "Evaluate the indefinite integral of f(x) = cos(5x) dx.",
        "options": [
            "(1/5) sin(5x) + C",
            "5 sin(5x) + C",
            "-5 sin(5x) + C",
            "(1/5) cos(5x) + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 279,
        "question": "Evaluate the indefinite integral of f(x) = cos(4x) dx.",
        "options": [
            "4 sin(4x) + C",
            "-4 sin(4x) + C",
            "(1/4) cos(4x) + C",
            "(1/4) sin(4x) + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 280,
        "question": "Evaluate the indefinite integral of f(x) = cos(3x) dx.",
        "options": [
            "(1/3) sin(3x) + C",
            "-3 sin(3x) + C",
            "(1/3) cos(3x) + C",
            "3 sin(3x) + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 281,
        "question": "Evaluate the indefinite integral of f(x) = cos(10x) dx.",
        "options": [
            "10 sin(10x) + C",
            "(1/10) cos(10x) + C",
            "-10 sin(10x) + C",
            "(1/10) sin(10x) + C"
        ],
        "answer": 3,
        "topic": "Integration"
    },
    {
        "id": 282,
        "question": "Evaluate the indefinite integral of f(x) = cos(7x) dx.",
        "options": [
            "(1/7) sin(7x) + C",
            "-7 sin(7x) + C",
            "(1/7) cos(7x) + C",
            "7 sin(7x) + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 283,
        "question": "Evaluate the indefinite integral of f(x) = cos(9x) dx.",
        "options": [
            "(1/9) cos(9x) + C",
            "-9 sin(9x) + C",
            "(1/9) sin(9x) + C",
            "9 sin(9x) + C"
        ],
        "answer": 2,
        "topic": "Integration"
    },
    {
        "id": 284,
        "question": "Evaluate the indefinite integral of f(x) = cos(7x) dx.",
        "options": [
            "(1/7) sin(7x) + C",
            "7 sin(7x) + C",
            "-7 sin(7x) + C",
            "(1/7) cos(7x) + C"
        ],
        "answer": 0,
        "topic": "Integration"
    },
    {
        "id": 285,
        "question": "If z = 4 + 6i, what is |z|^2 ?",
        "options": [
            "10",
            "-20",
            "sqrt(52)",
            "52"
        ],
        "answer": 3,
        "topic": "Complex Numbers"
    },
    {
        "id": 286,
        "question": "If z = 8 + 7i, what is |z|^2 ?",
        "options": [
            "sqrt(113)",
            "15",
            "113",
            "15"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 287,
        "question": "If z = 3 + 2i, what is |z|^2 ?",
        "options": [
            "5",
            "sqrt(13)",
            "13",
            "5"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 288,
        "question": "If z = 2 + 6i, what is |z|^2 ?",
        "options": [
            "8",
            "40",
            "sqrt(40)",
            "-32"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 289,
        "question": "If z = 6 + 4i, what is |z|^2 ?",
        "options": [
            "20",
            "10",
            "sqrt(52)",
            "52"
        ],
        "answer": 3,
        "topic": "Complex Numbers"
    },
    {
        "id": 290,
        "question": "If z = 7 + 7i, what is |z|^2 ?",
        "options": [
            "0",
            "14",
            "98",
            "sqrt(98)"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 291,
        "question": "If z = 4 + 5i, what is |z|^2 ?",
        "options": [
            "9",
            "-9",
            "41",
            "sqrt(41)"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 292,
        "question": "If z = 7 + 7i, what is |z|^2 ?",
        "options": [
            "sqrt(98)",
            "0",
            "98",
            "14"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 293,
        "question": "If z = 6 + 3i, what is |z|^2 ?",
        "options": [
            "9",
            "45",
            "sqrt(45)",
            "27"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 294,
        "question": "If z = 7 + 4i, what is |z|^2 ?",
        "options": [
            "11",
            "65",
            "33",
            "sqrt(65)"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 295,
        "question": "If z = 2 + 8i, what is |z|^2 ?",
        "options": [
            "68",
            "sqrt(68)",
            "10",
            "-60"
        ],
        "answer": 0,
        "topic": "Complex Numbers"
    },
    {
        "id": 296,
        "question": "If z = 6 + 7i, what is |z|^2 ?",
        "options": [
            "-13",
            "13",
            "85",
            "sqrt(85)"
        ],
        "answer": 2,
        "topic": "Complex Numbers"
    },
    {
        "id": 297,
        "question": "If z = 3 + 2i, what is |z|^2 ?",
        "options": [
            "sqrt(13)",
            "13",
            "5",
            "5"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 298,
        "question": "If z = 8 + 2i, what is |z|^2 ?",
        "options": [
            "10",
            "68",
            "sqrt(68)",
            "60"
        ],
        "answer": 1,
        "topic": "Complex Numbers"
    },
    {
        "id": 299,
        "question": "If z = 2 + 7i, what is |z|^2 ?",
        "options": [
            "sqrt(53)",
            "9",
            "-45",
            "53"
        ],
        "answer": 3,
        "topic": "Complex Numbers"
    },
    {
        "id": 300,
        "question": "What is the second derivative of f(x) = x^6?",
        "options": [
            "30x^5",
            "x^4",
            "6x^5",
            "30x^4"
        ],
        "answer": 3,
        "topic": "Differentiation"
    }
];

export default mathsQuestions;
