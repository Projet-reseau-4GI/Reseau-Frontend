import Link from 'next/link';
import React from 'react';
import styles from './HeroSection.module.css';

// Documentation et commentaires: Javadoc pour la classe [cite: 23]
/**
 * @description Main hero section component for the landing page, displaying value proposition.
 * @author Your Name
 * @date 2025-11-28
 */
// Classes: en anglais, style PascalCase 
const HeroSection = () => {
    // Constantes: en majuscules avec séparateur (_) [cite: 10, 36]
    const DEMO_LINK_PATH = '/demo'; 

    const handleDemoView = () => { // Méthodes: en anglais, style camelCase 
        // Respecter les règles de sécurité ne pas loguer de données sensibles [cite: 39]
        console.log('User demo view initiated'); 
    };
    
    // Variables: en anglais, style snake_case 
    const main_title_part_1 = 'Validez vos documents d\'identité en';
    const main_title_part_2 = 'quelques secondes';

    return (
        // Indentation: 4 espaces (pas de tabulations) [cite: 19]
        <section className={styles.hero_container}>
            {/* Colonne Gauche (Texte et CTA) */}
            <div className={styles.left_column}>
                <span className={styles.verification_badge}>Vérification d'identité sécurisée</span>

                <h1 className={styles.main_title}>
                    {main_title_part_1} <span className={styles.highlight_text}>{main_title_part_2}</span>
                </h1>

                <p className={styles.description}>
                    Solution de vérification d'identité en temps réel, conforme aux normes européennes. Authentification sécurisée et automatisée pour vos utilisateurs.
                </p>

                <div className={styles.cta_group}>
                    <button className="primary-button">
                        Commencer gratuitement
                    </button>
                    {/* Utilisation de Link pour respecter le SSR/SEO [cite: 60] */}
                    <Link href={DEMO_LINK_PATH} passHref legacyBehavior>
                        <a onClick={handleDemoView} className={styles.demo_link}>Voir la démo</a>
                    </Link>
                </div>
            </div>

            {/* Colonne Droite (Mockup de l'App) */}
            <div className={styles.right_column}>
                {/* Contenu du mockup simulé */}
                <h3>MeroFinday</h3>
                <h2>Thr Identiing Verification</h2>
                <p>Solution de vérification d'identité en temps réel, conforme aux normes européennes.</p>
            </div>
        </section>
    );
};

export default HeroSection;