<template>
  <header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<router-link to="/" class="navbar-brand">NEWS DEVOURERS</router-link>
			<ul class="navbar-nav">
				<router-link 
				v-for="item in menu"
				:key="item.id" 
				:to="item.url" 
				class="nav-item" 
				tag="li">
					<a class="nav-link" href="#">{{item.title}}</a>					
				</router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
  props: [
    "menu"
  ]
}
</script>
