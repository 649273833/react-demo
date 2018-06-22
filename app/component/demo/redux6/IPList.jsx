import React from 'react';

class IPList extends React.Component {
    render() {
        let {iplist} = this.props.storeState;
        return (
            <div className="list">
                {
                    iplist ?
                        iplist.map(data =>[
                            <li key={data.uid}>
                                {'id='+data.uid+','}
                                {'ip='+data.cip}
                            </li>
                        ])
                        :
                        null
                }

            </div>

        );
    }
}

export default IPList;