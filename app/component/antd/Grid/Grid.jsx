import React from 'react'
import {Row,Col} from 'antd'
class Grid extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <div className='gutter-example'>
                    <Row gutter={16}>
                        <Col className='gutter-row' span={6}>
                            <div className='gutter-box'>
                                col-6
                            </div>
                        </Col>
                        <Col className='gutter-row' span={6}>
                            <div className='gutter-box'>
                                col-6
                            </div>
                        </Col>
                        <Col className='gutter-row' span={6}>
                            <div className='gutter-box'>
                                col-6
                            </div>
                        </Col>
                        <Col className='gutter-row' span={6}>
                            <div className='gutter-box'>
                                col-6
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={8} >col-8</Col>
                        <Col span={8} offset={8}>col-8 offset8</Col>
                    </Row>
                    <Row>
                        <Col span={6} offset={6}>offset6 col-6</Col>
                        <Col span={6} offset={6}>offset6 col-6</Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>offset6 col-12</Col>
                    </Row>
                    <Row>
                        <Col span={18} push={6}>col-18 push6</Col>
                        <Col span={6} pull={18}>col-6 pull18</Col>
                    </Row>
                    flxe布局
                    <p>align left</p>
                    <Row type='flex' justify='start'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <p>align center</p>
                    <Row type='flex' justify='center'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <p>align right</p>
                    <Row type='flex' justify='end'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <p>sub-element monospaced arrangement</p>
                    <Row type='flex' justify='space-between'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <p>full</p>
                    <Row type='flex' justify='space-around'>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                        <Col span={4}>col-4</Col>
                    </Row>
                    <div className='gutter-example'>
                        <Row gutter={16}>
                            <Col className='gutter-row' xs={4} sm={4} md={6} lg={6}>
                                <div className='gutter-box'>
                                    col
                                </div>
                            </Col>
                            <Col className='gutter-row' xs={{ span: 14, offset: 6 }}   sm={16} md={12} lg={12}>
                                <div className='gutter-box'>
                                    col
                                </div>
                            </Col>
                            <Col className='gutter-row' xs={0} sm={4} md={6} lg={6}>
                                <div className='gutter-box'>
                                    col
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Grid