import React from 'react';
import styled from 'styled-components';

const BoxCommon= styled.div`
  width: ${props => props.isBig? 200 : 100}px;
  height: 50px;
  background-color: #aaaaaa;
`;
//기존BoxCommon.extend -> styled(BoxCommon)으로 문법 변경
//yarn add node-sass
function Box({ size }) {
  const isBig = size === "big";
  const sizeLabel = isBig?'큰 박스':'작은 박스'
    return <BoxCommon isBig={isBig}>{sizeLabel}</BoxCommon>;
}
export default Box;
