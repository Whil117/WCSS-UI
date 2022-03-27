import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import AtomWrapper from '../lib/Atomwrapper';

export const estados = [
  'Baja California',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Coahuila',
  'Guanajato',
  'Jalisco',
  'Estado de México',
  'Michoacán',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'Sinaloa',
  'Sonora',
  'Veracruz'
];

const Ifqs = [4, 1, 2, 20, 2, 1, 6, 1, 1, 4, 2, 2, 2, 1, 1, 2, 1];

export const Invertion = [
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692',
  '$602,650',
  '$1,741,692'
];
export const Benefits = [
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784',
  '1,784'
];

const Home: NextPage = () => {
  return (
    <div>
      <h1>Aprendiendo bases de css</h1>
      <AtomWrapper
        type="h1"
        css={css`
          color: red;
        `}>
        H1
      </AtomWrapper>
      <AtomWrapper
        type="h2"
        css={css`
          color: red;
        `}>
        H2
      </AtomWrapper>
      <AtomWrapper
        type="h3"
        css={css`
          color: red;
        `}>
        H3
      </AtomWrapper>
      <AtomWrapper
        type="h4"
        css={css`
          color: red;
        `}>
        H4
      </AtomWrapper>
      <AtomWrapper
        type="h5"
        css={css`
          color: red;
        `}>
        H5
      </AtomWrapper>

      <AtomWrapper
        type="h6"
        css={css`
          color: red;
        `}>
        H6
      </AtomWrapper>
      <AtomWrapper
        type="p"
        css={css`
          color: red;
          font-weight: bold;
        `}>
        Pasdfsafdsdaf
      </AtomWrapper>
      <AtomWrapper
        type="div"
        css={css`
          background-color: red;
          width: 100px;
          height: 100px;
        `}
      />
    </div>
  );
};

export default Home;
