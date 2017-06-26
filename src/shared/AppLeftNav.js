/**
 * 侧边栏组件
 */
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionStore from 'material-ui/svg-icons/action/store';
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import FileAttachment from 'material-ui/svg-icons/file/attachment';
import ActionFace from 'material-ui/svg-icons/action/face';
import {List, ListItem, makeSelectable} from 'material-ui/List';
let SelectableList = makeSelectable(List);

 class AppLeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
      open: false,
      selectedIndex: '/home'
    };
    }


    handleUpdateSelectedIndex(e, index) {
    console.log(e);
    this.context.router.push(index);
    this.setState({
      open: false,
      selectedIndex: index,
    });
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
                    flexDirection: 'column'
                }}>
                    <Avatar
                        size={100}
                        style={{
                        margin: '1.5rem auto'
                    }}/>
                    <SelectableList
                        value={this.state.selectedIndex}
                        onChange={this.handleUpdateSelectedIndex.bind(this)} >
                        <ListItem primaryText="首页" value='/home' leftIcon={< ActionHome />}/>
                        <ListItem primaryText="归档" value='/archive' leftIcon={< ActionStore />}/>
                        <ListItem primaryText="标签" value='/tag' leftIcon={< ActionLoyalty />}/>
                        <ListItem primaryText="友链" value='/kindLink' leftIcon={< FileAttachment />}/>
                        <ListItem primaryText="关于" value='/about' leftIcon={< ActionFace />}/>
                    </SelectableList>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default AppLeftNav;