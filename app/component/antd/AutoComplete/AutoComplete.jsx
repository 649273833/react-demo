import React from 'react';
import {AutoComplete,Input,Icon} from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const {TextArea} = Input;
class MyAutoComplete extends React.Component{
    render(){
        let {dataSource,dataSource2,dataSource3,dataSource4,result}=this.props.storeState;
        const children = result.map((email)=>{
            return <Option key={email}>{email}</Option>
        });
        const renderTitle=(title)=>{
            return (
                <span>
                    {title}
                    <a
                        href="https://www.baidu.com/s?ie=UTF-8&wd=antd"
                        style={{float:'right'}}
                        target='_blank'
                        rel='noopener noreferrer'
                    >查看更多</a>
                </span>
            )
        };
        const options = dataSource4.map(group =>(
            <OptGroup
                key={group.title}
                label={renderTitle(group.title)}
            >
                {group.children.map(opt => (
                    <Option key={opt.title} value={opt.title}>
                        {opt.title}
                        <span className="certain-search-item-count">{opt.count} 人 搜索</span>
                    </Option>
                ))}
            </OptGroup>
        )).concat([
            <Option disabled key="all" className="show-all" style={{textAlign:'center'}}>
                <a
                    href="https://www.baidu.com/s?ie=UTF-8&wd=antd"
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    查看所有结果
                </a>
            </Option>,
        ])
        return(
            <div>
                <AutoComplete
                    dataSource={dataSource}
                    style={{width:200}}
                    onSelect={(valueSelect)=>this.props.dispatch({type:'onSelect',valueSelect:valueSelect})}
                    onSearch={(valueSearch)=>this.props.dispatch({type:'handleSearch',valueSearch:valueSearch})}
                    placeholder='小红、小明、小明、。。。。。'
                />
                <br/>
                <br/>
                <AutoComplete
                    dataSource={dataSource3}
                    style={{width:200}}
                    onSelect={(valueSelect3)=>this.props.dispatch({type:'onSelect3',valueSelect3:valueSelect3})}
                    onSearch={(valueSearch3)=>this.props.dispatch({type:'handleSearch3',valueSearch3:valueSearch3})}

                >
                    <TextArea
                        placeholder='文本框'
                        className='custom'
                        style={{height:50}}
                        onKeyPress={(ev)=>this.props.dispatch({type:'handleKeyPress',ev:ev})}
                    />
                </AutoComplete>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AutoComplete
                    style={{width:200}}
                    onSelect={(valueSelect2)=>this.props.dispatch({type:'onSelect2',valueSelect2:valueSelect2})}
                    onSearch={(valueSearch2)=>this.props.dispatch({type:'handleSearch2',valueSearch2:valueSearch2})}
                    placeholder='输入邮箱'
                >
                    {children}
                </AutoComplete>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AutoComplete
                    style={{width:200}}
                    dataSource={dataSource2}
                    placeholder='不分大小写'
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1}
                />

                <br/>
                <br/>
                <br/>
                <br/>
                <div  className="certain-category-search-wrapper" style={{ width: 250 }}>
                    <AutoComplete
                        className="certain-category-search"
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={false}
                        dropdownStyle={{ width: 300 }}
                        size='large'
                        style={{width:'100%'}}
                        dataSource={options}
                        placeholder='搜索antd'
                        optionLabelProp="value"

                    >
                        <Input suffix={<Icon
                            type="search"
                            className="certain-category-icon"
                            onClick={()=>this.props.dispatch({type:'onClick4'})}

                        />}
                               onSelect={(evl)=>this.props.dispatch({type:'onSelect4',evl:evl})}
                        />
                    </AutoComplete>
                </div>
            </div>
        )
    }
}
export default MyAutoComplete;