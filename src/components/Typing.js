import React, { useState, useEffect } from 'react';

const Typing = ({ text, typingSpeed, deletingSpeed, duration }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(text[currentTextIndex].substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((currentTextIndex + 1) % text.length);
                }
            } else {
                if (charIndex < text[currentTextIndex].length) {
                    setDisplayedText(text[currentTextIndex].substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), duration);
                }
            }
        };

        const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, text, currentTextIndex, typingSpeed, deletingSpeed, duration]);

    return <h2>{displayedText}</h2>;
};

export default Typing;
