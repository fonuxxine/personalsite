import { PositionCard } from './PositionCard';

export default function Experience() {
  const Positions = [
        {
            title: "Web Developer",
            index: 0,
            company: "LEARNING SPACE MANAGEMENT OFFICE",
            period: "Dec 2021 - present",
            description: [
              "Developed a responsive website from design to engineering for members of the university to access teaching technology and learning spaces available on campus, using Python, JavaScript, HTML and CSS, PHP",
              "Developed and implemented a Tech Support portal for over 500+ instructors to request direct technical support in classrooms"],
        },
        {
            title: "Web Scraping - Student Assistant",
            index: 1,
            company: "ONTARIO COUNCIL OF UNIVERSITY LIBRARIES",
            period: "Feb 2021 - present",
            description: [
              "Built a standard metadata scraper that gathers title metadata from any associated publisher websites and outputs it in a JSON/XML/MARC format. Developed a SQL database to keep track of all records and avoid duplicates",
              "Mastered library database navigation and improved the expedition of Quality Assurance procedures by analyzing metadata functionality issues"],
        },
        {
            title: "Research Assistant",
            index: 2,
            company: "UNIVERSITY OF TORONTO DEPARTMENT OF COMPUTER SCIENCE",
            period: "Oct 2020 - Aug 2021",
            description: [
              "Conducted project management, experimental design, qualitative interviewing for various research projects",
              "Deployed a weekly newsletter system that teaches meta skills using key points from Aaron McDaniel's book, using A/B testing to determine personalized content for the reader"],
        },
        {
            title: "UI/UX Designer",
            index: 3,
            company: "CEDAR HEIGHTS COMMUNITY ASSOCIATION",
            period: "July — Sep 2021",
            description: [
              "Rebranded, designed a new website prototype (wireframing, UI patterns, user flow, etc.) for Cedar Heights",
              "Identified opportunities for new programs, events, and activities in response to the changing demographics in the region, developed marketing strategies and improved membership outreach"],
        },
    ];
  const positionList = Positions.map(position => <PositionCard  position={position}/>
  )
  return (
        <div className='uni-grid'>
          <h2 className='uni-size'>Experience</h2>
          {positionList}
        </div>)
}