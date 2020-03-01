import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <div className="App">
      <h4><i className='fab fa-react' />React File Uploader</h4>
      <FileUpload />
    </div>
  );
}

export default App;
