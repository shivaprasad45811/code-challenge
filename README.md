# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
Question 2: What steps would you take to future improve this?<br>

Answer 1: In this project i have utilised fetch API but also we can use third party libraries like axios. But it depends on the scenario and requirement of the project and security

Answer 2: We can move asynchrounous tasks to thunks to make components more presentational and we could also use custom hooks for reusability.

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Question 5: Describe the benefits of immutable code.<br>

Answer 5 : Immutability, No explicitly adding action creators. 
Answers 6 : To avoid the un-intended beahaviour, Isloation of logic, every upates will run parallely regardless of others.

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?

Answer: We can put a debugger point in the reducer.

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Question 8: What is A High Order Component?
Question 9: What use cases would a HOC be usefull?
Question 10: What does it indicate when a component is prefixed with `use` and `with`
Question 11: What is a Generic type in typescript?
Question 12: Whats the difference between a controlled and uncontrolled input in React?


Answer 7) It is the combination of component did mount, component did update, component will unmount
          component did mount : Will excuted after the intial page load - empty dependency array
          
         component did mount ->  useEffect(() => {

          }, [])

          component did update : Will exceute after the dependency changes
            useEffect(() => {

            },[data])

          component will unmount : used to clean up the code if needed. example : timers

          useEffect(() => {
            return ///
          }, [data])

Answer 8 ) HOC is a component that wraps another component

Answer 9) Creating a model we can use HOC for code resuability
          There are laso inbuilt HOC's like provider in redux

Answer 10) use prefix - custom hooks
            with prefic - 

Ansswer 11) Generic types are added dynamically. For example if there is any function which does know what parameters are getting passed or may be types are dynamically addedd the we can use geenric types

Answer 12) controlled means chnages the input value or to be precise managing the state using react states like useState, whereas uncontrolled means input itself manages their state so we no need to add value attribute to it.







