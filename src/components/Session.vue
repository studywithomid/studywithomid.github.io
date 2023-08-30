<template>
	<div :class="'position-relative alert d-flex justify-content-between '+[SessionIsPublished()?'alert-dark':'alert-primary']" role="alert">
		<span class="text-dark align-self-center">
			{{ session.name }}
		</span>
		<span class="text-dark align-self-center">
			{{ session.date }}
		</span>
		<a class="text-decoration-none text-dark" :href="session.link" v-if="SessionIsPublished()">
			Watch on		
			<img width="60" height="60" src="https://img.icons8.com/bubbles/500/youtube-squared.png" alt="youtube"/>
		</a>
		<span class="text-dark" v-else>
			<add-to-calendar-button
			  name="Study (With Omid)"
			  options="'Google','Apple','Outlook.com','Microsoft 365'"
			  location="Montreal, QC, Canada"
			  description="Join the session in order to have higher concentration and productivity in your chores. You can access the channel with [url] https://www.youtube.com/@studywithomid|this link[/url]. If the link does not work properly, past the below link on your browser: [/br] https://www.youtube.com/@studywithomid"
			  :startDate="fullDate"
			  :startTime="this.session.date.substr(-9, 5)"
			  :endTime="this.session.end_time"
			  timeZone="America/Montreal"
			  lightMode="dark"
			/>
		</span>
	  <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" v-if="SessionIsPublished()==false">
	    Upcoming Session
	    <span class="visually-hidden">Comming Soon</span>
	  </span>
	</div>
</template>

<script>
import moment from 'moment'
import 'add-to-calendar-button'

export default {
  props: ['session'],
  data(){
  	return {
  		fullDate:moment(new Date(this.session.date)).format('YYYY-MM-DD')
  	}
  },
  methods:{
  	SessionIsPublished(){
  		return moment(new Date(this.session.date)) < moment(new Date())
  	}

  }
}
</script>