import ComponentFooter from "./components/footer";
import ComponentHeader from "./components/header";

import ComponentHome from "./components/home/home";

import headerFooterData from "./headerFooterData";

function App() {
  return (
    <>
      <div className="w-full h-full bg-zinc-400 dark:bg-zinc-900 text-slate-800 dark:text-slate-300">
        <ComponentHeader headerData={headerFooterData.header} />
        <div className="my-3 p-5">
          <div className="container mx-auto p-5 rounded-2xl bg-zinc-400 dark:bg-zinc-800 shadow-xl border-t-2">
            <ComponentHome />
          </div>
        </div>
        <ComponentFooter footerData={headerFooterData.footer} />
      </div>
    </>
  );
}

export default App;
