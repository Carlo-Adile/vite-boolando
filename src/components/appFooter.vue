<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer id="site_footer">
        <div class="contacts">
            <div class="contacts_parts">
                <h4>Boolando s.r.l</h4>
                <span>Informazioni legali</span>
                <span>Informativa sulla privacy</span>
                <span>Diritto di recesso</span>
            </div>
            <div class="contacts_parts">
                <h4>Trovaci anche su</h4>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    </footer>
</template>



<style lang="scss" scoped>
#site_footer{
    width:100%;
    background-color: black;
}

.contacts{
    display:flex;
    width:100%;
    height:75px;
    justify-content: space-around;
    align-items: center;
}

.contacts_parts{
    color:white;
}

.contacts_parts span{
    font-size:0.7rem;
    padding-right:8px;
}

.contacts_parts i{
    padding-top:5px;
}
</style>