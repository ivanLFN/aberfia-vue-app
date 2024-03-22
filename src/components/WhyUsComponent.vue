<template>
  <div class="why-us-component">
    <div class="container-lg">
      <h2 class="why-us-header">
        Причины выбрать нас
      </h2>
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-12 col-md-4">
          <img class="img-why-us mb-4" src="images/icons8-briefcase-settings-100.png" alt="..." />
          <h3 class="title-card">Большой опыт работы</h3>
          <p class="desc-card mt-3">Большая работа с ведущими строительными компаниями</p>
        </div>
        <div class="col-12 col-md-4">
          <img class="img-why-us mb-4" src="images/icons8-leadership-100.png" alt="..." />
          <h3 class="title-card">Большая и профессиональная команда</h3>
          <p class="desc-card mt-3">Качественное выполнение общестроительных и отделочных работ</p>
        </div>
        <div class="col-12 col-md-4">
          <img class="img-why-us mb-4" src="images/icons8-price-100.png" alt="..." />
          <h3 class="title-card">Конкурентные цены</h3>
          <p class="desc-card mt-3">Лучшие цены для выполнения работ любой сложности</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WhyUsComponent'
}

</script>

<style>

.desc-card {
  color: rgb(168, 168, 168);
}

.title-card {
  font-size: 1.5rem;
  color: white;
}

.why-us-component {
  padding-top: 8rem;
  padding-bottom: 3rem;
}

.why-us-header {
  font-size: 2.5rem;
  color: white;
}

.img-why-us {
  width: 100px;
  height: 100px;
}

@media only screen and (max-width: 767px) {
  .why-us-header {
    font-size: 2rem;
  }
  
  .why-us-component {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
}

</style>
