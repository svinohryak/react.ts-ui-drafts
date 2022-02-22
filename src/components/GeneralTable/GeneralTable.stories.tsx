import { ComponentStory } from "@storybook/react";
import React, { useMemo, useState } from "react";
import { Row } from "react-table";
import CheckBox from "../checkbox/CheckBox";
import CheckBoxSwitch from "../checkboxswitch/CheckBoxSwitch";
import Button from "../button/Button";
import GeneralTable from "./GeneralTable";
import { ButtonVariant } from "../button/commons";

export default {
  title: "Base/Table",
  component: GeneralTable
};

interface CellTypes {
  row: Row;
  value: any;
  updateMyData?: () => void;
}

const Template: ComponentStory<typeof GeneralTable> = (args) => {
  const updateMyData = (data: Array<any>, row: Row, accessor: string) => {
    const tmpData = [...data];
    tmpData[row.index][accessor] = !tmpData[row.index][accessor];
    setData(tmpData);
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
        align: "center"
      },
      {
        Header: "Имя",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email",
        align: "left"
      },
      {
        Header: "Compound",
        accessor: "compound"
      },
      {
        Header: "Активен",
        accessor: "switch",
        Cell: SwitchCell,
        align: "center",
        width: 30
      },
      {
        Header: "",
        accessor: "button",
        Cell: ButtonEda,
        align: "center",
        width: 40
      }
    ],
    []
  );

  const [data, setData] = useState([
    {
      name: "Patricia Lebsack",
      email: "sincere@april.biz",
      compound: -4.6722064,
      checkboxEda: false,
      switch: true
    },
    {
      name: "Clementine Bauch",
      email: "lucio_Hettinger@annie.ca",
      compound: 27.283955,
      checkboxEda: false,
      switch: false
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "than@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "sudnathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "Tangan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: false,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "Omarthan@yesenia.net",
      compound: 36.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 16.4610391,
      checkboxEda: true,
      switch: false
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: false
    },
    {
      name: "Kurtis Weissnat",
      email: "athan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: false,
      switch: false
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "nathan@yesenia.net",
      compound: 56.4610391,
      checkboxEda: false,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "than@yesenia.net",
      compound: 6.4610391,
      checkboxEda: true,
      switch: true
    },
    {
      name: "Kurtis Weissnat",
      email: "osnathan@yesenia.net",
      compound: 63.4610391,
      checkboxEda: true,
      switch: false
    },
    {
      name: "Kurtis Weissnat9",
      email: "han@yesenia.net",
      compound: 6.4610391,
      checkboxEda: false,
      switch: true
    }
  ]);

  return <GeneralTable columns={columns} data={data} />;
};

export const Default = Template.bind({});
Default.args = {};
