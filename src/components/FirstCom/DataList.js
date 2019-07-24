import React, {Component} from 'react';
import '../App.css';

class DataList extends Component{
    render(){
        let stylecss = {
            border: '1px solid black',
            height: '300px',
            width: '600px',
            background: 'gray',
            padding: '10px 10px',
            margin: '0 auto'
        }
        return(
            <div className="main-class" style={stylecss}>
                <li>React Redux Full Course</li>
            </div>
        )
    }
}
export default DataList