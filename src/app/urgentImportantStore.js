import create from "zustand";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// const TASKS_URL = "/tasks/urgentImportant";
// const axiosPrivate = useAxiosPrivate();
const useStore = create((set) => ({
  data: [],

  getAllTasks: (tasks) => {
    set((state) => ({ data: (state.data = tasks) }));
  },
  // fetch: async () => {
  //   set(() => ({ isLoading: true }));
  //   try {
  //     const response = await axiosPrivate.get(TASKS_URL);
  //     console.log(response);
  //     set(() => ({ data: (state.data = response.data), isLoading: false }));
  //   } catch (err) {
  //     set(() => ({ error: err, isErrors: true, isLoading: false }));
  //   }
  // },
}));
export default useStore;
