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
            }}>
            </footer>
        );
    }
}