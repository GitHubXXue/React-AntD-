import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';


const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default (loader) => {
  return Loadable({
    loader,
    loading() {
      return (
        <div style={style}>
          <Spin tip="Loading... " delay={500} />
        </div>
      )
    }
  })
}