import React from "react";
import "./List.css";

const List = (props) => (

    <div>
        <h3><a href={"/list/" + props._id}>{props.title}</a></h3>
    </div>
)



export default List;