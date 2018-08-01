import {
  prop,
  cond,
  has,
  path,
  T
} from 'ramda'

export const responseDataHandler = (data) => {
  const condition = cond([
    [has('response'), path(['response', 'data'])],
    [has('data'), prop('data')],
    [T, data => data]
  ])

  return condition(data)
}

export const requestHandler = (promise) => {
  return promise
    .then(success => {
      const data = cond([
        [has('data'), prop('data')],
        [T, success => success]
      ])(prop('data', success))

      return [null, data]
    })
    .catch(error => [error])
}
