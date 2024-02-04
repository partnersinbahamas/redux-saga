const BASE_URL = 'http://hn.algolia.com/api/v1';
export const request = (url: string, method: string, data?: any) => {
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}/${url}` /*, options */)
    .then((response) => {
      if (!response.ok) {
        throw Error(`${response.status} - ${response.statusText}`);
      };

      return response.json();
    });
}

export const getData = async(url: string, param: any) => await request('search?tags=front_page', 'GET');
