import React, { Component } from 'react';

import DesktopWelcome from './Desktop/Welcome';
import DesktopCharities from './Desktop/Charities';
import DesktopRoundUps from './Desktop/RoundUps';

import MobileWelcome from './Mobile/Welcome';
import MobileCharities from './Mobile/Charities';
import MobileRoundUps from './Mobile/RoundUps';

class Onboarding extends Component {
    componentDidUpdate() {
        if (window.innerWidth > 576) {
            console.log("Larger than 576");
        } else {
            console.log("Smaller than 576");
        }
    }
    renderContent() {
        if (window.innerWidth > 576) {
            return (
                <div className="onboarding-content-wrapper">
                    <DesktopWelcome />
                    <DesktopCharities />
                    <DesktopRoundUps />
                </div>
            )
        } else {
            return (
                <div className="mobile-onboarding-content-wrapper">
                    <MobileWelcome />
                    <MobileCharities />
                    <MobileRoundUps />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
              {this.renderContent()}
            </div>
        )
    }
}

export default Onboarding;