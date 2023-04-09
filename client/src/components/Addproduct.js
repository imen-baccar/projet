import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproduct } from '../JS/productSlice/productSlice';

function Addproduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [house, sethouse] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  })

  const dispatch = useDispatch();
 
  return (
    <div style={{ marginTop: "-8px" }}>
      <>
        <button onClick={() => setShow(!show)} style={{ backgroundColor: "transparent", border: "none", color: "black",marginTop:"10px" }}>
        
          Add property
          
        </button>
        {show &&
          <div className='modal-container'>
            <div>
              <h1 style={{textAlign:'center',arginBottom:"20px"}}>Add House</h1>
            </div>
            <div>
              <div className='modal-inputs'>
                <div className="mb-3" controlId="formBasicEmail">
                  <label>Product image</label>
                  <input type="text" placeholder="Enter image product" onChange={(e) => sethouse({ ...house, image: e.target.value })} />

                </div>
                <div className="mb-3" controlId="formBasicEmail">
                  <label>Product title</label>
                  <input type="text" placeholder="Enter title product" onChange={(e) => sethouse({ ...house, name: e.target.value })} />

                </div>
                <div className="mb-3" controlId="formBasicEmail">
                  <label>Product description</label>
                  <input type="text" placeholder="Enter description" onChange={(e) => sethouse({ ...house, description: e.target.value })} />

                </div>
                <div className="mb-3" controlId="formBasicEmail">
                  <label>Product price</label>
                  <input type="text" placeholder="Enter price" onChange={(e) => sethouse({ ...house, price: e.target.value })} />

                </div>

              </div>
            </div>
            <div id='addd'>
              <button id='close' variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button id='add' variant="primary" onClick={() => { dispatch(addproduct(house)); handleClose() }}>
                Add house
              </button>
            </div>
          </div>
        }
      </>
    </div>
  )
}

export default Addproduct
