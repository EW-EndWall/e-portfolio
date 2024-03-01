import axios from "axios";
import { useState, useEffect } from "react";

import ComponentProjectList from "./projectList";

export default () => {
  const [dataList, setDataList] = useState();

  const fetchGetDataList = async (yearData, monthData, dayData) => {
    try {
      const apiUrl = process.env.API_URL;
      // * get api data
      const response = await axios.get(apiUrl);
      // * response api data
      const responseData = response;
      // * set useState data
      setDataList(responseData.data);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  useEffect(() => {
    // * get and set data
    fetchGetDataList();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {dataList &&
        dataList.map((item, key) => (
          <ComponentProjectList key={key} dataList={item} />
        ))}
    </div>
  );
};
