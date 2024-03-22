<template>
  <div class="w-100">
    <div class="form-el px-4">
      <h3 class="form-header">
        Узнайте стоимость изготовления
      </h3>
      <div>
        <form class="row pb-1" @submit.prevent="handleSubmit" style="overflow-x: hidden;">
          <div class="d-flex justify-content-center mt-5">
            <div class="form-item">
              <input
                id="name"
                v-model="name"
                type="text"
                placeholder="Имя"
                class="form-input"
                required
              >
            </div>
            <div class="form-item">
              <input
                id="phone"
                v-model="phone"
                type="tel"
                placeholder="Телефон"
                class="form-input"
                required
              >
            </div>
            <div class="form-item-btn">
              <button
                type="submit"
                class="h-100 btn-style"
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="using-terms d-flex justify-content-center mt-5">
        <div class="form-check form-switch">
          <input class="form-check-input" v-model="agreementChecked" type="checkbox" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Я согласен на обработку моих
            <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">персональных данных</a>
          </label>
        </div>
      </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Обработка персональных данных</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Настоящим Я, действуя своей волей и в своем интересе, при размещении (вводе) своих персональных данных на Интернет сайте aberfia-construction.ru общества с ограниченной ответственностью _________ (ИНН_________, ОГРН__________, далее - Оператор) подтверждаю свое согласие на обработку указанных мной персональных данных Оператором в целях предложения мне услуг, новых услуг, предлагаемых Оператором, в целях проведения опросов, анкетирования, рекламных и маркетинговых исследований в отношении услуг, предоставляемых Оператором, в том числе путем осуществления прямых контактов со мною посредством средств связи, указанных мной на настоящем сайте.Настоящее право (согласие) предоставляется на осуществление любых действий в отношении моих персональных данных, которые необходимы и желаемы для достижения вышеуказанных целей, включая, без ограничения, сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу, обезличивание, блокирование и уничтожение персональных данных, под которыми понимаются все данные, указанные мной на настоящем сайте.
            Настоящим подтверждаю, что уведомлен о том, что обработка персональных данных осуществляется Оператором любым способом, в том числе как с использованием средств автоматизации (включая программное обеспечение), так и без использования средств автоматизации (с использованием различных материальных носителей, включая бумажные носители).
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" @click="termsAccept" data-bs-dismiss="modal" class="btn btn-primary">Принимаю</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FirstScreenForm',
  data () {
    return {
      name: '',
      phone: '',
      letterSent: false,
      agreementChecked: false,
      elasticMailUsername: this.elasticMailUsername,
      elasticMailKey: this.elasticMailKey
    }
  },
  methods: {
    handleSubmit () {
      if (this.agreementChecked) {
        this.letterSent = false
        /* eslint-disable no-undef */
        Email.send({
          Host: 'smtp.elasticemail.com',
          Username: this.elasticMailUsername,
          Password: this.elasticMailKey,
          To: this.elasticMailUsername,
          From: this.elasticMailUsername,
          Subject: 'Letter from the Supreme Facade website',
          Body: `
            <table style="width: 800px; font-size: 12pt; font-family: Arial, sans-serif, sans-serif;" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td style="min-width: 100px;">
                    <p style="FONT-FAMILY: Arial, sans-serif; padding: 0px; font-size: 12pt; line-height: 14pt; margin-bottom: 0px;">
                      <span>
                        <span style="font-size: 12pt; color: #333333;"><strong>Name:</strong></span>
                        <span style="font-size: 12pt; color:#333333;"> ${this.name}</span>
                        <span><br></span>
                      </span>
                      <span>
                        <span style="font-size: 12pt; color: #333333;"><strong>Phone:</strong></span>
                        <span style="font-size: 12pt; color:#333333;"> ${this.phone}</span>
                        <span><br></span>
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          `
        }).then((message) => {
          console.log(message)
          if (message === 'OK') {
            this.letterSent = true
            alert('Письмо отправлено')
          } else {  
            alert(message)
          }
        })
      } else {
        alert('Подтвердите использование персональных данных')
      }
    },
    termsAccept () {
      this.agreementChecked = true
    }
  }
}

</script>

<style>

.form-item-btn {
  width: 35vh !important;
}

.form-item {
  margin-right: 40px;
}

.btn-style {
  background-color: #0d6efd;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  color: white;
  font-weight: 500;
  width: 100%;
}

@media only screen and (max-width: 767px) {
  .btn-style {
    font-size: 1rem;
  }
  .form-item {
    margin-right: 5px;
  }
}

.form-input {
  padding: 10px;
  width: 100%;
  background-color: rgb(53, 55, 64, 0.8);
  margin-right: 30px;
  border: none;
  border-radius: 5px;
  color: white;
}

.form-input:focus {
  background-color: rgba(55, 62, 95, 0.8);
}

.input-title {
  color: rgb(131, 131, 131);
}

.form-el {
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: rgb(20, 22, 27, 0.9);
  border-radius: 10px;
}

.form-header {
  font-size: 2rem;
  color: white;
}

</style>
