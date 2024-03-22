<script>
export default{
  name:'AppHeader'
}

</script>

<template>
  <header id="site_header">
        <div class="navigate">
            <div class="navigate_parts">
                Donna Uomo Bambini
            </div>
            <div class="navigate_parts logo">
            </div>
            <div class="navigate_parts">
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
/* @import '../assets/scss/style';

#navigate{
  width: $container-width;
  color: $blue
} */

#site_header{
    height:100px;
}

.navigate{
    position:fixed;
    width:100%;
    height:75px;
    background-color: orange;
    display:flex;
    justify-content:space-around;
    align-items:center;
    z-index: 1000;
    box-shadow: 0 0 10px black;
}

.navigate_parts{
    display:flex;
    align-items: center;
    color:white;
    font-weight: bold;
    height:40px;
    color:white;
    font-family:sans-serif;
}

.navigate_parts i{
    font-size:1.2rem;
    letter-spacing: 15px;
}

.logo{
    background-image: url(../assets/img/boolean-logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    width:150px;
}
</style>
