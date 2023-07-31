import { useAppDispatch, useAppSelector } from "./../../hooks";
import { setShowModal ,setModalType } from "./../../redux/modalSlice";
import { AddNoteForm } from '../Forms/AddNoteForm';
import { EditNoteForm } from '../Forms/EditNoteForm';

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const showModalStatus = useAppSelector(state => state.modal.showModal);
  const modalType = useAppSelector(state => state.modal.modalType);
  
  
  
  const showModalArchivedNote = () => { 
    setModalType('list');
    dispatch(setShowModal());
  }
  const handleCloseModal = () => {
    dispatch(setShowModal());
    dispatch(setModalType(''));
  };

  return (
    <div>
      <button onClick={handleCloseModal}></button>
      <div>
        {showModalStatus && modalType === 'create' && (
          <AddNoteForm onClose={handleCloseModal} />
        )}
        {showModalStatus && modalType === 'edit' && (
          <EditNoteForm onClose={handleCloseModal} note={"kool"} />
        )}
      </div>
    </div>
  );
}