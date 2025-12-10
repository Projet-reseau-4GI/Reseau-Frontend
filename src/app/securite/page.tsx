import React from 'react';
import styles from '../page.module.css';

/**
 * @description Page détaillant la politique de sécurité et de conformité de l'application.
 * Les puces ont été remplacées par des paragraphes simples pour une présentation professionnelle.
 * @author Your Name
 * @date 2025-11-28
 */
export default function SecurityPage() {
    return (
        <div className={styles.container}>
            <div className={styles.main_content}>
                <h1>Politique de Sécurité et de Confidentialité</h1>
                <p>
                    La protection de vos données d'identité est notre priorité absolue. Nous nous engageons à respecter les normes de sécurité les plus strictes.
                </p>

                <section className={styles.section}>
                    <h2>Conformité et Chiffrement</h2>
                    <p>
                        Toutes les communications entre votre navigateur et notre serveur sont protégées par le protocole **HTTPS/TLS 1.3** (chiffrement de bout en bout). Nous appliquons les principes de la Charte de Développement et les réglementations internationales sur la protection des données.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Gestion des Données d'Identité</h2>
                    {/* Les puces sont remplacées par des paragraphes simples */}
                    <p>
                        **Stockage Côté Client :** Aucune information d'identité, aucune image, ni aucun résultat de vérification n'est stocké dans le navigateur de l'utilisateur (cookies, localStorage, ou cache).
                    </p>
                    <p>
                        **Stockage Côté Serveur :** Les documents sont conservés uniquement le temps nécessaire au processus de vérification (quelques secondes) et sont ensuite détruits immédiatement, sauf si un historique légal de la transaction est requis (uniquement les métadonnées : statut, heure).
                    </p>
                    <p>
                        **Traçabilité :** Les logs d'erreurs et de sécurité sont enregistrés de manière anonymisée pour l'audit et la détection d'anomalies, conformément à notre service de logging sécurisé.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Authentification et Accès</h2>
                    <p>
                        L'accès à l'API de vérification est strictement contrôlé par des clés d'API et des jetons d'authentification. Seuls les systèmes autorisés peuvent initier une vérification.
                    </p>
                </section>
            </div>
        </div>
    );
}