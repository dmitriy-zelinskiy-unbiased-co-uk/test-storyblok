<template>
  <div class="b-title">
    <div class="b-title__inner">
      <h1 class="b-title__main">
        <svg
          class="b-title__bubble hidden-xs"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 32"
          width="30"
          height="32"
        >
          <path
            d="M14.8 0C6.6 0 0 6.6 0 14.8c0 4.2 1.8 8 4.7 10.7V32l4.1-3.7c1.8.8 3.9 1.3 6 1.3 8.2 0 14.8-6.6 14.8-14.8C29.5 6.6 22.9 0 14.8 0m7.4 15.6c0 4.3-3.5 6.5-7 6.5H14.9c-3.5 0-7-2.2-7-6.5v-5.4c0-.9.6-1.4 1.5-1.4s1.6.6 1.6 1.4v5.4c0 1.8 1.4 3.7 3.9 3.7h.3c2.4 0 3.9-1.9 3.9-3.7v-5.4c0-.9.6-1.4 1.6-1.4.9 0 1.5.6 1.5 1.4v5.4z"
          ></path>
        </svg>
        {{ blok.text }}
      </h1>
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
};
</script>
