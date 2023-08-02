import { ReactNode } from 'react'

interface TableProps {
  children?: ReactNode;
}

export const Table: React.FC<TableProps> = ({children}) => {
 
  return <ul className='flex flex-col '>
      {children}
    </ul>
}
