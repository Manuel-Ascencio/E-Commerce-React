import React from "react";
import styled from "styled-components";
import Sdata from "./Sdata.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlideCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <Content>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <section key={index}>
              <div>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button>Visit Collections</button>
              </div>
              <div>
                <img src={value.cover} alt="" />
              </div>
            </section>
          );
        })}
      </Slider>
    </Content>
  );
}

const Content = styled.div`
  button::before {
    font-size: 30px;
    color: #0f3460;
  }
  position: absolute;
  margin-left: 27%;
  top: 225px;
  width: 60%;
  section {
    margin-top: 30px;
    padding: 0 50px;
    display: flex !important;
    div {
      padding: 20px 0;
      img {
        width: 200px;
      }
    }
    div:nth-child(1) {
      width: 70%;
      h1 {
        font-size: 2.2rem;
        font-weight: 800;
      }
      p {
        margin: 20px 0;
        font-weight: 500;
      }
      button {
        border: none;
        background-color: #e94560;
        color: #f6f6f6;
        padding: 10px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      width: 30%;
      img {
      }
    }
  }
`;

export default SlideCard;
