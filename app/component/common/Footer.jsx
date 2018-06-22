import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className='footer'>
                <div className='container'>
                    <p>©Copyright 2018 | This is a React demo | Design By 小 半。</p>
                </div>
            </div>
        )
    }
}
export default Footer