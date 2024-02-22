import Link from "next/link";

export default async function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl text-white">Something Went Wrong!</h1>
      <p className="text-md text-gray-400">
        Please try again later
      </p>
      <Link href="/" className="mt-4 underline text-lg text-white">
        Go to frontpage
      </Link>
    </div>
  );
}
