import { useState } from 'react';
import { PERSONAL_INFO } from '../constants/strings';
import SectionLabel from './SectionLabel';
import '../styles/AboutMe.css';

const TERMINAL_STATES = {
  open: 'open',
  closed: 'closed',
  compact: 'compact',
  maximized: 'maximized',
};

export default function AboutMe() {
  const [terminalState, setTerminalState] = useState(TERMINAL_STATES.open);

  const isClosed = terminalState === TERMINAL_STATES.closed;
  const isCompact = terminalState === TERMINAL_STATES.compact;
  const isMaximized = terminalState === TERMINAL_STATES.maximized;

  const terminalClassName = [
    'hero-terminal',
    isCompact && 'hero-terminal--compact',
    isMaximized && 'hero-terminal--maximized',
  ]
    .filter(Boolean)
    .join(' ');

  const setTerminalMode = mode => {
    setTerminalState(current =>
      current === mode ? TERMINAL_STATES.open : mode
    );
  };

  const openTerminal = () => setTerminalState(TERMINAL_STATES.open);

  const restoreFromTitleBar = () => {
    if (terminalState !== TERMINAL_STATES.open) {
      openTerminal();
    }
  };

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-showcase">
          <img
            src="/yuchi.jpeg"
            alt="Yuliia Chimyrys"
            className="hero-avatar"
            width={296}
            height={296}
          />
          <div className="hero-terminal-slot">
            {isClosed ? (
              <button
                type="button"
                className="terminal-restore"
                onClick={openTerminal}
                aria-label="Open terminal"
              >
                <span className="terminal-restore-icon" aria-hidden="true">
                  <span className="terminal-restore-prompt">❯</span>_
                </span>
                <span className="terminal-restore-label">fish</span>
              </button>
            ) : (
              <div className={terminalClassName}>
                <div
                  className="hero-terminal-titlebar"
                  onClick={restoreFromTitleBar}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      restoreFromTitleBar();
                    }
                  }}
                  role={
                    terminalState !== TERMINAL_STATES.open ? 'button' : undefined
                  }
                  tabIndex={
                    terminalState !== TERMINAL_STATES.open ? 0 : undefined
                  }
                  aria-label={
                    terminalState !== TERMINAL_STATES.open
                      ? 'Restore terminal window'
                      : undefined
                  }
                >
                  <div className="hero-terminal-lights">
                    <button
                      type="button"
                      className="light light--close"
                      aria-label="Close terminal"
                      onClick={e => {
                        e.stopPropagation();
                        setTerminalState(TERMINAL_STATES.closed);
                      }}
                    />
                    <button
                      type="button"
                      className="light light--minimize"
                      aria-label="Compact terminal view"
                      onClick={e => {
                        e.stopPropagation();
                        setTerminalMode(TERMINAL_STATES.compact);
                      }}
                    />
                    <button
                      type="button"
                      className="light light--maximize"
                      aria-label="Maximize terminal"
                      onClick={e => {
                        e.stopPropagation();
                        setTerminalMode(TERMINAL_STATES.maximized);
                      }}
                    />
                  </div>
                  <p className="hero-terminal-title">
                    {PERSONAL_INFO.terminalTitle}
                  </p>
                </div>
                <div className="hero-terminal-body">
                  <p className="hero-terminal-welcome">
                    {PERSONAL_INFO.terminalWelcome}
                  </p>
                  <p className="hero-terminal-help">
                    {PERSONAL_INFO.terminalHelpPrefix}
                    <span className="hero-terminal-help-word">
                      {PERSONAL_INFO.terminalHelpWord}
                    </span>
                    {PERSONAL_INFO.terminalHelpSuffix}
                  </p>
                  <p className="hero-terminal-line hero-terminal-line--path">
                    <span className="hero-shell-path">~</span>
                  </p>
                  <p className="hero-terminal-line">
                    <span className="hero-prompt">❯</span>{' '}
                    {PERSONAL_INFO.terminalGreeting}
                    <span className="hero-cursor" aria-hidden="true">
                      |
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hero-details">
          <h1>{PERSONAL_INFO.role}</h1>
          <p className="hero-tagline">{PERSONAL_INFO.terminalTagline}</p>
          <SectionLabel>about</SectionLabel>
          <p className="hero-description">{PERSONAL_INFO.description}</p>
          <p className="hero-description">{PERSONAL_INFO.previous}</p>
          <ul className="hero-stack">
            {PERSONAL_INFO.stack.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hero-aside">{PERSONAL_INFO.aside}</p>
        </div>
      </div>
    </div>
  );
}
