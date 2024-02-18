import Link from "next/link";
import { postData } from "@/utils/apiCalls";
import { notFound } from "next/navigation";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = searchParams["data"];

  if (!data) {
    notFound();
  }

  const dataExists = await postData(data as string).catch((err) => {
    notFound()
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-white">Sucessful Payment!</h1>
      <p className="text-small-regular text-gray-400">
        Successfully Purchased the GiftBox
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-white">
        Go to frontpage
      </Link>
    </div>
  );
}
