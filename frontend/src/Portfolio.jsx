import React from "react";
import { Mail, MapPin, Github, Linkedin, Download, Briefcase, GraduationCap, Code, Server, Cloud, User, Contact, Share2 } from "lucide-react";
import "./Portfolio.css";
import profilePic from './assets/ProfilePic.jpg';

export default function Portfolio() {
    const portfolioData = {
        name: "Ibrahim Faisal",
        title: "Software Engineer",
        bio: "Software Engineering student at FAST NUCES with expertise in AI/ML model training, NLP, and generative AI. Passionate about R&D and data-driven innovation",
        email: "ibrahimfaisal3702@gmail.com",
        location: "Faisalabad, Pakistan",
        github: "https://github.com/ibrahim3702",
        linkedin: "https://www.linkedin.com/in/ibrahim-faisal-714812348/",
        cvUrl: "/path-to-your-cv.pdf",
        profileImage: profilePic,

        coreSkills: {
            languages: ["Python", "Go", "JavaScript", "SQL", "C++", "Java", "C/C#", "TypeScript"],
            backend: ["Node.js", "PostgreSQL", "Redis", "MongoDB", "Flask", "NestJS", "MongoDB"],
            cloud: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
            frontend: ["ReactJS", "NextJS", "PostCSS", "Tailwind", "Bootstrap"],
            ai_ml: [
                "Python ML",
                "TensorFlow",
                "PyTorch",
                "Pandas",
                "NumPy",
                "NLP",
                "Computer Vision",
                "Hugging Face",
                "FastAPI",
                "Generative AI"
            ]

        },

        experience: [
            {
                title: "Full Stack Developer",
                company: "Freelance Projects",
                period: "2024 - Present",
                description:
                    "Developing end-to-end web applications for clients using React, Node.js, and AWS, focusing on performance optimization and user experience enhancements.",
            },
            {
                title: "AI/ML Engineer",
                company: "Freelance Projects",
                period: "2024 - Present",
                description: "Building and deploying machine learning models for various applications, including NLP and computer vision, utilizing TensorFlow and PyTorch frameworks.",
            },
        ],

        education: [
            {
                degree: "Bachelor of Science in Software Engineering",
                school: "FAST National University of Computer and Emerging Sciences",
                period: "2022 - 2026",
                description: "Dean's List, GPA: 3.82/4.0. Gold Medalist of Software Engineering Department",
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

                    <div className="skills-container">
                        <div className="skill-group">
                            <h3><Code size={20} /> Languages</h3>
                            <div className="skill-tags">
                                {portfolioData.coreSkills.languages.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-group">
                            <h3><Server size={20} /> Backend</h3>
                            <div className="skill-tags">
                                {portfolioData.coreSkills.backend.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-group">
                            <h3><Cloud size={20} /> Cloud</h3>
                            <div className="skill-tags">
                                {portfolioData.coreSkills.cloud.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-group">
                            <h3><Cloud size={20} /> Frontend</h3>
                            <div className="skill-tags">
                                {portfolioData.coreSkills.frontend.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-group">
                            <h3><Cloud size={20} /> AI/ML</h3>
                            <div className="skill-tags">
                                {portfolioData.coreSkills.ai_ml.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
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