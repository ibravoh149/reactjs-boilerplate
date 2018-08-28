const header = () => ({
  headers: {
    // 'x-access-token': window.localStorage.userToken,
    // Authorization: window.localStorage.userToken
    'Access-Control-Allow-Origin':'*',
      crossDomain: true,
  }
});

export default header;
