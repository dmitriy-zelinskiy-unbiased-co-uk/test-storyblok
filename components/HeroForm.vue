<template>
  <div class="b-card" id="form">
    <div class="b-card__inner px-xs-0 py-xs-16 pa-md-24 ma-xs-0">
      <h2 class="b-card__title mt-xs-0 text-center">
        {{ blok.header }}
      </h2>
      <form>
        <div v-for="blok in blok.body" :key="blok._uid" class="b-text-field b-text-field_filled mb-xs-16">
          <component
            :blok="blok"
            :is="blok.component"
            v-bind="defineProps(blok._uid, 'body')"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    defineProps(uid, component) {
      return !this.blok[component]
        ? {}
        : this.blok[component].find((blok) => blok._uid === uid);
    },
  },
};
</script>
