// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sprite from './../../images/sprite.svg';
import { SummaryNotes } from "../SummaryNotes/SummaryNotes";

export const HeaderTableNotesSummaryNotes: React.FC = () => {
  const categories = ["Task", "Random Thought", "Idea"];
  return <>
    <li>
      <div>Category</div>
      <div>Active</div>
      <div>Archived</div>
    </li>
      {categories.map(category => <SummaryNotes key={category} category={category} />)}
    </> 
}