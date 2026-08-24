import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
import Tokushoho from './Tokushoho';
import './CodexPage.css';

const HERO_FRAMES = [
    { src: '/art/hero-1.png', kanji: '波' },
    { src: '/art/hero-2.png', kanji: '鬼' },
    { src: '/art/hero-3.png', kanji: '鯉' },
    { src: '/art/hero-4.png', kanji: '鳥居' },
    { src: '/art/hero-5.png', kanji: '桜' },
];

const LEGAL_META = {
    terms: { no: '05', kanji: '規約', label: 'TERMS', Component: TermsOfService },
    privacy: { no: '06', kanji: '秘密', label: 'PRIVACY', Component: PrivacyPolicy },
    refund: { no: '07', kanji: '返金', label: 'REFUND', Component: RefundPolicy },
    tokushoho: { no: '08', kanji: '届出', label: 'NOTICE', Component: Tokushoho },
};

const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function CodexPage() {
    const [legalView, setLegalView] = useState(null);

    return (
        <main className="codex">
            <CodexBg />
            <div className="codex-grain" aria-hidden="true" />
            <div className="codex-vignette" aria-hidden="true" />

            <Hero />

            <Chapter
                no="01"
                id="roots"
                kanji="人物"
                label="ROOTS"
                title="ABOUT"
                art={portfolioData.chapterArt.orange}
            >
                <AboutContent />
            </Chapter>

            <Divider />

            <Chapter
                no="02"
                id="adventure"
                kanji="遊戯"
                label="ADVENTURE"
                title="GAMES"
                art={portfolioData.chapterArt.strawberry}
                flip
            >
                <EntryGrid items={portfolioData.games} fallbackEmoji="🎮" emptyType="GAME" />
            </Chapter>

            <Divider />

            <Chapter
                no="03"
                id="treasures"
                kanji="製作"
                label="TREASURES"
                title="PROJECTS"
                art={portfolioData.chapterArt.grape}
            >
                <EntryGrid items={portfolioData.projects} fallbackEmoji="📱" emptyType="WORK" />
            </Chapter>

            <Divider />

            <Chapter
                no="04"
                id="hello"
                kanji="接触"
                label="HELLO"
                title="CONTACT"
                art={portfolioData.chapterArt.apple}
                flip
            >
                <ContactContent onLegal={setLegalView} />
            </Chapter>

            <footer className="codex-footer">
                <span className="ch-flourish" aria-hidden="true" />
                <div className="footer-legal-links">
                    <button onClick={() => setLegalView('terms')} className="footer-btn">Terms of Service</button>
                    <span>|</span>
                    <button onClick={() => setLegalView('privacy')} className="footer-btn">Privacy Policy</button>
                    <span>|</span>
                    <button onClick={() => setLegalView('refund')} className="footer-btn">Refund Policy</button>
                    <span>|</span>
                    <button onClick={() => setLegalView('tokushoho')} className="footer-btn">Legal Notice (特定商取引法に基づく表記)</button>
                </div>
                <div className="footer-copyright">&copy; 2026 NEXT-HARU. All rights reserved.</div>
            </footer>

            <LegalModal view={legalView} onClose={() => setLegalView(null)} />
        </main>
    );
}

function CodexBg() {
    const [failed, setFailed] = useState(false);
    if (failed) return null;
    return (
        <div className="codex-bg" aria-hidden="true">
            <img src="/art/bg-main.png" alt="" onError={() => setFailed(true)} />
        </div>
    );
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero-gallery">
                {HERO_FRAMES.map((frame, i) => (
                    <motion.div
                        key={frame.src}
                        className="hero-frame"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="frame-fallback" aria-hidden="true">{frame.kanji}</span>
                        <img
                            src={frame.src}
                            alt=""
                            loading="eager"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.p className="hero-overline" {...reveal} transition={{ ...reveal.transition, delay: 0.3 }}>
                // NEXT-HARU ARCHIVE — EST.2026
            </motion.p>
            <motion.h1 className="hero-title" {...reveal} transition={{ ...reveal.transition, delay: 0.4 }}>
                NEXT HARU
            </motion.h1>
            <motion.div className="hero-ornament" {...reveal} transition={{ ...reveal.transition, delay: 0.5 }} aria-hidden="true" />
            <motion.p className="hero-sub" {...reveal} transition={{ ...reveal.transition, delay: 0.55 }}>
                AI CRAFTING DIGITAL SOLUTIONS FOR EVERYDAY LIFE
            </motion.p>
            <motion.a href="#roots" className="hero-scroll" {...reveal} transition={{ ...reveal.transition, delay: 0.7 }}>
                SCROLL ▼
            </motion.a>
        </section>
    );
}

function Chapter({ no, id, kanji, label, title, art, flip, children }) {
    return (
        <section id={id} className={`chapter${flip ? ' flip' : ''}`}>
            <span className="chapter-bg-kanji" aria-hidden="true">{kanji}</span>
            <div className="chapter-inner">
                <motion.header className="chapter-head" {...reveal}>
                    <span className="cx-file">CHAPTER {no} — {label}</span>
                    <h2 className="chapter-title">{title}</h2>
                </motion.header>

                <div className="chapter-grid">
                    {art && (
                        <motion.div className="chapter-portrait" {...reveal}>
                            <div className="chapter-portrait-frame">
                                <span className="frame-fallback" aria-hidden="true">{kanji}</span>
                                <img
                                    src={art}
                                    alt=""
                                    loading="lazy"
                                    className="chapter-portrait-img"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                            <span className="chapter-portrait-caption">第{no}章 — {kanji}</span>
                        </motion.div>
                    )}
                    <motion.div className="chapter-body" {...reveal} transition={{ ...reveal.transition, delay: 0.15 }}>
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Divider() {
    return (
        <motion.div className="chapter-divider" {...reveal} aria-hidden="true">
            <span className="ch-flourish" />
        </motion.div>
    );
}

function EntryGrid({ items, fallbackEmoji, emptyType }) {
    return (
        <div className="cx-entries">
            {items.map((item, i) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id} className="project-card">
                    <div className="cx-entry-head">
                        <span className="cx-entry-no">No.{String(i + 1).padStart(3, '0')}</span>
                        <span className="cx-entry-type">{item.tags?.[0] || emptyType}</span>
                    </div>
                    <div className="card-thumbnail">
                        {item.thumbnail ? (
                            <img src={item.thumbnail} alt={item.title} className="card-image" />
                        ) : (
                            <span className="card-emoji">{fallbackEmoji}</span>
                        )}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tag-row">
                        {item.tags?.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}

function AboutContent() {
    const { name, title, bio, skills } = portfolioData.about;
    return (
        <div className="panel-content">
            <h3 className="about-name">{name}</h3>
            <p className="about-title">{title}</p>
            <div className="cx-rule" aria-hidden="true" />
            <p className="about-bio">{bio}</p>
            <h4 className="cx-spec-title">// SPEC — STACK</h4>
            <div className="skills-row">
                {skills.map((skill, i) => (
                    <span key={skill} className="skill-badge">
                        <span className="cx-skill-no">{String(i + 1).padStart(2, '0')}</span>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ContactContent({ onLegal }) {
    const { email, github, linkedin, twitter } = portfolioData.contact;

    return (
        <div className="panel-content">
            <div className="contact-list">
                <a href={`mailto:${email}`} className="contact-item">
                    <span className="cx-ci-label">MAIL</span>
                    <span className="cx-ci-value">{email}</span>
                </a>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <span className="cx-ci-label">GITHUB</span>
                        <span className="cx-ci-value">github.com/gilppon</span>
                    </a>
                )}
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <span className="cx-ci-label">LINKEDIN</span>
                        <span className="cx-ci-value">in/next-haru</span>
                    </a>
                )}
                {twitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <span className="cx-ci-label">X / TWITTER</span>
                        <span className="cx-ci-value">@nextharu</span>
                    </a>
                )}
            </div>

            <div className="cx-legal">
                <h3 className="cx-legal-title">// LEGAL RECORDS</h3>
                <button onClick={() => onLegal('terms')} className="cx-legal-btn">規約 — Terms of Service</button>
                <button onClick={() => onLegal('privacy')} className="cx-legal-btn">秘密 — Privacy Policy</button>
                <button onClick={() => onLegal('refund')} className="cx-legal-btn">返金 — Refund Policy</button>
                <button onClick={() => onLegal('tokushoho')} className="cx-legal-btn">届出 — Legal Notice</button>
            </div>
        </div>
    );
}

function LegalModal({ view, onClose }) {
    if (!view) return null;
    const meta = LEGAL_META[view];
    const { Component } = meta;

    return (
        <div className="legal-modal" onClick={onClose} role="dialog" aria-modal="true">
            <div className="legal-modal-frame" onClick={(e) => e.stopPropagation()}>
                <span className="ch-corner ch-tl" aria-hidden="true" />
                <span className="ch-corner ch-tr" aria-hidden="true" />
                <span className="ch-corner ch-bl" aria-hidden="true" />
                <span className="ch-corner ch-br" aria-hidden="true" />

                <header className="ch-head">
                    <span className="cx-file">FILE//{meta.no} — {meta.label}</span>
                    <button onClick={onClose} className="legal-close">✕ CLOSE</button>
                </header>

                <div className="legal-modal-body">
                    <Component />
                </div>
            </div>
        </div>
    );
}
