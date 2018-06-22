import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',pwd:''};

        this.handleChangeUname = this.handleChangeUname.bind(this);
        this.handleChangeUpwd = this.handleChangeUpwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUname(event) {
            this.setState({value: event.target.value})
    }
    handleChangeUpwd(event) {
        this.setState({pwd: event.target.value});
    }
    handleSubmit(event) {
       console.log(this.state.value,this.state.pwd)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChangeUname} />
                </label>
                <label>
                    PassWord:
                    <input type="password" value={this.state.pwd} onChange={this.handleChangeUpwd} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NameForm