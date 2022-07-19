<template>
  <div class="b-text-field__control">
    <div class="b-text-field__slot" ng-click="$scope.name=true">
      <div class="b-text-field__input-slot">
        <label :for="blok._uid" class="required">{{blok.label}}</label>
        <input
          type="text"
          :id="blok._uid"
          :name="blok.label"
          required="required"
          maxlength="128"
          ub-form-field-init="true"
          autocomplete="off"
        />
      </div>
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
