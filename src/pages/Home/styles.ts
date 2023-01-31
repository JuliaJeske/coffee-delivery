import styled from 'styled-components';




export const List = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;