import React, { Component } from 'react';
import { BackTop, Row, Col } from 'antd';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
// import styles from './Index.less';
import styles from '@/styles/app.less';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Col style={{background: '#ccc'}} xs={2} sm={4} md={6} lg={24}>test</Col>
        </Row>
        <Header />
        <Nav />
        <BackTop />
      </div>
    );
  }
}
