import React from 'react';
import styled from 'styled-components';

const BoxCommon= styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;
//기존BoxCommon.extend -> styled(BoxCommon)으로 문법 변경
const BoxBig= styled(BoxCommon)`
  width:200px;
`;

const BoxSmall= styled(BoxCommon)`
  width:200px;
`;
//yarn add node-sass
function Box({ size }) {
  if (size === 'big') {
    return <BoxBig>큰 박스</BoxBig>;
  } else {
    return <BoxSmall>작은 박스</BoxSmall>;
  }
}
export default Box;
