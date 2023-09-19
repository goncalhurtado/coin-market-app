import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ data }) => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.market_cap_rank,
      sortable: true,
      width: "60px",
    },
    {
      name: "Nombre",
      cell: (row) => (
        <div className="d-flex align-items-center">
          <img src={row.image} alt={row.name} className="crypto_img" />
          <p className="m-0">{row.name}</p>
          <p className="m-0 ms-1">{row.symbol}</p>
        </div>
      ),
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

  return (
    <DataTable title="Crypto List" columns={columns} data={data} pagination />
  );
};

export default Table;
