import React from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';

// URL de l'image professionnelle pour l'arrière-plan de la page d'accueil (votre capture)
const PROFESSIONAL_BACKGROUND_IMAGE_URL = "https://i.imgur.com/eBf2qD1.jpeg"; 

/**
 * @description Section principale (Hero) de la page d'accueil.
 * L'image fournie est utilisée en arrière-plan de la colonne droite.
 * @author Your Name
 * @date 2025-11-28
 */
const HeroSection: React.FC = () => {

    return (
        <section className={styles.hero_section}>
            <div className={styles.left_column}>
                <div className={styles.verification_badge}>Vérification d'identité sécurisée</div>
                
                <h1 className={styles.main_title}>
                    <span className={styles.main_part_1}>Validez votre identité en</span> 
                    <span className={styles.highlight_text}> quelques secondes</span>
                    <span className={styles.main_part_2}>.</span>
                </h1>
                
                <p className={styles.description}>
                    Solution de vérification d'identité en temps réel, conforme aux normes. Authentification rapide et fiable pour vos clients.
                </p>
                
                <div className={styles.cta_group}>
                    <Link href="/verification" className={styles.primary_button_large}>
                        Commencer la Vérification
                    </Link>
                    <Link href="/comment-ca-marche" className={styles.demo_link}>
                        Comment ça marche ?
                    </Link>
                </div>
            </div>
            
            {/* Colonne droite avec l'image en arrière-plan via CSS */}
            <div 
                className={styles.right_column_background} 
                style={{ backgroundImage: `url(${PROFESSIONAL_BACKGROUND_IMAGE_URL})` }}
                role="img"
                aria-label="Processus de vérification de documents numériques."
            >
                {/* L'image est un background, pas de balise <img> ici */}
            </div>
        </section>
    );
};

export default HeroSection;