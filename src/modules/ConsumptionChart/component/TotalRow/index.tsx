import { ReactNode } from "react";
import styled from "styled-components";

export const TotalRow = ({
  main,
  secondary,
  className,
  style,
}: {
  main: ReactNode;
  secondary?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <StyledDiv className={className} style={style}>
      <div>{main}</div>
      {secondary && <div>{secondary}</div>}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
`;
