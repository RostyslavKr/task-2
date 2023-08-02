// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppDispatch} from "./../../hooks";
import { setShowModal, setModalType } from "./../../redux/modalSlice";
import { setCategory } from '../../redux/notesSlice';
interface SummaryNoteRowProps {
    category: string;
    activeCount: number;
    archivedCount: number;
}

export const SummaryNoteRow: React.FC<SummaryNoteRowProps> = ({ category, activeCount, archivedCount }) => {
  const dispatch = useAppDispatch();
    
    const showModalArchivedNote = () => { 
    dispatch(setCategory(category));
    dispatch(setModalType('list'));
    dispatch(setShowModal());
  }
    return <li className='flex justify-between py-2.5 px-4 my-1 rounded-md bg-green-100 text-black  font-normal fill-white font-mono hover:bg-green-200 focus:bg-green-200'>
            <div className='w-52'>{category}</div>
            <div className='w-52 text-center'>{activeCount}</div>
            <div className='relative top-0 left-24 flex items-center  w-52 '><div className='text-right mr-5 '>{archivedCount} </div>{archivedCount > 0 && (<button className='flex items-center p-1.5 bg-indigo-500 rounded-3xl hover:scale-105 focus:scale-105 'onClick={showModalArchivedNote}><svg width="18px" height="18px">
                <use href={sprite + "#icon-box-remove"}></use>
            </svg>
            </button>)}</div>
      
        </li>
}