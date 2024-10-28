import axios from "axios";
import { useEffect, useState } from "react";


type DataWithBlogs = { blogs: any[] };


// Define a generic type for the data you expect to fetch
const useFetchData = <T extends DataWithBlogs>(apiEndPoint: string) => {
  // Specify the state types
  const [loading, setLoading] = useState<boolean>(true);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [allData, setAllData] = useState<T["blogs"]>([]);

  useEffect(() => {
    // Initial load check
    if (initialLoad) {
      setInitialLoad(false);
      setLoading(false);
      return; // Prevent fetching data on the first render
    }

    setLoading(true); // Start loading state

    const fetchAllData = async () => {
      try {
        const res = await axios.get(apiEndPoint);
        const allData = (res.data as { blogs: T[] }).blogs || [];
        setAllData(allData as T[]); // Set the fetched data
      } catch (e) {
        console.error("Error getting blog data", e);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false); // End loading state
      }
    };

    if (apiEndPoint) {
      fetchAllData(); // Call the fetch function
    }
  }, [initialLoad, apiEndPoint]);

  return { allData, loading }; // Return the data and loading state
};

export default useFetchData;
