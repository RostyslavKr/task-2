import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    showModal: boolean;
    modalType: string;
}

const initialState: ModalState = {
    showModal: false,
    modalType: '',
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal(state) {
      state.showModal = !state.showModal;
      },
      setModalType(state, action: PayloadAction<string>) {
        state.modalType = action.payload;
    }  
  },
});

export const { setShowModal, setModalType } = modalSlice.actions;
export default modalSlice.reducer;