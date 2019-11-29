import styled from "styled-components"
export const Header = styled.div`
    width:100%;
    height:0.44rem;
    background:#1c2635;
    color:#bbb;
    font-size:0.34rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.1rem;
    box-sizing:border-box;
    >img{
      width:0.7rem;
    }
`

export const Main = styled.div`
div{
    text-align:center;
    font-size: 0.18rem;
    color: #1d2736;
    padding: 0.15rem 0;
}
form {
  padding: 0 0.2rem;
    >div{
      font-size: 0.14rem;
    }
  #username,#pwd {
    width: 100%;
    border: 0;
    height: 0.28rem;
    border-bottom: solid 1px #eee;
    padding: 0.05rem 0;
    color: #333;
    outline: none;
    }

    #btn {
      width: 100%;
      display: block;
      padding: 0.1rem 0;
      background-color: #20a0da;
      border: 0;
      background-image: linear-gradient(45deg,#20a0da 0,#1ab2e1 100%);
      border-radius: 0.4rem;
      text-align: center;
      color:#fff;
    }
    .re{
      color:#20a0da;
    }
}

`