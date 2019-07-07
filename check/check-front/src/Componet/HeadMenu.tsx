import React from 'react';
import { createTheme } from '@uifabric/styling';
import { Link } from 'react-router-dom';
import { IButtonProps, CommandBarButton, CommandBar, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react';
import ReactDOM from 'react-dom';
//import { Login } from './Auth/Login';

const headerTheme = createTheme({
    palette: {
        themePrimary: '#28373e',
        themeLighterAlt: '#dee5e8',
        themeLighter: '#c1cdd2',
        themeLight: '#a7b6bd',
        themeTertiary: '#8d9fa8',
        themeSecondary: '#768992',
        themeDarkAlt: '#60747d',
        themeDark: '#4b5f68',
        themeDarker: '#394a53',
        neutralLighterAlt: '#1d86dd',
        neutralLighter: '#1c84d9',
        neutralLight: '#1b7fd0',
        neutralQuaternaryAlt: '#1976c2',
        neutralQuaternary: '#1871b9',
        neutralTertiaryAlt: '#176cb2',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#1d89e4',
    }
});
const _addLink = (props: IButtonProps) => (
    <Link to={props.data !== undefined ? props.data : '/'}>
        <CommandBarButton {...props} theme={headerTheme} />
    </Link >
)

const _logout = () => {
    localStorage.clear();
    //ReactDOM.render(<Login />, document.getElementById('root'))
}

const asPersona = (props: IButtonProps) => (
    <div style={{ padding: '8px' }}>
        <Persona text={localStorage.name !== null ? localStorage.name : ""}
            size={PersonaSize.size28}
            theme={headerTheme}
            presence={PersonaPresence.online}
        />
    </div>
)
const asLogo = (props: IButtonProps) => (
    <div>
        <img src="1logo.png" style={{ width: "130px", padding:"5px" }} />
    </div>
    )
const _commandBarItems = [
    {
        key: 'logo',
        theme: headerTheme,
        commandBarButtonAs: asLogo
    },
    {
        key: 'main', name: 'Главная', ariaLabel: 'Главная',
        data: '/',
        commandBarButtonAs: _addLink
    },
    {
        key: 'profile', name: 'Профиль', ariaLabel: 'Профиль',
        data: 'profile',
        commandBarButtonAs: _addLink
    },
    {
        key: 'checks', name: 'Проверки', ariaLabel: 'Проверки',
        data: 'checks',
        commandBarButtonAs: _addLink
    },
    {
        key: 'configuration', name: 'Уведомления', ariaLabel: 'Уведомления',
        data: 'configuration',
        commandBarButtonAs: _addLink
    }
]
const _farItems = [
    {
        key: 'user',
        commandBarButtonAs: asPersona
    },
    {
        key: 'exit',
        name: 'Выход',
        ariaLabel: 'Выход',
        theme: headerTheme,
        iconProps: {
            iconName: 'Leave',
        },
        iconOnly: true,
        onClick: () => _logout()
    }
]


export const HeadMenu: React.FC = () => {
    if (localStorage.Role !== "Administrator") {
        _commandBarItems.splice(1, 1)
    }
    return <CommandBar
        items={_commandBarItems}
        styles={() => ({ root: { height: '3.5em' } })}
        theme={headerTheme}
        farItems={_farItems}
        ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
}