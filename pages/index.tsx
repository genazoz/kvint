import {GetServerSideProps, NextPage} from "next";
import styled from "styled-components";

import LocalChanger from "../components/LangChanger";
import React from "react";
import {ThemeSwitch} from "../components/ThemeSwitch";
import Widget from "../components/Widget";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw; 
  height: 100vh;
  gap: 25px;

  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

interface HomeProps {
  messages: any
}

const Home: NextPage<HomeProps> = ({messages}) => {
  return <Container>
    <Widget messages={messages}/>
    <LocalChanger />
    <ThemeSwitch/>
  </Container>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    return {
      props: {
        messages: require(`../lang/${ctx.locale}.json`)
      },
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      messages: null
    },
  };
};

export default Home;
