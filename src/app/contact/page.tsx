import React from 'react';
import styles from '../page.module.css';

/**
 * @description Page de contact avec les coordonnées de support.
 * @author Your Name
 * @date 2025-11-28
 */
export default function ContactPage() {
    // Coordonnées fournies par l'utilisateur
    const PHONE_NUMBER = "+237 656309298";
    const EMAIL_ADDRESS = "u1461368@gmail.com";

    return (
        <div className={styles.container}>
            <div className={styles.main_content}>
                <h1>Nous Contacter</h1>
                <p>
                    Pour toute question relative à l'application, au processus de vérification ou à la sécurité de vos données, veuillez nous contacter via les coordonnées ci-dessous.
                </p>

                <section className={styles.section}>
                    <h2>Support Téléphonique</h2>
                    <p>
                        Veuillez appeler le support si vous rencontrez des problèmes urgents ou si vous avez des questions spécifiques :
                        <br /><br />
                        <strong>Numéro de Téléphone :</strong> <a href={`tel:${PHONE_NUMBER}`} className={styles.contact_link}>{PHONE_NUMBER}</a>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Support par Email</h2>
                    <p>
                        Pour toute demande moins urgente ou pour un support écrit :
                        <br /><br />
                        <strong>Adresse Email :</strong> <a href={`mailto:${EMAIL_ADDRESS}`} className={styles.contact_link}>{EMAIL_ADDRESS}</a>
                    </p>
                </section>
                
                <section className={styles.section}>
                    <h2>Horaires</h2>
                    <p>Notre support est disponible du lundi au vendredi, de 8h00 à 18h00 (WAT).</p>
                </section>
            </div>
        </div>
    );
}