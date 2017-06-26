import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import NavBar from './shared/NavBar';
import AppLeftNav from './shared/AppLeftNav';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
    constructor(props, context){
      super(props, context);
    }
 
    _onLeftIconButtonTouchTap(){
        this.refs.drawer.handleToggle();
    }

    componentWillMount() { 
      let setNavBarState = function(){
        this.setState({
           renderNavBar: document.body.clientWidth > 700
        })
      }.bind(this);
      setNavBarState();
      window.onresize = setNavBarState;
    }
    render() {
        return (
          <MuiThemeProvider>
            <div className="class-name">
              {/* 顶部导航栏 */}
              {this.state.renderNavBar?<NavBar />: 
              <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}/>
              }
              {/* 左侧边栏 */}
              <AppLeftNav ref='drawer' />            
            </div>
            </MuiThemeProvider>
        );
    }
}