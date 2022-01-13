import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 75px 75px 75px;
  box-sizing: border-box;
  background-color: var(--brown);
  @media screen and (max-width: 720px) {
    padding: 0px 75px 75px 75px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 720px) {
    display: block;
  }
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Box = styled.div`
  margin: 25px;
  text-align: center;
  float: left;
  width: 33.33333%;
  padding: 25px;
  @media screen and (max-width: 720px) {
    width: auto;
    float: none;
    padding: 0px;
  }
`;

export const Text = styled.div`
  float: left;
  width: 66.66666%;
  padding: 25px;
  max-width: 500px;
  animation: slide-top 1s;
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontSuperBig);
    color: var(--white);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    color: var(--black);
    font-size: var(--fontMed);
    flex-wrap: nowrap;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    padding: 25px 0px 0px 0px;
    width: auto;
    float: none;
  }
`;
export const MapContainer = styled.div`
  padding: 25px;
  height: auto;
  width: 500px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: auto;
    float: none;
  }
  p {
    text-align: center;
    color: var(--yellow);
    font-size: var(--fontSmall);
    flex-wrap: nowrap;
  }
`;
export const Map = styled.img`
  display: block;
  height: auto;
  width: 100%;
  padding: 30px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;

export const MapC = styled.div`
  padding: 25px;
  height: auto;
  width: 700px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: auto;
    float: none;
  }
`;
