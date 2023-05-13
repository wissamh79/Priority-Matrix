import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const GetAllTasks = async (url) => {
  const axiosPrivate = useAxiosPrivate();
  const response = await axiosPrivate.get(url);
  console.log(response.data);
  const tasks = response.data;
  return tasks;
};
// export const getTask = async (url, id) => {
//   const axiosPrivate = useAxiosPrivate();
//   const response = await axiosPrivate.get(`${url}/${id}`);
//   console.log(response.data);
//   const tasks = response.data;
//   return tasks;

//   // console.log(error);
//   //
// };
// export const addTasks = async (url, axiosPrivate, title, text) => {
//   const response = await axiosPrivate.post(url, {
//     title,
//     text,
//   });
//   console.log(response.data);
//   const tasks = response.data;
//   return tasks;

//   // console.log(error);
//   //
// };
// export const updateTasks = async (url, id, title, text) => {
//   const axiosPrivate = useAxiosPrivate();
//   const response = await axiosPrivate.patch(`${url}/${id}`, {
//     title,
//     text,
//   });
//   console.log(response.data);
//   const tasks = response.data;
//   return tasks;

//   // console.log(error);
//   //
// };
// export const deleteTask = async (url, axiosPrivate, id) => {
//   const response = await axiosPrivate.delete(`${url}/${id}`);
//   console.log(response.data);
//   const tasks = response.data;
//   return tasks;

//   // console.log(error);
//   //
// };
