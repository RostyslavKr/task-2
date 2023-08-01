import { ReactNode } from 'react'

interface TableProps {
  children?: ReactNode;
}

export const Table: React.FC<TableProps> = ({children}) => {
 
  return <ul>
      {children}
    </ul>
}
// {categories.map(category => <SummaryNotes key={category} category={category} />)}
// {
//   notes.filter((note) => note.archived !== true).map((note) => (
//           <RowTable key={note.id} {...note} />
//         ))}