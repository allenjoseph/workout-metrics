<template lang="pug">
ul.nav.flex-column
  .navbar.navbar-dark.bg-dark.justify-content-start
    button.navbar-toggler.collapsed(
      type='button',
      data-toggle='collapse',
      data-target='#navbar',
      aria-expanded='false',
      aria-controls='navbar',
      aria-label="Toggle navigation")
      span.navbar-toggler-icon
    .navbar-brand.ml-3 {{ titleMenuSelected }}
  #navbar.collapse
    ul.nav.flex-column
      li.nav-item(v-for='item in menu')
        router-link.nav-link(
          :key='item.key',
          :to='item.path',
          :class='{disabled: item.disabled}',
          :disabled='item.disabled',
          :aria-disabled='item.disabled',
          :tabindex='item.disabled && -1') {{ item.name }}
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        { id: '001', name: 'Dashboard', path: '/dashboard' },
        { id: '002', name: 'Workout', path: '/workout' },
        { id: '003', name: 'Trends', path: '/trends' },
        { id: '004', name: 'History', path: '/history' },
        { id: '005', name: 'More', path: '/more', disabled: true },
      ],
    };
  },
  computed: {
    titleMenuSelected() {
      return this.$route.name || 'Workout Metrics';
    },
  },
};
</script>

<style lang="scss">
.nav-link.active {
  background: scale-color(theme-color('primary'), $lightness: 90%);
}
</style>
