<template>
  <div
    v-editable="blok"
    >
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
      v-bind="defineProps(blok._uid)"
      />
  </div>
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
