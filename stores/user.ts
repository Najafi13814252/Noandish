import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        name: '',
        password: ''
    }),
    actions: {
        login(name: string, password: string) {
            this.isLoggedIn = true
            this.name = name
            this.name = password
        },
        logout() {
            this.isLoggedIn = false
            this.name = ''
            this.password = ''
        }
    }
})