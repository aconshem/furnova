import {useState} from 'react';

export default function Image({src, alt, className = ''}: { src: string; alt: string; className?: string }) {
    const [bad, setBad] = useState(false);
    return <img src={bad ? '/fallback.svg' : src} alt={alt} className={className} loading="lazy"
                onError={() => setBad(true)}/>
}
