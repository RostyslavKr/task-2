// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppDispatch } from '../../hooks';
import { deleteNote, archiveNote, itemNote} from '../../redux/notesSlice';
import { setShowModal, setModalType } from '../../redux/modalSlice';

interface RowTableProps {
  id: number;
  name: string;
  created: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}

export const RowTable: React.FC<RowTableProps> = ({ id, name, created, category, content, dates, archived }) => {
    const dispatch = useAppDispatch();

      const handleEditNote = () => { 
      const note: RowTableProps = {
            id,
            name,
            created,
            category,
            content,
            dates,
            archived,
            }
    dispatch(itemNote(note));        
    dispatch(setModalType('edit'));
    dispatch(setShowModal());
    }
    
    return <li>
        <div>{name}</div>
        <div>{created}</div>
        <div>{category}</div>
        <div>{content}</div>
        <div>{dates}</div>
        <div>
        <button onClick={handleEditNote}><svg  width="18px" height="18px">
                <use href={sprite + "#icon-pencil"}></use>
          </svg>
          </button>
          <button onClick={() => dispatch(archiveNote(id))}><svg  width="18px" height="18px">
                <use href={sprite + "#icon-box-add"}></use>
          </svg>
          </button>
          <button onClick={() => dispatch(deleteNote(id))}>
          <svg width="18px" height="18px">
                <use href={sprite + "#icon-bin2"}></use>
          </svg>
          </button>
          </div>
      </li>
}