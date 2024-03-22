<template>
  <div class="about-us-component">
    <div class="container-lg">
      <div>
        <img src="images/steel-structures-banner.jpg" class="w-100 about-us-img" alt="..." />
        <div class="about-us-story col-12 col-md-8 offset-md-2">
          <h3 class="about-us-header pt-5">Коротко о нас</h3>
          <div class="d-flex text pb-3">
            <p class="text-start px-4">Добро пожаловать в ООО "АБЕРФИА" – динамично развивающееся предприятие, специализирующееся на изготовлении и монтаже металлических конструкций, а также на строительстве и реконструкции объектов недвижимости. Мы занимаемся изготовлением и монтажом металлических конструкций для промышленных и гражданских зданий и сооружений, включая специальные, любых видов сложности, согласно техническому заданию заказчика или чертежам. Все наши металлоконструкции изготавливаются в соответствии с существующими стандартами, с учетом предпочтений заказчика и обеспечивают оптимальное соотношение цены и качества. Мы используем сертифицированный металлопрокат ведущих российских производителей. Стоимость изготовления и монтажа металлоконструкций зависит от используемых материалов, объема работ и их сложности. Доверьтесь ООО "АБЕРФИА" для получения качественных металлических решений, соответствующих вашим потребностям.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutUsComponent'
}

</script>

<style scoped>

.about-us-header {
  font-size: 2.5rem;
  color: black;
}

.about-us-component {
  padding-top: 5rem;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.9);
}

.about-us-img {
  border-radius: 10px;
}

.about-us-story {
  background-color: white;
  border-radius: 10px;
  position: relative;
  bottom: 150px;
}

.text {
  font-size: 1.1rem;
}

@media only screen and (max-width: 767px) {
  .about-us-header {
    font-size: 2rem;
  }
  
  .about-us-component {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
}

</style>
