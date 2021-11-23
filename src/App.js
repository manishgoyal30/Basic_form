
//tutorial 37

// import React, { useState } from "react";

// const App =() =>{

//   const [name, setName] = useState();  
//   const[fullName, setFullName] = useState();

//   const inputEvent = (event) => {
//      setName(event.target.value);    
//   };

//   const onSubmit =() =>{
//     setFullName(name);
//   };

//   return(
//   <>
//   <div>
//     <h1> Hello {fullName}</h1>
//     <input type = 'text'  placeholder= "Enter Your Name" onChange={inputEvent} value={name}/>

//     <button onClick={onSubmit}> Submit  </button>
//   </div>
// </>
// );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Tutorial 38

import React, { useState } from "react";

//defining the hooks
const App =() =>{
  
  const [name, setName] = useState();
  const [fullName,setFullName] = useState();
  const [pass, setPassword] = useState(); 
  const [fullPass,setFullPass] = useState();


//Defining the target Values 

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);   
  };


  const inputPass = (event) =>{
    console.log(event.target.value);
    setPassword(event.target.value);
  }


  //defining the events to store 

  const onSubmit = (event) =>{
    event.preventDefault(); //here preventDefalut stops tne default practice of refreshing the page while submiting
    setFullName(name);
    setFullPass(pass);
  };



//Main body
return(
<>
{/*use of onSubmit direct triggers the onsubmit function by the sunmit button we dont have to pass tha  function on the button*/}

<form onSubmit={onSubmit}>  

<div>
  <h1>Hello {fullName} {fullPass}</h1>

  <input
   type="text" 
   placeholder="Enter Your Name" 
   onChange={inputEvent}  //always use the function name
   value={name}  // use the initial value of the hook
   />

<input
   type="text"  
   placeholder="Enter the Password" 
   onChange={inputPass} //Always use the function name
   value={pass}  //use the initial value of hooks
   />
  
<br/>

  <button type="submit">Submit </button>
  </div>
  </form>
  </>
);


};
export default App;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Tutorial 39