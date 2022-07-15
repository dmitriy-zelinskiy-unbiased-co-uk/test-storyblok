<template>
  <div
    v-editable="blok"
    class="py-2 text-center">
    <img
      class="mx-auto"
      :src="blok.icon">
    <h1 class="text-lg">{{ blok.headline }}</h1>
    <p class="text-gray-600">
      {{ blok.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
