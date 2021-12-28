import React, { useState, useEffect, useRef } from "react";
import {
  PaginationBar,
  PaginationButton,
  PaginationContainer,
  PaginationWrapper,
} from "./PaginationElements";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { changePage } from "../../actions/productActions";

function Pagination() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPags, setPrevPags] = useState(1);
  const [postPags, setPostPags] = useState(1);
  const [leftPixels, setLeftPixels] = useState(0);
  const [cantPages, setCantPages] = useState(0);
  console.log(products.products.length);
  const hancleChangePage = () => {
    const arreglo = document.getElementsByTagName("input");
    setCantPages(arreglo.length);
    for (let i = 1; i < arreglo.length; i++) {
      arreglo[i].classList.remove("active");
      if (arreglo[i].value == currentPage) {
        arreglo[i].classList.add("active");
      }
    }
  };

  const handleNextButton = () => {
    console.log(cantPages);
    console.log(prevPags);
    console.log(leftPixels);
    console.log("aea");
    const container = document.getElementById("pagination_container");
    console.log(container);
    if (prevPags < cantPages - 5) {
      setPrevPags(prevPags + 1);
      setLeftPixels(leftPixels + 60);
      container.style.left = `-${leftPixels + 60}px`;
    }
  };
  const handlePrevButton = () => {
    console.log(cantPages);
    console.log(postPags);
    console.log(leftPixels);
    console.log("aea");
    const container = document.getElementById("pagination_container");
    console.log(container);
    if (postPags < cantPages - 5) {
      container.style.left = `-${leftPixels - 60}px`;
      setPrevPags(prevPags - 1);
      setLeftPixels(leftPixels - 60);
    }
  };

  //Cambio de pagina
  const handlePageClick = (event) => {
    setCurrentPage(event.target.value);
    dispatch(
      changePage(event.target.value, products.products[event.target.value - 1])
    );
  };
  useEffect(() => {
    console.log("aea mongol");
    hancleChangePage();
  }, [currentPage, prevPags]);

  return (
    <PaginationBar>
      {prevPags > 1 && (
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => handlePrevButton()}
        />
      )}
      <PaginationWrapper>
        <PaginationContainer
          id="pagination_container"
          scroll={products.products.length > 5 ? true : false}
        >
          {products !== undefined ? (
            products.products.map((item, index) => {
              return (
                <PaginationButton
                  value={index + 1}
                  type="button"
                  onClick={handlePageClick}
                />
              );
            })
          ) : (
            <h1>loading</h1>
          )}
        </PaginationContainer>
      </PaginationWrapper>
      {products.products.length > 5 && (
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => handleNextButton()}
        />
      )}
    </PaginationBar>
  );
}

export default Pagination;
