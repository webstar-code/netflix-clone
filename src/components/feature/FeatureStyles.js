import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
flex-direction: column;
border-bottom: 8px solid #222;
text-align: center;
padding: 165px 45px;
`;


export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;


export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const BrowseFeature = styled(Container)`
display: flex;
margin: 0 56px;
height: 64px;
padding: 18px 0;
justify-content: space-between;
align-items: center;

a {
  display: flex;
}

@media (max-width: 1000px) {
  margin: 0 30px;
}
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;


export const BrowseTitle = styled.h2`
color: white;
font-size: 50px;
line-height: normal;
font-weight: bold;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
margin: 0;
`;

export const BrowseSubTitle = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

