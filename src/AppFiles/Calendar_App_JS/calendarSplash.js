import React from "react"
import './calendarSplashCss.css'
import CalNavBar from "./calNavbar"

const CalendarSplash = () => {
    const daysMonths ={
        
    }
    return (
        <div className="CalendarSplash">
            <CalNavBar />
            <div className="sideBarContainer">

            </div>

            <div className="DateContainer">
                <div className='Top-date-bar'>

                </div>
                <div>
                    <div className='days-of-week'>

                    </div>
                    <div class='dateCards'>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default CalendarSplash