import React, { useState } from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ContactPopup from '@site/src/components/ContactPopup';

export default function Navbar(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ type: '', content: '' });

  const handleEmailClick = () => {
    setPopupContent({ type: 'email', content: 'xiaoguojunqiao@163.com' });
    setShowPopup(true);
  };

  const handleWeChatClick = () => {
    setPopupContent({ type: 'wechat', content: 'charmingeffect' });
    setShowPopup(true);
  };

  React.useEffect(() => {
    const emailLink = document.querySelector('.header-email-link');
    const wechatLink = document.querySelector('.header-wechat-link');

    if (emailLink) emailLink.addEventListener('click', handleEmailClick);
    if (wechatLink) wechatLink.addEventListener('click', handleWeChatClick);

    return () => {
      if (emailLink) emailLink.removeEventListener('click', handleEmailClick);
      if (wechatLink) wechatLink.removeEventListener('click', handleWeChatClick);
    };
  }, []);

  return (
    <>
      <OriginalNavbar {...props} />
      {showPopup && (
        <ContactPopup
          type={popupContent.type}
          content={popupContent.content}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
} 