import { useMemo, useState } from "react";
import { Row } from "react-table";
import CheckBoxSwitch from "../checkboxswitch/CheckBoxSwitch";
import CleanTable from "./CleanTable";

interface CellTypes {
  row: Row;
  value: any;
  updateMyData?: () => void;
}

function Table() {
  const updateMyData = (data: Array<any>, row: Row, accessor: string) => {
    const tmpData = [...data];
    tmpData[row.index][accessor] = !tmpData[row.index][accessor];
    setData(tmpData);
  };

  const CheckBoxCell = ({ row, value }: CellTypes) => {
    const onClick = () => {
      updateMyData(data, row, "active");
    };

    return <input type="checkbox" checked={value} onClick={onClick} />;
  };

  const SwitchCell = ({ row, value }: CellTypes) => {
    const onClick = () => {
      updateMyData(data, row, "switch");
    };

    return <CheckBoxSwitch onChange={onClick} checked={value} id={"1"} />;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Имя",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Compound",
        accessor: "compound"
      },
      {
        Header: "Активен",
        accessor: "active",
        Cell: CheckBoxCell
      },
      {
        accessor: "switch",
        Cell: SwitchCell
      }
    ],
    []
  );

  const [data, setData] = useState([
    {
      name: "Patricia Lebsack",
      email: "sincere@april.biz",
      compound: -4.6722064,
      active: false,
      switch: true
    },
    {
      name: "Clementine Bauch",
      email: "lucio_Hettinger@annie.ca",
      compound: 27.283955,
      active: true,
      switch: false
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      active: true,
      switch: true
    }
  ]);

  return (
    <div className="App">
      <CleanTable columns={columns} data={data} />
    </div>
  );
}

export default Table;
