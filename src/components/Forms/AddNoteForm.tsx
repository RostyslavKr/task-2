import React, { useState } from "react";
import { useAppDispatch } from "./../../hooks";
import { addNote } from "./../../redux/notesSlice";
import createDate from "../../utils/createDate";
import extractDates from "../../utils/extractDates";

interface Note {
  id: number;
  name: string;
  created: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}
interface AddNoteFormProps {
  onClose: () => void;
}
export const AddNoteForm: React.FC<AddNoteFormProps> = ({onClose}) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !content || !category) {
      alert("Please fill in all fields before creating a note.");
      return;
    }

    // Create the new note object
    const newNote: Note = {
      id: Date.now(),
      name,
      created: createDate(), 
      content,
      category,
      dates: extractDates(content),
      archived: false,
    };

    // Dispatch the addNote action
    dispatch(addNote(newNote));

    // Clear the form inputs
    setName("");
    setContent("");
      setCategory("");
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
      <button type="submit">Create Note</button>
    </form>
  );
};

