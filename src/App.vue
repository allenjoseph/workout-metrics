<template lang="pug">
  #app
    sidenav
    //- 
      route outlet
      component matched by the route will render here
    .container.py-4
      router-view
</template>

<script>
import MenuVue from './components/Menu.vue';

export default { name: 'app', components: { sidenav: MenuVue } };
</script>
