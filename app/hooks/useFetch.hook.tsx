import { useEffect, useState } from 'react';
import axios from 'axios';

enum Method {
  POST = 'GET',
  GET = 'GET',
}

export const useFetch = <D, T>(url: string, method: Method, body: T) => {
  const [data, setData] = useState<D | null>(null);

  useEffect(() => {
    if (method === Method.GET) {
      axios
        .get<D>(url, { params: body })
        .then(res => setData(res.data))
        .catch(exc => console.log(exc));
    } else if (method === Method.POST) {
      axios
        .post<D>(url, body)
        .then(res => setData(res.data))
        .catch(exc => console.log(exc));
    }
  }, [url]);

  return [data];
};
