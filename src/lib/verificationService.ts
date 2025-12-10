import { logSecurityEvent, logErrorEvent } from './logService'; // NOUVEL IMPORT

/**
 * @description Fonction asynchrone pour soumettre les fichiers d'identité au service de vérification.
 * @author Your Name
 * @date 2025-11-28
 * @param recto_file - Le fichier du recto du document.
 * @param verso_file - Le fichier du verso du document.
 * @returns {Promise<any>} Le résultat de la vérification.
 */
export const submitVerificationDocuments = async (
    recto_file: File, 
    verso_file: File
): Promise<any> => {
    const API_ENDPOINT = '/api/verify-documents'; 
    
    // Utilisation du log sécurisé pour le début de l'opération
    logSecurityEvent('API_CALL_START', `Tentative de soumission des fichiers: ${recto_file.name}, ${verso_file.name}`);

    const form_data = new FormData(); 
    form_data.append('recto', recto_file);
    form_data.append('verso', verso_file);

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            body: form_data,
        });

        if (!response.ok) {
            // Log d'erreur détaillé avec le contexte
            logErrorEvent(new Error(`API Response Error: ${response.status} ${response.statusText}`), 'VerificationService');
            throw new Error(`Erreur de l'API: ${response.statusText}`);
        }

        const verification_result = await response.json(); 
        
        // Log de succès (non sensible)
        logSecurityEvent('API_CALL_SUCCESS', 'Soumission des documents réussie.');
        
        return verification_result;

    } catch (error) {
        // Log d'erreur critique
        logErrorEvent(error, 'VerificationService');
        throw error;
    }
};