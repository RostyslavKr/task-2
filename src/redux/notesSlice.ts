import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Note {
  id: number;
  name: string;
  created: string;
  content: string;
  category: string;
  dates: string[];
  archived: boolean;
}

interface NotesState {
  items: Note[],
  note: Note | '',
  category: string;
}
const notesItems = [
  {
    id: 1,
    name: "Make new app",
    created: "2023-07-26",
    content: "Make new app till 30 days",
    category: "Idea",
    dates: [],
    archived: false,
  },
  {
    id: 2,
    name: "Shopping list",
    created: "2023-07-25",
    content: "Buy tomato, potato and cheese",
    category: "Task",
    dates: [],
    archived: false,
  },
  {
    id: 3,
    name: "Watch movie",
    created: "2023-07-24",
    content: "Watch movie 10/10/2023",
    category: "Random Thought",
    dates: ["10/10/2022"],
    archived: false,
  },
  {
    id: 4,
    name: "New feature",
    created: "2023-07-23",
    content: "Make a new feature for app",
    category: "Idea",
    dates: [],
    archived: false,
  },
  {
    id: 5,
    name: "Do task 2",
    created: "2023-07-30",
    content: "Starn do task 2 and end till 2/8/2023",
    category: "Task",
    dates: ["2/8/2023"],
    archived: false,
  },
  {
    id: 6,
    name: "Clean room",
    created: "2023-07-21",
    content: "Clean my roon",
    category: "Idea",
    dates: [],
    archived: false,
  },
  {
    id: 7,
    name: "Note 7",
    created: "2023-07-20",
    content: "This is a random thought with a date 6/6/2022",
    category: "Random Thought",
    dates: ["6/6/2022"],
    archived: true,
  },
];
const initialState: NotesState = {
  items: notesItems,
  note: '',
  category: '',
}
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.items.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      const noteIndex = state.items.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.items[noteIndex] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) {
        note.archived = true;
      }
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const note = state.items.find((note) => note.id === action.payload);
      if (note) {
        note.archived = false;
      }
    },
    itemNote: (state, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      const note = state.items.find((note) => note.id === id);
      if (note) {
        state.note = note;
      }
      
    },
    
    setCategory:(state, action: PayloadAction<string>) => { 
      state.category = action.payload;
    }

  
  }
});

export const { addNote,editNote, deleteNote, archiveNote, unarchiveNote, itemNote, setCategory } = notesSlice.actions;

export default notesSlice.reducer;

