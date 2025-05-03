import { BsSearch } from "react-icons/bs";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { imagesTopic, queryParams } from "../../redux/QuerySlice";
// import { saveFetchedImages } from "../../redux/ResultSlice";
import { useState } from "react";
import { fetchImages } from "../../redux/galleryOps";

export default function SearchBar() {
  const [input, setInput] = useState('')
  // const qParams = useSelector(queryParams)
const dispatch = useDispatch()

const handleInputChange = (e) => {
  setInput(e.target.value)
}

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const query = input
    if (!query) {
      toast.error("Write your query, please!", {
        duration: 4000,
        position: "top-left",
        style: { color: "red" },
      });
      return;
    }

    dispatch(imagesTopic(query))
    // dispatch(galleryPage(1))
    // dispatch(fetchImages({qParams}))
    setInput('')
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleInputSubmit}>
        <input
          type="text"
          className={css.input}
          name="searchword"
          placeholder="Search images and photos"
          value={input}
          onChange={handleInputChange}
        />
        <button className={css.button} type="submit">
          <BsSearch className={css.iconbtn} />
        </button>
      </form>
    </header>
  );
}
