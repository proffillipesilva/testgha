import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const store = create((set) => ({
    user: null,
    setUser: (token) => set((state) => ({
        user: jwtDecode(token)
    }))
}))

export default store;