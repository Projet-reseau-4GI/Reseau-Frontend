'use client';

import React, { useState } from 'react';
import UploaderComponent from '@/components/verification/UploaderComponent';
import VerificationResultDisplay from '@/components/verification/VerificationResultDisplay';

// Définition de l'énumération pour l'état de vérification (Utilisé par Uploader et Display)
// Contrainte: Utiliser PascalCase pour les types/classes si possible, ou des types/énumérations clairs.
type VerificationStatus = 'IDLE' | 'PROCESSING' | 'SUCCESS' | 'ERROR';

/**
 * @description Page principale du processus de vérification d'identité.
 * Gère l'état global du processus (téléchargement et résultat).
 * @author Your Name
 * @date 2025-11-28
 */
// Contrainte: Fonction principale du Layout en PascalCase
export default function VerificationPage() {
    // État pour suivre le statut (IDLE: initial, PROCESSING: en cours, SUCCESS, ERROR)
    const [verification_status, set_verification_status] = useState<VerificationStatus>('IDLE'); // Variables: snake_case
    const [verification_result, set_verification_result] = useState<any>(null); // Variables: snake_case

    return (
        <div style={{ padding: '20px', minHeight: '80vh', backgroundColor: '#f4f7f9' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
                Processus de Vérification
            </h1>
            
            {/* 1. UploaderComponent: Lui donner les fonctions pour mettre à jour le statut */}
            <UploaderComponent 
                set_verification_status={set_verification_status}
                set_verification_result={set_verification_result}
            />

            {/* 2. Affichage du Résultat: Lui donner le statut et le résultat actuel */}
            <VerificationResultDisplay 
                verification_status={verification_status}
                verification_result={verification_result}
            />
        </div>
    );
}