import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 75px;
`;
export const Box = styled.div`
  margin: 25px;
  text-align: center;
  float: right;
  width: 50%;
  padding: 25px;
  @media screen and (max-width: 720px) {
    width: auto;
    float: none;
    padding: 0px;
  }
`;

export const Text = styled.div`
  float: left;
  width: 100%;
  padding: 50px;
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
    font-family: "Avenir Light", serif;
    font-size: var(--fontBig);
    color: var(--yellow);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  p {
    font-family: "Avenir Light", serif;
    color: var(--white);
    font-size: var(--fontMed);
    flex-wrap: nowrap;
    font-weight: 100;
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
