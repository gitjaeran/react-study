import React from "react";
import styled from "styled-components";
import { FaAngleRight, FaRegBell } from "react-icons/fa";

const ButtonBox = styled.div`
  width: 800px;
  height: 200px;
  margin: 20px;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;

const ButtonStyle = styled.button`
  width: ${props => props.wd};
  height: ${props => props.ht};
  background: ${props => props.color};
  border: 3px solid;
  border-color: ${props => props.borderColor};
  border-radius: 8px;
  cursor: pointer;
`;

const LargeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const IconBox = styled.div`
  display: flex;
`;

const Dot = styled.div`
  background: ${props => props.color};
  width: 5px;
  height: 5px;
  border-radius: 50px;
  position: relative;
  transform: translate(-130%, 20%);
`;

function ButtonContainer() {
  const btnHandler = e => {
    //위 버튼 클릭시 alert, 아래 버튼 클릭시 prompt
    if (e.target.name === "down") {
      prompt("어려워요!");
    } else {
      alert("버튼을 클릭하셨습니다!");
    }
  };

  return (
    <div>
      <ButtonBox>
        <H1>Button</H1>
        <BtnWrap>
          <ButtonStyle
            name="up"
            wd="200px"
            ht="50px"
            color="white"
            borderColor="#FFCCD5"
            onClick={e => btnHandler(e)}
          >
            <LargeBtn>
              <div>Large Primary Button</div>
              <FaAngleRight />
            </LargeBtn>
          </ButtonStyle>
          <ButtonStyle
            wd="130px"
            ht="45px"
            color="#FFCCD5"
            borderColor="#FFCCD5"
          >
            Medium
          </ButtonStyle>
          <ButtonStyle
            wd="100px"
            ht="40px"
            color="#C9184A"
            borderColor="#C9184A"
          >
            Small
          </ButtonStyle>
        </BtnWrap>

        <BtnWrap>
          <ButtonStyle
            name="down"
            wd="200px"
            ht="50px"
            color="white"
            borderColor="#B5C99A"
            onClick={e => btnHandler(e)}
          >
            <LargeBtn>
              <div>Large Negative Button</div>
              <IconBox>
                <FaRegBell />
                <Dot color="#87986A"></Dot>
              </IconBox>
            </LargeBtn>
          </ButtonStyle>
          <ButtonStyle
            wd="130px"
            ht="45px"
            color="#87986A"
            borderColor="#87986A"
          >
            Medium
          </ButtonStyle>
          <ButtonStyle
            wd="100px"
            ht="40px"
            color="#718355"
            borderColor="#718355"
          >
            Small
          </ButtonStyle>
        </BtnWrap>
      </ButtonBox>
    </div>
  );
}

export default ButtonContainer;

// #B5C99A
