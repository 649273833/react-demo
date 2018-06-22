import React from 'react'

class Centers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:''
        }
    }
    componentDidMount(){
        let uname=localStorage['uname']
        alert(uname)
        this.setState({list:uname})
    }
    render(){
        let list=this.state.list
        return(
            <div className='container'>
                {
                    list ? list : null
                }
            </div>
        )
    }

}
export default Centers