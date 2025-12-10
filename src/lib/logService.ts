// Contrainte: Utiliser des variables snake_case
// Contrainte: Utiliser des méthodes camelCase
// Contrainte: Assurer la sécurité des logs (ne jamais logger les données sensibles)

/**
 * @description Formatage sécurisé des logs pour la traçabilité des événements non sensibles.
 * @author Your Name
 * @date 2025-11-28
 * @param event_name - Nom de l'événement (ex: 'USER_ACTION', 'API_CALL').
 * @param message - Message descriptif.
 */
// Contrainte: Méthode camelCase
export const logSecurityEvent = (event_name: string, message: string): void => {
    // Variable snake_case
    const timestamp_ms = Date.now(); 
    
    // Log uniquement en mode développement pour éviter l'exposition en production (si non géré par un service externe)
    if (process.env.NODE_ENV !== 'production') {
        // Formatage pour la traçabilité
        console.log(`[SECURITY][${event_name}][TS:${timestamp_ms}] ${message}`);
    }
};

/**
 * @description Formatage sécurisé pour les erreurs critiques.
 * @author Your Name
 * @date 2025-11-28
 * @param error - L'objet Error ou une chaîne de caractères.
 * @param context - Contexte de l'erreur (ex: 'UploaderComponent', 'VerificationPage').
 */
// Contrainte: Méthode camelCase
export const logErrorEvent = (error: any, context: string): void => {
    // Variable snake_case
    const timestamp_ms = Date.now();
    const error_message = error instanceof Error ? error.message : String(error);
    const error_stack = error instanceof Error ? error.stack : 'N/A';

    // Log d'erreur dans tous les environnements pour la détection des bugs
    console.error(`[CRITICAL_ERROR][${context}][TS:${timestamp_ms}] Message: ${error_message}`);
    
    // Log du stack trace uniquement en dev pour éviter d'exposer des chemins de fichiers en production
    if (process.env.NODE_ENV !== 'production') {
        console.error("Stack Trace:", error_stack);
    }
    
    // Contrainte: NE JAMAIS loguer de données sensibles ici
    // (ex: ne pas loguer le contenu de recto_file ou verso_file)
};