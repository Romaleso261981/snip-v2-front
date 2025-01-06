import usePagination from "@/hooks/usePagination";
import { Pagination, Rating } from "@mui/material";
import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import { Review } from "@/types/types";
import { getRatingNote } from "@/utils/common";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(reviews.length / PER_PAGE);
  const _DATA = usePagination(reviews, PER_PAGE);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="flex flex-col gap-4">
      <h6>Average rate</h6>
      <div className="flex gap-10 items-center">
        <Rating readOnly value={getRatingNote(reviews)} precision={0.5} />
        <h5 className="">({getRatingNote(reviews)})</h5>(
        {reviews.length} reviews)
      </div>
      <hr />

      <div className="flex flex-col gap-8 my-10">
        {_DATA
          .currentData()
          .map((i: Review, idx: number) => <ReviewItem key={idx} item={i} />)}
      </div>

      <div className="">
        <Pagination
          count={count}
          page={page}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
