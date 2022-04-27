import React from "react";
import clothing from "../../images/categoriesImg/clothing.svg";
import electronic from "../../images/categoriesImg/electronic.svg";
import car from "../../images/categoriesImg/car.svg";
import garden from "../../images/categoriesImg/garden.svg";
import gifts from "../../images/categoriesImg/gifts.svg";
import guitar from "../../images/categoriesImg/guitar.svg";
import health from "../../images/categoriesImg/health.svg";
import pets from "../../images/categoriesImg/pets.svg";
import toys from "../../images/categoriesImg/toys.svg";
import groceries from "../../images/categoriesImg/groceries.svg";
import books from "../../images/categoriesImg/books.svg";
import styled from "styled-components";
function Categories() {
  const data = [
    {
      categoryImg: clothing,
      categoryName: "Clothing",
    },
    {
      categoryImg: electronic,
      categoryName: "Electronic",
    },
    {
      categoryImg: car,
      categoryName: "Cars",
    },
    {
      categoryImg: garden,
      categoryName: "Home & Garden",
    },
    {
      categoryImg: gifts,
      categoryName: "Gifts",
    },
    {
      categoryImg: guitar,
      categoryName: "Music",
    },
    {
      categoryImg: health,
      categoryName: "Health & Beauty",
    },
    {
      categoryImg: pets,
      categoryName: "Pets",
    },
    {
      categoryImg: toys,
      categoryName: "Baby Toys",
    },
    {
      categoryImg: groceries,
      categoryName: "Groceries",
    },
    {
      categoryImg: books,
      categoryName: "Books",
    },
  ];
  return (
    <>
      <CategoriesData>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.categoryImg} alt="" />
              <span>{value.categoryName}</span>
            </div>
          );
        })}
      </CategoriesData>
    </>
  );
}

const CategoriesData = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  margin-top: 20px;
  border-radius: 5px;
  width: 25%;
  // position: absolute;
  div {
    display: flex;
    padding: 8px 15px;

    img {
      width: 20px;
      heigth: 20px;
      object-fit: contain;
    }
    span {
      display: block;
      text-align: start;
      margin-left: 10px;
      font-size: 0.9rem;
    }
  }
  div:hover {
    background-color: #ffe1e6;
    cursor: pointer;
  }
`;

export default Categories;
