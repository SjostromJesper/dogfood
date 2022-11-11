<template>
  <div>
    page visits: {{ data }}
  </div>
</template>

<script setup>
import {useAsyncData} from "nuxt/app";

const {data} = await useAsyncData('count', () => $fetch('/api/count'))

</script>
