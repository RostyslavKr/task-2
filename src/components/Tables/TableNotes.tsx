// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppSelector } from "../../hooks";
import { RowTable } from "../RowTable/RowTable";

export const HeaderTableNotes: React.FC = () => {
  const notes = useAppSelector(state => state.notes.items);
    return <><li className='flex items-center mt-5 px-4  py-5 rounded-md bg-green-500 text-white uppercase font-semibold fill-white font-mono'>
        <div className='w-52 pr-3'>Name</div>
        <div className='w-52 pr-3'>Created</div>
        <div className='w-52 pr-3'>Category</div>
        <div className='w-52 pr-3'>Content</div>
        <div className='w-52 pr-3'>Dates</div>
        <div className='flex justify-between w-44'>
        <svg width="18px" height="18px">
            <use href={sprite + "#icon-pencil"}></use>
          </svg>
          <svg width="18px" height="18px">
            <use href={sprite + "#icon-box-add"}></use>
          </svg>
          <svg width="18px" height="18px">
            <use href={sprite + "#icon-bin2"}></use>
          </svg>
        </div>
  </li>
   {notes.filter((note) => note.archived !== true).map((note) => (
          <RowTable key={note.id} {...note} />
        ))} </> 
}

// Task #C2E3F1
// Idea #A0C6A4
// Random #EAD2BC