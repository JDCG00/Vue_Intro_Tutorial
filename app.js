const product = 'Calcetines'

//Creación de la aplicación de Vue
const app = Vue.createApp({
    data(){
        return{
            unidades: 0,
            premium: false
        }
    },
    methods: {
        actualizarCarro(id){
            this.unidades.push(id)
        }
    }
})


//#app hace referencia a <div id=app...
window.onload =  () => {const appMontada = app.mount('#app')}