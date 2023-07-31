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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Content:
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </select>
      </label>
      <button type="submit">Edit Note</button>
    </form>
  );
};

