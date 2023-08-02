// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppSelector } from "../../hooks";
import { RowArchivedTable } from "../RowArchivedTable/RowArchivedTable";

export const HeaderTableArchivedNotes: React.FC = () => {
  const notes = useAppSelector(state => state.notes.items);
  const category = useAppSelector(state => state.notes.category);
    return <><li className='flex items-center mt-5 px-4  py-5 rounded-md bg-green-500 text-white uppercase font-semibold fill-white font-mono'>
        <div className='w-52'>Name</div>
        <div className='w-52'>Created</div>
        <div className='w-52'>Category</div>
        <div className='w-52'>Content</div>
        <div className='w-52'>Dates</div>
        <div className='w-52'>
          <svg width="18px" height="18px">
            <use href={sprite + "#icon-box-remove"}></use>
          </svg>
        </div>
    </li>
    {notes.filter((note) => note.archived === true && note.category === category).map((note) => (
          <RowArchivedTable key={note.id} {...note} />
      ) )}</>
}