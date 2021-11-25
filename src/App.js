
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

// import React, { useState } from "react";

// //defining the hooks
// const App =() =>{
  
//   const [name, setName] = useState();
//   const [fullName,setFullName] = useState();
//   const [pass, setPassword] = useState(); 
//   const [fullPass,setFullPass] = useState();


// //Defining the target Values 

//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);   
//   };


//   const inputPass = (event) =>{
//     console.log(event.target.value);
//     setPassword(event.target.value);
//   }


//   //defining the events to store 

//   const onSubmit = (event) =>{
//     event.preventDefault(); //here preventDefalut stops tne default practice of refreshing the page while submiting
//     setFullName(name);
//     setFullPass(pass);
//   };



// //Main body
// return(
// <>
// {/*use of onSubmit direct triggers the onsubmit function by the sunmit button we dont have to pass tha  function on the button*/}

// <form onSubmit={onSubmit}>  

// <div>
//   <h1>Hello {fullName} {fullPass}</h1>

//   <input
//    type="text" 
//    placeholder="Enter Your Name" 
//    onChange={inputEvent}  //always use the function name
//    value={name}  // use the initial value of the hook
//    />

// <input
//    type="text"  
//    placeholder="Enter the Password" 
//    onChange={inputPass} //Always use the function name
//    value={pass}  //use the initial value of hooks
//    />
  
// <br/>

//   <button type="submit">Submit </button>
//   </div>
//   </form>
//   </>
// );


// };
// export default App;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//Tutorial 39  ***********************************


//Handling Complex Multiple Input Form States in React JS in Hindi
//simplification of the forms


// import React, { useState } from "react";

// //defining the hooks
// const App =() =>{
  
//   //Replaced to make it simpler
//   // const [name, setName] = useState();
//   // const [fullName,setFullName] = useState();
//   // const [last, setLast] = useState(); 
//   // const [fullLast,setFullLast] = useState();

// //using only a single Hook 
//   const [name, setName] = useState();

// //Defining the target Values
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);   
//   };


//   //defining the events to store 

//   const onSubmit = (event) =>{
//     event.preventDefault(); //here preventDefalut stops tne default practice of refreshing the page while submiting

//     // setFullName(name);   //****replaced****
//     // setFullLast(last);    //****replaced****
//   };



// //Main body
// return(
// <>
// {/*use of onSubmit direct triggers the onsubmit function by the sunmit button we dont have to pass tha  function on the button*/}

// <form onSubmit={onSubmit}>  

// <div>
//   <h1>Hello {fullName} {fullLast}</h1>
//   <h3>{email}</h3>

//   <input
//    type="text" 
//    placeholder="Enter Your First Name" 
//    onChange={inputEvent}  //always use the function name
//    value={name}  // use the initial value of the hook
//    />

// <input
//    type="text"  
//    placeholder="Enter the Last Name" 
//   //  onChange={inputLast} //Always use the function name  //****replaced****
//   onChange = {inputEvent} //we will call only a single function in all the input fields
//    value={last}  //use the initial value of hooks
//    />



// <input
//    type="email"  
//    placeholder="Enter the Email"
   
//    //****replaced****
//   //  onChange={inputLast} //Always use the function name
//   onChange = {inputEvent} //we will call only a single function in all the input fields

//    value={last}  //use the initial value of hooks
//    />
  
// <br/>

//   <button type="submit">Submit </button>
//   </div>
//   </form>
//   </>
// );


// };
// export default App;



//*************Updated code*************/
//*************tutotial 39/40**************/

// import React, { useState } from "react";


// const App = () =>{
//   const [fullName, setFullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   const inputEvent = (event) => {  //targeting the onChanhge in the input tag after tickling this, it will ber in function 
//     console.log(event.target.value);   //tageting the value 
//     console.log(event.target.name);    //targeting the name
    

//     // will target the tags in the input


//     // const value = event.target.value;
//     // const name = event.target.name;
//     const {value, name}= event.target;    

//     setFullName((preValue) => {     //updating the initial hook value 
//       // console.log(preValue);
//       if(name === "fName") {
//       return{
//         fname: value,
//         lname: preValue.lname,
//         email: preValue.email,
//         phone: preValue.phone,
//       };               
//       } else if(name === "lName") {
//         return{
//           fname: preValue.fname,
//           lname: value,
//           email: preValue.email,
//           phone: preValue.phone,
//         }; 
//       } 
//       else if(name === "email") {
//         return{
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: value,
//           phone: preValue.phone,
//         }; 
//       }  
      
//       else if(name === "mobile") {
//         return{
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: value,
//         };            
//       }});   
   
//   };    

//   //for the alert
//   const onSubmit = (event) =>{  
//     event.preventDefault(); 
//     alert("Form Submitted");
//   };  


// return(
// <>
// <form onSubmit={onSubmit}> 
// <div>
//   <h1>Hello {fullName.fname} {fullName.lname} </h1> 
//   <h3>{fullName.email}</h3> 
//   <h3> {fullName.phone}</h3>

//   <input
//    type="text" 
//    placeholder="Enter Your First Name" 
//    name="fName"
//    onChange={inputEvent}   //calling the inputEvent function
//    value={fullName.fname}  //hooks value
//    />
// <br/>

// <input
//    type="text"  
//    placeholder="Enter the Last Name"   
//    name ="lName"
//    onChange = {inputEvent} 
//    value={fullName.lname}  
//    />

// <input
//    type="email"  
//    placeholder="Enter the Email"   
//    name ="email"
//    onChange = {inputEvent} 
//    value={fullName.email}  
//    />

// <input
//    type="number"  
//    placeholder="Enter the Phone Number"   
//    name ="mobile"
//    onChange = {inputEvent} 
//    value={fullName.phone}  
//    />  



//   <button type="submit">Submit </button>
//   </div>
//   </form>
//   </>
// );


// };
// export default App;



//ALL done for the Forms, Added the First Name, Last Name, Phone Number, Email and averything
//All chllanges done for the form 

/*****************************************************************************************************************************************/





//********************Spread Operator***********************/
/*************Tutorial 42***************/

import React, { useState } from "react";


const App = () =>{
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
  });

  const inputEvent = (event) => {  
    console.log(event.target.value);   
    console.log(event.target.name);    

    const {value, name}= event.target;    

    setFullName((preValue) => {
       console.log(preValue);
       return {
         ...preValue,
         [name]: value,
       }      
    });   
   
  };    

  const onSubmit = (event) =>{  
    event.preventDefault(); 
    alert("Form Submitted");
  };  


return(
<>
<form onSubmit={onSubmit}> 
<div>
  <h1>Hello {fullName.fname} {fullName.lname} </h1> 
  <h3>{fullName.email}</h3> 
  <h3> {fullName.phone}</h3>
  <h3>{fullName.qua}</h3>

  <input
   type="text" 
   placeholder="Enter Your First Name" 
   name="fname"
   onChange={inputEvent}   
   value={fullName.fname} 
   />
<br/>

<input
   type="text"  
   placeholder="Enter the Last Name"   
   name ="lname"
   onChange = {inputEvent} 
   value={fullName.lname}  
   />

<input
   type="email"  
   placeholder="Enter the Email"   
   name ="email"
   onChange = {inputEvent} 
   value={fullName.email}  
   />

<input
   type="number"  
   placeholder="Enter the Phone Number"   
   name ="phone"
   onChange = {inputEvent} 
   value={fullName.phone}  
   />  

<input
   type="text"  
   placeholder="Enter the Qualification"   
   name ="qua"
   onChange = {inputEvent} 
   value={fullName.qua}  
   />  



  <button type="submit">Submit </button>
  </div>
  </form>
  </>
);


};
export default App;
