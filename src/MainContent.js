/**
 * 盛放折叠的文章
 */
import React,{Component} from 'react';
import Folding from './Folding';
import axios from 'axios';
import config from './config/config';

export default class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(`${config.host}/post/getPosts`).then((res) => {
                console.log('返回的文章.', res);
                this.setState({posts: res.data.posts})
            }).catch(err => console.log(err))
    }
    render() {
        let posts = this.state.posts.map((item, i) => {
            return (
            <div className="app-postitem" key={i}>
                <Folding key={i} id= {item._id} title={item.title} general={item.general} content={item.content} brief={item.content}/>
            </div>
        );
        });
        return (
            <div className="app-postwraper">
               {posts}
            </div>
        );
    }
}