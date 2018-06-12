import { createSelector } from 'reselect'

const getGoCardProvider = ({ providers: { goCard } }) => goCard

export const getCardNumber = createSelector(
  getGoCardProvider,
  ({ cardNumber }) => cardNumber
)

export const getPassword = createSelector(
  getGoCardProvider,
  ({ password }) => password
)

export const getGoCards = createSelector(
  getGoCardProvider,
  ({ cards }) => cards
)
