/**
 * 
 * 博客的主体
 * 分为两部分：
 * 
 * 
 */

import React,{Component} from 'react';
import MainContent from './MainContent';
import MainSideBar from './MainSideBar';

export default class BlogMain extends Component {
    getStyles(){
        return{
            root:{
                display: 'flex',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="app-content" style={styles.root}>
                {/* 内容区 */}
                <MainContent />
                {/* 侧边栏 */}
                <MainSideBar />
            </div>
        );
    }
}