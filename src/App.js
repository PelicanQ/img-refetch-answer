import { useState } from 'react';
import './App.css';

const URLs = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/IPA_Unicode_0x0061.svg/180px-IPA_Unicode_0x0061.svg.png',
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
]

function App() {
  const [sort1, setSort1] = useState(false)
  const [sort2, setSort2] = useState(false)
  
  const RenderImgs = ({ sort1 }) => {
    return <Articles imgs={sort1 ? URLs.toReversed() : URLs} />
  }

  const FlippingArticles = <Articles imgs={sort2 ? URLs.toReversed() : URLs} />

  return (
    <div className="App">
      <button onClick={() => setSort1(prev => !prev)}>Sort1: {sort1 ? 'Yes': 'No'}</button>

      <RenderImgs sort1={sort1} />
      <button onClick={() => setSort2(prev => !prev)}>Sort2: {sort2 ? 'Yes': 'No'}</button>

      {FlippingArticles}
    </div>
  );
}

const Articles = ({ imgs }) => {

  return <div style={{ height: 300}}>
    <img width={200} src={imgs[0]} key={imgs[0]} />
    <img width={200} src={imgs[1]} key={imgs[1]} />
  </div>
}

export default App;
