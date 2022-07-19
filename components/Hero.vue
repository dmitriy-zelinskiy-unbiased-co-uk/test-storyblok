<template>
  <div class="hero__wrapper"  v-bind:style="{ backgroundImage: 'url(' + blok.background.filename + ')' }">
    <div class="hero__content">
      <li :key="blok._uid" v-for="blok in blok.content" class="flex-auto px-6">
        <component
          :blok="blok"
          :is="blok.component"
          v-bind="defineProps(blok._uid, 'content')"
        />
      </li>
    </div>
    <div class="hero__form">
      <li :key="blok._uid" v-for="blok in blok.form" class="flex-auto px-6">
        <component
          :blok="blok"
          :is="blok.component"
          v-bind="defineProps(blok._uid, 'form')"
        />
      </li>
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
    defineProps(uid, blockName) {
      return !this.blok[blockName] ? {} : this.blok[blockName].find(blok => blok._uid === uid);
    }
  }
};
</script>
