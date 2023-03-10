import './index.css';
import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RecoilRoot, RecoilEnv } from 'recoil';
import { RecoilLogger } from 'recoil-devtools-logger';

// import { TimeTravelObserver } from './@recoilDebug';
import App from './App';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const container = document.getElementById('root');

createRoot(container).render(
  <StrictMode>
    <RecoilRoot>
      <App />
      <RecoilLogger />
      {/* <TimeTravelObserver /> */}
    </RecoilRoot>
  </StrictMode>
);
