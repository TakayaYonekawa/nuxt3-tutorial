<template>
  <div class="container">
    <slot />
    <footer>copy right</footer>
  </div>
</template>

<style>
html {
  font-family: "Permanent Marker", cursive;
}
.container {
  color: red;
}
footer {
  background-color: orange;
  color: white;
  text-align: center;
}
</style>
