import React from 'react';
import usePortfolioStore from '../store/usePortfolioStore';
import portfolioData from '../data/portfolioData';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
import Tokushoho from './Tokushoho';
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
                ← Back to Forest
            </button>

            {currentTarget === 'strawberry' && <GamesPanel />}
            {currentTarget === 'orange' && <AboutPanel />}
            {currentTarget === 'grape' && <ProjectsPanel />}
            {currentTarget === 'apple' && <ContactPanel />}

            {/* Legal Pages */}
            {currentTarget === 'terms' && <TermsOfService />}
            {currentTarget === 'privacy' && <PrivacyPolicy />}
            {currentTarget === 'refund' && <RefundPolicy />}
            {currentTarget === 'tokushoho' && <Tokushoho />}
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
            <h2 className="panel-title">🚀 Projects</h2>
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
    const setTarget = usePortfolioStore((s) => s.setTarget);

    return (
        <div className="panel-content">
            <h2 className="panel-title">📞 Contact</h2>
            <div className="contact-list">
                <a href={`mailto:${email}`} className="contact-item">✉️ {email}</a>
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="contact-item">🐱 GitHub</a>}
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">💼 LinkedIn</a>}
                {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer" className="contact-item">🐦 Twitter</a>}
            </div>

            <div className="legal-links mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Legal</h3>
                <button onClick={() => setTarget('terms')} className="text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Terms of Service</button>
                <button onClick={() => setTarget('privacy')} className="text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Privacy Policy</button>
                <button onClick={() => setTarget('refund')} className="text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Refund Policy</button>
                <button onClick={() => setTarget('tokushoho')} className="text-left text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Tokushoho</button>
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
