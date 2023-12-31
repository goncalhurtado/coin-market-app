import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ data, setCoinnfo }) => {
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#000f14",
        color: "white",
        border: "1px solid #142e37",
      },
    },
    header: {
      style: {
        backgroundColor: "#000f14",
        color: "white",
      },
    },

    headCells: {
      style: {
        backgroundColor: "#142e37",
        color: "white",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#142e37",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#142e37",
        color: "white",
      },
    },
  };

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
          className="d-flex align-items-center cryptoName"
          onClick={(e) => {
            e.preventDefault();
            setCoinnfo(row);
          }}
        >
          <img src={row.image} alt={row.name} className="crypto_img" />
          <p className="m-0 font-weight-bold">{row.name}</p>
          <p className="m-0 ms-1 font-weight-light text-secondary">
            {row.symbol}
          </p>
        </div>
      ),
    },
    {
      name: "Precio",
      selector: (row) => row.current_price,
      //se agrego .toLocaleString() no funciona porquee el sortFunct de Table iguala , y .
      sortable: true,
    },
    {
      name: "24 h %",
      selector: (row) => row.price_change_percentage_24h.toFixed(3),
      sortable: true,
    },
    {
      name: "Cap. del mercado",
      selector: (row) => row.market_cap.toLocaleString(),
      sortable: true,
    },
    {
      name: "Volumen (24h)",
      selector: (row) => row.total_volume.toLocaleString(),
      sortable: true,
    },
    {
      name: "Acciones en circulacion",
      selector: (row) => row.circulating_supply.toLocaleString(),
      sortable: true,
    },
  ];

  return (
    <DataTable
      title=""
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
};

export default Table;
