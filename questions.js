const questions = [
    {
        id: 1,
        question: "What is React?",
        options: ["A library for building user interfaces","A server-side framework","A database management system","A programming language"],
        answer: 0,
        topic: "Introduction"
    },
    {
        id: 2,
        question: "Who developed React?",
        options: ["Google","Facebook","Microsoft","Twitter"],
        answer: 1,
        topic: "Introduction"
    },
    {
        id: 3,
        question: "What is JSX?",
        options: ["A CSS extension","A database query language","A JavaScript syntax extension","A markup language for servers"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 4,
        question: "Which command is used to create a new React app?",
        options: ["npm create-react-app","install react","react-new-app","npx create-react-app"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 5,
        question: "In React, what are 'props'?",
        options: ["External data passed to a component","Internal state of a component","Methods to handle events","A way to style components"],
        answer: 0,
        topic: "Props"
    },
    {
        id: 6,
        question: "What is the Virtual DOM?",
        options: ["A direct copy of the HTML DOM","A lightweight representation of the real DOM","A way to speed up the database","A server-side cache"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 7,
        question: "How do you define a class-based component in React?",
        options: ["function MyComponent() {}","const MyComponent = () => {}","class MyComponent extends React.Component {}","new Component(MyComponent)"],
        answer: 2,
        topic: "Components"
    },
    {
        id: 8,
        question: "Which hook is used to manage state in a functional component?",
        options: ["useEffect","useContext","useReducer","useState"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 9,
        question: "What is the purpose of useEffect hook?",
        options: ["To perform side effects","To manage state","To optimize rendering","To handle form submission"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 10,
        question: "How do you pass a value to a component's prop?",
        options: ["<MyComponent '123' />","<MyComponent value='123' />","<MyComponent props='123' />","<MyComponent data='123' />"],
        answer: 1,
        topic: "Props"
    },
    {
        id: 11,
        question: "What happens when a component's state changes?",
        options: ["The whole page reloads","The component is deleted","The component re-renders","Nothing happens"],
        answer: 2,
        topic: "State"
    },
    {
        id: 12,
        question: "How do you update state in a functional component?",
        options: ["this.setState()","state.update()","By modifying the variable directly","The setter function from useState"],
        answer: 3,
        topic: "State"
    },
    {
        id: 13,
        question: "Can components be nested inside other components?",
        options: ["Yes","No","Only class components","Only functional components"],
        answer: 0,
        topic: "Components"
    },
    {
        id: 14,
        question: "What is the initial value of a state defined with `const [count, setCount] = useState(0)`?",
        options: ["undefined","0","null","1"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 15,
        question: "What are 'Keys' in React list rendering used for?",
        options: ["To style the elements","To encrypt the data","To identify which items have changed, been added, or removed","To sort the list"],
        answer: 2,
        topic: "Lists"
    },
    {
        id: 16,
        question: "Which library is commonly used for Material Design in React?",
        options: ["Bootstrap","Chakra UI","Tailwind CSS","MUI (Material UI)"],
        answer: 3,
        topic: "Styling"
    },
    {
        id: 17,
        question: "What is Tailwind CSS?",
        options: ["A utility-first CSS framework","A JavaScript framework","A database","An icon library"],
        answer: 0,
        topic: "Styling"
    },
    {
        id: 18,
        question: "How do you add inline styles in React?",
        options: ["style='color: blue'","style={{ color: 'blue' }}","class='blue-text'","css='color: blue'"],
        answer: 1,
        topic: "Styling"
    },
    {
        id: 19,
        question: "What does MUI stand for?",
        options: ["Modern User Interface","Material User Interface","Material UI","Multiple User Interface"],
        answer: 2,
        topic: "Styling"
    },
    {
        id: 20,
        question: "Which of the following is a CSS-in-JS library?",
        options: ["Sass","Stylus","Less","Styled-components"],
        answer: 3,
        topic: "Styling"
    },
    {
        id: 21,
        question: "What is Formik used for?",
        options: ["Handling forms in React","Routing","State management","Validation only"],
        answer: 0,
        topic: "Forms"
    },
    {
        id: 22,
        question: "What is Yup primarily used for with Formik?",
        options: ["Styling forms","Form schema validation","API calls","Handling events"],
        answer: 1,
        topic: "Validation"
    },
    {
        id: 23,
        question: "Which component is the main container for Formik?",
        options: ["<Form />","<Field />","<Formik />","<ErrorMessage />"],
        answer: 2,
        topic: "Forms"
    },
    {
        id: 24,
        question: "How do you handle field changes in Formik?",
        options: ["onChange","onInput","updateField","handleChange"],
        answer: 3,
        topic: "Forms"
    },
    {
        id: 25,
        question: "What hook can be used instead of the <Formik> component?",
        options: ["useFormik","useForm","useFormState","useValidation"],
        answer: 0,
        topic: "Forms"
    },
    {
        id: 26,
        question: "What is Redux?",
        options: ["A styling library","A predictable state container for JS apps","A routing library","An API framework"],
        answer: 1,
        topic: "State Management"
    },
    {
        id: 27,
        question: "What is a 'Store' in Redux?",
        options: ["A place to sell components","A function that updates state","An object that holds the application state","A way to fetch data"],
        answer: 2,
        topic: "Redux"
    },
    {
        id: 28,
        question: "What is an 'Action' in Redux?",
        options: ["A function that changes state","A slice of the store","A React component","A plain object that describes what happened"],
        answer: 3,
        topic: "Redux"
    },
    {
        id: 29,
        question: "What is a 'Reducer'?",
        options: ["A function that takes state and an action and returns a new state","A way to make the app smaller","A component that renders state","A tool for debugging"],
        answer: 0,
        topic: "Redux"
    },
    {
        id: 30,
        question: "What is Redux Toolkit (RTK)?",
        options: ["An alternative to Redux","A set of tools for easier Redux development","A styling library for Redux","A server for Redux"],
        answer: 1,
        topic: "Redux Toolkit"
    },
    {
        id: 31,
        question: "Which function is used to create a slice in RTK?",
        options: ["createStore","createReducer","createSlice","createAction"],
        answer: 2,
        topic: "Redux Toolkit"
    },
    {
        id: 32,
        question: "What does `useSelector` do?",
        options: ["Dispatches an action","Updates a slice","Creates a new store","Selects a piece of state from the store"],
        answer: 3,
        topic: "Redux Hooks"
    },
    {
        id: 33,
        question: "What does `useDispatch` return?",
        options: ["A reference to the dispatch function","The current state","The combined reducers","An action creator"],
        answer: 0,
        topic: "Redux Hooks"
    },
    {
        id: 34,
        question: "Which hook is used to mark a state update as a non-urgent transition in React 18?",
        options: ["useDeferredValue","useTransition","useAsync","useSyncExternalStore"],
        answer: 1,
        topic: "React 18"
    },
    {
        id: 38,
        question: "What is useMemo used for?",
        options: ["To memoize functions","To manage context","To memoize expensive calculations","To refer to DOM elements"],
        answer: 2,
        topic: "Optimization"
    },
    {
        id: 39,
        question: "What is useCallback used for?",
        options: ["To replace useEffect","To run calculations","To handle callbacks","To memoize a function reference"],
        answer: 3,
        topic: "Optimization"
    },
    {
        id: 40,
        question: "What is useRef used for?",
        options: ["To access DOM elements or persist values across renders without re-rendering","To store state","To handle routes","To validate forms"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 41,
        question: "Which component is used for navigation in React Router?",
        options: ["<A>","<Link>","<Route>","<Switch>"],
        answer: 1,
        topic: "Router"
    },
    {
        id: 42,
        question: "Which hook is used to access route parameters?",
        options: ["useRoute","useQuery","useParams","useParam"],
        answer: 2,
        topic: "Router"
    },
    {
        id: 43,
        question: "What is the purpose of <Routes> in version 6?",
        options: ["To define navigation links","To handle API calls","To manage global state","To hold all individual <Route> definitions"],
        answer: 3,
        topic: "Router"
    },
    {
        id: 44,
        question: "How do you navigate programmatically in React Router v6?",
        options: ["useNavigate()","useHistory()","withRouter()","navigator()"],
        answer: 0,
        topic: "Router"
    },
    {
        id: 45,
        question: "Which library is commonly used for React SEO (managing head tags)?",
        options: ["React SEO","React Helmet","Meta Manager","Head Master"],
        answer: 1,
        topic: "SEO"
    },
    {
        id: 46,
        question: "In which lifecycle stage would you typically fetch data in class components?",
        options: ["constructor","render","componentDidMount","componentWillUpdate"],
        answer: 2,
        topic: "Lifecycle"
    },
    {
        id: 47,
        question: "What is the functional equivalent of componentDidMount?",
        options: ["useState()","useEffect(() => {})","useEffect(() => {}, [data])","useEffect(() => {}, [])"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 48,
        question: "What does 'Strict Mode' in React do?",
        options: ["Checks for potential problems in an application","Fixes bugs automatically","Speeds up the app","Makes the UI look better"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 49,
        question: "What is a 'Fragment'?",
        options: ["A broken component","A way to group a list of children without adding extra nodes to the DOM","A piece of state","A CSS unit"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 50,
        question: "What is the correct way to render a list of 10 items?",
        options: ["For loop","While loop","Array.map()","Manual typing"],
        answer: 2,
        topic: "Lists"
    },
    {
        id: 51,
        question: "What is 'Lifting State Up'?",
        options: ["Uploading state to a server","Deleting the state","Moving state to a global store","Moving state to a parent component to share it between children"],
        answer: 3,
        topic: "Architecture"
    },
    {
        id: 52,
        question: "What is a 'Controlled Component'?",
        options: ["An input element whose value is controlled by React state","A component managed by Redux","A component with a fixed size","A component that cannot be deleted"],
        answer: 0,
        topic: "Forms"
    },
    {
        id: 53,
        question: "What is an 'Uncontrolled Component'?",
        options: ["A component with bugs","A component where form data is handled by the DOM itself","A component without props","A component that doesn't render"],
        answer: 1,
        topic: "Forms"
    },
    {
        id: 54,
        question: "What does 'Hydration' refer to in React?",
        options: ["Drinking water while coding","Cleaning the DOM","Attaching event listeners to server-rendered HTML","Updating the Virtual DOM"],
        answer: 2,
        topic: "Server Side Rendering"
    },
    {
        id: 55,
        question: "Which of these is NOT a hook?",
        options: ["useState","useEffect","useContext","useStateful"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 56,
        question: "What is 'Prop Drilling'?",
        options: ["Passing props through many layers of components","A way to optimize props","A technique for styling","A testing method"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 57,
        question: "What solves the problem of Prop Drilling?",
        options: ["CSS","Context API","UseState","HTML"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 58,
        question: "In Redux Toolkit, what does `createAsyncThunk` handle?",
        options: ["Synchronous actions","Styling components","Asynchronous logic like API calls","Routing"],
        answer: 2,
        topic: "Redux Toolkit"
    },
    {
        id: 59,
        question: "What is the return type of `useContext`?",
        options: ["A boolean","None of these","An array with two items","The value passed to the Provider"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 60,
        question: "What is 'Reconciliation'?",
        options: ["The process by which React updates the real DOM","Solving conflicts in Git","A way to manage state","A form of data validation"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 61,
        question: "How do you set a default value for props in modern React?",
        options: ["MyComponent.defaultProps = {}","Destructuring with defaults: function MyComponent({ name = 'Guest' })","using setState","In the HTML file"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 62,
        question: "Which of the following is true about React hooks?",
        options: ["They can be called inside loops","They work in class components","They must be called at the top level of a component","They are only for styling"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 63,
        question: "What does `React.memo` do?",
        options: ["Memoizes a value","Stores data in local storage","Creates a new hook","Memoizes a component to prevent unnecessary re-renders"],
        answer: 3,
        topic: "Optimization"
    },
    {
        id: 64,
        question: "What is a 'Portal' in React?",
        options: ["A way to render children into a DOM node outside the parent hierarchy","A way to navigate between pages","A login screen","A server-side route"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 65,
        question: "What does `npm start` do in a typical React app?",
        options: ["Builds the app for production","Starts the development server","Installs dependencies","Tests the app"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 66,
        question: "Which file is the entry point for a React app?",
        options: ["App.js","styles.css","index.js","package.json"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 67,
        question: "What is the purpose of `key` in a list?",
        options: ["To make it unique visually","To access the database","To sort the array","To help React optimize re-rendering"],
        answer: 3,
        topic: "Lists"
    },
    {
        id: 68,
        question: "How do you handle errors in React components?",
        options: ["Error Boundaries","try...catch","if statements","Windows alerts"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 69,
        question: "What is a HOC (Higher-Order Component)?",
        options: ["A library for styling","A function that takes a component and returns a new component","A component with many props","The root component"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 70,
        question: "Which hook is used to get the screen size (custom)?",
        options: ["useSize","useScreen","useWindowSize","useDisplay"],
        answer: 2,
        topic: "Custom Hooks"
    },
    {
        id: 71,
        question: "What is Auth0 used for?",
        options: ["Database management","API testing","Form styling","Authentication and Authorization"],
        answer: 3,
        topic: "Auth"
    },
    {
        id: 72,
        question: "What is 'Lazy Loading' in React?",
        options: ["Loading components only when they are needed","Loading images slowly","Delaying the API call","Not writing code"],
        answer: 0,
        topic: "Optimization"
    },
    {
        id: 73,
        question: "Which component is used for lazy loading?",
        options: ["<Lazy />","<Suspense />","<Wait />","<Loader />"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 74,
        question: "In Redux Toolkit Query (RTK Query), what is an 'Endpoint'?",
        options: ["The end of the code","The store's exit","A definition of an API operation","A reducer"],
        answer: 2,
        topic: "RTK Query"
    },
    {
        id: 75,
        question: "Which of these is a popular library for React animations?",
        options: ["Smoothie","React Animate","Animate.css","Framer Motion"],
        answer: 3,
        topic: "Animation"
    },
    {
        id: 76,
        question: "What is 'Hydration' specifically in Next.js?",
        options: ["The process of making a server-rendered page interactive","Filling the page with data","Cleaning cache","Building the site"],
        answer: 0,
        topic: "Next.js"
    },
    {
        id: 77,
        question: "How do you conditionally apply classes in React?",
        options: ["class='condition'","className={condition ? 'active' : ''}","class={true}","className='active'"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 78,
        question: "Which command builds the app for production?",
        options: ["npm run dev","npm start","npm run build","npm deploy"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 79,
        question: "What is a 'Pure Component'?",
        options: ["A component that never changes","A component without CSS","A functional component","A component that renders the same output for same props/state"],
        answer: 3,
        topic: "Architecture"
    },
    {
        id: 80,
        question: "What is `prop-types` used for?",
        options: ["To document and validate prop types","To style props","To pass props","To delete props"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 81,
        question: "Can you use multiple `useEffect` hooks in one component?",
        options: ["No","Yes","Only if they have different dependencies","Only in class components"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 82,
        question: "What is the difference between `let` and `const`?",
        options: ["None","const is faster","let can be reassigned, const cannot","let is only for numbers"],
        answer: 2,
        topic: "JavaScript"
    },
    {
        id: 83,
        question: "What is an 'Arrow Function'?",
        options: ["A function that draws arrows","A server function","A library function","A shorthand way to write functions: () => {}"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 84,
        question: "What does the spread operator `...` do?",
        options: ["Expands an array or object into elements","Multiplies values","Deletes data","Connects APIs"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 85,
        question: "What is `localStorage` used for?",
        options: ["Storing data on the server","Storing data in the user's browser persistently","Temporary session state","Database queries"],
        answer: 1,
        topic: "Browser API"
    },
    {
        id: 86,
        question: "Which Hook would you use to handle a timer?",
        options: ["useClock","useTimer","useState and useEffect","useInterval"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 87,
        question: "What is a 'Callback' function?",
        options: ["A route","A function that calls itself","A styling function","A function called after an operation completes"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 88,
        question: "What is 'Asynchronous' programming?",
        options: ["Tasks running independently of the main flow","Sequential execution","Fast programming","Python coding"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 89,
        question: "What is `fetch()` primarily used for?",
        options: ["Styling","Making network requests","Rendering HTML","Sorting arrays"],
        answer: 1,
        topic: "Networking"
    },
    {
        id: 90,
        question: "What is JSON?",
        options: ["Just Simple Object","Java Syntax Object","JavaScript Object Notation","Network format"],
        answer: 2,
        topic: "Data"
    },
    {
        id: 91,
        question: "Which React Router component is used as a placeholder for child routes?",
        options: ["<View />","<Child />","<Route />","<Outlet />"],
        answer: 3,
        topic: "Router"
    },
    {
        id: 92,
        question: "What is Chakra UI?",
        options: ["A modular and accessible component library for React","A state library","A game engine","An animation tool"],
        answer: 0,
        topic: "Styling"
    },
    {
        id: 93,
        question: "What is ‘Immutability’?",
        options: ["Changing state directly","The state cannot be changed once created; you create a new copy","Infinite state","Broken state"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 94,
        question: "What is `useReducer`?",
        options: ["A hook to reduce package size","A CSS hook","A hook for complex state logic that works like a reducer","A way to delete components"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 95,
        question: "What does the 'dependency array' in `useEffect` do?",
        options: ["Lists files needed for the effect","Styles the component","Lists the component's props","Determines when the effect should re-run"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 96,
        question: "How do you render data conditionally with AND operator?",
        options: ["Both of these","{condition ? <Component /> : null}","{condition && <Component />}","Neither"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 97,
        question: "What is a 'Custom Hook'?",
        options: ["A hook provided by React","A JavaScript function whose name starts with 'use'","A broken hook","A library"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 98,
        question: "Which of these is used for mobile app development with React?",
        options: ["React Mobile","Native React","React Native","Expo HTML"],
        answer: 2,
        topic: "General"
    },
    {
        id: 99,
        question: "What is `dangerouslySetInnerHTML`?",
        options: ["A safe way to render HTML","A way to delete the app","A CSS property","React's replacement for `innerHTML` in the browser DOM"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 100,
        question: "What is the result of `typeof null` in JavaScript?",
        options: ["object","undefined","null","number"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 101,
        question: "What does the 'use' prefix in 'useMemo' signify?",
        options: ["It's a component","It's a React Hook","It's a CSS property","It's a database query"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 102,
        question: "Can you use Hooks inside a regular JavaScript function?",
        options: ["Yes","Only in class components","No, only in React functional components or custom Hooks","Yes, if it starts with 'use'"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 103,
        question: "What is the purpose of the `cleanup` function in `useEffect`?",
        options: ["To delete the component","To speed up rendering","To reset state","To clear memory, subscriptions, or timers when the component unmounts"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 104,
        question: "Which hook would you use to share data across the entire component tree without prop drilling?",
        options: ["useContext","useState","useReducer","useCallback"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 105,
        question: "What is the primary benefit of using `useReducer` over `useState`?",
        options: ["It's faster","It's better for complex state logic and transitions","It uses less memory","It's easier for beginners"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 106,
        question: "In `useReducer(reducer, initialState)`, what is the `reducer`?",
        options: ["A piece of state","A button component","A function that determines the next state based on an action","A configuration object"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 107,
        question: "What does the `Ref` in `useRef` stand for?",
        options: ["Refined","Refresh","Refactor","Reference"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 108,
        question: "Which of these is a valid use case for `useRef`?",
        options: ["Accessing a DOM element directly","Storing a boolean to trigger re-renders","Calculating a Fibonacci sequence","Defining routes"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 109,
        question: "What is 'Component Composition'?",
        options: ["Writing components in a single file","Using components as children of other components to build complex UIs","The size of a component","A testing framework"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 110,
        question: "What is a 'Render Prop'?",
        options: ["A prop that styles a component","A property of the root element","A technique for sharing code by passing a function as a prop to a component","A way to render images"],
        answer: 2,
        topic: "Architecture"
    },
    {
        id: 111,
        question: "Which hook is useful for persisting a value across renders without triggering a re-render?",
        options: ["useState","useEffect","useMemo","useRef"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 112,
        question: "What is the main advantage of using `useCallback`?",
        options: ["Preventing child components from re-rendering unnecessarily if they rely on function equality","Preventing state updates","Making API calls faster","Reducing bundle size"],
        answer: 0,
        topic: "Optimization"
    },
    {
        id: 113,
        question: "What happens if you omit the dependency array in `useEffect`?",
        options: ["The effect never runs","The effect runs after every render","The effect runs only once","React throws an error"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 114,
        question: "In `useState`, what does the second element in the returned array represent?",
        options: ["The current state value","The previous state value","A function to update the state","A reference to the component"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 115,
        question: "What are 'Portals' primarily used for in React?",
        options: ["Inter-page navigation","Security layers","Database connections","Rendering modals, tooltips, or dropdowns outside the root DOM hierarchy"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 116,
        question: "What is the virtual representation of the DOM commonly called?",
        options: ["Virtual DOM","Shadow DOM","Reactive DOM","Ghost DOM"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 117,
        question: "What is the process of comparing the current Virtual DOM with the previous one?",
        options: ["Matching","Diffing","Patching","Slicing"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 118,
        question: "What does 'React is declarative' mean?",
        options: ["You describe *how* to do things","You must declare all variables","You describe *what* you want to see","It uses the 'declare' keyword"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 119,
        question: "Which feature allows you to handle loading states for lazy-loaded components?",
        options: ["React.Loader","React.Async","React.Wait","React.Suspense"],
        answer: 3,
        topic: "Optimization"
    },
    {
        id: 120,
        question: "What is the default port for a local Create-React-App server?",
        options: ["3000","5000","8080","80"],
        answer: 0,
        topic: "Environment"
    },
    {
        id: 121,
        question: "Which tool is commonly used to bundle React applications?",
        options: ["Babel","Webpack","PostCSS","Prettier"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 122,
        question: "What does Babel do for React?",
        options: ["Minifies the CSS","Manages the database","Transpiles JSX and ES6+ into browser-compatible JavaScript","Optimizes images"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 123,
        question: "How do you specify a key for an element in a list?",
        options: ["<li class={item.id}>","<li id={item.id}>","<li ref={item.id}>","<li key={item.id}>"],
        answer: 3,
        topic: "Lists"
    },
    {
        id: 124,
        question: "What is the best way to handle side effects that require cleanup?",
        options: ["In a useEffect hook with a return function","In the constructor","In the render method","In a try...catch block"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 125,
        question: "What is 'State' in React?",
        options: ["A static value","A persistent object that stores data relevant to a component's lifecycle","A global variable","A styling property"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 126,
        question: "Which library is most popular for UI components inspired by Google's design system?",
        options: ["Tailwind","Bootstrap","MUI","Bulma"],
        answer: 2,
        topic: "Styling"
    },
    {
        id: 127,
        question: "What is the purpose of `act()` in React testing?",
        options: ["To render a component","To mock an API","To click a button","To ensure all updates are applied before making assertions"],
        answer: 3,
        topic: "Testing"
    },
    {
        id: 128,
        question: "What does 'Lifting State Up' help solve?",
        options: ["Syncing data between siblings or child-parent","Slow rendering","Memory leaks","Large bundle size"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 129,
        question: "Is it possible to use React without JSX?",
        options: ["No","Yes, using React.createElement","Only in old versions","Only in class components"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 130,
        question: "Which of the following describes 'Strict Mode'?",
        options: ["It enforces TypeScript","It restricts component size","It highlights potential problems by running components twice in development","It disables all errors"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 131,
        question: "What is an 'Event Handler'?",
        options: ["A CSS selector","A routing method","A database trigger","A function that runs in response to a user interaction"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 132,
        question: "In React v18, what is 'Automatic Batching'?",
        options: ["Batching multiple state updates into a single re-render","Batching API calls","Batching file uploads","Grouping CSS files"],
        answer: 0,
        topic: "Performance"
    },
    {
        id: 133,
        question: "What is the 'React Developer Tools' extension used for?",
        options: ["Writing code","Inspecting the React component hierarchy and state","Hosting the app","Testing APIs"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 134,
        question: "Which hook should you use for DOM measurements?",
        options: ["useEffect","useSize","useLayoutEffect","useDimension"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 135,
        question: "What is different between `useEffect` and `useLayoutEffect`?",
        options: ["Nothing","useLayoutEffect is faster","useEffect is for class components","useLayoutEffect fires synchronously after layout but before painting"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 136,
        question: "Which library is often used with React to manage icons?",
        options: ["React-Icons","Icon-Master","FontAwesome-React","Simple-Icons"],
        answer: 0,
        topic: "Styling"
    },
    {
        id: 137,
        question: "What does the 'toolkit' in Redux Toolkit provide?",
        options: ["A screwdriver","Standardized ways to write Redux logic with less boilerplate","A graphic interface","Direct database access"],
        answer: 1,
        topic: "Redux Toolkit"
    },
    {
        id: 138,
        question: "What is a 'Selector' in Redux?",
        options: ["A button to select items","A styling tool","A function used to extract pieces of state from the store","A database query"],
        answer: 2,
        topic: "Redux"
    },
    {
        id: 139,
        question: "What is `immer` used for in Redux Toolkit?",
        options: ["To slow down the app","To manage routes","To handle CSS","To write 'mutable' code that is converted into immutable updates"],
        answer: 3,
        topic: "Redux Toolkit"
    },
    {
        id: 140,
        question: "What is an 'AbortController' used for in React effects?",
        options: ["To cancel in-flight network requests on cleanup","To delete the app","To reset state","To stop the timer"],
        answer: 0,
        topic: "Networking"
    },
    {
        id: 141,
        question: "Which hook is used in Zustand to access the store state?",
        options: ["useStore","The hook returned by `create`","useSelector","useState"],
        answer: 1,
        topic: "Zustand"
    },
    {
        id: 142,
        question: "What is 'Hydration Error'?",
        options: ["Not enough water","API failure","Mismatch between server-rendered and client-rendered HTML","Broken CSS"],
        answer: 2,
        topic: "SSR"
    },
    {
        id: 143,
        question: "Which framework is known for its excellent out-of-the-box SEO for React?",
        options: ["Gatsby","Vite","Create-React-App","Next.js"],
        answer: 3,
        topic: "SEO"
    },
    {
        id: 144,
        question: "How do you render a 'Raw HTML' string in React safely?",
        options: ["dangerouslySetInnerHTML","innerHtml","eval()","SetContent"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 145,
        question: "What is the core idea of 'Functional Programming' in React?",
        options: ["Using only functions","Immutability and Pure Functions","Fast functions","Recursive functions"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 146,
        question: "What is `React.lazy` used for?",
        options: ["Lazy developers","Delaying re-renders","Code-splitting components","Slow animations"],
        answer: 2,
        topic: "Optimization"
    },
    {
        id: 147,
        question: "Which hook would you use to handle 'Keyboard Events' globally?",
        options: ["useKeyPress","useKeyboard","useEvent","useEffect with window.addEventListener"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 148,
        question: "What does 'SSR' stand for?",
        options: ["Server Side Rendering","Simple State React","Sync Script Rendering","Server State Reservoir"],
        answer: 0,
        topic: "SSR"
    },
    {
        id: 149,
        question: "What was the previous way to manage state before Hooks (in class components)?",
        options: ["useState","this.state and this.setState","Redux only","Context only"],
        answer: 1,
        topic: "History"
    },
    {
        id: 150,
        question: "What is the purpose of `package.json`?",
        options: ["To style the app","To store the database","To manage project metadata, scripts, and dependencies","To write JSX"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 151,
        question: "What is Redux Toolkit Query (RTK Query)?",
        options: ["A UI library","A type of reducer","A database","A powerful data fetching and caching tool"],
        answer: 3,
        topic: "Redux Toolkit"
    },
    {
        id: 152,
        question: "Which function in RTK is used for creating async logic?",
        options: ["createAsyncThunk","createSyncThunk","createAction","createReducer"],
        answer: 0,
        topic: "Redux Toolkit"
    },
    {
        id: 153,
        question: "What is 'MiddleWare' in Redux?",
        options: ["A bridge between state and UI","A function that acts on actions before they reach the reducer","A CSS processor","The React core"],
        answer: 1,
        topic: "Redux"
    },
    {
        id: 154,
        question: "What is the most popular Redux Middleware for side effects?",
        options: ["Redux Saga","Redux Thunk","All of the mentioned","Redux Observable"],
        answer: 2,
        topic: "Redux"
    },
    {
        id: 155,
        question: "Which hook is useful for checking if it's the first render?",
        options: ["useMemo","useEffect","useState","useRef"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 156,
        question: "What is 'Controlled Form' validation?",
        options: ["Validation that happens in real-time as the user types","Validation on submit only","No validation","Validation on the server"],
        answer: 0,
        topic: "Forms"
    },
    {
        id: 157,
        question: "Which of these is NOT a built-in React Hook?",
        options: ["useTransition","useAnimation","useDeferredValue","useId"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 158,
        question: "What does `useId` do?",
        options: ["Updates the element ID","Gets the user ID","Generates a unique ID for accessibility attributes","None of these"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 159,
        question: "What is the goal of 'Accessibility (a11y)' in React?",
        options: ["Making the app faster","Reducing code size","Improving SEO","Ensuring the app is usable by everyone, including people with disabilities"],
        answer: 3,
        topic: "Development"
    },
    {
        id: 160,
        question: "Which prop is used to handle input changes in a Controlled Component?",
        options: ["onChange","onInput","valueUpdate","handleChange"],
        answer: 0,
        topic: "Forms"
    },
    {
        id: 161,
        question: "In `formik`, what does `touched` mean?",
        options: ["The user clicked the field","The user interacted with the field and then left (onBlur)","The field was rendered","The field is invalid"],
        answer: 1,
        topic: "Formik"
    },
    {
        id: 162,
        question: "Which prop in Formik's `<Field>` allows custom component rendering?",
        options: ["component","render","All of the mentioned","as"],
        answer: 2,
        topic: "Formik"
    },
    {
        id: 163,
        question: "What does `Yup.object().shape({...})` define?",
        options: ["A CSS box","A JSON file","A geometry object","A validation schema"],
        answer: 3,
        topic: "Yup"
    },
    {
        id: 164,
        question: "Which hook would you use to wait for multiple states to update at once in v18?",
        options: ["useTransition","useEffect","useMemo","useContext"],
        answer: 0,
        topic: "Performance"
    },
    {
        id: 165,
        question: "What is the ‘Breadcrumb’ navigation pattern?",
        options: ["A list of items","A path showing the user's location in the site hierarchy","A fast route","A cookie system"],
        answer: 1,
        topic: "UI Patterns"
    },
    {
        id: 166,
        question: "Which file usually contains the navigation bar for all pages in a React app?",
        options: ["index.js","Nav.css","App.js (or a Layout component)","header.html"],
        answer: 2,
        topic: "Architecture"
    },
    {
        id: 167,
        question: "What is ‘Prop Validation’ in TypeScript?",
        options: ["using PropTypes","No validation needed","Using comments","Defining Interfaces or Types for Props"],
        answer: 3,
        topic: "TypeScript"
    },
    {
        id: 168,
        question: "What is the ‘Spread Operator’ used for in props passing?",
        options: ["To pass all properties of an object as individual props: `<Comp {...props} />`","To delete props","To rename props","To encrypt props"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 169,
        question: "What is the ‘Key’ prop’s primary purpose during re-rendering?",
        options: ["To style elements","To help React identify which items have changed","To link to a database","To provide a label"],
        answer: 1,
        topic: "Performance"
    },
    {
        id: 170,
        question: "What is ‘React Fiber’?",
        options: ["A new styling library","A fiber-optic connection","The internal reconciliation engine used since React 16","A testing tool"],
        answer: 2,
        topic: "Architecture"
    },
    {
        id: 171,
        question: "What is ‘Memoization’?",
        options: ["Memorizing code","Deleting cache","Managing memory","Caching the results of expensive function calls"],
        answer: 3,
        topic: "Performance"
    },
    {
        id: 172,
        question: "Which hook is best for handling an ‘Infinite Scroll’ logic?",
        options: ["useState and useEffect with scroll events","useScroll","useInfinite","useRepeat"],
        answer: 0,
        topic: "UI Patterns"
    },
    {
        id: 173,
        question: "What does ‘Tree Shaking’ do?",
        options: ["Cleans the DOM","Removes unused code from the final bundle","Minifies CSS","Optimizes images"],
        answer: 1,
        topic: "Optimization"
    },
    {
        id: 174,
        question: "Which library is common for React ‘Table’ implementation?",
        options: ["Simple Table","Grid Master","React Table / TanStack Table","React Grid"],
        answer: 2,
        topic: "Styling"
    },
    {
        id: 175,
        question: "What is the result of `1 + '1'` in JavaScript?",
        options: ["2","undefined","0","'11'"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 176,
        question: "What is the difference between `==` and `===`?",
        options: ["=== checks both value and type","None","== is faster","=== is for numbers only"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 177,
        question: "What does ‘DRY’ stand for in programming?",
        options: ["Do Repeat Yesterday","Don't Repeat Yourself","Data Release Yearly","Dynamic React Yield"],
        answer: 1,
        topic: "Best Practices"
    },
    {
        id: 178,
        question: "What is a ‘Closure’ in JavaScript?",
        options: ["Closing a component","A way to stop a loop","A function combined with its lexical environment","A specific JSX tag"],
        answer: 2,
        topic: "JavaScript"
    },
    {
        id: 179,
        question: "What is ‘Destructuring’?",
        options: ["Breaking a component","Cleaning the code","Deleting an object","Unpacking values from arrays or objects into distinct variables"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 180,
        question: "What is ‘Vite’?",
        options: ["A modern build tool and dev server","A React alternative","A styling library","An animation tool"],
        answer: 0,
        topic: "Environment"
    },
    {
        id: 181,
        question: "Which command starts a Vite development server?",
        options: ["npm run start","npm run dev","npm build","vite go"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 182,
        question: "What is ‘Zustand’ store’s ‘set’ function used for?",
        options: ["To get state","To reset the store","To update the state","To delete variables"],
        answer: 2,
        topic: "Zustand"
    },
    {
        id: 183,
        question: "How do you achieve ‘Persistence’ in a Zustand store?",
        options: ["Using a hook","Saving to DB","Manually","middleware persist()"],
        answer: 3,
        topic: "Zustand"
    },
    {
        id: 184,
        question: "What is a ‘Slug’ in routing?",
        options: ["A URL-friendly version of a string used as an ID","A slow route","A broken link","A part of CSS"],
        answer: 0,
        topic: "Router"
    },
    {
        id: 185,
        question: "What is ‘Helmet’ in React?",
        options: ["A security tool","A component to manage changes to the document head","A styling library","A build tool"],
        answer: 1,
        topic: "SEO"
    },
    {
        id: 186,
        question: "What is ‘Sitemap’?",
        options: ["A map of the city","A CSS file","A file that lists all pages of a website for search engines","A routing diagram"],
        answer: 2,
        topic: "SEO"
    },
    {
        id: 187,
        question: "What is ‘Robotstxt’ used for?",
        options: ["Controlling AI","Creating robots","Styling the site","Telling search engine crawlers which pages to index"],
        answer: 3,
        topic: "SEO"
    },
    {
        id: 188,
        question: "In Redux, can you have multiple Stores?",
        options: ["No, only one per application","Yes","Only in class components","In debug mode"],
        answer: 0,
        topic: "Redux"
    },
    {
        id: 189,
        question: "What is ‘Thunk’ in Redux Thunk?",
        options: ["A sound effect","A function that wraps an expression to delay its evaluation","A piece of state","An action"],
        answer: 1,
        topic: "Redux"
    },
    {
        id: 190,
        question: "What is ‘Hot Module Replacement (HMR)’?",
        options: ["A server protocol","Fast heating of components","Swapping, adding, or removing modules while an application is running, without a full reload","A CSS unit"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 191,
        question: "Which of these is a valid way to define a color in CSS?",
        options: ["rgb(255, 0, 0)","#ff0000","hsl(0, 100%, 50%)","All of the mentioned"],
        answer: 3,
        topic: "CSS"
    },
    {
        id: 192,
        question: "What does ‘Display: Flex’ do?",
        options: ["Enables a flexible layout for children","Makes the component invisible","Adds animation","Saves the state"],
        answer: 0,
        topic: "CSS"
    },
    {
        id: 193,
        question: "What does ‘Grid-template-columns’ do?",
        options: ["Defines the color","Defines the columns of a grid","Defines the rows","Defines the gap"],
        answer: 1,
        topic: "CSS"
    },
    {
        id: 194,
        question: "What is ‘Shadow DOM’?",
        options: ["A copy of the Real DOM","A dark theme","A browser technology used for encapsulating Web Components","An error state"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 195,
        question: "Is React a Framework or a Library?",
        options: ["Framework","Database","Language","Library"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 196,
        question: "What is ‘Next.js’?",
        options: ["A React framework for production","An old library","A CSS framework","A testing tool"],
        answer: 0,
        topic: "Next.js"
    },
    {
        id: 197,
        question: "Which hook provides information about the current location (URL)?",
        options: ["useParams","useLocation","useRoute","useUrl"],
        answer: 1,
        topic: "Router"
    },
    {
        id: 198,
        question: "How do you stop a re-render in a functional component?",
        options: ["stopRendering()","shouldComponentUpdate","React.memo","break;"],
        answer: 2,
        topic: "Performance"
    },
    {
        id: 199,
        question: "What is ‘Context API’?",
        options: ["A styling tool","A testing framework","A routing method","A way for a React app to effectively produce global variables"],
        answer: 3,
        topic: "Architecture"
    },
    {
        id: 200,
        question: "Who maintains React today?",
        options: ["Metas (formerly Facebook) and community","Google","Vercel","Microsoft"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 201,
        question: "What is ‘Chakra UI’ primarily known for?",
        options: ["Complex animations","Accessible and modular components","Server-side logic","Database management"],
        answer: 1,
        topic: "Styling"
    },
    {
        id: 202,
        question: "Which hook is used in React v18 for ‘Transition’ effects?",
        options: ["useLayoutEffect","useEffect","useTransition","useAnimation"],
        answer: 2,
        topic: "Performance"
    },
    {
        id: 203,
        question: "What does ‘Spline’ allow you to do in a React app?",
        options: ["Write better CSS","Fetch data","Manage state","Integrate 3D designs"],
        answer: 3,
        topic: "Ecosystem"
    },
    {
        id: 204,
        question: "What is ‘Storybook’ used for?",
        options: ["Developing and testing UI components in isolation","Writing novels","Publishing blogs","API documentation"],
        answer: 0,
        topic: "Ecosystem"
    },
    {
        id: 205,
        question: "What is ‘React Testing Library’s’ philosophy?",
        options: ["Test implementation details","Test components as users would interact with them","Test only logic","Test CSS only"],
        answer: 1,
        topic: "Testing"
    },
    {
        id: 206,
        question: "In ‘Jest’, which function is used to create a test suite?",
        options: ["test()","suite()","describe()","group()"],
        answer: 2,
        topic: "Testing"
    },
    {
        id: 207,
        question: "What is a ‘Mock’ in testing?",
        options: ["A joke","A routing error","A styled component","A fake implementation of a function or module"],
        answer: 3,
        topic: "Testing"
    },
    {
        id: 208,
        question: "Which hook provides access to the router's current state (v6)?",
        options: ["useLocation","useParams","useNavigate","useMatch"],
        answer: 0,
        topic: "Router"
    },
    {
        id: 209,
        question: "What does ‘Code Splitting’ help with?",
        options: ["Making code look better","Reducing the initial load time of the application","Sharing code on GitHub","Formatting code"],
        answer: 1,
        topic: "Performance"
    },
    {
        id: 210,
        question: "What is ‘Prefetching’ in React Router?",
        options: ["Deleting cache","Updating CSS","Loading data for a route before the user clicks on it","Running tests"],
        answer: 2,
        topic: "Router"
    },
    {
        id: 211,
        question: "Which of these is a ‘Semantic’ HTML tag?",
        options: ["<div>","<span>","<b>","<article>"],
        answer: 3,
        topic: "HTML"
    },
    {
        id: 212,
        question: "What is ‘Event Bubbling’?",
        options: ["Events moving from the target up through its parents","Events moving down to children","Deleting events","Creating multiple events"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 213,
        question: "How do you stop event propagation?",
        options: ["event.stop()","event.stopPropagation()","event.preventDefault()","return false;"],
        answer: 1,
        topic: "JavaScript"
    },
    {
        id: 214,
        question: "What is `this` in a regular function in strict mode?",
        options: ["The window object","The function itself","undefined","null"],
        answer: 2,
        topic: "JavaScript"
    },
    {
        id: 215,
        question: "What is the ‘Promise’ object used for?",
        options: ["Styling","Storing data","Synchronous loops","Asynchronous computations"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 216,
        question: "Which method is used to combine multiple promises?",
        options: ["Promise.all()","Promise.join()","Promise.combine()","Promise.wait()"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 217,
        question: "What is ‘Async/Await’?",
        options: ["A new language","Syntactic sugar for promises","A CSS processor","A testing framework"],
        answer: 1,
        topic: "JavaScript"
    },
    {
        id: 218,
        question: "Where should you call `useState`?",
        options: ["In a loop","In a conditional block","At the top level of a Functional Component","Inside an event handler"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 219,
        question: "Can two components share the same state without a global store?",
        options: ["No","Only with Redux","Only if they are siblings","Yes, by lifting state up to a common parent"],
        answer: 3,
        topic: "Architecture"
    },
    {
        id: 220,
        question: "What does the ‘?’ in `user?.name` represent?",
        options: ["Optional Chaining","Check for existence","A ternary operator","A syntax error"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 221,
        question: "What is the ‘Nullish Coalescing’ operator?",
        options: ["?","??","||","&&"],
        answer: 1,
        topic: "JavaScript"
    },
    {
        id: 222,
        question: "What is the purpose of ‘React.StrictMode’?",
        options: ["Enforces types","Builds the app for production","A development-only tool to help catch bugs","Disables console logs"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 223,
        question: "What is ‘Shallow Copy’?",
        options: ["A deep clone","Updating and renaming","Deleting an object","Copying only the top-level properties of an object"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 224,
        question: "What is a ‘Higher-Order Component’?",
        options: ["A function that takes a component and returns a new component","A component that renders more than 10 elements","A component with children","The root component"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 225,
        question: "How do you render a component based on a condition?",
        options: ["Using if statements inside JSX (invalid)","Using ternary operator inside JSX","Using while loops","None of these"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 226,
        question: "What is the purpose of `React.Fragment`?",
        options: ["To slow down the app","To create a piece of state","To group elements without adding a node to the DOM","To style items"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 227,
        question: "Which hook is used to get the previous value of props or state?",
        options: ["usePrevious (custom)","useState","useMemo","useRef"],
        answer: 3,
        topic: "Hooks"
    },
    {
        id: 228,
        question: "What is ‘Prop Types’?",
        options: ["A library to document and check prop types at runtime","A way to style props","A database of props","A testing tool"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 229,
        question: "Which tool can automatically format your React code?",
        options: ["ESLint","Prettier","Babel","Webpack"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 230,
        question: "What is ‘ESLint’?",
        options: ["A code formatter","A CSS preprocessor","A tool for identifying and reporting on patterns in JavaScript","A testing framework"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 231,
        question: "What is the result of `false || 'hello'`?",
        options: ["false","true","undefined","'hello'"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 232,
        question: "What is the result of `true && 'world'`?",
        options: ["'world'","true","null","false"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 233,
        question: "What is ‘Callback Hell’?",
        options: ["Too many callbacks in a single file","Deeply nested callback functions making code hard to read","A function that never returns","An error in Redux"],
        answer: 1,
        topic: "JavaScript"
    },
    {
        id: 234,
        question: "What solves ‘Callback Hell’?",
        options: ["Recursion","Loops","Promises and Async/Await","If statements"],
        answer: 2,
        topic: "JavaScript"
    },
    {
        id: 235,
        question: "What is the size of `Set` in JavaScript used for?",
        options: ["Finding duplicates","Counting lines","Storing keys","Storing unique values"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 236,
        question: "What is ‘Map’ in JavaScript?",
        options: ["An object that stores key-value pairs where any value can be a key","A geolocation tool","A list of numbers","A rendering function"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 237,
        question: "What is ‘Currying’?",
        options: ["Eating spicy food","A technique of converting a function that takes multiple arguments into a sequence of functions","A state management tool","An animation type"],
        answer: 1,
        topic: "JavaScript"
    },
    {
        id: 238,
        question: "What does ‘Immutability’ mean in the context of React state?",
        options: ["Changing state directly","Fixed state","Creating a new object/array instead of modifying the existing one","State that never changes"],
        answer: 2,
        topic: "Architecture"
    },
    {
        id: 239,
        question: "Which array method is best for creating a new array from an existing one with elements that pass a test?",
        options: ["map()","reduce()","forEach()","filter()"],
        answer: 3,
        topic: "JavaScript"
    },
    {
        id: 240,
        question: "What does `Array.reduce()` do?",
        options: ["Reduces an array to a single value by applying a function","Makes the array smaller","Deletes elements","Sorts the array"],
        answer: 0,
        topic: "JavaScript"
    },
    {
        id: 241,
        question: "How do you handle multiple inputs in a single `handleChange` function?",
        options: ["Use multiple functions","Use computed property names: `[e.target.name]: e.target.value`","Use a switch case","Manual updates"],
        answer: 1,
        topic: "Forms"
    },
    {
        id: 242,
        question: "Which hook is useful for ensuring data is correct before painting?",
        options: ["useMemo","useEffect","useLayoutEffect","useCheck"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 243,
        question: "What is ‘Batching’?",
        options: ["Running tests in parallel","Loading files","Deleting cache","Grouping updates"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 244,
        question: "What is ‘Synthetic Event’ in React?",
        options: ["A cross-browser wrapper around the browser's native event","A fake event","A styling event","A server event"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 245,
        question: "What is ‘React Portals’ main benefit?",
        options: ["Efficiency","Avoiding z-index and overflow:hidden issues for UI elements like modals","Smaller bundle size","Easier routing"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 246,
        question: "Which library is used to manage ‘Transitions’ and ‘Animations’ smoothly?",
        options: ["Framer Motion","React Motion","All of the mentioned","Animate-React"],
        answer: 2,
        topic: "Animation"
    },
    {
        id: 247,
        question: "What is ‘Responsive Design’?",
        options: ["A design that responds to clicks","A colorful design","A fast design","A design that adapts to different screen sizes"],
        answer: 3,
        topic: "Design"
    },
    {
        id: 248,
        question: "What is ‘Mobile First’ approach?",
        options: ["Designing for small screens first then scaling up","Buying a mobile first","Only building for mobile","Using mobile APIs"],
        answer: 0,
        topic: "Design"
    },
    {
        id: 249,
        question: "Which unit is best for ‘Fluid Typography’?",
        options: ["px","vw/vh","rem","em"],
        answer: 1,
        topic: "CSS"
    },
    {
        id: 250,
        question: "What is the ‘Box Model’ in CSS?",
        options: ["A way to store boxes","A 3D design","Padding, Border, Margin, and Content","A type of grid"],
        answer: 2,
        topic: "CSS"
    },
    {
        id: 251,
        question: "In Redux Toolkit, what does ‘createSlice’ automatically generate?",
        options: ["The UI","The Store","Middleware","Reducers and Action Creators"],
        answer: 3,
        topic: "Redux Toolkit"
    },
    {
        id: 252,
        question: "What is ‘RTK Query’s’ cache duration by default?",
        options: ["60 seconds","10 seconds","Infinite","Depends on the server"],
        answer: 0,
        topic: "Redux Toolkit"
    },
    {
        id: 253,
        question: "What is the ‘Payload’ of an action?",
        options: ["The action name","The data associated with the action","The error object","The previous state"],
        answer: 1,
        topic: "Redux"
    },
    {
        id: 254,
        question: "What is ‘Hydration’ in the context of state management?",
        options: ["Drinking water","Deleting state","Restoring state from storage on app load","Running an API"],
        answer: 2,
        topic: "State Management"
    },
    {
        id: 255,
        question: "Which hook would you use to create a ‘Dark Mode’ switcher?",
        options: ["useState","useContext","A custom useDarkMode hook","All of the mentioned"],
        answer: 3,
        topic: "UI"
    },
    {
        id: 256,
        question: "What is ‘FOUC’?",
        options: ["Flash of Unstyled Content","Fast Object Urban Code","First Object User Click","File Object Unit Check"],
        answer: 0,
        topic: "Web Development"
    },
    {
        id: 257,
        question: "What is ‘Lazy Initialization’ in `useState`?",
        options: ["Delaying state update","Passing a function to `useState` to compute initial value once: `useState(() => ...)` ","A slow component","Not using state"],
        answer: 1,
        topic: "Hooks"
    },
    {
        id: 258,
        question: "What is ‘React.Children’?",
        options: ["A list of child components","A nursery","A set of utilities for dealing with `this.props.children`","A component type"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 259,
        question: "What is ‘Referential Integrity’ in React dependencies?",
        options: ["Keeping refs safe","ID consistency","Checking IDs","Ensuring objects/functions don't change identity between renders unless needed"],
        answer: 3,
        topic: "Performance"
    },
    {
        id: 260,
        question: "Which of these is a popular ‘CSS Preprocessor’?",
        options: ["Sass","PostCSS","HTML","JSX"],
        answer: 0,
        topic: "CSS"
    },
    {
        id: 261,
        question: "What is ‘BEM’?",
        options: ["Best Easy Method","Block Element Modifier (CSS Naming Convention)","Build Every Module","Basic Entity Manager"],
        answer: 1,
        topic: "CSS"
    },
    {
        id: 262,
        question: "What is ‘Z-index’ used for?",
        options: ["Horizontal layout","Vertical margin","Stacking order of elements","Zoom level"],
        answer: 2,
        topic: "CSS"
    },
    {
        id: 263,
        question: "What is ‘Position: Absolute’ relative to?",
        options: ["The whole page","The document body","The viewport","The nearest positioned ancestor"],
        answer: 3,
        topic: "CSS"
    },
    {
        id: 264,
        question: "What is ‘Position: Fixed’ relative to?",
        options: ["The viewport","The nearest parent","The <div> element","The button"],
        answer: 0,
        topic: "CSS"
    },
    {
        id: 265,
        question: "What is ‘Position: Sticky’?",
        options: ["Always fixed","Positions an element based on the user's scroll position","Impossible to move","Random position"],
        answer: 1,
        topic: "CSS"
    },
    {
        id: 266,
        question: "What is ‘Intersection Observer’ used for?",
        options: ["Observing data","Measuring text","Detecting when an element enters/leaves the viewport","Testing"],
        answer: 2,
        topic: "Browser API"
    },
    {
        id: 267,
        question: "What is ‘Service Worker’?",
        options: ["A background task system","A styling tool","A server person","A script that runs in the background for caching and offline support"],
        answer: 3,
        topic: "Web Development"
    },
    {
        id: 268,
        question: "What is ‘PWA’?",
        options: ["Progressive Web App","Public Web Access","Private Website Area","Personal Web Account"],
        answer: 0,
        topic: "Web Development"
    },
    {
        id: 269,
        question: "What does ‘SPA’ stand for?",
        options: ["Simple Page App","Single Page Application","Static Page Area","Shared Path Array"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 270,
        question: "Which hook is useful for creating unique IDs?",
        options: ["useRef","useUnique","useId","useState"],
        answer: 2,
        topic: "Hooks"
    },
    {
        id: 271,
        question: "What is ‘Throttling’?",
        options: ["Naming a function","Running multiple functions","Stopping a function","Limiting how often a function can be called"],
        answer: 3,
        topic: "Optimization"
    },
    {
        id: 272,
        question: "What is ‘Debouncing’?",
        options: ["Running a function after a delay since the last call","Running a function once","Stopping a function","Updating a function"],
        answer: 0,
        topic: "Optimization"
    },
    {
        id: 273,
        question: "In React Router, what is a ‘Nested Route’?",
        options: ["A hidden route","A route inside another route","A broken route","A fast route"],
        answer: 1,
        topic: "Router"
    },
    {
        id: 274,
        question: "Which prop is used to define the URL path in `<Route>`?",
        options: ["to","url","path","link"],
        answer: 2,
        topic: "Router"
    },
    {
        id: 275,
        question: "What is ‘Dynamic Routing’?",
        options: ["Routing that changes","Server routing","Fast routing","Routes that are generated based on data or patterns like `:id`"],
        answer: 3,
        topic: "Router"
    },
    {
        id: 276,
        question: "What is ‘Base URL’?",
        options: ["The default URL of an API or site","The exit URL","A CSS path","A database name"],
        answer: 0,
        topic: "Networking"
    },
    {
        id: 277,
        question: "What is ‘CORS’?",
        options: ["Central Object Result Service","Cross-Origin Resource Sharing","Common Origin React Syntax","Cross Object Routing System"],
        answer: 1,
        topic: "Networking"
    },
    {
        id: 278,
        question: "Which status code means ‘OK’?",
        options: ["500","404","200","403"],
        answer: 2,
        topic: "Networking"
    },
    {
        id: 279,
        question: "Which status code means ‘Not Found’?",
        options: ["200","500","401","404"],
        answer: 3,
        topic: "Networking"
    },
    {
        id: 280,
        question: "Which status code means ‘Server Error’?",
        options: ["500","400","200","300"],
        answer: 0,
        topic: "Networking"
    },
    {
        id: 281,
        question: "What is ‘Axios’?",
        options: ["A styling library","A promise-based HTTP client","A database","A routing tool"],
        answer: 1,
        topic: "Networking"
    },
    {
        id: 282,
        question: "What is the benefit of Axios over Fetch?",
        options: ["It's browser-only","It's faster","It has automatic JSON transformation and better error handling","It's free"],
        answer: 2,
        topic: "Networking"
    },
    {
        id: 283,
        question: "What is ‘Query String’?",
        options: ["An error code","A CSS property","A database table","A part of URL that passes data: `?key=value` "],
        answer: 3,
        topic: "Networking"
    },
    {
        id: 284,
        question: "What is ‘Local Storage’ limit roughly?",
        options: ["5MB","1GB","100KB","Infinite"],
        answer: 0,
        topic: "Browser API"
    },
    {
        id: 285,
        question: "What is ‘Session Storage’?",
        options: ["Permanent storage","Storage that clears once the tab or browser is closed","A server session","A database session"],
        answer: 1,
        topic: "Browser API"
    },
    {
        id: 286,
        question: "What is ‘IndexedDB’?",
        options: ["A React component","A type of CSS","A low-level API for client-side storage of significant amounts of structured data","A testing tool"],
        answer: 2,
        topic: "Browser API"
    },
    {
        id: 287,
        question: "What is ‘Web Sockets’?",
        options: ["A way to plug in wires","A routing method","A CSS unit","Full-duplex communication over a single TCP connection"],
        answer: 3,
        topic: "Networking"
    },
    {
        id: 288,
        question: "Which hook is part of the new ‘Concurrent Mode’ features?",
        options: ["useDeferredValue","useState","useEffect","useRef"],
        answer: 0,
        topic: "Hooks"
    },
    {
        id: 289,
        question: "What is ‘Hydration’ in server-side React?",
        options: ["Cleaning the DOM","Attaching React behavior to pre-rendered HTML","Deleting scripts","Speeding up"],
        answer: 1,
        topic: "Architecture"
    },
    {
        id: 290,
        question: "What does ‘Next.js’ provide for SEO out-of-the-box?",
        options: ["Better code writing","Automatic styling","Static Site Generation (SSG) and Server-Side Rendering (SSR)","No SEO tools"],
        answer: 2,
        topic: "Next.js"
    },
    {
        id: 291,
        question: "Who is the creator of JavaScript?",
        options: ["Tim Berners-Lee","Mark Zuckerberg","Bill Gates","Brendan Eich"],
        answer: 3,
        topic: "History"
    },
    {
        id: 292,
        question: "When was React first released?",
        options: ["2013","2010","2015","2017"],
        answer: 0,
        topic: "History"
    },
    {
        id: 293,
        question: "What is ‘TypeScript’?",
        options: ["A styling language","A typed superset of JavaScript","A new browser","A React alternative"],
        answer: 1,
        topic: "TypeScript"
    },
    {
        id: 294,
        question: "What is the benefit of TypeScript in React?",
        options: ["Smaller files","Faster execution","Catch errors early with static typing","Easier CSS"],
        answer: 2,
        topic: "TypeScript"
    },
    {
        id: 295,
        question: "What is ‘Interface’ in TypeScript?",
        options: ["A visual design","A database table","A routing path","A way to define the shape of an object"],
        answer: 3,
        topic: "TypeScript"
    },
    {
        id: 296,
        question: "Can you pass functions as props in React?",
        options: ["Yes","No","Only in class components","Only with Redux"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 297,
        question: "What is ‘One-way Data Flow’?",
        options: ["Data moving randomly","Data moving only from parents to children","Data moving from children to parents","Bidirectional data"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 298,
        question: "What is ‘Ref’?",
        options: ["A styling property","A piece of state","A reference to a DOM node or a value that doesn't trigger re-render","A routing tag"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 299,
        question: "What is ‘React Fiber’s’ main goal?",
        options: ["Styling components","Increasing file size","Deleting code","Incrementally rendering updates"],
        answer: 3,
        topic: "Architecture"
    },
    {
        id: 300,
        question: "What is ‘Concurrent Rendering’?",
        options: ["The ability to work on multiple tasks at different priorities","Rendering at the same time","Sequential rendering","Rendering on the server only"],
        answer: 0,
        topic: "Architecture"
    }
];

export default questions;
