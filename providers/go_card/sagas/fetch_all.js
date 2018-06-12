import React from 'react'
import cheerio from 'cheerio-without-node-native'
import { put, select, takeLatest } from 'redux-saga/effects'

import GoCard from '../component'
import Actions, { Types } from '../../actions'
import { getCardNumber, getPassword } from '../selectors'

const getDetails = async (cardNumber, password) => {
  const login_url = 'https://gocard.translink.com.au/webtix/welcome/welcome.do'
  const form = new FormData()
  form.append('cardNum', cardNumber)
  form.append('pass', password)
  form.append('cardOps', 'Display')
  const options = {
    method: 'POST',
    body: form
  }
  return fetch(login_url, options)
    .then(raw => raw.text())
    .then(text => cheerio.load(text, { ignoreWhitespace: true }))
    .then($ => {
      const cells = $('#balance-table td').toArray()
      const [updatedAt, balance] = cells.map(cell => cell.children[0].data)
      return { balance, updatedAt: new Date(updatedAt) }
    })
}

const start = function*() {
  const cardNumber = yield select(getCardNumber)
  const password = yield select(getPassword)
  const { balance, updatedAt } = yield getDetails(cardNumber, password)
  yield put(
    Actions.fetchAllComplete([<GoCard balance={balance} key={updatedAt} />])
  )
}

const fetchAll = function*() {
  yield takeLatest(Types.FETCH_ALL_START, start)
}

export default fetchAll
