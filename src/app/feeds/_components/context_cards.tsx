import React, { useState, useRef, useEffect } from 'react';

interface CollapsibleTextProps {
    content: string;
}

const CollapsibleText = ({ content }: CollapsibleTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const maxHeight = 69; // Approximately 3 lines of text

    useEffect(() => {
        if (textRef.current) {
            setShowButton(textRef.current.scrollHeight > maxHeight);
        }
    }, [content]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p
                ref={textRef}
                className={`font-normal text-gray-800 w-5/6 whitespace-pre-line transition-all duration-300 ease-in-out ${
                    isExpanded ? '' : 'line-clamp-3'
                }`}
                style={{ maxHeight: isExpanded ? `${textRef.current?.scrollHeight}px` : `${maxHeight}px` }}
            >
                {content}
            </p>
            {showButton && (
                <button
                    onClick={toggleExpand}
                    className="text-accent_blue mt-2 inline-block mb-4"
                >
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            )}
        </div>
    );
};

export default CollapsibleText;
