import React, { useState, useEffect } from 'react'

const TruncateText = ({ text, limit }) => {
    const [truncated, setTruncated] = useState('');
  
    useEffect(() => {
      const truncateText = (text, limit) => {
        const words = text.split(' ');
        const truncatedWords = words.slice(0, limit);
        const truncatedText = truncatedWords.join(' ');
  
        return truncatedText + (words.length > limit ? '...' : '');
      };
  
      setTruncated(truncateText(text, limit));
    }, [text, limit]);
  
    return <p>{truncated}</p>;
  };
  

export default TruncateText