import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from '../../pages/Portfolio/Portfolio';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
