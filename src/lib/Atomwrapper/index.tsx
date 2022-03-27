import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type AtomWrapperProps = {
  children?: React.ReactNode;
  type: keyof JSX.IntrinsicElements;
  css?: SerializedStyles;
};

const AtomWrapper = ({ children, type, css }: AtomWrapperProps) => {
  const Atom = styled.div(css);
  const NewAtom = Atom.withComponent(type);
  return children ? <NewAtom>{children}</NewAtom> : <NewAtom />;
};

export default AtomWrapper;
