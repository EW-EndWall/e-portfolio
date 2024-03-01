const projectItem = ({ item }) => {
  return (
    <>
      <span className="flex flex-col justify-between gap-2 p-2 rounded-xl hover:bg-zinc-500 duration-200 shadow-md border-t-2">
        <a href={item.url ? item.url : "#"} target="_blank">
          {item.img && (
            <img
              src={item.img}
              alt="logo"
              className="w-full max-w-48 h-48 mx-auto rounded-lg"
            />
          )}

          {item.title && (
            <h3 className="text-center font-bold border-t-2 border-b rounded mt-2">
              {item.title}
            </h3>
          )}

          {item.description && <p className="mt-2">{item.description}</p>}

          {(item.description, item.device) && (
            <hr className="w-2/3 mx-auto my-2" />
          )}

          {item.device && (
            <span className="flex gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="1.3rem"
                width="1.3rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
              </svg>
              {item.device}
            </span>
          )}

          <hr className="w-2/3 mx-auto my-2" />

          {item?.library && (
            <ul>
              {item.library.map((item, key) => (
                <li key={key} className="flex items-center gap-2 px-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </a>
        <a
          href={item.source}
          target="_blank"
          className="p-2 w-full text-center rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 duration-150 font-semibold shadow-md border-t-2"
        >
          <span>Github</span>
        </a>
      </span>
    </>
  );
};
export default projectItem;
