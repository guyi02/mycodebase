    const controller = new AbortController();
  
  const fetchTimeout = (url, data, ms, {signal, ...options} = {}) => {
    const controller = new AbortController();
    const promise = fetch(url, {
      signal: controller.signal,
      method: 'post',
      headers: {'Content-Type': 'text/plain'},
      body: data,
    });
    if (signal) signal.addEventListener('abort', () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    return promise.finally(() => clearTimeout(timeout));
  };
  
//  how to use

  fetchTimeout(`${printLink}`, zpl, 5000, {signal: controller.signal})
      .then((response) => response.json())
      .then(console.log)
      .catch((error) => {
        if (error.name === 'AbortError') {
          // fetch aborted either due to timeout or due to user clicking the cancel button
        } else {
          // network error or json parsing error
        }
  });
