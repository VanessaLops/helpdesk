import styled from 'styled-components/native';

export const Form = styled.View`
  width: 100%;
  margin-top:50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.BORDER};
  margin-bottom: 24px;
  align-self: center;
`;

