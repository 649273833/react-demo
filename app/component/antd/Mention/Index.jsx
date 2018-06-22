import React from 'react';
import {Mention,Form,Button} from 'antd'
const {toString,toContentState} = Mention;
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
class Index extends React.Component{
    state = {
        suggestion:[],
        loading:false
    };
    fetchSuggestions = (value,callback) =>{
        setTimeout(()=>{
            callback(users.filter(item => item.indexOf(value) !== -1))
        },500)
    };
    onSearchChange = (value) =>{
        this.fetchSuggestions(value,(suggestions)=>{
            this.setState({
                suggestions,
                loading:false
            })
        });
        this.setState({loading:true})
    };
    render(){
        const { suggestions, loading } = this.state;
        return(
            <div>
                <Mention
                    style={{width:'100%'}}
                    onChange={contentState =>console.log(toString(contentState))}
                    onSelect={suggestion =>console.log(suggestion)}
                    defaultValue={toContentState('@afc163')}
                    suggestions={['afc163','小明','小红','小王','静静']}
                />
                <Mention
                    style={{width:'100%'}}
                    loading={loading}
                    suggestions={suggestions}
                    onSearchChange={this.onSearchChange}
                />
            </div>
        )
    }
}
export default Index