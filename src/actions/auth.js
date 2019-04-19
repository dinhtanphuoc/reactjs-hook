export const useActions = (state, dispatch) => ({
  triggerAction: data => dispatch({ type: 'DEMO', payload: '123' })
});
