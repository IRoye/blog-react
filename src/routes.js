// 
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Post from './Post';

// 导出路由规则
export default(
  <Route path='/' component={App}>
     <Route path='/home' component={Home} />
     <Route path='/about' component={About} />
     <Route path='/post' component={Post} />
      {/* 展示单篇文章  */}
     {/* 默认子组件 */}
     <IndexRoute component={Home} />
  </Route>
);