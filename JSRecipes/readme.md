Vue stuff I would like to write about.

- from components, calling into an action, how to listen to results
  - Have action return a Promise.
  - Have component listen to state variable within the store module, import state/getters into component.
    - set state variable
    - set getter
    
- Vuex 
  - if trying to call to a different module from a module will probably need to use 'dispatch("<module>/actionName", data, {root: true})'
  - use actions to make Axios/http calls on return commit mutations.
  
  
