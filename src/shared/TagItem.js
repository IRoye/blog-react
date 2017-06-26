/**
 * 首页，归档，标签， 友链， 关于 列表
 */
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';

export default class TagItem extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="class-name">
                    <List>
                        <ListItem primaryText="Inbox" leftIcon={< ContentInbox />}/>
                        <ListItem primaryText="Starred" leftIcon={< ActionGrade />}/>
                        <ListItem primaryText="Sent mail" leftIcon={< ContentSend />}/>
                        <ListItem primaryText="Drafts" leftIcon={< ContentDrafts />}/>
                        <ListItem primaryText="Inbox" leftIcon={< ContentInbox />}/>
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}