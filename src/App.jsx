import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { galleryPage, queryParams } from "./redux/QuerySlice";
import { fetchImages } from "./redux/galleryOps";
import { errorResult, loadingResult } from "./redux/ResultSlice";

Modal.setAppElement("#root");

function App() {
  const {query, page} = useSelector(queryParams)
  const error = useSelector(errorResult)
  const galleryArray = useSelector(state => state.gallery.fetchedImages)
  const loading = useSelector(loadingResult)
  const [modal, setModal] = useState(false);
  const [bigpicture, setBigpicture] = useState(null);

const dispatch = useDispatch()

useEffect(()=>{
  if(!query)return;
  console.log(page)
  dispatch(fetchImages({query: query, page: page, perPage: 12}))
}, [dispatch, query, page])

  const handleLoadMore = () => {
    console.log('load more', page)
    dispatch(galleryPage(page + 1))
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
      {error && <ErrorMessage />}
      <ImageModal isOpen={modal} onClose={ModalClose} modalData={bigpicture} />
    </div>
  );
}

export default App;
