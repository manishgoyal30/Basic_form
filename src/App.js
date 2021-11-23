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



import React, { useState } from "react";

const App =() =>{
  
  const [name, setName] = useState(); 

  const [fullName,setFullName] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () =>{
    setFullName(name);
  };
return(
<>
<div>
  <h1>Hello {fullName}</h1>

  <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
  

  <button onClick={onSubmit}>Submit </button>
  </div>
  </>
);

};
export default App;





  
