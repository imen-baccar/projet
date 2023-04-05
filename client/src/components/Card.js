import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct } from "../JS/productSlice/productSlice";
import "../style/cards.css";

const Card = ({ text }) => {
    const product = useSelector((state) => state.product?.product);
    console.log(product);
    const dispatch = useDispatch();
    return (
        <div id="card">
            {product?.map((el) => (
                <div className="card-container">

                    <div id="but">
                        <button onClick={() => dispatch(deleteproduct({ id: el.id }))}>
                            x
                        </button>
                        <button>Edit</button>
                        <div />
                        <div>
                            <img src={el.img} alt="img" />
                        </div>
                        <div className="card-text">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/241/241507.png"
                                style={{ width: "20px", height: "20px", top: "10px" }}
                            />
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <div className="card-middle-price">
                                <h3 id="prix">{el.price}</h3>
                                <span>Sqft</span>
                            </div>
                            <hr />
                            <div className="card-bottom-icons">
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
                            </div>
                        </div>
                    </div>
                    </div>
            ))}
                </div>
            )
};

            export default Card;
