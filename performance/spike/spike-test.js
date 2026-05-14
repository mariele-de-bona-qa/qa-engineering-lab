import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 200 },
    { duration: '10s', target: 10 }
  ]
}

export default function () {

  http.get('https://reqres.in/api/users')

  sleep(1)
}
