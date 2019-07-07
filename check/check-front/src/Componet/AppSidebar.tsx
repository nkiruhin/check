import * as React from 'react'
import { Link } from 'react-router-dom'

const AppSidebar: React.FC = () => (
    <div>
    <ul>
            <li><Link to="/" />{"Главная"}</li>
            <li><Link to="/" />{"Главная"}</li>
     </ul>
     </div>
)
export { AppSidebar }