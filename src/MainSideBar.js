//  首页的右侧边栏
import React,{Component} from 'react';

export default class MainSideBar extends Component {
    getStyles(){
        return{
            root: {
                width: '45%',
                border: '1px solid black',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="app-mainSideBar" style={styles.root}>
                sideBar
            </div>
        );
    }
}