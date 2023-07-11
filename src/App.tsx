import {Routes, Route} from 'react-router-dom';
import {routes} from "./router/routes";
import HomePage from 'pages/home/HomePage';
import WorldPage from 'pages/world/WorldPage';
import CountryPage from 'pages/country/CountryPage';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getGradeList } from 'entities/grade/grade.thunks';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGradeList());
  }, []);

  return (
    <Routes>
        <Route index element={<HomePage />} path={routes.HOME}/>
        <Route element={<WorldPage />} path={routes.WORLD}/>
        <Route element={<CountryPage />} path={routes.COUNTRY}/>
    </Routes>
  );
}

export default App;
