import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/TextTiltAnimation.module.css';

const TextTiltAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
		const texts = containerRef.current.querySelectorAll(`.${styles.text}`);
		gsap.fromTo(texts[0].querySelectorAll(`.${styles.char}`),
			{ y: 50, rotation: 13, opacity: 0 },
			{ y: 0, rotation: 0, opacity: 1, duration: 2, ease: "power4.out", stagger: 0.02 }
		);
		
		const tl = gsap.timeline({repeat: -1, repeatDelay: 1, delay: 2}); // 开始后续动画后给第一行文字一点时间

		const charsline2 = texts[1].querySelectorAll(`.${styles.char}`);
		tl.fromTo(charsline2, 
			{ y: 50, rotation: 13, opacity: 0 },
			{ y: 0, rotation: 0, opacity: 0.9, duration: 2, ease: "power4.out", stagger: 0.02 }
		).to(charsline2, 
			{ y: 50, rotation: -13, opacity: 0, duration: 2, ease: "power4.in" },
			"+=0.5"
		);

		const charsline3 = texts[2].querySelectorAll(`.${styles.char}`);
		const charsline4 = texts[3].querySelectorAll(`.${styles.char}`);

		tl.fromTo(charsline3, 
			{ y: -50, rotation: 13, opacity: 0 },
			{ y: -100, rotation: 0, opacity: 0.9, duration: 2, ease: "power4.out", stagger: 0.02 }
		)
		.fromTo(charsline4, 
			{ y: -50, rotation: 13, opacity: 0 },
			{ y: -100, rotation: 0, opacity: 0.9, duration: 2, ease: "power4.out", stagger: 0.02 },
			"<" 
		)
		.to(charsline3, 
			{ y: 50, rotation: -13, opacity: 0, duration: 2, ease: "power4.in" }
		)
		.to(charsline4, 
			{ y: 50, rotation: -13, opacity: 0, duration: 2, ease: "power4.in" },
			"<" 
		);


    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className={styles.char}>{char === ' ' ? '\u00A0' : char}</span>
    ));
  };

  return (
    <div className={`${styles.textContainer} textTiltAnimation`} ref={containerRef}>
      <div className={styles.text}>{splitText("This is BirefNet")}</div>
      <div className={styles.text}>{splitText("For high-precision image segmentation")}</div>
      <div className={styles.text}>{splitText("Applicable to multiple scenarios")}</div>
      <div className={styles.text}>{splitText("education, medical, geographical...")}</div>
    </div>
  );
};

export default TextTiltAnimation;