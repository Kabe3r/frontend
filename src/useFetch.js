import { useEffect, useState } from "react";
import axios from "axios";
import { paginate } from './util';
import { useLocation } from "react-router-dom";

const url = 'https://filthy-housecoat-dove.cyclic.app/api';

export const useFetch = () => {
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      const { search }  = useLocation();

      useEffect(() => {
          setLoading(true);
            const fetchPosts = async () => {
              const res = await axios.get(url + '/posts' + search);
              setData(paginate(res.data));
              
              setLoading(false);
            }
            fetchPosts();
          }, [search]);
          
          return { loading, data }
}