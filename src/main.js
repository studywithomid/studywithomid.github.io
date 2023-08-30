import { createApp } from 'vue'
import App from './App.vue'
import anime from 'animejs/lib/anime.es.js'

createApp(App).mount('#app')

anime.timeline({
	direction:'alternate',
  	duration:3000,
  	loop:true
})
.add({
	targets: '.image1',
	translateX: 10,
	translateY: 10,
	delay:1000
})
.add({
	targets: '.image2',
	translateX: 10,
	translateY: -10,
	delay:500
})
.add({
	targets: '.image3',
	translateX: 10,
	translateY: -10,
	delay:1500
})
.add({
	targets: '.image4',
	translateX: -10,
	translateY: -10,
	delay:1000
})
.add({
	targets: '.image5',
	translateX: 10,
	translateY: -10,
	delay:700
})
.play();