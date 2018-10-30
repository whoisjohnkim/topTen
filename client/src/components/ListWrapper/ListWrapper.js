import React from "react";
import "./ListWrapper.css";
import {default as List} from "../List/index";


const ListWrapper = (props) => (
    <div>
        {props.list.map(item => (
            <List
                title={item.title}
                key={item._id}
                id={item._id}
            />
        ))}
    </div>
)



export default ListWrapper;