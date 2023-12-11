import { ButtonHTMLAttributes } from 'react';

import { Container, ProjectName, ProjectImage } from './styles';

interface ProjectCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  logoUrl: string;
}

export function ProjectCard({ name, logoUrl, ...rest }: ProjectCardProps) {
  return (
    <Container {...rest}>
      <ProjectName>{name}</ProjectName>

      <ProjectImage src={logoUrl} />
    </Container>
  );
}
