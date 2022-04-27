import React from "react";
import styled from "styled-components";
import {
  FaRegHeart,
  FaStar,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FaArrowRight />
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FaArrowLeft />
      </button>
    </div>
  );
};

function flashCard({ productItems }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <section>
              <div className="card">
                <div>
                  <span>{productItems.discount}% off</span>
                  <figure>
                    <img src={productItems.cover} alt="" />
                  </figure>
                  <div>
                    <label>0</label>
                    <br />
                    <FaRegHeart />
                  </div>
                </div>
                <div>
                  <h3>{productItems.name}</h3>
                  <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <h4>{productItems.price}.00</h4>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  .control-btn {
    .next {
      position: absolute;
      top: 40%;
      right: 20px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      svg {
        color: #0f3460;
      }
    }
    .prev {
      position: absolute;
      top: 40%;
      left: 20px;
      z-index: 100;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      svg {
        color: #0f3460;
      }
    }
  }
  img {
    width: 150px;
  }
  section {
    position: relative;
    .card {
      padding: 10px 20px;
      margin: 10px;
      div:nth-child(1) {
        span {
          font-size: 1.2rem;
        }
        label {
          position: absolute;
          top: 20px;
          right: 30px;
          color: #0f3460;
          display: none;
          font-size: 1.3rem;
        }
        svg {
          position: absolute;
          top: 50px;
          right: 30px;
          display: none;
        }
      }
      div:nth-child(1):hover {
        label {
          display: inline-block;
        }
        svg {
          display: inline-block;
        }
      }
    }
    div {
      background-color: #fff;
      figure {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      div:nth-child(2) {
        div:nth-child(2) {
          svg {
            color: #ffcd4e;
            text-align: start;
          }
          text-align: start;
        }
        div:nth-child(3) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #e94560;
          button {
            cursor: pointer;
            color: #e94560;
            background: none;
            border: none;
            font-size: 1rem;
            background-color: #f6f6f6;
            padding: 5px;
            border-radius: 5px;
          }
          button:hover {
            transition: 0.5s;
            background-color: #e94560;
            color: #f6f6f6;
          }
        }
      }
      text-align: start;
    }
  }
`;

export default flashCard;
