
import { SPACE_MD, SPACE_TIMES, FONT_SIZE_ICON_XXL, FONT_WEIGHT_BOLD, LINE_HEIGHT_ICON_XXL } from 'app/styleConstants';
import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/shop.jpeg'


const Brand = () => {
  return (
    <Wapper>
      <img src={logo} alt="logo" />
      <h1>一站式商品管理平台</h1>
    </Wapper>
  )
}

export default Brand;

const Wapper = styled.header`
  display: flex;
  align-items: center;
  margin-top: ${SPACE_TIMES(30)};

  h1 {
    padding: 0 ${SPACE_TIMES(7)} 0 ${SPACE_MD};
    font-size: ${FONT_SIZE_ICON_XXL};
    font-weight: ${FONT_WEIGHT_BOLD};
    line-height: ${LINE_HEIGHT_ICON_XXL};
  }

  img {
    width: 300px;
    height: 250px;
  }
`;
