import React, { Component } from 'react';
import './List.css';
import {default as ListWrapper} from '../../components/ListWrapper/index';
import { default as Header } from "../../components/Header/index";
import API from "../../utils/API";

class List extends Component {
    state = {
        id: "",
        title: "",
        category: "",
        list: []
    }
    componentDidMount() {
        this.loadList();
    };

    loadList = () => {
        API.getList(this.props.match.params.id)
            .then(res => {
                this.setState({id: this.props.match.params.id, title: res.data.title, list: res.data.list, category: res.data.category})
            })
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <Header/>

            </div>
        )
    }
}

export default List;