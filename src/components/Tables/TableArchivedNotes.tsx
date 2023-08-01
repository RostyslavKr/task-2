// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { useAppSelector } from "../../hooks";
import { RowArchivedTable } from "../RowArchivedTable/RowArchivedTable";

export const HeaderTableArchivedNotes: React.FC = () => {
  const notes = useAppSelector(state => state.notes.items);
  const category = useAppSelector(state => state.notes.category);
    return <><li>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
        <div>Dates</div>
        <div>
          <svg width="18px" height="18px">
            <use href={sprite + "#icon-box-remove"}></use>
          </svg>
        </div>
    </li>
    {notes.filter((note) => note.archived === true && note.category === category).map((note) => (
          <RowArchivedTable key={note.id} {...note} />
      ) )}</>
}