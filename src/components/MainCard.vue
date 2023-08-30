<template>
	<div class="mx-5 bg-secondary rounded" style="height:500px;">
		<div class="row h-100">
			<div class="col-5">
				<div class="d-flex h-100 ps-5" style="font-family: 'Pacifico';">
					<div class="align-self-center ps-4 w-75">
						<div class="fw-bold display-1 user-select-none">
							Study
						</div>
						<div class="fw-bold display-1 user-select-none">
							with
						</div>
						<div class="fw-bold display-1 user-select-none">
							Omid
						</div>
						<div class="d-grid gap-1 w-100 justify-content-between">
							<span class="fw-bold display-2 align-self-center user-select-none">
								On
							</span>
							<a class="fw-bold display-5 text-decoration-none text-light user-select-none" href="https://www.youtube.com/@studywithomid">
								<img width="120" height="120" src="https://img.icons8.com/matisse/500/youtube.png" alt="youtube-channel"/>
								<span class="d-none d-xl-inline">
									YouTube
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-7">
				<div class="d-flex h-100 pt-5">
					<div class="position-relative">
						<img v-for="image in images" :class="image.class" :src="image.link" width="250" height="175">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
    	images : [
					{
						"link":"1.jpg",
						"class":"rounded position-relative image image1 d-none d-sm-inline"
					},
					{
						"link":"2.jpg",
						"class":"rounded position-absolute image image2 d-none d-md-inline"
					},
					{
						"link":"3.jpg",
						"class":"rounded position-absolute image image3 d-none d-xl-inline"
					},
					{
						"link":"4.jpg",
						"class":"rounded position-absolute image image4 d-none d-xl-inline"
					},
					{
						"link":"5.jpg	",
						"class":"rounded position-absolute image image5 d-none d-sm-inline"
					}
				]
    }
  }
}
</script>

<style scoped>
	.image1{
		z-index: 1;
	}
	.image2 {
	  top: 40px;
	  left: 170px;
	  z-index: 2;
	}
	.image3 {
	  left: 400px;
	  z-index: 4;
	}
	.image4 {
	  top: 170px;
	  left: 230px;
	  z-index: 3;
	}
	.image5 {
	  top: 200px;
	  left: 30px;
	  z-index: 1;
	}
	.image {
		filter: blur(2px);
	}
	.image:hover {
		filter: blur(0px);
	}
</style>