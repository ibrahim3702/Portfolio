import React from "react";
import { Mail, MapPin, Github, Linkedin, Download, Briefcase, GraduationCap, Code, Server, Cloud, User, Contact, Share2 } from "lucide-react";
import "./Portfolio.css";

export default function Portfolio() {
    const portfolioData = {
        name: "John Doe",
        title: "Senior Software Engineer",
        bio: "15+ years building scalable systems and leading engineering teams with expertise in cloud architecture and distributed systems",
        email: "john.doe@example.com",
        location: "San Francisco, CA",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        cvUrl: "/path-to-your-cv.pdf",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",

        coreSkills: {
            languages: ["TypeScript", "Python", "Go", "Java", "SQL"],
            backend: ["Node.js", "PostgreSQL", "Redis", "MongoDB", "GraphQL"],
            cloud: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
        },

        experience: [
            {
                title: "Senior Software Engineer",
                company: "Tech Corp",
                period: "2020 - Present",
                description:
                    "Led development of microservices architecture handling 10M+ daily requests, resulting in 40% improvement in system performance and 99.9% uptime.",
            },
            {
                title: "Software Engineer",
                company: "Innovation Labs",
                period: "2017 - 2020",
                description: "Architected cloud-native applications using AWS services, mentored 5+ junior developers, and implemented agile development practices.",
            },
            {
                title: "Full Stack Developer",
                company: "StartUp Inc",
                period: "2015 - 2017",
                description: "Built scalable web applications using React and Node.js, contributing to 300% user growth over two years.",
            },
        ],

        education: [
            {
                degree: "Master of Science in Computer Science",
                school: "Stanford University",
                period: "2013 - 2015",
                description: "Specialized in Distributed Systems and Machine Learning. Published research on scalable microservices architecture.",
            },
            {
                degree: "Bachelor of Science in Computer Engineering",
                school: "University of California",
                period: "2009 - 2013",
                description: "Dean's List, GPA: 3.8/4.0. President of Computer Science Society. Graduated Summa Cum Laude.",
            },
        ],
    };

    return (
        <div className="portfolio-container">
            <aside className="sidebar">
                <div className="profile">
                    <img src={portfolioData.profileImage} alt={portfolioData.name} className="profile-img" />
                    <h1 className="name">{portfolioData.name}</h1>
                    <p className="title">{portfolioData.title}</p>
                    <p className="bio">{portfolioData.bio}</p>
                </div>

                <div className="contact-section">
                    <h3><Contact size={20} /> Contact Info</h3>
                    <a href={`mailto:${portfolioData.email}`} className="contact-item">
                        <Mail size={18} />
                        <span>{portfolioData.email}</span>
                    </a>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>{portfolioData.location}</span>
                    </div>
                </div>

                <div className="social-section">
                    <h3><Share2 size={20} /> Connect With Me</h3>
                    <div className="social-links">
                        <a href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={22} />
                        </a>
                        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>

                <div className="download-section">
                    <a href={portfolioData.cvUrl} download className="cv-btn">
                        <Download size={20} /> Download CV
                    </a>
                </div>
            </aside>

            <main className="content">
                <section className="skills-section">
                    <h2 className="section-title">Core Skills</h2>

                    <div className="skill-group">
                        <h3><Code size={20} /> Languages & Frameworks</h3>
                        <div className="skill-tags">
                            {portfolioData.coreSkills.languages.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3><Server size={20} /> Backend Technologies</h3>
                        <div className="skill-tags">
                            {portfolioData.coreSkills.backend.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <h3><Cloud size={20} /> Cloud & Infrastructure</h3>
                        <div className="skill-tags">
                            {portfolioData.coreSkills.cloud.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="experience-section">
                    <h2 className="section-title"><Briefcase size={24} /> Professional Experience</h2>
                    {portfolioData.experience.map((job, idx) => (
                        <div key={idx} className="card">
                            <div className="card-header">
                                <h3>{job.title}</h3>
                                <span>{job.period}</span>
                            </div>
                            <p className="company">{job.company}</p>
                            <p className="description">{job.description}</p>
                        </div>
                    ))}
                </section>

                <section className="education-section">
                    <h2 className="section-title"><GraduationCap size={24} /> Education</h2>
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="card">
                            <div className="card-header">
                                <h3>{edu.degree}</h3>
                                <span>{edu.period}</span>
                            </div>
                            <p className="company">{edu.school}</p>
                            <p className="description">{edu.description}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}