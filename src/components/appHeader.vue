<script>
export default {
  name: 'AppHeader'
}

</script>

<template>
  <header id="site_header">
    <div class="container">
      <div id="navigate" class="row">
        <div class="col-4">
          <ul>
            <li><a href="">Donna</a></li>
            <li><a href="">Uomo</a></li>
            <li><a href="">Bambini</a></li>
          </ul>
        </div>
        <div class="col-4">
          <img src="../assets/img/boolean-logo.png" alt="" id="logo">
        </div>
        <div class="col-4">
          <ul>
            <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
            <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import '../assets/scss/partials/structure';

#site_header {
  @include fixed-top;
  @include header-format;
  width: 100%;
  background-color: $header_bg;
}

#navigate {
  height: 75px;
}

#logo {
  height: 40px;
  display: inline
}

.container {
  @include flex-container;

  .row {
    @include flex-row;

    .col-4 {
      @include flex-col-4;

      &:first-child {
        justify-content: $start-content;
      }

      &:last-child {
        justify-content: $end-content;
      }
    }
  }
}
</style>
