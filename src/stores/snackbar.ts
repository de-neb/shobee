import {defineStore} from 'pinia'

export const useSnackbar = defineStore('snackbar',{
    state: () => ({
        message: '',
        show: false,
        duration: 5000,
        color: ''
    }),

    actions: {
        show(message:string,color: string){
            this.message = message
            this.show = true
            this.color = color
        }
    }
})