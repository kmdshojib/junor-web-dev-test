import { useEffect, useState } from "react";

export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, );
  
    const refetchData = () => {
      setLoading(true);
      fetchData();
    };
  
    return { data, isLoading, error, refetchData };
  };

export const usePostData = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { isLoading, error, postData };
};

export const useDeleteData = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteData = async (url, data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to delete data');
            }

            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { isLoading, error, deleteData };
};