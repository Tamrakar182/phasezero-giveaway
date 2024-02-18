import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Form from "./Form";
import { handleEsewaPayment } from "@/utils/apiCalls";
import { FormValues } from "./Form";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  giftValue: number;
};

export default function FormModal({ open, setOpen, giftValue }: Props) {

  const handleFormSubmit = async (data: FormValues) => {
    // post data into backend
    console.log(data, giftValue);
    await handleEsewaPayment({
      amount: giftValue,
      name: data.name,
      email: data.email,
      offerType: "basic",
    });
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="w-full h-full flex flex-col items-center">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Please Fill This Form
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Enter the following details to be eligible for the
                          giveaway.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Form onSubmit={handleFormSubmit} />
                  <div className="mt-5 sm:mt-6 gap-3 flex flex-row max-w-60 self-end">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center shadow-sm px-3 py-2 bg-gray-700 text-base font-medium text-white border border-black hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      form="form"
                      className="inline-flex w-full justify-center shadow-sm px-3 py-2 bg-black text-base font-medium text-white border border-black hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
