import React from 'react';
import {getPgaesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPgaesArray(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map((p) =>
                <span
                    key = {p}
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page__current' : 'page'}
                >
                     {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;