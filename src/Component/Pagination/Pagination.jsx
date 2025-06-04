import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import './Pagination.scss'

function Pagination() {
  return (
    <div className="pagination home-pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
        </li>
        <li className="pagination__item pagination__item--active">
          <a className="pagination__link" href="#">
            <span>1</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>2</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>3</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>4</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>5</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>...</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <span>10</span>
          </a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
