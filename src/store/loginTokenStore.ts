import { create } from 'zustand'

type loginData = {
    message : string,
    token : string,
    role : "Admin" | "User"
}

type LoginTokenStore = {
    loginData : loginData | null
    setLoginData : (loginData : loginData) => void
    clearLoginData : () => void
}

const useLoginTokenStore = create<LoginTokenStore>((set) => ({
    loginData: null,
    setLoginData: (loginData) => set({loginData}),
    clearLoginData: () => set({loginData: null})
}))

export default useLoginTokenStore