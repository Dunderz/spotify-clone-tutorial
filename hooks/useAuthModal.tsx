import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log("OMG");
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
