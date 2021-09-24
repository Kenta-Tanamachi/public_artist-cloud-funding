<template>
  <div>
    <form id="formId" @submit.prevent>
      <v-card-text class="">
        <div class="header-text text-center">
          <p>申し込み</p>
        </div>
      </v-card-text>

      <br />

      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="30"
        type="text"
        label="氏名（カタカナ）"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      />
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        type="email"
        label="メールアドレス"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />

      <!-- <v-text-field
      v-model="inputPassword"
      class="password"
      :error-messages="passwordErrors"
      type="password"
      label="パスワード"
      required
      @input="$v.inputPassword.$touch()"
      @blur="$v.inputPassword.$touch()"
    />
    <v-text-field
      v-model="repeatPassword"
      :error-messages="repeatPasswordErrors"
      type="password"
      label="パスワード確認"
      required
      @input="$v.repeatPassword.$touch()"
      @blur="$v.repeatPassword.$touch()"
    /> -->

      <v-select
        v-model="selectCourseItem"
        :items="courseItems"
        :error-messages="selectCourseErrors"
        type="select"
        label="コース選択"
        required
        @change="$v.selectCourseItem.$touch()"
        @blur="$v.selectCourseItem.$touch()"
      />

      <v-select
        v-model="selectPaymentItem"
        :items="items"
        :error-messages="selectPaymentErrors"
        type="select"
        label="お支払い方法"
        required
        @change="$v.selectPaymentItem.$touch()"
        @blur="$v.selectPaymentItem.$touch()"
      />

      <v-select
        v-model="selectDonationItem"
        :items="donationItems"
        :error-messages="selectDonationErrors"
        type="select"
        label="寄付金（1口ｘ1,000円）"
        required
        @change="$v.selectDonationItem.$touch()"
        @blur="$v.selectDonationItem.$touch()"
      />

      <!-- <v-checkbox
      v-model="checkboxPaid"
      :error-messages="checkboxPaidErrors"
      label="送金を行いましたか？"
      class="checkbox"
      required
      @change="$v.checkboxPaid.$touch()"
      @blur="$v.checkboxPaid.$touch()"
    /> -->

      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="入力項目に間違いはないですか？"
        class="checkbox"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      />

      <v-card class="mx-auto text-center" style="" flat tile>
        <div>支援金総額：{{ paymentTotal }}</div>
      </v-card>

      <br />

      <v-card class="d-flex flex-row-reverse mx-auto" style="" flat tile>
        <div class="mx-auto">
          <v-btn class="" @click="submit">
            申し込み
          </v-btn>
        </div>
      </v-card>

      <v-card class="d-flex flex-row-reverse mx-auto" style="" flat tile>
        <v-card-text class="">
          <div class="text-center">
            <p>＊申し込み後に、ご自身で支払い手続きを行って下さい。</p>
          </div>
        </v-card-text>
      </v-card>

      <!-- <v-btn @click="clear">
      clear
    </v-btn> -->
    </form>
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

import postFormData from '../../services/api'

export default {
  name: 'SPFormForm',
  components: {},

  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    select: { required },
    selectCourseItem: { required },
    selectPaymentItem: { required },
    selectDonationItem: { required },
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
    inputPassword: {
      required,
      minLength: minLength(8)
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
    courseItems: ['1,000円', '3,000円', '5,000円'],
    donationItems: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25'
    ],
    checkbox: false,
    checkboxPaid: false,

    selectPaymentItem: undefined,
    selectCourseItem: undefined,
    selectDonationItem: undefined,

    show1: false,
    show2: true,
    show3: false,
    show4: false,
    inputPassword: '',
    repeatPassword: '',
    rules: {
      required: (value) => !!value || 'Required.',
      // min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match"
      // passwordEq: () => this.password !== this.password2 || 'あってない',
    }
  }),
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked &&
        errors.push('チェックを入れないと購入出来ません')
      return errors
    },
    checkboxPaidErrors() {
      const errors = []
      if (!this.$v.checkboxPaid.$dirty) return errors
      !this.$v.checkboxPaid.checked &&
        errors.push('チェックを入れないと購入出来ません')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('選択してください')
      return errors
    },
    selectCourseErrors() {
      const errors = []
      if (!this.$v.selectCourseItem.$dirty) return errors
      !this.$v.selectCourseItem.required && errors.push('選択してください')
      return errors
    },
    selectDonationErrors() {
      const errors = []
      if (!this.$v.selectDonationItem.$dirty) return errors
      !this.$v.selectDonationItem.required && errors.push('選択してください')
      return errors
    },
    selectPaymentErrors() {
      const errors = []
      if (!this.$v.selectPaymentItem.$dirty) return errors
      !this.$v.selectPaymentItem.required && errors.push('選択してください')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('名前は30文字以内です')
      !this.$v.name.required && errors.push('必須項目です')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mailの形式で入力して下さい')
      !this.$v.email.required && errors.push('必須項目です')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.inputPassword.$dirty) return errors
      !this.$v.inputPassword.minLength && errors.push('8文字以上です')
      !this.$v.inputPassword.required && errors.push('必須項目です')
      return errors
    },
    repeatPasswordErrors() {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      console.log(this.inputPassword)
      console.log(this.repeatPassword)
      this.inputPassword !== this.repeatPassword &&
        errors.push('入力したパスワードと異なっています')
      !this.$v.repeatPassword.required && errors.push('必須項目です')
      return errors
    },

    selectPaymentItemSelect() {
      return this.selectPaymentItem
    },
    selectCourseItemSelect() {
      return this.selectCourseItem
    },
    selectDonationItemSelect() {
      return this.selectDonationItem
    },

    paymentTotal() {
      let pay = 0

      if (this.selectCourseItemSelect === '1,000円') {
        pay += 1000
      }
      if (this.selectCourseItemSelect === '3,000円') {
        pay += 3000
      }
      if (this.selectCourseItemSelect === '5,000円') {
        pay += 5000
      }

      if (this.selectDonationItem !== undefined) {
        pay += this.selectDonationItem * 1000
      }

      if (pay > 999) {
        pay = pay.toLocaleString()
      }

      return `${pay}円`
    }
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (
        this.$v.name.$invalid === true ||
        this.$v.email.$invalid === true ||
        this.$v.selectCourseItem.$invalid === true ||
        this.$v.selectDonationItem.$invalid === true ||
        this.$v.checkbox.$invalid === true
      ) {
        // alert('だめです');
        return false
      }

      if (!this.email) {
        return false
      }
      if (!this.name) {
        return false
      }
      if (!this.selectCourseItemSelect) {
        return false
      }
      if (!this.selectPaymentItem) {
        return false
      }
      if (!this.selectDonationItem) {
        return false
      }

      const payload = {
        mail: this.email,
        name: this.name,
        course: this.selectCourseItemSelect,
        // donation: '8000',
        // payment: this.selectCourseItemSelect,
        payment: this.selectPaymentItem,
        donationNum: this.selectDonationItem,
        totalPayment: this.paymentTotal
      }

      await postFormData(payload)

      alert('申し込みが完了しました。お支払い手続きをお願いします。')

      // alert('いいです');
      return true
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
#formId .v-card {
  /* margin-top: 50px;
  margin-left: auto;
  margin-right: auto; */
  /* width: 800px; */
  /* max-width: 800px !important; */
}
#formId .v-card__title {
  font-size: 2.25rem;
  padding-bottom: 16px;
}

#formId {
  padding: 8px;
  margin: 8px;
}

#formId form div {
  padding: 8px;
  margin: 8px;
}

#formId .v-label {
  left: 0;
  right: auto;
  top: -3px;
}
#formId .v-messages * {
  /* line-height: 150%; */
}

#formId .v-input {
  /* font-size: 10px; */
  margin-bottom: 16px;
}

#formId input {
  /* font-size: 150%; */
}

#formId div {
  /* font-size: 120%; */
  /* line-height: 120%; */
}

#formId .checkbox {
  /* margin-bottom: 16px !important; */
}

#formId .v-label .theme--light .error--text {
  color: blue;
}

#formId .v-text-field .v-label--active {
  max-width: 100% !important;
  transform: translateY(-18px) scale(1);
}

#formId .v-messages__message {
  /* font-size: 75% !important; */
}

#formId .v-btn {
  min-width: 128px;
  height: 48px;
  margin-bottom: 32px;
}

#formId .v-btn span {
  font-size: 150%;
}

#formId .d-flex {
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
}
</style>
