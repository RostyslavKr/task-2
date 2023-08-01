import { useAppSelector } from "../../hooks";
import { SummaryNoteRow } from "./SummaryNoteRow";

interface SummaryNotesProps {
    category: string;
}

export const SummaryNotes: React.FC<SummaryNotesProps> = ({ category }) => {
    const notes = useAppSelector(state => state.notes.items);
    const findCategory = notes.find(note => note.category === category);
 const activeCount = notes.filter(
    (note) => note.category === category && !note.archived
  ).length;
  const archivedCount = notes.filter(
    (note) => note.category === category && note.archived
  ).length;

    
    return <> 
        {findCategory && (<SummaryNoteRow category={category} activeCount={activeCount} archivedCount={archivedCount} />)}
    </> 
   
}


