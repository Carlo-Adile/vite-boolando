<script>
export default {
  name: 'AppMain'
}
</script>

<template>
  <main id="site_main">
        <div class="card">
            <div class="product relaxed_fit">
                <div class="discount">-50%</div>
                <div class="sustainability">Sostenibilità</div>
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        14,99 € <span id="original_price">29,99 €</span>
                    </p>
                </div>
            </div>
            <div class="product roses_tee">
                <div class="discount">-30%</div>
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        20,99 € <span id="original_price">29,99 €</span>
                    </p>
                </div>
            </div>
            <div class="product colori_pastello">
                <div class="discount">-30%</div>
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        129,99 € <span id="original_price">184,99 €</span>
                    </p>
                </div>
            </div>
            <div class="product tee_unisex">
                <div class="discount">-50%</div>
                <div class="sustainability">Sostenibilità</div>
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        14,99 € <span id="original_price">19,99 €</span>
                    </p>
                </div>
            </div>
            <div class="product stripe_bodice">
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        99,99 €
                    </p>
                </div>
            </div>
            <div class="product maglione_black">
                <div class="sustainability2">Sostenibilità</div>
                <div id="like">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product_info">
                    <p id="brand">
                        Levi's
                    </p>
                    <p id="product_name">
                        RELAXED FIT TEE UNISEX
                    </p>
                    <p id="price">
                        29,99
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>
#site_main{
    padding-top: 25px;
    padding-bottom:25px;
    width:100%;
}

/* card of the shop */

.card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.product{
    position:relative;
    width:25%;
    height:600px;
    margin-bottom:75px;
    margin-left: 10px;
    margin-right:10px;
}

/* list of products with corresponding images */

.relaxed_fit{
    background-image: url(..//img/1.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.relaxed_fit:hover{
    background-image: url(..//img/1b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.roses_tee{
    background-image: url(..//img/2.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.roses_tee:hover{
    background-image: url(..//img/2b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.colori_pastello{
    background-image: url(..//img/3.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.colori_pastello:hover{
    background-image: url(..//img/3b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.tee_unisex{
    background-image: url(..//img/4.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.tee_unisex:hover{
    background-image: url(..//img/4b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.stripe_bodice{
    background-image: url(..//img/5.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.stripe_bodice:hover{
    background-image: url(..//img/5b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.maglione_black{
    background-image: url(..//img/6.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.maglione_black:hover{
    background-image: url(..//img/6b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

/* product added parts to the card */

.discount{
    color:white;
    background-color:orangered;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    width:50px;
    height:1.5rem;
    text-align: center;
}

.sustainability{
    color:white;
    background-color:green;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    left:52px;
    width:110px;
    height:1.5rem;
    text-align: center;
}

.sustainability2{
    color:white;
    background-color:green;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    left:0px;
    width:110px;
    height:1.5rem;
    text-align: center;
}

#like{
    position:absolute;
    top:2%;
    right:0;
    font-size:1.2em;
    text-align:center;
    background-color: white;
    border:8px solid white;
}

#like:hover{
    fill:black;
}

/* product info parts of the card */

.product_info{
    position:absolute;
    top:100%;
    width:100%;
    font-family:sans-serif;
}

#product_name{
    font-weight:bold;
}

#price{
    font-weight: bold;
    color:red;
}

#original_price{
    color:black;
    text-decoration: line-through;
}
</style>