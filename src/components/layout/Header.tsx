import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import { logSecurityEvent } from '@/lib/logService';

// Constantes pour la navigation
const LINKS = [
    { href: '/comment-ca-marche', name: 'Comment ça marche' },
    { href: '/securite', name: 'Sécurité' },
    { href: '/contact', name: 'Contact' }
];

const DEMO_LINK_PATH = '/verification';

// Interface des props
interface HeaderProps {
    set_global_error: React.Dispatch<React.SetStateAction<string | null>>; 
}

// Fonction principale du composant
const Header: React.FC<HeaderProps> = ({ set_global_error }) => { 
    // Variable simulée pour l'état de connexion
    const is_logged_in = false; 

    const handleDemoView = () => {
        logSecurityEvent('USER_ACTION', 'Début de la vérification déclenché.');
        // Redirection vers la page de vérification
        window.location.href = DEMO_LINK_PATH;
    };


    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo_text}>
                Verification App
            </Link>
            
            <nav className={styles.nav_links}>
                {LINKS.map((link, index) => (
                    // Liens avec espacement et taille de police augmentés via CSS
                    <Link 
                        key={index} 
                        href={link.href} 
                        className={styles.nav_link}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            
            <div className={styles.user_actions}>
                {is_logged_in ? (
                    <Link href='/dashboard' className={styles.login_button}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href='/login' className={styles.login_button}>
                            Connexion
                        </Link>
                        <button 
                            className={styles.primary_button}
                            onClick={handleDemoView}
                        >
                            Commencer
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;