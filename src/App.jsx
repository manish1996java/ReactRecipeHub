import { useEffect, useState } from "react";


const App = () => {
  let [counter, setCounter] = useState(0);

  useEffect(()=>{
      console.log("work like a component will mount");
      return ()=>{
        console.log('will work link component will unmount');
      }
  },[]);

  // useEffect(()=>{
  //   console.log("on Update Counter");
  // },[counter]);


  function onClickHandler(){
    setCounter((preValue)=>preValue+1);
    // setCounter(counter+1);
  }


  return (
    <> 
      <h2>hello is the count : {counter}</h2>  
      <button onClick={onClickHandler}>Increament By One</button>
    </>
  )
}

export default App;