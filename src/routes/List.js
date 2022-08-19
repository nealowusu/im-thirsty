import React from "react";
import "./List.css";
import Select from "../components/Select";
import Results from "../components/Results";

const List = ({ listPage, setListPage, resultOutputs, setResultOutputs }) => {
  if (listPage == null) {
    return (
      <Select
        listPage={listPage}
        setListPage={setListPage}
        resultOutputs={resultOutputs}
        setResultOutputs={setResultOutputs}
      />
    );
  } else if (listPage === "result") {
    return (
      <Results
        listPage={listPage}
        setListPage={setListPage}
        resultOutputs={resultOutputs}
        setResultOutputs={setResultOutputs}
      />
    );
  } else {
    return <>{listPage}</>;
  }
};
export default List;
