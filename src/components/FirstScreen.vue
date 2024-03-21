<template>
  <div class="first-screen">
    <video-background 
        src="video/video-list.mp4"
        style="max-height: 100vh; height: 100vh;"
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <img class="menu-image" src="images/icons8-menu-50.png" alt="menu-icon" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-5 mb-2 mb-lg-0 w-100 d-flex justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="#">Услуги</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Цены</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">О нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Примеры работ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Почему мы</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Область применения</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Этапы</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Контакты, карты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="top-bar">
        <div class="container-lg py-3">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <h2 class="title text-start">ООО «АБЕРФИА»</h2>
              <div class="sub-title text-start">Металлические конструкции</div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <div class="d-flex" style="margin-right: 30px;">
                  <img class="ico-image" style="margin-right: 10px;" src="images/icons8-location-64.png" alt="locate" />
                  <div class="locate">Красноярск</div>
                </div>
                <div class="d-flex align-items-center">
                  <div>
                    <img class="ico-image" src="images/icons8-phone-50.png" alt="locate" />
                  </div>
                  <div>
                    <div class="phone">+7 (000) 123-45-67</div>
                    <div class="get-call">Заказать звонок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-lg">
        <h1 class="main-header">
          Изготовление металлических конструкций
        </h1>
        <div class="sub-main-header mt-4">
          Производственные мощности компании позволяют быстро и качественно<br>выполнить большой объём работы
        </div>
      </div>
    </video-background>
  </div>
</template>

<script>
 import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'FirstScreen',
  components: {
    VideoBackground
  },
  data() {
    return {
      videoPath: '/video/video-list.mp4'
    };
  }
}
</script>

<style scoped>

.sub-main-header {
  font-size: 1.6rem;
  color: white;
}

.main-header {
  margin-top: 7rem;
  font-size: 4.5rem;
  font-weight: 600;
  color: white;
}

@media only screen and (max-width: 767px) {
  .sub-main-header {
    font-size: 1rem;
  }

  .main-header {
    margin-top: 3rem;
    font-size: 2rem;
  }
}

.navbar {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}

.get-call {
  color: #FF8C2F;
  font-size: 1.1rem;
}

.phone {
  color: white;
  font-size: 1.2rem;
}

.ico-image {
  height: 35px;
  width: 35px;
}

.locate {
  color: white;
  font-size: 1.1rem;
}

.sub-title {
  color: white;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
}

.top-bar {
  background-color: #14161b;
}

.menu-image {
  height: 35px;
  width: 35px;
}

.navbar-toggler {
  border: none;
}

.navbar {
  background-color: #1c1f26 !important;
}

.first-screen {
  height: 100vh;
}

.nav-link {
  color: white;
  font-weight: 600;
  font-size: 1.05rem;
}
</style>
