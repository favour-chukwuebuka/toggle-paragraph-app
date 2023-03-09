import { useState } from "react";

const ShortCircuit = () => {
    const [isError,setIsError] = useState(false);
    return (
        <>
      <button className='btn' onClick={()=>setIsError(!isError)}>Toggle</button>
      <h1 className="isError">{isError && <h2>Error...</h2> }</h1>
        <div>
        </div>
        </>
    )
};
export default ShortCircuit;