import React from 'react';
import styles from './VerificationResultDisplay.module.css';

type VerificationStatus = 'IDLE' | 'PROCESSING' | 'SUCCESS' | 'ERROR';

interface VerificationResultDisplayProps {
    verification_status: VerificationStatus;
    verification_result: any;
}

/**
 * @description Affiche l'état actuel et le résultat de la vérification d'identité.
 * @author Your Name
 * @date 2025-11-28
 */
const VerificationResultDisplay: React.FC<VerificationResultDisplayProps> = ({ 
    verification_status, 
    verification_result 
}) => {
    
    let status_text = '';
    let container_class = styles.container_idle;

    switch (verification_status) {
        case 'PROCESSING':
            status_text = 'Documents en cours d\'analyse. Veuillez patienter...';
            container_class = styles.container_processing;
            break;
        case 'SUCCESS':
            status_text = 'Vérification réussie ! Identité validée.';
            container_class = styles.container_success;
            break;
        case 'ERROR':
            status_text = 'Échec de la vérification. Veuillez vérifier vos documents.';
            container_class = styles.container_error;
            break;
        case 'IDLE':
        default:
            status_text = 'Prêt à lancer la vérification.';
            container_class = styles.container_idle;
            break;
    }

    return (
        <div className={`${styles.container} ${container_class}`}>
            <h3 className={styles.status_title}>Statut Actuel</h3>
            <p className={styles.status_message}>
                {status_text}
            </p>
            
            {/* Affichage des détails du résultat en cas de succès ou d'erreur */}
            {(verification_status === 'SUCCESS' || verification_status === 'ERROR') && (
                <div className={styles.result_details}>
                    <h4>Détails du Résultat</h4>
                    <pre className={styles.result_json}>
                        {JSON.stringify(verification_result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default VerificationResultDisplay;