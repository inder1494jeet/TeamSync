
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import Approtes from './app/routes/Approtes.jsx'
createRoot(document.getElementById('root')).render(  
  <Provider store={store}>
    <Approtes />
    </Provider> )
