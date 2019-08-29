import React,{useState, useEffect} from 'react'
import LogItem from '../layout/LogItem'
import Preloader from '../layout/Preloader'
import axios from 'axios'

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getLogs();
    }, []
    );

    const getLogs = async () =>{
        setLoading(true);
       try {
        const {data} = await axios.get('http://localhost:5000/logs');
        
        console.log(data)
        setLogs(data);
        setLoading(false);

    } catch (error) {
        setLoading(false);        
       }
    }

    if(loading){
        return <Preloader />
    }
    
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (<p>No logs to show</p>) : logs.map(log=> <LogItem log={log} key={log.id} />) }
            </ul>
        </div>
    )
}

export default Logs
