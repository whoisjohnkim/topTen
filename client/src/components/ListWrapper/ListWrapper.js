import React from "react";
import "./ListWrapper.css";
import arrow from "../../images/arrow.svg"

const ListWrapper = (props) => (

    <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="title">{props.title}</h3>

                {props.list.map(item => (
                    <div className="listItem">
                        <span className="itemText">{item}</span>
                        <span className="arrowSpan">
                            Votes:
                            <img src={arrow} className="upArrow arrow" alt="upArrow" onClick={props.upVote}/>
                            <img src={arrow} className="downArrow arrow" alt="downArrow" onClick={props.downVote}/>
                        </span>
                        <hr/>
                    </div>
                ))}

            </div>
        </div>
    </div>
)



export default ListWrapper;