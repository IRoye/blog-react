/**
 * 首页，归档，标签， 友链， 关于 列表
 */
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionStore from 'material-ui/svg-icons/action/store';
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import FileAttachment from 'material-ui/svg-icons/file/attachment';
import ActionFace from 'material-ui/svg-icons/action/face';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';

export default class TagItem extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="class-name">
                    <List>
                        <ListItem primaryText="首页" leftIcon={< ActionHome />}/>
                        <ListItem primaryText="归档" leftIcon={< ActionStore />}/>
                        <ListItem primaryText="标签" leftIcon={< ActionLoyalty />}/>
                        <ListItem primaryText="友链" leftIcon={< FileAttachment />}/>
                        <ListItem primaryText="关于" leftIcon={< ActionFace />}/>
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}