import {css} from "@emotion/css";

export const cardsContainer = css`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const imageContainer = css`
width: 100%;
height: 15rem;
img{
    border-radius: 0.5rem 0.5rem 0 0;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
`;
export const cardLayout = css`
display: flex;
flex-direction: row;
margin: 1rem;
width: 18rem;
background-color: black;
border-radius: 0.5rem;
flex-direction: column;
&:hover{
    box-shadow: 2px 4px 16px #CCB931;
    transform: scale3d(1.01,1.01,1.01);
    transition: all .3s cubic-bezier(0,0,.5,1);
}
h2{
    text-align: center;
    margin-top: 3rem;
    font-variant: small-caps;
  letter-spacing: 3px;
}
`;