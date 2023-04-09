import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct } from "../JS/productSlice/productSlice";
import "../style/cards.css";
import { getproduct } from "../JS/productSlice/productSlice";
import { updateproduct } from "../JS/productSlice/productSlice";
import Editproduct from "./Editproduct";

const Card = ({ text }) => {
    useEffect(() => {
dispatch(getproduct())
    }, [])
    
    const product = useSelector((state) => state.product?.product);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [showedit, setshowedit] = useState(false)

    console.log(product);
    return (
        <div id="card">
            {product?.map((el) => (
                <div className="card-container">

                    <div id="but">
                        <button onClick={() => dispatch(deleteproduct( el?._id ))}>
                            x
                        </button>
                        <button onClick={()=>setshowedit(!showedit)}>Edit</button>
                        <div />
                        <div>
                            <img src={el?.image} alt="img" />
                        </div>
                        <div className="card-text">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/241/241507.png"
                                style={{ width: "20px", height: "20px", top: "10px" }}
                            />
                            <h2>{el?.name}</h2>
                            <p>{el?.description}</p>
                            <div className="card-middle-price">
                                <h3 id="prix">{el.price}</h3>
                                <span>Sqft</span>
                            </div>
                            <hr />

{showedit? <div>

{/* <input type="text" placeholder="Enter your new img"></input>
<input  type="text" placeholder="Enter your new house name"></input>
<button onClick={() => setshowedit()}>ok</button> */}



</div> :
<Editproduct  product={el}/>

}




                            { <div className="card-bottom-icons">
                                <div className="ll">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3728/3728966.png"
                                        className="logos"
                                    />
                                    <span>{el.bath}</span>
                                </div>
                                <div className="ll">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/895/895474.png"
                                        className="logos"
                                    />
                                    <span>{el.bed}</span>
                                </div>
                                <div className="ll">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1724/1724618.png"
                                        className="logos"
                                    />
                                    <span>{el.sqrt}</span>
                                </div>
                            </div> }
                        </div>
                    </div>
                    </div>
            ))}
                </div>
            )
};

            export default Card;
