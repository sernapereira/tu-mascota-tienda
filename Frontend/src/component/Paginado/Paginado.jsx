import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./Paginado.module.css";
import { setCurrentPage } from "../../redux/slice/pageSlice";
import { useDispatch, useSelector } from "react-redux";

const Paginado = ({ cards }) => {
  const { currentPage, cardsPerPage } = useSelector(
    (state) => state.pagination
  );

  const dispatch = useDispatch();

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [cardsPerPage, dispatch]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getCurrentCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex);
  };

  return (
    <div className={style.container}>
      <div className={style.cards}>
        {getCurrentCards().map((card) => (
          <div key={card.id} className={style.cards__card}>
            <Card
              id={card.id}
              name={card.name}
              edad={card.edad}
              color={card.color}
              genero={card.genero}
              raza={[card.raza]}
              imagen={card.imagen}
            />
          </div>
        ))}
      </div>

      <div className={style.pagination}>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={style.pagination__boton}
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={style.pagination__boton}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === totalPages} className={style.pagination__boton}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginado;
