import React,{useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Addbtn from './components/layout/Addbtn';
import Addlogmodal from './components/layout/Addlogmodal';
import EditLogmodal from './components/layout/EditLogmodal';
import Addtechmodal from './components/techs/Addtechmodal';
import Techlistmodal from './components/techs/Techlistmodal';


import Logs from './components/logs/Logs';

const App = ()=> {
  useEffect(()=>{
    M.AutoInit();
  })
  return (
    <div className="App">
     
          <Searchbar/>
        <div className="container">
          <Addbtn/>
          <Addlogmodal/>
          <EditLogmodal/>
          <Addtechmodal/>
          <Techlistmodal/>
          <Logs/>
        </div>
    </div>
  );
}

export default App;
