import { createSelector } from 'reselect'

import { getGoCards } from '../../providers/go_card/selectors'

const getProviderManager = ({ providerManager }) => providerManager

export const getLoading = createSelector(
  getProviderManager,
  ({ loading }) => loading
)

export const getCards = createSelector(getProviderManager, ({ cards }) => cards)
