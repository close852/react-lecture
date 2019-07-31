import React from 'react';
import style from './Box3.module.scss';
import cn from 'classnames'
//yarn add node-sass
function Box({ size }) {
  const isBig = size === "big";
  const sizeLabel = isBig?'큰 박스':'작은 박스'
    return <div className={cn(style.box,{[style.big]:isBig,[style.small]:!isBig})}> {sizeLabel}</div>;
}
export default Box;
