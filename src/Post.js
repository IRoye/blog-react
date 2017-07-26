//  展示文章的页面

import React,{Component} from 'react';
import axios from 'axios';
import config from './config/config';
import './style/Post.scss';
import {markdown} from 'markdown';

class Post extends Component {
    
    constructor(props){

        super(props);
        console.log('传参数：');
        const query = this.props.location.query;
        this.state = {
            postId: query.id,
            post: {}
        }

    }
    componentWillMount(){
        this.getPost();
    }


  MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
 }

    //  格式化日期
    formatDate(date){
       if(!date) return '';
       let formatDate = new Date(date); 
       let year = formatDate.getFullYear();
       let month = formatDate.getMonth();
       let day = formatDate.getDate();
       return year+'年'+month+'月'+day+'日';
    }
    // 将markdown 转为 html
    markdownToHtml(content){
      if(!content) return '';
      return markdown.toHTML(content);
    }
    // 获取文章
    getPost(){
       axios.get(`${config.host}/post/getPost`,{
           params:{
               postId: this.state.postId
           }
       }).then((res) => {
                console.log('返回文章：', res.data);
                // 获取日期；
                let date = res.data.post.createTime;
                let content = res.data.post.content;
                // 格式化：
                res.data.post.createTime = this.formatDate(date);
                res.data.post.content = this.markdownToHtml(content);
                console.log('年：', res.data);
                this.setState({
                    post: res.data.post,
                })

                console.log('文章：', this.state.post.title);
            })
            .catch(err => console.log(err))
    }
    render() {
        function createMarkup(content) {
            return {__html: content};
        }
        return (
            <div className="class-name" style={{
                backgroundColor: '#eceff1',
                listStyleType: 'disc',
                height: '100%',
                paddingBottom: '70px',
            }}>
               <div className='site-header' style={{
                  width: '100%',    
                  borderBottom: '1px solid black',
                  borderTop: '1px solid black',
                  minHeight: '200px',
                  backgroundColor: '#1d2b2d',
               }}></div>

               <div className='site-main' style={{
                   display: 'flex',
                   marginTop: '1rem',
                   justifyContent: 'space-around',

               }}>
                <div className='site-left' style={{
                    border: '1px solid #d5d5d5',
                    borderRadius: '5px',
                    backgroundColor: '#ffffff',
                    padding: '1rem .5rem',
                }}>
                 {/*  头部标题  */}
                 <div className='content-header' style={{
                     borderRadius: '5px',
                     padding: '1rem 1.5rem',
                     textAlign: 'center',
                     textTransform:'uppercase',
                 }}> <h2>{this.state.post.title} </h2>
                     <h5>{this.state.post.createTime}</h5>
                 </div>
                 {/*  文章主体内容*/}
                  <div dangerouslySetInnerHTML={createMarkup(this.state.post.content)} />
                </div>
                <div className='site-right' style={{
                    borderRadius: '5px',
                     width: '20%',
                     border: '1px solid #d5d5d5',
                     backgroundColor: '#ffffff',
                }}>234</div>
               </div>

            </div>
        );
    }
}

export default Post;