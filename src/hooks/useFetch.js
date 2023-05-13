import useAxiosPrivate from "./useAxiosPrivate";

import { useQuery } from "react-query";
function useFetch(url, name) {
  const axiosPrivate = useAxiosPrivate();

  const fetchTaskList = async () => {
    const response = await axiosPrivate.get(url);
    console.log(response.data);
    const tasks = await response.data;
    return tasks;
  };
  const { isError, isLoading, data, error } = useQuery([name], fetchTaskList);
  return { data, isLoading, isError, error };
}

export default useFetch;
