import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { useMutation, useQueryClient } from "react-query";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { MdAdd, MdCheck } from "react-icons/md";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

const EditTask = ({ url, name, id, title, details }) => {
  const [titleInput, setTitleInput] = useState(title);
  const [textInput, setTextInput] = useState(details);

  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  const updateTasks = async () => {
    const response = await axiosPrivate.patch(`${url}/${id}`, {
      titleInput,
      textInput,
    });
    console.log(response.data);
    const tasks = response.data;
    return tasks;

    // console.log(error);
    //
  };
  const { mutate: update } = useMutation(updateTasks, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(name);
    },
  });
  const handleEditSubmit = (e) => {
    e.preventDefault();
    try {
      update();
      closeModal();
      //   setTitleInput(" ");
      //   setTextInput(" ");
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
        className="  inline-flex  items-center justify-center textInput-white textInput-sm rounded-lg font-medium "
      >
        <AiOutlineEdit size={25} />
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
            <div className="flex  h-full items-center justify-center p-4 textInput-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50%] h-full transform overflow-hidden rounded-2xl bg-primary textInput-black dark:textInput-white  p-6 textInput-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex   items-center justify-between w-full "
                  >
                    <p className="text-lg font-medium leading-6 text-gray-900  dark:text-gray-100">
                      Edit{" "}
                    </p>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-button px-2   py-2 textInput-sm font-medium textInput-white  focus:outline-none "
                    >
                      <AiOutlineClose size={25} />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2 h-full">
                    <form
                      onSubmit={handleEditSubmit}
                      className="flex flex-col h-full w-full   items-center justify-start   bg-primary space-y-2 px-5 py-5"
                    >
                      <div className="flex flex-wrap w-full">
                        <div className="relative flex flex-col items-center justify-center w-full ">
                          <label
                            htmlFor="name"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Title
                          </label>

                          <input
                            id="name"
                            type="text"
                            value={titleInput}
                            className="w-[75%] bg-primary   border border-input  rounded shadow-xl   text-base   py-1 px-3 resize-none "
                            onChange={(e) => setTitleInput(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className=" w-full h-[75%]">
                        <div className="relative flex flex-col items-center justify-center max-h-full">
                          <label
                            htmlFor="details"
                            className="leading-7 text-sm text-gray-400"
                          >
                            Details
                          </label>

                          <textarea
                            id="details"
                            type="text"
                            value={textInput}
                            className="w-[75%]  bg-primary rounded shadow-xl  border border-input      text-base h-52  px-2 py-1 "
                            onChange={(e) => setTextInput(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        className=" w-[200px] md:w-[100px]  p-1 bg-button text-secondary flex  items-center justify-center  rounded-2xl shadow-xl font-bold cursor-pointer hover:shadow-2xl"
                        disabled={!titleInput ? true : false}
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
export default EditTask;
