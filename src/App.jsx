import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./fetchPhoto";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { galleryPage } from "./redux/QuerySlice";
import { saveFetchedImages } from "./redux/ResultSlice";
import { fetchImages } from "./redux/galleryOps";

Modal.setAppElement("#root");

function App() {
  const query = useSelector(state => state.query.images)
  const galPage = useSelector(state => state.query.page)
  const galleryArray = useSelector(state => state.gallery.fetchedImages)
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [modal, setModal] = useState(false);
  const [bigpicture, setBigpicture] = useState(null);

const dispatch = useDispatch()


useEffect(()=>{
  if(!query)return;
  dispatch(fetchImages({query, galPage, perPage: 12}))
}, [dispatch, query, galPage])

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       setErr(false);
  //       const fetchedPhotos = await fetchPhoto(query, galPage);
  //       dispatch(saveFetchedImages(galPage !== 1 ? [...galleryArray, ...fetchedPhotos] : fetchedPhotos))
  //     } catch (error) {
  //       console.error(error)
  //       setErr(true);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [galPage, query]);

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
      {err && <ErrorMessage />}
      <ImageModal isOpen={modal} onClose={ModalClose} modalData={bigpicture} />
    </div>
  );
}

export default App;
