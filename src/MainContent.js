/**
 * 盛放折叠的文章
 */
import React,{Component} from 'react';
import Folding from './Folding';

export default class MainContent extends Component {

    render() {
        return (
            <div className="app-mainContent">
                <Folding />
            </div>
        );
    }
}