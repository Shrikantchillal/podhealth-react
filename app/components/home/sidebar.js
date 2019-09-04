import React from 'react';
import Accordion from '../common/accordion/accordion'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pods: [],
            customers: []
        }
    }

    componentWillMount() {
        const apiUrl = 'http://localhost:3000/pods';
        axios.get(apiUrl)
            .then(res => {
                console.log('res', res.data)
                this.setState({
                    pods: res.data
                })
                // res.data.forEach(element => {
                //     console.log(element.pod_name)
                // });
            })
    }

    render() {
        return (
            <div> 
                {this.state.pods.map((pod, index) => (
                    <div key={index}>                        
                        <Link to= {`/podpage/${pod.pod_id}`}>{pod.pod_name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}
    
export default Sidebar;