import { create } from "zustand";

const myStore = create((set) => ({
    counter: 0,
    increment: () => set((state) => 
        ({counter: state.counter + 1})),
    somaNumero: (num) => set((state) => 
        ({counter: state.counter + num})),
    reset: () => set((state) => ({counter: 0}))

}))

export default myStore