import { useState } from "react";
import { useAppDispatch } from ".//../../hooks";
import { editNote } from "../../redux/notesSlice";

interface Note {
  id: number;
  name: string;
  created: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}

interface EditNoteFormProps {
  // eslint-disable-next-line
  note: any; 
  onClose: () => void;
}

export const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onClose }) => {
  const [name, setName] = useState(note.name);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !content || !category) {
      alert("Please fill in all fields before editing the note.");
      return;
    }

    // Create the updated note object
    const updatedNote: Note = {
      ...note,
      name,
      content,
      category,
    };

    // Dispatch the editNote action
    dispatch(editNote(updatedNote));

    // Close the form
    onClose();
  };

  return (
    <form className="w-52 font-mono" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        Name:
        <input className="border border-solid border-yellow-500 rounded-md p-3 pl-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="flex flex-col">
        Content:
        <input className="border border-solid border-yellow-500 rounded-md p-3 pl-2" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <label className="flex flex-col pb-3">
        Category:
        <select className="border border-solid border-yellow-500 rounded-md p-3 pl-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </select>
      </label>
      <button className="py-1.5 px-2.5 bg-yellow-300 text-white font-medium rounded-md hover:bg-yellow-500 focus:bg-yellow-500" type="submit">Edit Note</button>
    </form>
  );
};

