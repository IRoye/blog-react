/**
 * 侧边栏组件
 */
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import TagItem from './TagItem';

export default class AppLeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={open => this.setState({open})}
                    containerStyle={{
                    backgroundColor: '#DCDCDC',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Avatar size={100} style={{
                        margin: '1.5rem auto',
                    }}/>
                    <TagItem />
                </Drawer>
            </MuiThemeProvider>
        );
    }
}