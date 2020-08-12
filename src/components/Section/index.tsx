import React from 'react';

import { Container, Content, DropboxLogo, Header, HeaderWrapper } from './styles';

interface SectionOpts {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<SectionOpts> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  const handleToggle = () => {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>
            {buttonVariant ? 'Access' : 'Interact'}
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;
