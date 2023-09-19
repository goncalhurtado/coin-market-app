import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ data, setCoinnfo }) => {
  // const handle = (e) => {

  // };

  const columns = [
    {
      name: <div>#</div>,
      selector: (row) => row.market_cap_rank,
      sortable: true,
      width: "60px",
    },
    {
      name: "Nombre",
      cell: (row) => (
        <div
          className="d-flex align-items-center"
          onClick={(e) => {
            e.preventDefault();
            // console.log(row.id);
            setCoinnfo(row);
          }}
        >
          <img src={row.image} alt={row.name} className="crypto_img" />
          <p className="m-0">{row.name}</p>
          <p className="m-0 ms-1">{row.symbol}</p>
        </div>
      ),
    },
    {
      name: "Precio",
      selector: (row) => row.current_price,
      sortable: true,
    },
    {
      name: "24 h %",
      selector: (row) => row.price_change_percentage_24h.toFixed(3),
      sortable: true,
    },
    {
      name: "Cap. del mercado",
      selector: (row) => row.market_cap,
      sortable: true,
    },
    {
      name: "Volumen (24h)",
      selector: (row) => row.total_volume,
      sortable: true,
    },
    {
      name: "Acciones en circulacion",
      selector: (row) => row.circulating_supply,
      sortable: true,
    },
  ];

  return (
    <DataTable title="Crypto List" columns={columns} data={data} pagination />
  );
};

export default Table;
