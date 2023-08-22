import styled from "styled-components";

export const Inputcontainer = styled.div`
  width: 95%;
  height: 100%;
  padding: 5px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background: #ffffff;

  > label {
    color: #2b303b;
  }

  .p-inputtext {
    width: 100%;
    padding: 0;
	  border: none;
	  outline: none;
    box-shadow: none;

	  &:focus {
	  	border: none;
	  	outline: none;
      box-shadow: none;
	  }
  }
`;