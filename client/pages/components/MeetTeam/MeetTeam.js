import React from 'react';
import style from './MeetTeam.module.css';
import TeamMember from './TeamMember/TeamMember';

const MeetTeam = () => {

    return <div>
        <div className={style.heading + " customHeadingTextMainContent"}>
            Meet The Team
        </div>

        <div className={style.teamContainer}>
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
            <TeamMember src="/team/sikora.jpg" name="John Doe" role="Project Manager" />
        </div>
    </div>
}

export default MeetTeam;