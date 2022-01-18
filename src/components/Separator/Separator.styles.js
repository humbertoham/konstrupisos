import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  @media (max-width: 768px) {
    background-attachment: unset;
    min-height: 400px;
  }
`;
export const Text = styled.div`
  padding: 25px;
  max-width: 450px;
  margin: auto;
  position: relative;
  top: 55%;
  -ms-transform: translateY(55%);
  transform: translateY(55%);

  h1 {
    font-family: "Avenir Light", serif;
    font-size: 3rem;
    font-weight: 900;
    color: var(--white);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    color: var(--white);
    font-size: var(--fontBig);
    flex-wrap: nowrap;
    text-align: center;
    font-weight: 100;
    font-family: "Avenir Light", serif;
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
      text-align: center;
    }
  }
  @media screen and (max-width: 720px) {
    top: 65%;
    -ms-transform: translateY(65%);
    transform: translateY(65%);
  }
`;
export const Message = styled.a`
  background-image: radial-gradient(#ff8a00, #e52e71);
  background-image: radial-gradient(circle at top right, #ff8a00, red, #e52e71);
  display: block;
  margin: 20px auto;
  width: 300px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 100;
  color: var(--white);

  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align: center;
  font-family: "Avenir Light", serif;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
export const LogoN = styled.img`
  width: 50px;
`;
