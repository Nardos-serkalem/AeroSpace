import React from 'react';
import './News.css';

function News() {
  return (
    <section id="news" className="news-section">
      <h2>Latest News</h2>
      <div className="news-list">
        <div className="news-item">
          <h3>Ethiopia Gears Up for Third Earth Observation Satellite Launch</h3>
          <p>
          Ethiopia has announced its plans to launch its third Earth observation satellite in 2026, with collaborative support from China. This ambitious project is being spearheaded by the Ethiopian Space Science and Geospatial Institute (ESSGI). The new satellite promises to deliver higher resolution imagery and enhanced monitoring capabilities, building upon the successes of its predecessors, ETRSS-1 launched in 2019 and another satellite launched in 2020. Tesfaye Fufa, the Executive Director of Satellite Monitoring at ESSGI, indicated that preparations for this significant launch are already underway. This initiative underscores Ethiopia's commitment to advancing its space program under the leadership of the ESSGI and its dedication to leveraging space technology for national development.</p>
          <a href="#">Read More</a>
        </div>
        <div className="news-item">
          <h3>Ethiopia Forges Ahead in Space with Focus on Local Expertise</h3>
          <p>
Ethiopia Gears Up for Third Earth Observation Satellite Launch
Ethiopia has announced its plans to launch its third Earth observation satellite in 2026, with collaborative support from China. This ambitious project is being spearheaded by the Ethiopian Space Science and Geospatial Institute (ESSGI). The new satellite promises to deliver higher resolution imagery and enhanced monitoring capabilities, building upon the successes of its predecessors, ETRSS-1 launched in 2019 and another satellite launched in 2020. Tesfaye Fufa, the Executive Director of Satellite Monitoring at ESSGI, indicated that preparations for this significant launch are already underway. This initiative underscores Ethiopia's commitment to advancing its space program under the leadership of the ESSGI and its dedication to leveraging space technology for national development.

New Satellite Ground Station Enhances Ethiopia's Space Capabilities
In December 2024, Ethiopia marked a significant step forward in its space program by inaugurating a new 12-meter satellite ground station. Located at the Entoto Observatory and Research Center (EORC), this state-of-the-art facility complements the existing 7.3-meter ground station. The new station boasts advanced capabilities, including the reception of high-resolution satellite data (up to 50 centimeters), multi-satellite tracking, and enhanced data processing for applications such as weather monitoring and disaster management. This development, facilitated by a grant from the Chinese government, not only strengthens Ethiopia's ability to receive and process crucial satellite data but also positions the Ethiopian Space Science and Geospatial Institute (ESSGI) to offer ground station services to other countries and organizations, fostering technological independence and revenue generation.

Ethiopia Forges Ahead in Space with Focus on Local Expertise
The Ethiopian Space Science and Technology Institute (ESSTI) continues to emphasize the development of local expertise in space science and technology. Since the launch of ETRSS-1, the institute has been actively involved in training Ethiopian engineers and scientists in satellite design, launch, and operations. This focus on capacity building is evident in the hands-on experience gained by Ethiopian professionals who can now independently operate spacecraft with limited supervision. Furthermore, ESSTI is expanding its academic programs, offering Master's and Ph.D. degrees in space-related fields at the Entoto Observatory & Research Center and public universities, ensuring a strong foundation for the future of Ethiopia's space endeavors. The institute's dedication to fostering local talent aligns with the nation's broader goals of technological advancement and self-reliance in the space sector.</p>
          <a href="#">Read More</a>
        </div>
        {/* Add more news items dynamically */}
      </div>
    </section>
  );
}

export default News;