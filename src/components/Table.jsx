import React from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Director",
      selector: (row) => row.director,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  return <DataTable title="Movie List" columns={columns} pagination />;
};

export default Table;
