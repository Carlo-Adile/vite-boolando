<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer id="site_footer">
    <div class="container">
      <div class="row">
        <col-6>
          <h4>
            Boolando s.r.l
          </h4>
          <ul>
            <li><a href="">Informazioni legali</a></li>
            <li><a href="">Informativa sulla privacy</a></li>
            <li><a href="">Diritto di recesso</a></li>
          </ul>
        </col-6>
        <div class="col-6">
          <h4>
            Trovaci anche su
          </h4>
          <ul>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
            <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import '../assets/scss/partials/structure';

#site_footer {
  @include footer-format;
  width: 100%;
  background-color: $footer-bg;
}

.container {
  @include flex-container;

  .row {
    @include flex-row;

    .col-4 {
      @include flex-col-6;

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