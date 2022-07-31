import React, { lazy, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import logo from 'assets/images/logo48.png';
import { APP_BG, PRIMARY } from 'app/styleConstants';
import LoginHeader from './LoginHeader';
import { Carousel } from 'antd';
import userPlate1 from 'assets/images/user_plate_1.png';
import userPlate2 from 'assets/images/user_plate_2.png';
import userPlate3 from 'assets/images/user_plate_3.png';
import { CarouselProps } from 'app/types';
import { SHOP_HEADER_TITLE } from 'globalConstants';
import { useAppSelector } from 'app/hooks';
import { useNavigate } from 'react-router-dom';


const Login = lazy(() => import('app/pages/Login/Login'));

const itemArr = [
  {
    img: userPlate1,
    title: 'Resources',
    text: '在成熟度模型中，迈向REST的第一步就是引入资源的概念',
  },
  {
    img: userPlate2,
    title: 'HTTP Verbs',
    text: 'REST倡导者建议使用所有HTTP动词，还试图从Web的成功之处来学习和借鉴',
  },
  {
    img: userPlate3,
    title: 'HATEOAS',
    text: '超媒体控制的关键在于它告诉我们下一步我们可以做什么，以及操作所需资源的URI',
  },
];


export default function UserLayout() {

  const [carouselData, setcarouselData] = useState<CarouselProps[]>(itemArr);
  const isLogin = useAppSelector(({ appState }) => appState.isLogin);
  let navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate])
  

  return (
    <LayoutWapper>
      <LeftWapper>
        <FormWapper>
          <LoginHeader logo={logo} title={SHOP_HEADER_TITLE} />
          <Login />
        </FormWapper>
      </LeftWapper>
      <RightWapper>
        <CarouselWapper>
          <Carousel autoplay centerMode draggable effect="fade">
            {carouselData.map(({ img, title, text }) => (
              <div key={title}>
                <img alt="logo" className="w-full" src={img} />
                <div className="pt-4 pb-10">
                  <h2 className="mb-2 text-xl font-bold text-center">
                    {title}
                  </h2>
                  <p className="text-center">{text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </CarouselWapper>
      </RightWapper>
    </LayoutWapper>
  )
}


const LayoutWapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color:  ${props => props.inputColor || APP_BG};
`;

const LeftWapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    background: white;
`;

const FormWapper = styled.div`
      margin-right: 90px;
      margin-left: auto;
      @media (max-width: 1540px) {
        margin-right: auto;
      }
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      width: 22rem;
`;

const RightWapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;


const CarouselWapper = styled.div`
      width: 400px;
      .slick-dots {
      li {
        button {
          background: ${APP_BG};
          opacity: 0.4;
        }

        &.slick-active button {
          background: ${PRIMARY};
        }
      }
    }
`;