import axios from 'axios'

export const state = () => ({
  socket: undefined,
  inputText: '',
  itemCount: 1,
  items: [
    {
      id: 0,
      message: 'こんにちは',
      isUser: false,
      userId: '12345678',
      time: ''
    },
    {
      id: 1,
      message: 'こんにちは',
      isUser: true,
      userId: '12345679',
      time: ''
    }
  ],

  userId: undefined,
  userName: undefined,

  payment: undefined,

  isMenuIcon: true
})

export const mutations = {
  setIsMenuIcon(state, bool) {
    state.isMenuIcon = bool
  },
  setSocket(state) {
    let now = new Date()
    now = now.toLocaleTimeString()

    state.items[0].time = now
  },
  incrementItemCount(state) {
    state.itemCount += 1
  },
  pushItem(state, payload) {
    state.items.push(payload)
  },
  updateMessage(state, message) {
    state.inputText = message
  },

  chengePayment(state, payment) {
    state.payment = payment
  },
  chengePaymentClear(state, payload) {
    state.payment = undefined
  }
}

export const actions = {
  onEventSet({ commit }) {
    commit('setSocket')

    this.state.userId = Math.random()
      .toString(32)
      .substring(2)
    console.log(this.state.userId)

    this.state.items[1].userId = this.state.userId

    // 配列
    const nameAry = [
      'とんかつ',
      'ぺんぎん',
      'しろくま',
      'とかげ',
      'ねこ',
      'ひよこ'
    ]

    // 配列からランダムで値を選択
    const name = nameAry[Math.floor(Math.random() * nameAry.length)]
    this.state.userName = name

    const userPayload = {
      id: this.state.count,
      message: '',
      userId: this.state.userId,
      userName: this.state.userName
    }
  },

  sendMessage({ commit }) {
    // console.log(payload);
    console.log(this.state.inputText)

    if (this.state.inputText === '') {
      return
    }

    // ユーザー情報
    const { userAgent } = window.navigator
    const { referrer } = window.document

    const payload = {
      message: this.state.inputText,
      userId: this.state.userId,
      userName: this.state.userName,
      userAgent,
      referrer
    }

    // // TODO: Lambda叩く
    // const urlLambda = 'https://hoge.execute-api.us-east-2.amazonaws.com/stage/testPostSample';
    // const payloadLambda = { ...payload };
    // axios.post(urlLambda, JSON.stringify(payloadLambda)).then((response) => {
    //   // console.log(response);
    //   // console.log(response.status);
    // });
    // // axios.post(urlLambda, payloadLambda);
    //
    // this.state.inputText = '';

    console.log('owari')
  },
  chengePayment({ commit }, payment) {
    commit('chengePayment', payment)
  },
  chengePaymentClear({ commit }, payment) {
    commit('chengePaymentClear', {})
  }
}
