/* eslint-disable no-unused-expressions */
<template>
  <div class="content_wrapper">
    <div class="page-wrapper">
      <v-card class="mx-auto">
        <v-card-text class="text--primary header_text">
          <form id="formLogin" @submit.prevent>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              type="email"
              label="メールアドレス"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            />
            <v-text-field
              v-model="inputKeyword"
              class="text"
              :error-messages="keywordErrors"
              type="text"
              label="ダウンロードキーワード"
              required
              @input="$v.inputKeyword.$touch()"
              @blur="$v.inputKeyword.$touch()"
              @keypress="onKeypress"
            />

            <br />

            <v-btn class="" @click="submit">
              進む
            </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </div>
    <div class="page-wrapper">
      <v-card class="mx-auto">
        <v-card-text class="text--primary header_text">
          <router-link to="/">
            戻る
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

import { validationMixin } from 'vuelidate'
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from 'vuelidate/lib/validators'

export default {
  name: 'DownLoadLoginC',
  components: {},
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    },
    checkboxPaid: {
      checked(val) {
        return val
      }
    },
    inputKeyword: {
      required
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('inputPassword')
    }
  },
  data: () => ({
    name: '',
    email: '',
    select: null,
    items: ['PayPay', 'Kyash', '銀行振込'],
    checkbox: false,
    checkboxPaid: false,

    show1: false,
    show2: true,
    show3: false,
    show4: false,

    inputKeyword: '',

    repeatPassword: '',
    rules: {
      required: (value) => !!value || 'Required.',
      // min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match"
      // passwordEq: () => this.password !== this.password2 || 'あってない',
    }
  }),
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mailの形式で入力して下さい')
      !this.$v.email.required && errors.push('必須項目です')
      return errors
    },
    keywordErrors() {
      const errors = []
      if (!this.$v.inputKeyword.$dirty) return errors
      // this.$v.inputKeyword.$model !== 'あ' && errors.push('キーワードが違います');
      !this.$v.inputKeyword.required && errors.push('必須項目です')
      return errors
    }
  },
  created() {},

  methods: {
    onKeypress() {
      if (this.keywordErrors.length === 0) {
        // alert('OK');
        if (this.$v.inputKeyword.$model === 'あ') {
          this.$router.push({ name: 'download_c_ok', params: { isOK: true } })
          return true
        }
      }
      return this.keywordErrors
    },
    submit() {
      this.$v.$touch()
      if (this.keywordErrors.length === 0) {
        // alert('OK submit');
        if (this.$v.inputKeyword.$model === 'あ') {
          this.$router.push({ name: 'download_c_ok', params: { isOK: true } })
          return true
        }
      }
      return this.keywordErrors
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
      this.checkboxPaid = false
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 16px;
  /* width: 800px; */
  /* max-width: 800px !important; */
}

.v-btn {
  /* min-width: 300px; */
  /* height: 300px; */
}
.v-btn span {
  line-height: 150%;
}
</style>
