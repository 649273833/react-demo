import React from 'react';


class List extends React.Component {
    render() {
        let {list} = this.props.storeState;
        return (
            <div className="list">
                {
                    list ?
                        list.map(data =>[
                                <div className='items' key={data.uid}>
                                    <div className={data.status ? 'item-head' : 'item-head active'}
                                         onClick={() => this.props.dispatch
                                         ({
                                             type: 'COLLAPSE', obj: {
                                                 uid: data.uid,
                                                 status: data.status === 1 ? 0 : 1
                                             }
                                         })
                                         }
                                        >
                                        <button onClick={()=>this.props.dispatch({type:'LOADING'})}>+</button>
                                        {data.cname}
                                        {data.uid}
                                        :
                                        {data.status}
                                        ,loading:
                                        {this.props.storeState.loading ? 1 : 0}
                                    </div>
                                    <div className='item-body'>
                                        {data.cip}
                                    </div>
                                    <div className='item-body'>
                                        {data.cip}
                                    </div>
                                    <div className='item-body'>
                                        {data.cip}
                                    </div>
                                </div>
                            ]
                        )
                        :
                        null
                }

            </div>

        );
    }
}

export default List;