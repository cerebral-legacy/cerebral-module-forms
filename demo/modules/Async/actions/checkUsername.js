function checkUsername({module, output}) {
  const username = module.state.get(['username', 'value']);
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

export default checkUsername;
