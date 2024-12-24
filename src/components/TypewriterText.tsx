import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  style?: React.CSSProperties;
  typingSpeed?: number; // Velocidad de escritura
  deletingSpeed?: number; // Velocidad de borrado
  pauseBetween?: number; // Pausa entre textos
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className,
  style,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetween = 2000,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }

      // Controlar el flujo entre escribir, borrar y pausar
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseBetween);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length); // Pasar al siguiente texto
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [currentText, isDeleting, texts, currentIndex, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <span className={className} style={style}>
      {currentText}
    </span>
    
  );
};

export default TypewriterText;