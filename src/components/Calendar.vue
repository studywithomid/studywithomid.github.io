<template>
  <div>
    <div class="mx-5 d-flex user-select-none" id="calendar">
      <img width="60" height="60" src="https://img.icons8.com/bubbles/500/calendar-app.png" alt="calendar-app"/>
      <h5 class="fw-bold align-self-center text-light display-6">
        Calendar
      </h5>
    </div>
    <Session class="mx-5" v-for="session in sessions" :session="session"/>
  </div>
</template>

<script setup>
import Session from './Session.vue'

const sessions = [
  {
    name:"1-Hour Session without Break",
    date:"Feb 05 2024 09:00 EST",
    link:"",
    end_time:"10:00"
  }
]
</script>