import React from "react";
import { Btn, BtnLink } from "@/styled/btn/Btn";
import css from "./Pagination.module.scss";
import { getPagination } from "./getPagination";

type Props = {
  page: number;
  pageCount: number;
};

const Pagination = ({ page, pageCount }: Props) => {
  const canGoBack = page > 1;
  const canGoForward = page < pageCount;

  const shownButtons = getPagination(page, pageCount, 11);

  return (
    <nav className={css.paginationStack}>
      <Btn disabled={!canGoBack}>Back</Btn>

      <div className={css.pages}>
        {shownButtons.map((nr) => (
          <BtnLink
            className={css.mobileHidden}
            key={nr}
            href={`/browse?page=${nr}`}
            style={page === nr ? { fontWeight: "bold" } : undefined}
          >
            {nr}
          </BtnLink>
        ))}
      </div>

      <Btn disabled={!canGoForward}>Next</Btn>
    </nav>
  );
};

export default Pagination;
