const images = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "Image 1" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "Image 2" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Image 3" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Image 4" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Image 5" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Image 6" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Image 7" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Image 8" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Image 9" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Image 10" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "Image 11" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "Image 12" },
];

const Masonry = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="grid gap-2">
                <div>
                    <img className="h-auto max-w-full" src={images[0].src} alt={images[0].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[1].src} alt={images[1].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[2].src} alt={images[2].alt} />
                </div>
            </div>
            <div className="grid gap-2">
                <div>
                    <img className="h-auto max-w-full " src={images[3].src} alt={images[3].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full " src={images[4].src} alt={images[4].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full " src={images[5].src} alt={images[5].alt} />
                </div>
            </div>
            <div className="grid gap-2">
                <div>
                    <img className="h-auto max-w-full" src={images[6].src} alt={images[6].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[7].src} alt={images[7].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[8].src} alt={images[8].alt} />
                </div>
            </div>
            <div className="grid gap-2">
                <div>
                    <img className="h-auto max-w-full" src={images[9].src} alt={images[9].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[10].src} alt={images[10].alt} />
                </div>
                <div>
                    <img className="h-auto max-w-full" src={images[11].src} alt={images[11].alt} />
                </div>
            </div>
        </div>
    )
};

export default Masonry