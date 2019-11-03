<template lang="pug">
.card-deck.mt-3.mt-md-0
  .card
    .card-body
      .d-flex
        h4 {{ group.name }}
        .image
          img.img-fluid
      .card-text
        small.text-muted Last updated 3 mins ago
</template>

<script>
export default {
  name: 'MuscleGroup',
  props: ['group'],
};
</script>

<style lang="scss">
// ..
</style>
