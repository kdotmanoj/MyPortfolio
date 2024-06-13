import {useEffect, useState} from "react";
function Typing({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    duration = 1000
}) {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = text[index];
            if(!isDeleting){
                if(displayText.length < currentText.length){
                    setDisplayText((prev) => prev + currentText.charAt(displayText.length));
                }
                else{
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, duration);
                }
            }
            else{
                if(displayText.length > 0){
                    setDisplayText((prev) => prev.slice(0,-1));
                } 
                else{
                   setIsDeleting(false);
                   setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        ); 

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]); 
    return (
        <div className="typing-effect">
            {displayText}
            <span className="caret"></span>
        </div>
    );
}

export default Typing;