import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";

const DeleteTask = ({ url, name, id }) => {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // const { id } = useParams();

  const deleteData = async () => {
    const response = await axiosPrivate.delete(`${url}/${id}`);
    console.log(response.data);
    const data = response.data;
    return data;

    // console.log(error);
    //
  };
  const { mutate: deleteD } = useMutation(deleteData, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(name);
    },
  });
  const handleDeleteTask = (e) => {
    e.preventDefault();
    try {
      deleteD();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-black dark:text-white"
      >
        <AiOutlineDelete size={20} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black  bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary text-black dark:text-white  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex   items-center justify-between w-full "
                  >
                    <p className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                      Delete
                    </p>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <AiOutlineClose size={25} />
                    </button>
                  </Dialog.Title>

                  <div className="flex   items-center justify-center w-full mt-4">
                    <button
                      onClick={handleDeleteTask}
                      type="button"
                      className="w-[100px] inline-flex justify-center rounded-md border border-transparent bg-blue-200 disabled:text-gray-300 disabled:bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <AiOutlineCheck size={30} />
                    </button>
                    {/* <button
                    type="button"
                    onClick={closeModal}
                    className="w-[100px] inline-flex justify-center rounded-md border border-transparent bg-blue-200 disabled:text-gray-300 disabled:bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <AiOutlineClose size={30} />
                  </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteTask;
