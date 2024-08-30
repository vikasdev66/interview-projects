import { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
  const [pageCount, setPageCount] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleImgFetch = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=nature&page=${pageCount}&per_page=5&orientation=landscape`,
      {
        method: "GET",
        headers: {
          Authorization:
            "rSTt2fFvZZljgxhMDQ4EZGlU1ecESajPjA08CEMR5xJYizONeCAZ4ZsB",
        },
      }
    );
    const data = await response.json();
    setPhotos((prev) => [...prev, ...data.photos]);
    setLoading(false);
  };
  useEffect(() => {
    const handleScroll = (e) => {
      console.log(e.target.scrollTop);
      setLoading(true);
      setPageCount((prev) => prev + 1);
    };
    const container = document.getElementsByClassName(
      "infinite-scroll-container"
    )[0];
    container.addEventListener("scrollend", handleScroll);
    return () => container.removeEventListener("scrollend", handleScroll);
  }, []);

  useEffect(() => {
    handleImgFetch();
  }, [pageCount]);

  return { photos, loading };
};
