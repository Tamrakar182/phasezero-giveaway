import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Form from "./form";
import axios from "axios";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  giftValue: number;
};

export default function FormModal({ open, setOpen, giftValue }: Props) {
  const handleEsewaPayment = async () => {
    const url = "http://localhost:8000/api/v1/create/order";
    const data = {
      amount: 25,
      name: "dipesh",
      email: "dipeshsah98@gmail.com",
      offerType: "basic",
    };
    try {
      const response = await axios.post(url, data);
      console.log(response?.data);
      console.log(response?.data?.payload?.data.formData);
      if (response?.status === 200) {
        esewaCall(response?.data?.payload?.data.formData);
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const esewaCall = (formData) => {
    console.log(formData);
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  const handleFormSubmit = async (data: any) => {
    // post data into backend
    console.log(data, giftValue);
    await handleEsewaPayment();
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                      type="submit"
                      form="form"
                      className="inline-flex w-full justify-center shadow-sm px-3 py-2 bg-white text-base font-medium text-black border border-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>

                    <button
                      type="button"
                      className="inline-flex w-full justify-center border border-transparent shadow-sm px-3 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
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
