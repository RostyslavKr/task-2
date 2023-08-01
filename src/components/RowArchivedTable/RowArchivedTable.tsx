// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { unarchiveNote } from '../../redux/notesSlice';
import { useAppDispatch } from '../../hooks';
interface RowArchivedTableProps {
  id: number;
  name: string;
  created: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}

export const RowArchivedTable: React.FC<RowArchivedTableProps> = ({ id, name, created, category, content, dates }) => {
    const dispatch = useAppDispatch();
    return <li>
            <div>{name}</div>
            <div>{created}</div>
            <div>{category}</div>
            <div>{content}</div>
            <div>{dates}</div>
            <div>
              <button onClick={() => dispatch(unarchiveNote(id))}>
                <svg width="18px" height="18px">
                  <use href={sprite + "#icon-box-remove"}></use>
                </svg>
              </button>
            </div>
          </li>
}