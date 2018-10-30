import React, {Component} from "react";
import API from "../../utils/API";
import "./All.css";
import { default as Header } from "../../components/Header/index";
import { default as Footer } from "../../components/Footer/index";
import { default as ListWrapper } from "../../components/ListWrapper/index";
import { Link } from "react-router-dom";

class All extends Component {
    state = {
        lists: []
    };

    componentDidMount() {
        this.loadLists();
    };

    sortList = () => {
        let sortedList = this.state.list;
        sortedList.sort((a, b) => {
            if(a.title < b.title) { return -1;}
            if(a.title > b.title) { return 1;}
            return 0;
        })

        this.setState({lists: sortedList});
    }

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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="allListsTitle">All Lists</h3>
                            {this.state.lists.map(list => (
                                <div className="linkDiv">
                                    <Link className="listLink" to={"/list/" + list._id}>{list.title}</Link>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default All;