<template>
  <div
    class="flex w-full bg-color vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="w-full vx-row primary-background height center">
      <p class="text-white text-xl large-font">Travel Pakistani</p>
    </div>
    <div class="w-full vx-row bg-white height center">
      <span class="medium-font">
        Your email ID has been confirmed! Please login with your credentials.
      </span>
      <div class="material-icons ml-auto">highlight_off</div>
    </div>
    <div class="p-12 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <div slot="no-body" class="bg-color">
        <div class="vx-row no-gutter justify-center items-center">
          <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
            <div class="p-12 login-tabs-container">
              <div class="vx-card__title">
                <h5 class="primary-green text-center">Login to Admin Panel</h5>
              </div>

              <div>
                <vs-input
                  name="username"
                  label-placeholder="Username"
                  v-model="loginData.username"
                  class="w-full mt-8"
                  required
                />

                <vs-input
                  type="password"
                  name="password"
                  icon-no-border

                  icon="icon icon-eye-off"
                  icon-pack="feather"
                  label-placeholder="Password"
                  v-model="loginData.password"
                  val-icon-success
                  icon-after="true"
                  class="w-full mt-8 text-color "
                />

                <vs-button @click="loginUser" :disabled="loginData.username === '' || loginData.password === ''" class="mt-10 d-flex primary-background w-full"
                  >Login</vs-button
                >

                <vs-divider class="mt-12 text-color"
                  >Don't have an account?</vs-divider
                >

                <vs-button class="w-full mt-8" type="border"
                  >Register</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      }
    }
  },
    methods: {
    ...mapActions([
      'signInUser',
    ]),
    loginUser() {
      if(this.loginData.username !== '' && this.loginData.password !== '') {
        this.signInUser(this.loginData).then(response => {
          console.log('Response ', response)
          if(response.status === 200) {
            this.$router.push({ path: '/' })
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters([

      ])
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed+Poppins');
.bg-color {
  background-color: #f7f7f7;
  border: none;
}
.primary-green {
  color: #008b20;
}
.primary-background {
  background-color: #008b20;
}
.text-color {
  color: #b0b0c3;
}
.height {
  height: 50px;
}
.center {
  margin: auto;
  width: 50%;
  padding: 12px;
}
.large-font {
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 24px;
}
.medium-font {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  color: #707070;
}
.vs-input--input.normal {
  background-color: #f7f7f7;
  border: 1px solid #f7f7f7 !important;
  border-radius: 8px !important;
}
.vuesax-app-is-ltr .vs-input--icon.icon-after {
  border: none !important;
}
</style>
