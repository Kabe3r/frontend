import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { paginate } from './util';
import { useLocation } from "react-router-dom";


export const useFetch = () => {
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      const { search }  = useLocation();

      useEffect(() => {
          setLoading(true);
            const fetchPosts = async () => {
              const res = await axiosInstance.get('/posts' + search);
              setData(paginate(res.data));
              
              setLoading(false);
            }
            fetchPosts();
          }, [search]);
          
          return { loading, data }
}