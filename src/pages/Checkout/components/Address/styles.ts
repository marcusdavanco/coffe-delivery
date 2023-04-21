import styled from "styled-components";

export const AddressContainer = styled.div`
  max-width: 40rem;

  .inputGroup {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input {
      background-color: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-button"]};
      border-radius: 4px;
      color: ${(props) => props.theme["base-label"]};
      padding: 0.75rem;

      &[name="cep"] {
        max-width: 33%;
      }

      &[name="complement"] {
        width: 100%;
      }

      &[name="neighbordhood"] {
        max-width: 33%;
      }

      &[name="city"] {
        flex: 1;
      }

      &[name="state"] {
        max-width: 10%;
      }
    }

    .multiple {
      display: flex;
      gap: 0.75rem;

      .inputWrapper {
        flex: 1;
        position: relative;

        &::after {
          content: "Opcional";
          display: inline-block;
          position: absolute;
          right: 0.75rem;
          top: 1rem;
          font-style: italic;
          color: ${(props) => props.theme["base-label"]};
          font-size: ${(props) => props.theme["text-2"]};
        }
      }
    }
  }
`;
