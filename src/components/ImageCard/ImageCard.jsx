import { useDispatch } from "react-redux";
import css from "./ImageCard.module.css";
import { toggleModal, setSelectedImage } from "../../redux/ModaleSlice";
export default function ImageCard({ picture }) {
  const dispatch = useDispatch();
   const handleModalOpen = () => {
    dispatch(toggleModal(true))
    dispatch(setSelectedImage(picture))
   }
  return (
    <div onClick={handleModalOpen}>
      <img
        className={css.image}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </div>
  );
}
