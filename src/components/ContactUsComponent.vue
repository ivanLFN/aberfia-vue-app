<template>
  <div class="contact-us-component">
    <h3 class="contact-us-header">Контакты</h3>
    <div class="container-lg contact-us-items">
      <div class="row">
        <div class="col-12 col-md-4">
          <h3><a href="tel:+70001234567" class="phone">+7(950)411-33-66</a></h3>
        </div>
        <div class="col-12 col-md-4">
          <h3 class="contact-item">Красноярск, ул. Пограничников 42/42</h3>
        </div>
        <div class="col-12 col-md-4">
          <h3 class="contact-item">aberfia-22@yandex.ru</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactUsComponent'
}

</script>

<style>

.contact-item {
  color: rgb(202, 202, 202);
}

.contact-us-items {
  margin-top: 3rem;
}

.contact-us-component {
  padding-top: 8rem;
  padding-bottom: 5rem;
}

.contact-us-header {
  font-size: 2.5rem;
  color: white;
}

.phone {
  color: rgb(202, 202, 202);
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  .contact-us-header {
    font-size: 2rem;
  }

  .contact-us-component {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>
