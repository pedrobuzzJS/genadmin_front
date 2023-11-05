import styled from "styled-components";

export const Inputcontainer = styled.div`
  width: 98%;
  height: 100%;
  background-color: #ffffff;
  /* background-color: #ececec; */
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 0px;
  position: relative;
  transition: background-color 0.2s ease 0s;

  .p-inputtext {
    /* background-color: #ececec; */
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

export const FormField = styled.div`
  display: flex;
  min-height: 28px;
  padding: 0px 6px 3px;
  height: 100%;
`;

export const FormLabel = styled.div`
  display: flex;
  line-height: 12px;
  max-width: 100%;
  overflow: hidden;
  padding: 0px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LeftSpan = styled.span`
  flex-grow: 1;
  max-width: 100%;
  padding-left: 5px;
`;

export const InputLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  margin: 0px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const RightSpan = styled.span`
`;
