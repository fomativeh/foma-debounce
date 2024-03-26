# Input Debouncing
**Debouncing** is a best-practice technique that enhances the user experience of frontend applications and optimizes performance.  
It is typically used in applications that instantaneously query a database whenever an input field recieves a value.

## How it works
In applications that list matched records as a user types into an input field(e.g amazon or jumia product search), the database usually gets queried with each keystrike, and this may lead to redundant API calls, ultimately affecting performance and leading to a terrible user experience.  
```javascript
  //Queries the dataset without debounce functionality
  const queryDatasetWithoutDebounce = (query) => {
    if (query.trim() == "") return;

    //Executes this whenever the user strikes a key 
    const matchedResults = products.filter((eachName) =>
      eachName.toLowerCase().includes(query.toLowerCase())
    );
    console.log(
      `Dataset queried. \nResults: ${
        matchedResults.length > 0 ? matchedResults : "No match."
      }`
    );
  };
```
The idea is to **infuse a pause** with each keystrike, and only make queries after a few specified seconds. If typing continues before the pause-time elapses, the timer gets reset. The database is only queried after the pause-time elapses. 
```javascript
  //Stores debounce timer id
  let debounceTimer;

  //Queries the dataset with debounce functionality
  const queryDatasetWithDebounce = (query) => {
    //Doesn't execute an empty query
    if (query.trim() === "") return;

    //Resets timer on every key strike
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
    //Executes this after pause-time elapses
      const matchedResults = products.filter((eachName) =>
        eachName.toLowerCase().includes(query.toLowerCase())
      );
      console.log(
        `Dataset queried. \nResults: ${
          matchedResults.length > 0 ? matchedResults : "No match."
        }`
      );
    }, 1500);//Pause time is 1.5s
  };
```
This mechanism is known to effectively curb performance bottlenecks caused by redundant resource queries.  
A lot of libraries are available to achieve this, however i have written this from scratch using the setTimeout() function.