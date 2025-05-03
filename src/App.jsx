import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import { fetchPhoto } from "./fetchPhoto";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { galleryPage, queryParams } from "./redux/QuerySlice";
import { fetchImages } from "./redux/galleryOps";
import { loadingResult } from "./redux/ResultSlice";

Modal.setAppElement("#root");

function App() {
  const {query, page} = useSelector(queryParams)
  const galleryArray = useSelector(state => state.gallery.fetchedImages)
  const galPage = query.page
  const loading = useSelector(loadingResult)
  // const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState(false);
  const [modal, setModal] = useState(false);
  const [bigpicture, setBigpicture] = useState(null);

const dispatch = useDispatch()

useEffect(()=>{
  if(!query)return;
  dispatch(fetchImages({query: query, page: page, perPage: 12}))
}, [dispatch, query])

  const handleLoadMore = () => {
    dispatch(galleryPage(galPage + 1))
  };

  const handleModal = (picture) => {
    setBigpicture(picture);
    setModal(true);
  };

  const ModalClose = () => {
    setModal(false);
  };
  return (
    <div>
      <SearchBar />
      <Toaster />
      <ImageGallery resultsArr={galleryArray} onModalOpen={handleModal} />
      {loading && <Loader />}
      {galleryArray.length > 0 && <LoadMoreButton onLoadMore={handleLoadMore} />}
      {/* {err && <ErrorMessage />} */}
      <ImageModal isOpen={modal} onClose={ModalClose} modalData={bigpicture} />
    </div>
  );
}

export default App;
