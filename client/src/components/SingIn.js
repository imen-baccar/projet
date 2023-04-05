import React, { useState } from 'react';




const SingIn = () => {
  const [show, setShow] = useState(false);
  return (
    
     <div style={{ marginTop: "-8px" }}>
      <>
        <button onClick={() => setShow(!show)} style={{ backgroundColor: "transparent", border: "none", color: "black",marginTop:"10px" }}>
        
          SingIn
          
        </button>
        {show &&  
        <div>
            aazertyuiop

          </div>}
        </>
    </div>
  )
}

export default SingIn
