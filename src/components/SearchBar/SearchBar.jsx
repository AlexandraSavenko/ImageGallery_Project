import { BsSearch } from "react-icons/bs";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { imagesTopic } from "../../redux/QuerySlice";
import { useState } from "react";

export default function SearchBar() {
const [input, setInput] = useState('')
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
