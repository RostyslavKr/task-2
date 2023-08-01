import { useAppDispatch, useAppSelector} from "./hooks";
import { setShowModal, setModalType } from "./redux/modalSlice";
import { HeaderTableNotes } from "./components/Tables/TableNotes";
import { HeaderTableNotesSummaryNotes } from "./components/Tables/TableSummaryNotes";
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
    <Table> <HeaderTableNotes /> </Table>
    <button onClick={handleCreateNote}>Create Note</button>
    <Table> <HeaderTableNotesSummaryNotes /> </Table>
    {showModal && (<Modal />)}
    
  </>
}

export default App;
