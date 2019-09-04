import React from 'react';
import Sidebar from './sidebar'
import MainContent from './mainContent'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar />
                        </div>
                        <div className='col-md-9'>
                            <MainContent />
                        </div>
                    </div>                
                </div>                
            </div>
        )
    }
}

export default Home;