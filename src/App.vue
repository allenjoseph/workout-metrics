<template lang="pug">
  #app
    //- 
      route outlet
      component matched by the route will render here
    router-view
</template>

<script>
export default { name: 'app' };
</script>
