import React from 'react';
import styles from './HomepageFeatures/styles.module.css';

export default function ContactPopup({ type, content, onClose }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard!');
  };

  return (
    <>
      <div className="contact-overlay" onClick={onClose} />
      <div className="contact-popup">
        <h3>{type === 'email' ? 'Email Address' : 'WeChat ID'}</h3>
        <p>{content}</p>
        <button onClick={copyToClipboard}>Copy</button>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
} 