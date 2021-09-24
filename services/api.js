import axios from 'axios'

const postFormData = async (payload) => {
  //   axios.defaults.baseURL = 'http://localhost:8730';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
  //   axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:8730';
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  axios.create({
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true
    }
  })

  console.log(payload)

  const result = await axios.post(
    'https://hoge.execute-api.us-east-2.amazonaws.com/v1/manaSendFormData',
    payload
  )

  console.log('axiossssssssssssssssssss')

  console.log(result)

  return result
}

export default postFormData
