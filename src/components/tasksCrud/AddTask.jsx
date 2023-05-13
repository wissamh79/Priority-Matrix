import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "../../context/authContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { MdAdd, MdCheck } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";

const AddTask = ({ url, name }) => {
  const { edit, id } = useAuth();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  const addTasks = async () => {
    const response = await axiosPrivate.post(url, {
      title,
      text,
    });
    console.log(response.data);
    const tasks = response.data;
    return tasks;

    // console.log(error);
    //
  };
  const { mutate: add } = useMutation(addTasks, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(name);
    },
  });
  const handleAddSubmit = (e) => {
    e.preventDefault();
    try {
      add();
      closeModal();
      setTitle("");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-button  inline-flex  items-center justify-center text-white text-sm rounded-lg font-medium px-1 py-1 w-[75px]"
      >
        <MdAdd size={25} />
      </button>

      <Transition appear show={isOpen} as={Fragment} className="">
        <Dialog as="div" className="relative z-10  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black  bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed   inset-0 overflow-y-auto">
            <div className="flex  h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50%] h-full transform overflow-hidden rounded-2xl bg-primary text-black dark:text-white  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex   items-center justify-between w-full "
                  >
                    <p className="text-lg font-medium leading-6 text-gray-900  dark:text-gray-100">
                      Add{" "}
                    </p>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-button px-2   py-2 text-sm font-medium text-white  focus:outline-none "
                    >
                      <AiOutlineClose size={25} />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2 h-full">
                    <form
                      onSubmit={handleAddSubmit}
                      className="flex flex-col h-full w-full   items-center justify-start   bg-primary space-y-2 px-5 py-5"
                    >
                      <div className="flex flex-wrap w-full">
                        <div className="relative flex flex-col items-center justify-center w-full">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Title
                          </label>

                          <input
                            id="name"
                            type="text"
                            className="w-[75%] bg-primary   border border-input  rounded shadow-xl   text-base   py-1 px-3  "
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="h-[75%] w-full">
                        <div className="relative flex flex-col items-center justify-center">
                          <label
                            htmlFor="details"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Details
                          </label>

                          <textarea
                            id="details"
                            type="text"
                            className="w-[75%]  bg-primary rounded shadow-xl  border border-input    h-52  text-base  py-2 px-3 "
                            onChange={(e) => setText(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        className=" w-[200px] md:w-[100px]  p-1 bg-button text-secondary flex  items-center justify-center  rounded-2xl shadow-xl font-bold cursor-pointer hover:shadow-2xl"
                        disabled={!title ? true : false}
                      >
                        <MdCheck size={30} />
                        <span className="font-sans  text-base   font-medium capitalize">
                          save
                        </span>{" "}
                      </button>
                    </form>
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
export default AddTask;
