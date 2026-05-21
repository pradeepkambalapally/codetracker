
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "react-calendar-heatmap/dist/styles.css";
import { Toaster } from "react-hot-toast";

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Toaster
        position="top-right"
        reverseOrder={false}
    />
    <App
     />
  </BrowserRouter>
)