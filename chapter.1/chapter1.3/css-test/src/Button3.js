import React from 'react';
import style from './Button3.module.scss';
import cn from 'classnames'
function Button({ size }) {
  if (size === 'big') {
    //classnames를 활용하기 className={`${style.button} ${style.big}` ->
    return <button className={cn(style.Button,style.big)}>큰 버튼</button>;
  } else {
    return <button className={cn(style.Button,style.small)}>작은 버튼</button>;
  }
}
export default Button;
