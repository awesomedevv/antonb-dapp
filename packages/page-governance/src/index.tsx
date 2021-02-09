import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import { CouncilPage } from './components/CouncilPage';
import { CouncilProposalDetail } from './components/CouncilProposalDetail';
import { Overview } from './components/Overview';
import { ProposalPage } from './components/ProposalPage';

const PageGovernance: FC = () => {
  return (
    <Routes>
      <Route element={<Overview />} path='/' />
      <Route element={<ProposalPage />} path='/proposals' />
      <Route element={<CouncilProposalDetail />} path='/proposals/:id' />
      <Route element={<CouncilPage />} path='/councils' />
    </Routes>
  );
};

export default PageGovernance;
