app.component('mostrar-producto',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }        
    },
    template:
    /*html*/
    
    `
    <div>
      <h1>{{ title }}</h1>
    </div>
    <p v-if="stock > 5" >Disponible</p>
    <p v-else-if="stock > 0">¡Últimas unidades!</p>
    <p v-else>No disponible</p>

    <p>Envío: {{ envio }}</p>
    
    <ul>
      <li v-for="detalle in detalles">{{detalle}}</li>
    </ul>

    <div v-show="stock > 0" class="product-image">
      <a :href="url"><img :src="imagen" :title="tooltip"></a>
    </div>
    
    <button class="button" :class="{ disabledButton:!unidades }" v-on:click="añadirAlCarro" :disabled="!unidades">¡Comprar!</button>
    
    <div v-for="(variante, index) in variantes" :key="variante.cod" @mouseover="actualizarVariante(index)"
    class="color-circle" :style="{ backgroundColor: variante.color }"></div>`,
    data(){ //Datos que recibe la aplicación de Vue
        return{
            producto: 'Calcetines',
            marca: 'Maestro Vue',
            descripcion: 'De puro hilo de humo',
            varianteSeleccionada: 0,
            tooltip: 'Sin agujeros',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 2,
            enOferta: true,
            detalles: ['50% algodón', '30% lana', '20% polyester'],
            variantes: [
                {cod: 'A020', color: 'green', imagen: 'assets/images/socks_green.jpg', cantidad: 50},
                {cod: 'B022', color: 'blue', imagen: 'assets/images/socks_blue.jpg', cantidad: 0}
            ],
            unidades:1
        }
    },
    methods: {
        actualizarVariante(index){
            this.varianteSeleccionada = index
            console.log(index);
        },
        añadirAlCarro(){
            this.$emit('añadir-al-carro', this.variantes[this.varianteSeleccionada].id)
        }
    },
    computed: {
        title(){
            return this.marca + ' ' + this.producto
        },
        imagen(){
            return this.variantes[this.varianteSeleccionada].imagen
        },
        enStock(){
            return this.variantes[this.varianteSeleccionada].cantidad
        },
        envio(){
            if (this.premium) {
                return 'Gratis'
            }
            return 2.99
        }
    }

})