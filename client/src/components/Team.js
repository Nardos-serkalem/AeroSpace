import React, { useState, useEffect } from 'react';
import './Team.css';

function Team() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.team-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr.Yeshurun Alemayehu ADDE",
      role: "President",
      image: "/images/team/president.jpg",
      description: "Leading AAAC's vision for aerospace innovation in Africa",
      expertise: ["Aerospace Engineering", "Strategic Leadership", "International Relations"],
      social: {
        linkedin: "https://www.linkedin.com/in/Yeshurun Alemayehu ADDE",
        twitter: "https://twitter.com/Yeshurun Alemayehu ADDE"
      }
    },
    {
      id: 2,
      name: "Eng. Eshet Tesfaye Tafes",
      role: "Vice President",
      image: "/images/team/vice-president.jpg",
      description: "Overseeing research and development initiatives",
      expertise: ["Aerospace Research", "Space Technology", "Research Management"],
      social: {
        linkedin: "https://www.linkedin.com/in/Eshet Tesfaye Tafes",
        twitter: "https://twitter.com/Eshet Tesfaye Tafse"
      }
    },
    {
      id: 3,
      name: "Eng. Mikyas",
      role: "Developer",
      image: "/images/team/member1.jpg",
      description: "Coordinating research projects",
      expertise: ["Web Development"],
      social: {
        linkedin: "https://www.linkedin.com/in/maya-patel",
        twitter: "https://twitter.com/mayapatel"
      }
    },
    {
      id: 4,
      name: "Dr. John Okafor",
      role: "Education Director",
      image: "/images/team/member2.jpg",
      description: "Leading educational programs and student engagement",
      expertise: ["Space Education", "Curriculum Development", "Student Mentorship"],
      social: {
        linkedin: "https://www.linkedin.com/in/john-okafor",
        twitter: "https://twitter.com/johnokafor"
      }
    }
  ];

  return (
    <div className="team">
      <div className="team-container">
        <h1 className="animate-title">Our Team</h1>
        
        <div className="leadership-section">
          <h2 className="animate-title">Executive Leadership</h2>
          <div className="team-grid">
            {teamMembers.slice(0, 2).map(member => (
              <div
                key={member.id}
                id={`team-card-${member.id}`}
                className={`team-card ${isVisible[`team-card-${member.id}`] ? 'visible' : ''} 
                          ${activeCard === member.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(member.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="member-image">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/team/placeholder.jpg";
                      }}
                    />
                  ) : (
                    <div className="image-placeholder" />
                  )}
                </div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                <div className="social-links">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="members-section">
          <h2 className="animate-title">Key Team Members</h2>
          <div className="team-grid">
            {teamMembers.slice(2).map(member => (
              <div
                key={member.id}
                id={`team-card-${member.id}`}
                className={`team-card ${isVisible[`team-card-${member.id}`] ? 'visible' : ''} 
                          ${activeCard === member.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(member.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="member-image">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/team/placeholder.jpg";
                      }}
                    />
                  ) : (
                    <div className="image-placeholder" />
                  )}
                </div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                <div className="social-links">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;