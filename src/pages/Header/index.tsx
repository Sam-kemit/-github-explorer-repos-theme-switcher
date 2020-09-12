import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

import logoImgDark from '../../assets/logo_dark.svg';
import logoImgLight from '../../assets/logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  let theme = '';

  if (title === 'dark') {
    theme = logoImgDark;
  } else {
    theme = logoImgLight;
  }

  return (
    <Container>
      <img src={theme} alt="Github Explorer" />

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
