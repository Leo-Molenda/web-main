import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import api from '../services/api';

import { Project } from '../interfaces/Project';

interface ProjectSelectedContextData {
  projectSelected: Project | undefined;
  setProjectSelectedId: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

const ProjectSelectedContext = createContext<ProjectSelectedContextData>(
  {} as ProjectSelectedContextData,
);

interface ProjectSelectedProviderProps {
  children: ReactNode;
}
export function ProjectSelectedProvider({
  children,
}: ProjectSelectedProviderProps) {
  const [projectSelectedId, setProjectSelectedId] = useState<string>();
  const [projectSelected, setProjectSelected] = useState<Project>();

  useEffect(() => {
    if (projectSelectedId) {
      api
        .post('/project/projects-by-ids', { ids: [projectSelectedId] })
        .then(response => {
          setProjectSelected(response.data[0]);
          localStorage.setItem(
            '@AmigosDosJardinetes:projectSelected',
            JSON.stringify(response.data[0]),
          );
        })
        .catch(error => console.error(error));
    } else {
      setProjectSelected(undefined);
    }
  }, [projectSelectedId]);

  useEffect(() => {
    const project = localStorage.getItem(
      '@AmigosDosJardinetes:projectSelected',
    );

    if (project) {
      setProjectSelected(JSON.parse(project));
    }
  }, []);

  return (
    <ProjectSelectedContext.Provider
      value={{ projectSelected, setProjectSelectedId }}
    >
      {children}
    </ProjectSelectedContext.Provider>
  );
}

export function useProjectSelected(): ProjectSelectedContextData {
  const context = useContext(ProjectSelectedContext);

  return context;
}
