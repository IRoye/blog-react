//  首页的右侧边栏
import React,{Component} from 'react';

export default class MainSideBar extends Component {
    getStyles(){
        return{
            root: {
                width: '30%',
                border: '1px solid #d5d5d5',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="app-mainSideBar" style={styles.root}>
                123
            </div>
        );
    }
}