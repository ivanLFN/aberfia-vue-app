<template>
  <div class="services-component">
    <div class="container-lg">
      <h2 class="services-header">
        Наши услуги
      </h2>
      <div class="services-cards">
        <div class="services-card row d-flex align-items-center">
          <div class="col-md-6 col-12">
            <img class="img-services" src="images/services/metal_trusses.jpg" alt="..." />
          </div>
          <div class="col-md-6 col-12 row text-start">
            <h3 class="services-title mt-4 mt-md-0">Фермы</h3>
            <p class="mt-3 services-desc">Усилим вашу конструкцию! Наши металлические стропильные системы — надежное решение от нашей строительной компании. Прочные, стабильные, гарантируют долговечность вашего проекта.</p>
            <div class="mt-5">
              <a href="#" class="services-contact-btn">Заказать проект</a>
            </div>
          </div>
        </div>
        <div class="line my-5"></div>
        <div class="services-card row d-flex align-items-center">
          <div class="col-md-6 col-12 row text-start">
            <h3 class="services-title mt-4 mt-md-0">Металлические конструкции зданий</h3>
            <p class="mt-3 services-desc">Мы специализируемся на создании надежных и эстетичных металлических конструкций для зданий любого типа и назначения. Наш опыт и профессионализм гарантируют высокое качество и долговечность каждого проекта.</p>
            <div class="mt-5 mb-5 mb-md-0">
              <a href="#" class="services-contact-btn">Заказать проект</a>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <img class="img-services" src="images/services/metal_building.jpg" alt="..." />
          </div>
        </div>
        <div class="line my-5"></div>
        <div class="services-card row d-flex align-items-center">
          <div class="col-md-6 col-12">
            <img class="img-services" src="images/services/beams.jpeg" alt="..." />
          </div>
          <div class="col-md-6 col-12 row text-start">
            <h3 class="services-title mt-4 mt-md-0">Балки, колонны, опорные стойки, конструкции связей</h3>
            <p class="mt-3 services-desc">Наши услуги включают изготовление балок, колонн, опорных стоек и конструкций связей из металла. Мы создаем прочные и надежные элементы для вашего строительного проекта, обеспечивая качество и безопасность.</p>
            <div class="mt-5">
              <a href="#" class="services-contact-btn">Заказать проект</a>
            </div>
          </div>
        </div>
        <div class="line my-5"></div>
        <div class="services-card row d-flex align-items-center">
          <div class="col-md-6 col-12 row text-start">
            <h3 class="services-title mt-4 mt-md-0">Металлические конструкции жилых домов</h3>
            <p class="mt-3 services-desc">Мы специализируемся на создании металлических конструкций для жилых домов, обеспечивая надежность, прочность и долговечность. Наши конструкции гарантируют безопасность и комфорт вашего жилья на долгие годы.</p>
            <div class="mt-5 mb-5 mb-md-0">
              <a href="#" class="services-contact-btn">Заказать проект</a>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <img class="img-services" src="images/services/steel_house.png" alt="..." />
          </div>
        </div>
      </div>
      <h2 class="services-header other-services">
        Также выполняем
      </h2>
      <div class="row d-flex">
        <div class="col-12 col-md-6 row text-start">
          <div class="d-flex align-items-center">
            <div class="me-3">
              <img class="" src="images/services/icons8-ok-100.png" alt="..." />
            </div>
            <div>
              <h3 class="services-title">Резка металлопроката</h3>
              <p class="mt-3 services-desc">Резка металлопроката с высокой точностью и качеством исполнения.</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="me-3">
              <img class="" src="images/services/icons8-ok-100.png" alt="..." />
            </div>
            <div>
              <h3 class="services-title">Окраска конструкций и деталей</h3>
              <p class="mt-3 services-desc">Окраска конструкций и деталей с использованием современных технологий и материалов.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img class="img-services" src="images/services/plusma_cutter.jpeg" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServicesComponent'
}

</script>

<style scoped>

.other-services {
  margin-top: 8rem;
}

.line {
  border-top: 1px solid rgb(105, 105, 105);
}

.services-title {
  color: white;
}

.services-desc {
  font-size: 1.1rem;
  color: rgb(160, 160, 160);
}

.services-contact-btn {
  color: white;
  background-color: #0d6efd;
  text-decoration: none;
  padding: 20px 25px;
  border-radius: 5px;
  font-size: 1.1rem;
}

.services-component {
  padding-top: 5rem;
  padding-bottom: 6rem;
  background-color: #1c1f26;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.9);
}

.services-header {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 5rem;
}

.img-services {
  border-radius: 10px;
  width: 100%;
  height: 350px;
}

@media only screen and (max-width: 767px) {
  .services-header {
    font-size: 2rem;
  }
  
  .services-component {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }

  .other-services {
  margin-top: 3rem;
}
}

</style>
