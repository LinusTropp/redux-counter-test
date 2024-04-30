
import './App.css'
import Counter from './components/Counter'
import { useSelector } from 'react-redux'
import { RootState } from './main'
import Profile from './components/Profile';


function App() {
  

  const countValue = useSelector((state: RootState)=> state.counter);
  const namn = useSelector((state: RootState) => state.profile.namn);

  return (
    <>
	<Profile/>
	{countValue}
      <Counter/>	
      <Counter/>	
	  {namn}
      	
    </>
  )
}

export default App
