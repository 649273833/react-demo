import React from 'react'
import '../../public/css/404.css'


class Errpage extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <div>
                <div className="err-header">
                    <h1>Error page</h1>
                </div>
                <div className="w3-main">
                    <div className="agile-info">
                        <h2>404</h2>
                        <h3>SORRY</h3>
                        <p>The Page You're Looking for Was Not Found.</p>
                        <a href="http://re.uu20.top"><i className="fa fa-angle-double-left" aria-hidden="true"></i>go back home</a>
                    </div>
                </div>
            </div>
        )
    }
}

export  default Errpage;