import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypeVariations = {
    info: css`
        border: 1px solid #1c71d9;
        background: #c0e2fa;
        color: #1c71d9;
    `,
    success: css`
        border: 1px solid #07c200;
        background: #cafac0;
        color: #07c200;
    `,
    error: css`
        border: 1px solid #a10000;
        background: #ffbfc7;
        color: #a10000;
    `,
}

export const Container = styled(animated.div)`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  display: flex;

  & + div {
      margin-top: 8px;
  }
  
  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
      margin: 0px 12px 0 0;
  }

  div {
      flex: 1;

      p {
          margin-top: 4px;
          font-size: 87.5%;
          opacity: 0.8;
          line-height: 20px;
      }
  }

  button {
          position: absolute;
          right: 8px;
          top: 16px;
          opacity: 0.9;
          border: 0;
          background: transparent;
          color: inherit;
      }

  ${props => !props.hasDescription && css`
      align-items: center;

      svg {
          margin-top: 0;
      }
  `}
`;