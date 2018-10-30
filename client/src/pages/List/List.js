import React, { Component } from 'react';
import './List.css';
import {default as ListWrapper} from '../../components/ListWrapper/index';
import { default as Header } from "../../components/Header/index";
import { default as Footer } from "../../components/Footer/index";
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
                <ListWrapper
                    title={this.state.title}
                    list={this.state.list}
                    category={this.state.category}
                    key={this.state.id}
                />
                <Footer/>
            </div>
        )
    }
}

export default List;