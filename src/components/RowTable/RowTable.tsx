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
    
    return <li className='flex items-center py-4 px-4 my-1.5 rounded-md bg-green-100 text-black  fill-white font-mono hover:bg-green-200 focus:bg-green-200 '>
        <div className='w-52 mr-4 '>{name}</div>
        <div className='w-52 mr-4 '>{created}</div>
        <div className='w-52 mr-4 '>{category}</div>
        <div className='w-52 mr-4 '>{content}</div>
        <div className='w-52 mr-4 '>{dates}</div>
        <div className='flex items-center justify-between w-52'>
        <button className='p-2.5 bg-yellow-300 rounded-3xl cursor-pointer hover:scale-105 focus:scale-105' onClick={handleEditNote}><svg  width="18px" height="18px">
                <use href={sprite + "#icon-pencil"}></use>
          </svg>
          </button>
          <button className='p-2.5 bg-indigo-500 rounded-3xl cursor-pointer hover:scale-105 focus:scale-105' onClick={() => dispatch(archiveNote(id))}><svg  width="18px" height="18px">
                <use href={sprite + "#icon-box-add"}></use>
          </svg>
          </button>
          <button className='p-2.5 bg-red-500 rounded-3xl cursor-pointer hover:scale-105 focus:scale-105' onClick={() => dispatch(deleteNote(id))}>
          <svg width="18px" height="18px">
                <use href={sprite + "#icon-bin2"}></use>
          </svg>
          </button>
          </div>
      </li>
}