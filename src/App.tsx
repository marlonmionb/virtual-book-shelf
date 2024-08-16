import { Fragment } from "react/jsx-runtime";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./components/Categories/Categories";
import { useState } from "react";
import { INITIAL_TAGS} from './utils/utils'
import Search from './components/Search/Search'
import Button from './components/Button/Button'

function App() {
  const [tags, setTags] = useState(INITIAL_TAGS)
  const handleUpdateCategories = (tags: any) => {
    setTags(tags)
  }
  return (
    <Fragment>
      <div className="p-4">
        <NavBar />
        <div className="mt-12">
          <h2 className="justify-items-start text-3xl w-3/5">Search for a category...</h2>
          <Categories tags={tags} onUpdateCategories={handleUpdateCategories}/>
        </div>
        <Search placeholder="Search for a book..."/>
        <div className="mt-4 flex flex-row justify-between items-center">
          <span className="text-1xl w-3/5">Your books</span>
          <Button style="secondary" onClick={() => ''}>+ New book</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
