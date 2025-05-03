import { useDispatch } from "react-redux";
import css from "./ImageCard.module.css";
import { openModal, setSelectedImage } from "../../redux/ModaleSlice";
export default function ImageCard({ picture, onModalOpen }) {
  const dispatch = useDispatch();
   const handleModalOpen = () => {
    dispatch(openModal(true))
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
