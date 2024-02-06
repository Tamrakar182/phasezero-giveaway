export default function Example({ stats }: any) {
  return (
    <div className="bg-transparent min-w-[120px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat: any) => (
            <div
              key={stat.name}
              className="bg-transparent px-4 py-6 sm:px-6 lg:px-8"
            >
              <p className="text-1xl font-medium leading-6 text-gray-400 ">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-1xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
