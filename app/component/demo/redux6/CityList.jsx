import React from 'react';

class CityList extends  React.Component{
    render(){
        let {citylist} = this.props.storeState;
        return(
            <div className='list'>
                {
                    citylist ?
                        citylist.map(data =>[
                            <li key={data.uid}>
                                {'邮编：' + data.cid + '，'}
                                {'省份：' + data.cname}
                            </li>
                        ])
                        :
                        null
                }
            </div>
        )
    }
}
export default CityList