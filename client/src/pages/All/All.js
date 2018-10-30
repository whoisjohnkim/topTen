import React, {Component} from "react";
import API from "../../utils/API";
import "./All.css";
import { default as Header } from "../../components/Header/index";
import { default as Footer } from "../../components/Footer/index";
import { default as ListWrapper } from "../../components/ListWrapper/index";

class All extends Component {
    state = {
        lists: []
    };

    componentDidMount() {
        this.loadLists();
    };

    loadLists = () => {
        API.getLists()
            .then( res => {
                this.setState({lists: res.data})
            })
            .catch( err => console.log(err));

    }

    render() {
        return(
            <div>
                <Header/>
                <ListWrapper list={this.state.lists}/>
                <Footer/>
            </div>
        )
    }
}

export default All;