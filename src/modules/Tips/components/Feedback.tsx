import { ReactNode } from "react";
import styled from "styled-components";

export const Feedback: React.FC<{
  children: ReactNode;
  className?: string;
  loading?: boolean;
  onClick(): void;
}> = ({ children, className, onClick, loading }) => {
  return (
    <StyledButton disabled={loading} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 27px;
  border-radius: 0.25rem;
  border-width: 1px;
`;
