import * as React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'office-ui-fabric-react/lib/Icon'
import './AppSidebar.css'
const Name = "ТАНДЕР"
const AppSidebar: React.FC = () => (
    <div>
        <div className="sidebar">
            <div className="person">
                <Link to="/Profile"><Icon iconName="Contact" style={{ fontSize: "30px", paddingRight: "10px" }} />{Name}</Link>
            </div>            
            <ul>
                <li className="button"><Link to="/"><Icon iconName="Home" style={{ paddingRight: "4px", paddingTop: "2px" }} />{"ГЛАВНАЯ"}</Link></li>
                <li className="button"><Link to="/Profile"><Icon iconName="Contact" style={{ paddingRight: "4px", paddingTop: "2px" }} />{"ПРОФИЛЬ"}</Link></li>
                <li className="button"><Link to="/Checks"><Icon iconName="CheckboxComposite" style={{ paddingRight: "4px", paddingTop: "2px" }} />{"ПРОВЕРКИ"}</Link></li>
                <li className="button"><Link to="/Settings"><Icon iconName="Settings" style={{ paddingRight: "4px", paddingTop: "2px" }} />{"НАСТРОЙКИ УВЕДОМЛЕНИЙ"}</Link></li>
            </ul>
        </div>
     </div>
)
export { AppSidebar }