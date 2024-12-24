import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/JonRe88"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-900 transition-colors"
      >
        <Github size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/jony-reyes-developer/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-900 transition-colors"
      >
        <Linkedin size={32} />
      </a>
    </div>
  );
}