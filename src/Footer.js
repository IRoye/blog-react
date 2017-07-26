import React,{Component} from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer  className='site-footer' style={{
                backgroundColor: 'black',
                width: '100%',
                minHeight: '70px',
                position: 'absolute',
                bottom: '0',
                color: 'white',
                lineHeight: '70px',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '300',
            }}>
            <span>&copy;2017 郭艳婷</span> 
            </footer>
        );
    }
}