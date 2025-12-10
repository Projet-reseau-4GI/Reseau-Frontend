'use client';

import React, { useState } from 'react';
import styles from './UploaderComponent.module.css';
import { submitVerificationDocuments } from '@/lib/verificationService'; 
import { logSecurityEvent, logErrorEvent } from '@/lib/logService'; // <-- NOUVEL IMPORT

// Définition des types basés sur le parent (page.tsx)
type VerificationStatus = 'IDLE' | 'PROCESSING' | 'SUCCESS' | 'ERROR';

// Interface des props: les setters sont passés par le parent
interface UploaderComponentProps {
    set_verification_status: React.Dispatch<React.SetStateAction<VerificationStatus>>;
    set_verification_result: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * @description Composant de formulaire pour le téléchargement du recto et du verso d'un document d'identité.
 * @author Your Name
 * @date 2025-11-28
 */
const UploaderComponent: React.FC<UploaderComponentProps> = ({ 
    set_verification_status, 
    set_verification_result 
}) => { 
    // État pour stocker les fichiers recto et verso
    const [recto_file, set_recto_file] = useState<File | null>(null); 
    const [verso_file, set_verso_file] = useState<File | null>(null); 

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, side: 'recto' | 'verso') => {
        const selected_file = event.target.files ? event.target.files[0] : null;

        if (side === 'recto') {
            set_recto_file(selected_file);
        } else {
            set_verso_file(selected_file);
        }
        // Réinitialiser le statut si l'utilisateur change de fichier
        set_verification_status('IDLE');
        set_verification_result(null);
        
        logSecurityEvent('FILE_SELECTION', `Fichier sélectionné pour ${side}: ${selected_file ? selected_file.name : 'Aucun'}`);
    };

    const handleVerificationSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!recto_file || !verso_file) {
            alert("Veuillez télécharger le recto ET le verso du document.");
            return;
        }
        
        // Log de sécurité: Début du processus
        logSecurityEvent('USER_ACTION', 'Début de la soumission du formulaire de vérification.');

        // 1. Début du processus: Mettre le statut à PROCESSING
        set_verification_status('PROCESSING');
        set_verification_result(null); 

        try {
            // 2. Appel au service API
            const result = await submitVerificationDocuments(recto_file, verso_file);
            
            // 3. Succès: Mettre le statut à SUCCESS
            set_verification_result(result);
            set_verification_status('SUCCESS');
            
            // Log de succès
            logSecurityEvent('VERIFICATION_PROCESS_END', 'Processus de vérification terminé avec succès.');

        } catch (error) {
            // 4. Échec: Mettre le statut à ERROR
            set_verification_result({ message: 'Erreur de connexion ou de traitement.', error: (error as Error).message });
            set_verification_status('ERROR');
            
            // Log d'erreur détaillé
            logErrorEvent(error, 'UploaderComponent');
        }
    }; 

    const is_submit_disabled = !recto_file || !verso_file; 
    
    return (
        <form onSubmit={handleVerificationSubmit} className={styles.form_container}>
            <h2>Téléchargement des Documents</h2>

            {/* Zone de téléchargement du Recto */}
            <div className={styles.upload_zone}>
                <label className={styles.label}>1. Recto du Document d'Identité</label>
                <input type="file" accept="image/jpeg,image/png,application/pdf" onChange={(e) => handleFileChange(e, 'recto')} className={styles.file_input}/>
                {recto_file && <p className={styles.file_info}>Fichier sélectionné : {recto_file.name}</p>}
            </div>

            {/* Zone de téléchargement du Verso */}
            <div className={styles.upload_zone}>
                <label className={styles.label}>2. Verso du Document d'Identité</label>
                <input type="file" accept="image/jpeg,image/png,application/pdf" onChange={(e) => handleFileChange(e, 'verso')} className={styles.file_input}/>
                {verso_file && <p className={styles.file_info}>Fichier sélectionné : {verso_file.name}</p>}
            </div>

            <button 
                type="submit" 
                className={is_submit_disabled ? styles.disabled_button : "primary-button"}
                disabled={is_submit_disabled}
            >
                Lancer la Vérification
            </button>
        </form>
    );
};

export default UploaderComponent;