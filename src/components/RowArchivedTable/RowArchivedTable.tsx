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
    return <li className='flex justify-between items-center py-2.5 px-4 my-1 rounded-md bg-green-100 text-black  font-normal fill-white font-mono hover:bg-green-200 focus:bg-green-200'>
            <div className='w-52'>{name}</div>
            <div className='w-52'>{created}</div>
            <div className='w-52'>{category}</div>
            <div className='w-52'>{content}</div>
            <div className='w-52'>{dates}</div>
            <div className='w-52'>
              <button className='p-2.5 bg-indigo-500 rounded-3xl cursor-pointer hover:scale-105 focus:scale-105' onClick={() => dispatch(unarchiveNote(id))}>
                <svg width="18px" height="18px">
                  <use href={sprite + "#icon-box-remove"}></use>
                </svg>
              </button>
            </div>
          </li>
}