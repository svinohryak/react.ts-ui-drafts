import { useMemo, useState } from "react";
import { Row } from "react-table";
import CheckBox from "../checkbox/CheckBox";
import CheckBoxSwitch from "../checkboxswitch/CheckBoxSwitch";
import Button from "../button/Button";
import GeneralTable from "./GeneralTable";
import { ButtonVariant } from "../button/commons";

interface CellTypes {
  row: Row;
  value: any;
  updateMyData?: () => void;
}

const Columns = () => {
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

  const CheckBoxEda = ({ row, value }: CellTypes) => {
    const onClick = () => {
      updateMyData(data, row, "checkboxEda");
    };

    return <CheckBox onChange={onClick} id={""} checked={value} />;
  };

  const ButtonEda = ({ row, value }: CellTypes) => {
    const onClick = () => {
      updateMyData(data, row, "buttoneda");
    };

    return <Button variant={ButtonVariant.SOLID}>Exceed</Button>;
  };

  const columns = useMemo(
    () => [
      {
        accessor: "checkboxEda",
        Cell: CheckBoxEda,
        maxWidth: 30,
        align: "center",
      },
      {
        Header: "Имя",
        accessor: "name",
      },
      // {
      //   Header: "Email",
      //   accessor: "email",
      //   align: "left",
      // },
      {
        Header: "Compound",
        accessor: "compound",
      },
      {
        Header: "Активен",
        accessor: "active",
        Cell: CheckBoxCell,
        align: "center",
        width: 30,
      },
      {
        accessor: "switch",
        Cell: SwitchCell,
        align: "center",
        width: 30,
      },
      {
        Header: "",
        accessor: "button",
        Cell: ButtonEda,
        align: "center",
        width: 30,
      },
    ],
    [],
  );

  const [data, setData] = useState([
    {
      name: "Patricia Lebsack",
      email: "sincere@april.biz",
      compound: -4.6722064,
      checkboxEda: false,
      active: false,
      switch: true,
      button: true,
    },
    {
      name: "Clementine Bauch",
      email: "lucio_Hettinger@annie.ca",
      compound: 27.283955,
      checkboxEda: false,
      active: true,
      switch: false,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
    {
      name: "Kurtis Weissnat9",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      active: true,
      switch: true,
      button: true,
    },
  ]);

  return <GeneralTable columns={columns} data={data} />;
};

export default Columns;
