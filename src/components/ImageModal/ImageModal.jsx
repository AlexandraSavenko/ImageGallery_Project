import { useEffect } from "react";
import ReactModal from "react-modal";
import Loader from "../Loader/Loader";
import css from "./ImageModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isOpen, selectedImage, toggleModal } from "../../redux/ModaleSlice";

// import "./ImageModal.css";
export default function ImageModal() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(isOpen)
  const imageInfoObj = useSelector(selectedImage)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        dispatch(toggleModal(false))
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
    document.removeEventListener("keydown", handleEsc);
    };
  }, [dispatch, isModalOpen]);

  const handleModalClose = () => {
    dispatch(toggleModal(false))
  }
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      ariaHideApp={true}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.overlay}
      className={css.modal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.712)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          // overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
        },
      }}
    >
      <div>
        {imageInfoObj ? (
          <img
            className={css.image}
            src={imageInfoObj && imageInfoObj.urls.regular}
            alt={imageInfoObj && imageInfoObj.urls.alt_description}
          />
        ) : (
          <Loader />
        )}
      </div>
    </ReactModal>
  );
}
