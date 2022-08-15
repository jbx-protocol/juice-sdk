import { useContext } from 'react';
import { getJBProjects } from '@juice-sdk/core';

import { JuiceContext } from '../../contexts/JuiceContext';

export function useJBProjects() {
  const { provider } = useContext(JuiceContext);

  return getJBProjects(provider);
}
