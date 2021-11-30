import React from 'react'
import { ContainerAnalytics } from './index';
import { Profile } from './profile/Profile';
import { MoneyChart } from './moneyChart/MoneyChart';
import { DeathClient } from './deathClient/DeathClient';

export const Analytics = () => {
    return (
        <ContainerAnalytics>
            <h1>Bienvenido nombre</h1>
            <hr />
            <div className="container">
                <div className="left">
                    <Profile />
                    <DeathClient/>
                </div>
                <MoneyChart/>
            </div>
        </ContainerAnalytics>
    )
}
