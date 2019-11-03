<template lang="pug">
.container
  .row
    .col-md-5
      h2 Muscle Groups
      .list-group
        a.list-group-item.list-group-item-action(
          href='javascript:void(0);',
          v-for='item in muscleGroups',
          :key='item.id') {{ item.name }}
          span.badge.badge-primary.badge-pill {{ item.workouts }}
    .col-md-7
      muscle-group(:group='muscleGroups[0]')
</template>

<script>
import MuscleGroupVue from './components/MuscleGroup.vue';

export default {
  name: 'Workout',
  data() {
    return {
      muscleGroups: [
        { id: '001', name: 'Muscle Group 1', workouts: 21 },
        { id: '002', name: 'Muscle Group 2', workouts: 16 },
        { id: '003', name: 'Muscle Group 3', workouts: 14 },
        { id: '004', name: 'Muscle Group 4', workouts: 18 },
        { id: '005', name: 'Muscle Group 5', workouts: 18 },
        { id: '006', name: 'Muscle Group 6', workouts: 9 },
        { id: '007', name: 'Muscle Group 7', workouts: 15 },
      ],
    };
  },
  components: {
    'muscle-group': MuscleGroupVue,
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
