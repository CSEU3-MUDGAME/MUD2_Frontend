import React from "react";
import { AboutStyle } from '../styles/about';
    
export default function About() {
    return (
        <div className = "about">
        <AboutStyle>
            <h1>Meet the Team</h1>
            <div>
                <div>
                    <h3>James Grantham</h3>
                    <a href='https://github.com/jrgrantham' target='.blank'>GitHub</a>
                </div>
                <div>
                    <h3>Megan Ennis</h3>
                    <a href='https://github.com/Megan0145' target='.blank'>GitHub</a>
                </div>
                <div>
                    <h3>David Kuseh</h3>
                    <a href='https://github.com/DavidKuseh' target='.blank'>GitHub</a>
                </div>
            </div>
        </AboutStyle>
        </div>
    )
}