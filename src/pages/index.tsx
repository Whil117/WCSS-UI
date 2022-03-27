import { css } from '@emotion/react';
import AtomText from '../lib/AtomText';
import AtomWrapper from '../lib/Atomwrapper';

const Home = () => {
  return (
    <div>
      <h1>Creando mi libreria css con Emotion</h1>
      <AtomWrapper
        tag="nav"
        css={css`
          box-shadow: 0 0 10px #000000;
          padding: 10px;
        `}>
        <AtomText
          tag="h1"
          css={css`
            color: #332e2e;
          `}>
          LIBRARY
        </AtomText>
        <AtomText tag="ul">
          <AtomText tag="li">asfdasf</AtomText>
          <AtomText tag="li">asfdasf</AtomText>
          <AtomText tag="li">asfdasf</AtomText>
          <AtomText tag="li">asfdasf</AtomText>
        </AtomText>
      </AtomWrapper>
    </div>
  );
};

export default Home;
