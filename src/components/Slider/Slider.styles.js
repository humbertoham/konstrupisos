import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 64px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  font-family: "Avenir Light", serif;
  text-align: center;
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: 100;
    color: var(--black);
    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }
  p {
    padding: 15px;

    font-weight: 100;
    font-size: 2rem;
    font-family: "Avenir Light", serif;
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
      font-size: 1rem;
    }
  }
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 24px;
  background: var(--white);
  width: 400px;
  justify-content: center;
  z-index: 1;
`;
export const Text = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  font-family: "Avenir Light", serif;
  h1 {
    font-size: 1rem;
    font-weight: 100;
    color: var(--black);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    font-weight: 700;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
export const Message = styled.a`
  display: block;
  margin: 80px auto;
  width: 250px;
  padding: 12px 0;
  font-family: inherit;
  font-size: var(--fontMed);
  font-weight: 700;
  color: var(--yellow);
  border: 2px solid var(--yellow);
  border-radius: 35px;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align: center;
  font-family: "Avenir Light", serif;
  &:hover {
    background-color: var(--yellow);
    color: var(--white);
  }
  @media (max-width: 768px) {
    font-size: var(--fontSmall);
    width: 200px;
  }
`;
export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CardHeading = styled.h1`
  text-align: center;
  color: var(--black);
  font-weight: 100;
  font-size: 2rem;
  font-family: "Avenir Light", serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  font-family: "Avenir Light", serif;
  width: 100%;
  font-size: var(--fontMed);
  color: #666;
  text-align: center;
`;

export const Page = styled.img`
  display: block;
  height: 200px;
  width: 400px;
  margin: auto;
  padding: 0px 30px;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const LogoN = styled.img`
  width: 50px;
`;
export const Men = styled.a`
  font-weight: 700;
  display: block;
  margin: 20px auto;
  width: 300px;
  padding: 12px 0;
  font-size: var(--fontMed);
  text-decoration: none;
  color: var(--black);
  text-align: center;
  font-family: "Poppins", sans-serif;
  :hover {
    text-decoration: underline;
  }
`;
