<template lang="pug">
ul.nav.flex-column
  .navbar.navbar-dark.bg-dark.justify-content-start
    button.navbar-toggler.collapsed(type='button', data-toggle='collapse', data-target='#navbar', aria-expanded='false', aria-controls='navbar', aria-label="Toggle navigation")
      span.navbar-toggler-icon
    router-link.navbar-brand.ml-3(to='/') Workout Metrics
  #navbar.collapse
    ul.nav.flex-column
      li.nav-item
        router-link.nav-link(to='/workout') Workout
      li.nav-item
        router-link.nav-link(to='/trends') Trends
      li.nav-item
        router-link.nav-link(to='/history') History
      li.nav-item
        router-link.nav-link.disabled(to='/more', tabindex='-1', aria-disabled='true', disabled) More
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss">
.nav-link.active {
  background: scale-color(theme-color('primary'), $lightness: 90%);
}
</style>
