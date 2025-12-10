import React from 'react';
import styles from '../page.module.css';

/**
 * @description Page détaillant le fonctionnement de l'application de vérification.
 * @author Your Name
 * @date 2025-11-28
 */
export default function HowItWorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.main_content}>
                <h1>Comment fonctionne la vérification d'identité ?</h1>
                <p>Notre processus est conçu pour être rapide, sécurisé et conforme aux réglementations en vigueur.</p>

                <section className={styles.section}>
                    <h2>Étape 1 : Téléchargement Sécurisé</h2>
                    <p>
                        L'utilisateur navigue vers l'onglet "Commencer" et est invité à télécharger deux fichiers : le recto et le verso de son document d'identité (CNI, passeport, etc.). 
                        Les fichiers sont transmis de manière chiffrée (HTTPS) à notre service d'analyse.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Étape 2 : Analyse et Traitement</h2>
                    <p>
                        Le service d'analyse backend utilise des algorithmes avancés pour extraire et comparer les informations :
                        <ul>
                            <li>Vérification de l'authenticité du document (zones MRZ, hologrammes simulés).</li>
                            <li>Extraction des données (nom, date de naissance, numéro de document).</li>
                            <li>Vérification de la cohérence entre le recto et le verso.</li>
                        </ul>
                        Ce processus prend généralement quelques secondes.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Étape 3 : Résultat Immédiat</h2>
                    <p>
                        Le résultat de la vérification est renvoyé à l'utilisateur :
                        <ol>
                            <li>**Validé :** Le document est jugé authentique et cohérent.</li>
                            <li>**Non valide (Échec) :** Un problème a été détecté (document illisible, illégal, ou incohérence). L'utilisateur est invité à réessayer avec une meilleure qualité.</li>
                        </ol>
                        Aucune donnée d'identité n'est conservée côté client après l'affichage du résultat.
                    </p>
                </section>
            </div>
        </div>
    );
}