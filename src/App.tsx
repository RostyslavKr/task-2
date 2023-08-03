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
  return <div className="mr-auto ml-auto max-w-4xl px-5 pb-5">
    <Table> <HeaderTableNotes /> </Table>
    <button className="py-1.5 px-2.5 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:bg-green-600" onClick={handleCreateNote}>Create Note</button>
    <Table> <HeaderTableNotesSummaryNotes /> </Table>
    {showModal && (<Modal />)}
    
  </div>
}

export default App;
