import Header from './components/header/header';
import Main from './components/main/main';
import ListingButton from './components/button-group/listingButton';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState({})
  return (
    <>
      <Header />
      <ListingButton setFilter={setFilter} />
      <Main filter={filter} />

    </>
  );
}

export default App;
