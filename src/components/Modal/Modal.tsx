// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
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
    <div className="fixed inset-0 w-full h-full backdrop-blur-sm flex justify-center items-center z-10">
      
      <div className="flex flex-col max-w-4xl rounded-lg bg-white p-5 pt-2 pr-3 pb-7">
        <button className="self-end mb-2.5 hover:fill-orange-400 focus:fill-orange-400" onClick={handleCloseModal}><svg width="20px" height="20px">
              <use href={sprite + "#icon-cancel-circle"}></use>
            </svg></button>
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