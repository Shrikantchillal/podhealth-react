import React from 'react';
import Header from './header'

class PodPage extends React.Component {
    render() {
        const { params } = this.props.match
        console.log(params)
        return(
            <div className='container-fluid'>
                <Header />
                <div className='row'>
                    <div className='col-md-12'>
                        {params.podid}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>

                    </div>
                    <div className='col-md-9'>
                    
                    </div>

                </div>                
                    
            </div>
        )
    }
}

export default PodPage;