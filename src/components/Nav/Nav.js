import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="nav-box container hidden-xs hidden-sm">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <ul className="navbar">
          <li className="nav-item"><Link to="/home">首页</Link></li>
          <li className="nav-item"><Link to="#">要闻资讯</Link></li>
          <li className="nav-item"><Link to="#">精彩视频</Link></li>
          <li className="nav-item"><Link to="#">品牌活动</Link></li>
          <li className="nav-item"><Link to="#">各地联动</Link></li>
          <li className="nav-item"><Link to="#">志愿者协会</Link></li>
          <li className="nav-item"><Link to="#">资料下载</Link></li>
        </ul>
      </div>
    </div>
  </div>
);
