'use client';

import React from 'react';
import styles from './GlobalNotification.module.css';

// Classes: en anglais, style PascalCase
interface GlobalNotificationProps {
    error_message: string | null; // Variables: snake_case
    on_close: () => void; // Variables: snake_case (fonction pour masquer)
}

/**
 * @description Affiche les notifications d'erreurs globales (par exemple, problème de connexion API).
 * @author Your Name
 * @date 2025-11-28
 */
const GlobalNotification: React.FC<GlobalNotificationProps> = ({ error_message, on_close }) => {
    
    // Si pas de message d'erreur, ne rien afficher
    if (!error_message) {
        return null;
    }
    
    // Log de sécurité: Affiche l'erreur critique dans la console pour la traçabilité
    console.error(`GLOBAL ERROR DISPLAYED: ${error_message}`);

    return (
        <div className={styles.notification_bar}>
            <p className={styles.message}>
                ⚠️ Erreur Critique : {error_message}
            </p>
            <button 
                onClick={on_close} 
                className={styles.close_button}
                aria-label="Fermer la notification d'erreur"
            >
                &times;
            </button>
        </div>
    );
};

export default GlobalNotification;