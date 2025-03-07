import { BsSearch } from "react-icons/bs";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { galleryPage, imagesTopic } from "../../redux/QuerySlice";

export default function SearchBar({ onSubmit }) {
const dispatch = useDispatch()

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchword.value.trim();
    if (!query) {
      toast.error("Write your query, please!", {
        duration: 4000,
        position: "top-left",
        style: { color: "red" },
      });
      return;
    }
    dispatch(imagesTopic(query))
    dispatch(galleryPage(1))
    onSubmit();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleInputSubmit}>
        <input
          type="text"
          className={css.input}
          name="searchword"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <BsSearch className={css.iconbtn} />
        </button>
      </form>
    </header>
  );
}
