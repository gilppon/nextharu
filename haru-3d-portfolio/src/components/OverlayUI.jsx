import React from 'react';
import usePortfolioStore from '../store/usePortfolioStore';
import portfolioData from '../data/portfolioData';
import './OverlayUI.css';

/**
 * OverlayUI - Glassmorphism HTML overlay that displays content
 * based on which 3D zone the camera is currently targeting.
 */
export default function OverlayUI() {
    const currentTarget = usePortfolioStore((s) => s.currentTarget);
    const isOverlayVisible = usePortfolioStore((s) => s.isOverlayVisible);
    const setTarget = usePortfolioStore((s) => s.setTarget);

    if (!isOverlayVisible || currentTarget === 'entrance') return null;

    const handleBack = () => {
        setTarget('entrance');
    };

    return (
        <div className={`overlay-panel ${isOverlayVisible ? 'visible' : ''}`}>
            <button className="back-btn" onClick={handleBack}>
                ← Back to Bar
            </button>

            {currentTarget === 'arcade' && <GamesPanel />}
            {currentTarget === 'jukebox' && <ProjectsPanel />}
            {currentTarget === 'phone' && <ContactPanel />}
            {currentTarget === 'board' && <AboutPanel />}
        </div>
    );
}

function GamesPanel() {
    return (
        <div className="panel-content">
            <h2 className="panel-title">🎮 Games</h2>
            <div className="card-grid">
                {portfolioData.games.map((game) => (
                    <a href={game.url} target="_blank" rel="noopener noreferrer" key={game.id} className="project-card">
                        <div className="card-thumbnail">
                            <span className="card-emoji">🎮</span>
                        </div>
                        <h3>{game.title}</h3>
                        <p>{game.description}</p>
                        <div className="tag-row">
                            {game.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

function ProjectsPanel() {
    return (
        <div className="panel-content">
            <h2 className="panel-title">🎵 Projects</h2>
            <div className="card-grid">
                {portfolioData.projects.map((project) => (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} className="project-card">
                        <div className="card-thumbnail">
                            <span className="card-emoji">📱</span>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tag-row">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

function ContactPanel() {
    const { email, github, linkedin, twitter } = portfolioData.contact;
    return (
        <div className="panel-content">
            <h2 className="panel-title">📞 Contact</h2>
            <div className="contact-list">
                <a href={`mailto:${email}`} className="contact-item">✉️ {email}</a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="contact-item">🐱 GitHub</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">💼 LinkedIn</a>
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="contact-item">🐦 Twitter</a>
            </div>
        </div>
    );
}

function AboutPanel() {
    const { name, title, bio, skills } = portfolioData.about;
    return (
        <div className="panel-content">
            <h2 className="panel-title">📋 About Me</h2>
            <h3 className="about-name">{name}</h3>
            <p className="about-title">{title}</p>
            <p className="about-bio">{bio}</p>
            <div className="skills-row">
                {skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                ))}
            </div>
        </div>
    );
}
