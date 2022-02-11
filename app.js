const product = 'Calcetines'

//Creación de la aplicación de Vue
const app = Vue.createApp({
    data(){ //Datos que recibe la aplicación de Vue
        return{
            producto: 'Calcetines',
            marca: 'Maestro Vue',
            descripcion: 'De puro hilo de humo',
            imagen: 'assets/images/socks_blue.jpg',
            tooltip: 'Sin agujeros',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 1,
            enOferta: false,
            detalles: ['50% algodón', '30% lana', '20% polyester'],
            variantes: [
                {cod: 'A020', color: 'green', imagen: 'assets/images/socks_green.jpg'},
                {cod: 'B022', color: 'blue', imagen: 'assets/images/socks_blue.jpg'}
            ],
            unidades: 0
        }
    },
    methods: {
        actualizarImagen(varianteImagen){
            this.imagen = varianteImagen
        }
    }
})


//#app hace referencia a <div id=app...
window.onload =  () => {const appMontada = app.mount('#app')}