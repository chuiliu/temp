import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Header extends Component {
  render() {
    return (
      <div className="header-box container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-logo col-lg-6 pull-left hidden-xs hidden-sm">
              <a href="#"></a>
            </div>
            <div className="header-info col-lg-6 col-xs-12 pull-right">
              <div className="header-wx">
                <div className="header-qrcode"></div>
              </div>
              <input className="header-input" type="text" autoComplete="off" />
              <button className="header-btn">搜索</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
