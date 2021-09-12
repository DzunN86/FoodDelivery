export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const selectedTabSuccess = selectedTab => ({
  type: SET_SELECTED_TAB,
  payload: {selectedTab},
});

export function setSelectedTab(selectedTab) {
  return dispatch => {
    dispatch(selectedTabSuccess(selectedTab));
  };
}
