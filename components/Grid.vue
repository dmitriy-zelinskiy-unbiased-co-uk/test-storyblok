<template>
  <ul
    v-editable="blok"
    class="flex py-8 mb-6">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="flex-auto px-6">
      <component :blok="blok" :is="blok.component" v-bind="defineProps(blok._uid)" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  methods: {
    defineProps(uid) {
      return !this.blok.body ? {} : this.blok.body.find(blok => blok._uid === uid);
    }
  }
}
</script>
