<template>
  <div class="">
    <v-card id="form" class="">
      <SPFormForm />
    </v-card>
  </div>
</template>

<script>
// import Btn from "./components/Btn"
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

import SPFormForm from './SP-FormForm.vue'

export default {
  name: 'SPForm',
  components: {
    SPFormForm
  },

  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },
  data: () => ({
    name: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>

<style scoped>
.v-card {
  /* margin-top: 16px;
  margin-left: auto;
  margin-right: auto; */
  /* width: 800px; */
  /* max-width: 800px !important; */
}
.v-card__title {
  /* font-size: 2.25rem; */
  /* padding-bottom: 16px; */
}

form div {
  padding: 8px;
  margin: 8px;
}

.v-label {
  left: 0;
  right: auto;
}
</style>
