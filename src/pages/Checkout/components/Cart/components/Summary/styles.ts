import styled from "styled-components";

export const SummaryContainer = styled.section`
  table {
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      row-gap: 1.5rem;
    }

    tr {
      display: flex;
      justify-content: space-between;
    }

    th {
      text-align: left;
    }

    td {
      text-align: right;
    }
  }
`;
