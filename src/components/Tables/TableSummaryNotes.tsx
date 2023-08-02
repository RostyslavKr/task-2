import { SummaryNotes } from "../SummaryNotes/SummaryNotes";

export const HeaderTableNotesSummaryNotes: React.FC = () => {
  const categories = ["Task", "Random Thought", "Idea"];
  return <>
    <li className='flex items-center justify-between mt-5 px-4  py-5 rounded-md bg-green-500 text-white uppercase font-semibold fill-white font-mono'>
      <div className='w-52'>Category</div>
      <div className='w-52 text-center'>Active</div>
      <div className='w-52 text-center'>Archived</div>
    </li>
      {categories.map(category => <SummaryNotes key={category} category={category} />)}
    </> 
}