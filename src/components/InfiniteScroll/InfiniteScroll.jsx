import React from "react";
import { Loading } from "..//index";
import { useInfiniteScroll } from "./useInfiniteScroll";
import "./InfiniteScroll.css";

export const InfiniteScroll = () => {
  const { photos, loading } = useInfiniteScroll();
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">Infinite Scroll</h1>
        <div className="infinite-scroll-container">
          {photos.map((photo, index) => {
            const { src, alt } = photo;
            return (
              <img
                key={index}
                src={src.landscape}
                alt={alt}
                loading="lazy"
                // className="infinite-scroll-img"
              />
            );
          })}
          {loading ? <Loading /> : ""}
        </div>
      </div>
    </div>
  );
};
