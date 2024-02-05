import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface StoryType {
    cover: string;
    alt: string;
    text: string;
    title: string;
    pictures: string[];
}

interface ImageModelProps {
    Image: StoryType;
}

const ImageModel = ({ Image }: ImageModelProps) => {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleModalClick = (setValue: boolean) => {
        setOpen(setValue);
    };

    return (
        <div
            className={`border border-gray-500 p-3 relative h-fit max-w-full cursor-pointer`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handleModalClick(true)}
        >
            <img ref={imageRef} className="inset-0 h-auto max-w-full object-cover" src={Image.cover} alt={Image.alt} />
            {hover &&
                <div className="absolute inset-0 bg-[#232424] bg-opacity-95 flex flex-col justify-center items-center p-6">
                    <p className={`text-white text-sm max-h-[${imageRef.current?.clientHeight}px] overflow-y-auto`}>{Image.text}</p>
                </div>
            }
            <Modal
                open={open}
                setOpen={handleModalClick}
                images={Image.pictures}
            />
        </div >
    )

}

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    images: string[];
};

const Modal = ({ open, setOpen, images }: Props) => {
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
                            <Dialog.Panel className="relative transform overflow-hidden bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="absolute right-0 top-0 m-2"
                                >
                                    <XMarkIcon className="h-6 w-6 text-white" />
                                </button>
                                <div className="w-full h-full flex flex-row items-center">
                                    {images.map((image, index) => (
                                        <div key={index} className="h-[400px] w-[400px]">
                                            <img
                                                className="h-full w-full object-cover"
                                                src={image}
                                                alt="image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ImageModel;