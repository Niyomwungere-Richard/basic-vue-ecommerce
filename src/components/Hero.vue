<template>
    <div class="hero">

        <div class="hero-title">
            <h1 class="hero-titre">Decouvre votre <br> style Unique </h1>
        </div>

        <div class="left-image">
            <img src="../../public/images/01 Online Shopping 1.png" alt="Image de la boutique" />
        </div>

        <div class="paragraphe">
            <p> Explorer des collections modernes et originales pour sublimer votre style
                . Oser affirmer votre personnalité à travers des pièces uniques,
                conçue pour celles ouceux qui font la difference. </p>
        </div>

        <!-- <div class="hero-image">
            <img src="../../public/images/Frame 6.png" alt="Image de la boutique" class="image" />
        </div> -->
        <div class="right-image">
            <img src="../../public/images/01 Online Shopping 5.png" alt="Image de la boutique" />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-image: url('../../public/images/Frame 6.png');
    position: relative;
    top: 0px;
    left: 0;
}

.hero-title {
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
    position: absolute;
    top: 0;
    left: 5%;
    width: 100%;
    padding: 1rem 0;
    font-family: 'Nosifer', sans-serif;
    text-transform: uppercase;
    color: #ffffff;
}

.hero-titre {
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
    font-family: 'Arial', sans-serif;
}

.paragraphe {
    font-size: 1.2rem;
    color: white;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2rem;
    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
}

img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin: 1rem;
}

.left-image {
    position: absolute;
    top: 60%;
    right: 5%;
    transform: translateY(-50%);
}

.right-image {
    position: absolute;
    top: 30%;
    left: 10%;
    transform: translateY(-50%);
}

.hero-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>