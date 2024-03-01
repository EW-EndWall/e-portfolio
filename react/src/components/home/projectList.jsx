import ComponentProjectItem from "./projectItem";

const projectList = ({ dataList }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex text-left gap-2 p-2 rounded-xl dark:bg-zinc-700 shadow-md border-t-2">
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 9l6 0"></path>
            <path d="M4 5l4 0"></path>
            <path d="M6 5v11a1 1 0 0 0 1 1h5"></path>
            <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
            <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
          </svg>
          <h2 className="text-1xl font-bold my-auto">{dataList.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {dataList.list.map((item, key) => (
            <ComponentProjectItem key={key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default projectList;
