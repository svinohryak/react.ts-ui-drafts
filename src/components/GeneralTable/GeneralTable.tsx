import { FC } from "react";
import styled from "styled-components";
import { Column, useFlexLayout, useTable, useSortBy } from "react-table";
import { Icon } from "../icon/Icon";
import { ICONS } from "../icon/icons";

interface PropsTypes {
  columns: Array<Column>;
  data: Array<any>;
}

const WrapperTable = styled.div`
  height: auto;
  border: 2px solid #e9e9e9;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledTable = styled.div`
  display: block;
  width: auto;
  height: 100%;
  .table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #424242;
    overflow: auto;
    .thead {
      font-weight: 600;
    }
    .tbody {
      overflow-y: auto;
      overflow-x: hidden;
      height: 700px;
    }
    .th,
    .td {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      height: 3rem;
      border-bottom: 2px solid #e9e9e9;
    }
  }
`;

//@ts-ignore
const toggleProps = (props, { column }) => {
  const { align } = column;
  const withSort = column.getSortByToggleProps();
  return [
    { ...withSort, ...props },
    {
      style: {
        ...withSort.style,
        justifyContent: align ?? "flex-start",
        alignItems: "center",
        display: "flex"
      }
    }
  ];
};

//@ts-ignore
const cellProps = (props, { cell }) => getStyles(props, cell.column.align);
//@ts-ignore
const getStyles = (props, align) => [
  props,
  {
    style: {
      justifyContent: align ?? "flex-start",
      alignItems: "center",
      display: "flex"
    }
  }
];

const GeneralTable: FC<PropsTypes> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useFlexLayout,
    useSortBy
  );

  return (
    <WrapperTable>
      <StyledTable>
        <div {...getTableProps()} className="table">
          <div className="thead">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  // @ts-ignore
                  <div {...column.getHeaderProps(toggleProps)} className="th">
                    {column.render("Header")}
                    {/* @ts-ignore */}
                    {column.isSorted ? (
                      // @ts-ignore
                      column.isSortedDesc ? (
                        <Icon name={ICONS.CHEVRON_DOWN} size="1rem" />
                      ) : (
                        <Icon name={ICONS.CHEVRON_UP} size="1rem" />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="tbody">
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => {
                    return (
                      <div {...cell.getCellProps(cellProps)} className="td">
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </StyledTable>
    </WrapperTable>
  );
};

export default GeneralTable;
