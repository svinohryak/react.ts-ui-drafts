import React, { FC } from "react";
import styled from "styled-components";
import { Column, useTable } from "react-table";

interface PropsTypes {
  columns: Array<Column>;
  data: Array<any>;
}

const StyledTable = styled.table`
  width: auto;
  color: #424242;
  border-spacing: 0;
  border: 2px solid #e9e9e9;
  border-radius: 20px;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    margin: 0;
    padding: 1.5625rem;
    border-bottom: 2px solid #e9e9e9;
    /* border-right: 2px solid #e9e9e9; */

    :last-child {
      border-right: 0;
    }
  }
`;

const CleanTable: FC<PropsTypes> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default CleanTable;
