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
    return <li>
            <div>{category}</div>
            <div>{activeCount}</div>
            <div>{archivedCount} {archivedCount > 0 && (<span><button onClick={showModalArchivedNote}><svg width="18px" height="18px">
                <use href={sprite + "#icon-box-remove"}></use>
            </svg>
            </button></span>)}</div>
      
        </li>
}