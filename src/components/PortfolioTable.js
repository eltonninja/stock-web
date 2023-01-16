import React from "react";
import styled from "styled-components";
import { colors, formatNumber } from "../utils";

function PortfolioTable({
  rows,
  totalMarketValue,
  totalDelivVal,
  totalCurrent,
}) {
  return (
    <Table cellSpacing={1} cellPadding={1} className="portfolio-table">
      <thead>
        <FieldRow>
          <td>Contract</td>
          <td>Bid</td>
          <td>Ask</td>
          <td>Last</td>
          <td>Change</td>
          <td>Position</td>
          <td>Market Value</td>
          <td>Deliv Val</td>
          <td>Current %</td>
        </FieldRow>
        <TotalRow>
          <td colSpan={6}>Total</td>
          <td>{formatNumber(totalMarketValue)}</td>
          <td>{formatNumber(totalDelivVal)}</td>
          <td>{totalCurrent}%</td>
        </TotalRow>
        <GapRow>
          <td></td>
          <td colSpan={4}></td>
          <td colSpan={3}></td>
          <td></td>
        </GapRow>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Row key={row.contract} index={index}>
            <td>{row.contract}</td>
            <Item1 rowIndex={index} value={row.bid} isRed={Math.random() > 0.5}>
              <span>•</span>
              {formatNumber(row.bid, 2)}
            </Item1>
            <Item1 rowIndex={index} value={row.ask} isRed={Math.random() > 0.5}>
              {formatNumber(row.ask, 2)}
              <span>•</span>
            </Item1>
            <Item1
              rowIndex={index}
              value={row.last}
              isRed={Math.random() > 0.5}
            >
              <span>•</span>
              {formatNumber(row.last, 2)}
            </Item1>
            <Item2 rowIndex={index} value={row.change}>
              {`${row.change > 0 ? "+" : ""}${formatNumber(row.change, 2)}`}
            </Item2>
            <Item3 rowIndex={index}>{formatNumber(row.position)}</Item3>
            <Item3 rowIndex={index}>{formatNumber(row.marketValue)}</Item3>
            <Item3 rowIndex={index}>{formatNumber(row.delivVal)}</Item3>
            <td>{formatNumber(row.current, 2)}%</td>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table({
  width: "100%",
  "& tr": {
    height: 25,
  },
  "& td": {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

const FieldRow = styled.tr({
  color: colors.white,
  backgroundColor: colors.lightGrey,
  textAlign: "center",
});

const TotalRow = styled.tr({
  color: colors.white,
  backgroundColor: colors.purple,
  "& > td:not(:first-child)": {
    textAlign: "right",
  },
});

const GapRow = styled.tr({
  "& > td:nth-child(1)": {
    backgroundColor: colors.white,
  },
  "& > td:nth-child(2)": {
    backgroundColor: colors.grey,
  },
  "& > td:nth-child(3)": {
    backgroundColor: colors.lightPurple,
  },
  "& > td:nth-child(4)": {
    backgroundColor: colors.grey,
  },
});

const Row = styled.tr({
  color: colors.white,
  backgroundColor: (props) => (props.index % 2 ? colors.grey : colors.black),
  "& > td": {
    textAlign: "right",
  },
  "& > td:first-child": {
    color: colors.black,
    backgroundColor: colors.white,
    textAlign: "left",
  },
});

const Item1 = styled.td({
  color: colors.white,
  backgroundColor: (props) => (props.rowIndex % 2 ? colors.grey : colors.black),
  "& > span": {
    color: (props) => (props.isRed ? colors.dotRed : colors.dotGreen),
    marginLeft: 5,
    marginRight: 5,
  },
});

const Item2 = styled.td({
  color: colors.white,
  backgroundColor: (props) =>
    props.value < 0
      ? props.rowIndex % 2
        ? colors.lightRed
        : colors.red
      : props.rowIndex % 2
      ? colors.lightGreen
      : colors.green,
});

const Item3 = styled.td({
  color: colors.white,
  backgroundColor: (props) =>
    props.rowIndex % 2 ? colors.lightGreen : colors.green,
});

export default PortfolioTable;
