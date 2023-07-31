import { useAppSelector } from "../../hooks";
import { RowTable } from "../RowTable/RowTable";
import { HeaderTableNotes } from "../HeaderTable/HeaderTableNotes";


export const Table = () => {
    const notes = useAppSelector(state => state.notes.items);
    return <ul>
        <HeaderTableNotes />
        {notes.filter((note) => note.archived !== true).map((note) => (
          <RowTable key={note.id} {...note} />
      ) )}
    </ul>
}