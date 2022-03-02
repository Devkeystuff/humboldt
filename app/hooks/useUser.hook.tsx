import axios from 'axios';
import { httpClient } from 'globals/http';
import useSWR from 'swr';

const fetcher = (url: string) => httpClient.get(url).then(res => res.data);

const useUser = id => {
  const { data, error } = useSWR('/user/', fetcher);
};
