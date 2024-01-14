import { FC } from 'react';
import './Search.scss';

interface SearchProps {

}

const Search: FC<SearchProps> = () => {
  return (
    <div className='search'>
      <input type="text" className='search__input' placeholder='Search for cities...'/>
    </div>
  );
};

export default Search;