import styled from "styled-components";

export const GlobalTable = styled.div`
  > div {
    
    > div {
      
      > table {
        width: 100%;

        > thead {
          text-align: left;
          width: 100%;
          position: sticky;
          top: 0;

          tr > {
            height: 40px;

            > th {
              padding: 5px;
              position: relative;
              border: solid 1px #fff;
              background-color: rgb(238 238 238 / 50%);
              backdrop-filter: blur(5px);
              border-radius: 0.5rem;
            }
          }
        }

        > tbody {
          
          > tr {
            /* background: #dddddd; */
          }
        }
      }
    }
  }
`;