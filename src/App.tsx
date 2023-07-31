import { useAppDispatch, useAppSelector} from "./hooks";
import { setShowModal, setModalType } from "./redux/modalSlice";

import { Table } from "./components/Table/Table";
import { Modal } from "./components/Modal/Modal";
function App() {
  const showModal = useAppSelector(state => state.modal.showModal);
 const dispatch = useAppDispatch(); 
  const handleCreateNote = () => {
    dispatch(setModalType('create'));
    dispatch(setShowModal());
  };
  return <>
    <Table />
      <button onClick={handleCreateNote}>Create Note</button>
    {showModal && (<Modal />)}
    
  </>
}

export default App;
