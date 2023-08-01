// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppSelector } from "../../hooks";
import { RowTable } from "../RowTable/RowTable";

export const HeaderTableNotes: React.FC = () => {
  const notes = useAppSelector(state => state.notes.items);
    return <><li>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
        <div>Dates</div>
        <div>
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