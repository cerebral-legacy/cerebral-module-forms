function checkUsername({state, output}) {
  const username = state.get(['username', 'value']);
  fetch('/username', {method: 'POST', body: {username}})
    .then((response) => {
      return response.json().then((data) => ({data, status: response.status}));
    })
    .then((response) => {
      if (response.status === 200) {
        output.success(response.data);
      } else {
        output.error(response.data);
      }
    });
}

checkUsername.async = true;
export default checkUsername;
