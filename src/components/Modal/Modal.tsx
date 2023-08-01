import { useAppDispatch, useAppSelector } from "./../../hooks";
import { setShowModal ,setModalType } from "./../../redux/modalSlice";
import { AddNoteForm } from '../Forms/AddNoteForm';
import { EditNoteForm } from '../Forms/EditNoteForm';
import { HeaderTableArchivedNotes } from "../Tables/TableArchivedNotes";
import { Table } from "../Table/Table";
export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const showModalStatus = useAppSelector(state => state.modal.showModal);
  const modalType = useAppSelector(state => state.modal.modalType);
  const itemNote = useAppSelector(state => state.notes.note);
  
  const handleCloseModal = () => {
    dispatch(setShowModal());
    dispatch(setModalType(''));
  };

  return (
    <div>
      <button onClick={handleCloseModal}>Close</button>
      <div>
        {showModalStatus && modalType === 'create' && (
          <AddNoteForm onClose={handleCloseModal} />
        )}
        {showModalStatus && modalType === 'edit' && (
          <EditNoteForm onClose={handleCloseModal} note={itemNote} />
        )}
        {showModalStatus && modalType === 'list' && (
          <Table> <HeaderTableArchivedNotes /> </Table>
        )}
      </div>
    </div>
  );
}