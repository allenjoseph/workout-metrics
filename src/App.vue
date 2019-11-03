<template lang="pug">
  #app
    navbar
    //- 
      route outlet
      component matched by the route will render here
    .container-wrapper.py-4
      router-view
</template>

<script>
import MenuVue from './components/Menu.vue';

export default { name: 'app', components: { navbar: MenuVue } };
</script>
