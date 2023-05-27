import { Disclosure } from "@headlessui/react";

const Closure = ({ details }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              disabled={!details}
              className=" indent-6 font-sans text-sm  rounded-lg disabled:text-gray-300  dark:disabled:text-gray-700 text-accent capitalize font-medium "
            >
              <span>Details</span>
            </Disclosure.Button>
            <Disclosure.Panel className=" w-full border border-gray-300 dark:border-gray-700 font-sans text-sm capitalize font-normal  text-black dark:text-white px-3 py-2 rounded-lg  my-2 ">
              {details}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Closure;
