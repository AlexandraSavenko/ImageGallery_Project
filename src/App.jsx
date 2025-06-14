import { useEffect } from "react";
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
  // const [modal, setModal] = useState(false);
  // const [bigpicture, setBigpicture] = useState(null);

const dispatch = useDispatch()

useEffect(()=>{
  if(!query)return;
  dispatch(fetchImages({query: query, page: page, perPage: 12}))
}, [dispatch, query, page])

  const handleLoadMore = () => {
    dispatch(galleryPage(page + 1))
  };

  // const handleModal = (picture) => {
  //   console.log(picture)

  //   setBigpicture(picture);
  //   setModal(true);
  // };

  // const ModalClose = () => {
  //   setModal(false);
  // };
  return (
    <div>
      <SearchBar />
      <Toaster />
      <ImageGallery resultsArr={galleryArray} />
      {loading && <Loader />}
      {galleryArray.length > 0 && <LoadMoreButton onLoadMore={handleLoadMore} />}
      {error && <ErrorMessage />}
      <ImageModal />
    </div>
  );
}

export default App;
