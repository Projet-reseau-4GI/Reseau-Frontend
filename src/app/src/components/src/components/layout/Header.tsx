// Importations: utiliser uniquement les classes nécessaires (pas de import *) [cite: 21]
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css'; // Import du module CSS

// Documentation et commentaires: Javadoc pour la classe [cite: 23]
/**
 * @description Application global header component, responsible for navigation. [cite: 24]
 * @author Your Name [cite: 25]
 * @date 2025-11-28 [cite: 26]
 */
// Classes: en anglais, style PascalCase [cite: 10]
interface HeaderProps {
  // Variables: en anglais, style snake_case 
  is_logged_in: boolean; 
}

// Fonction/Composant en PascalCase [cite: 10]
const Header = ({ is_logged_in }: HeaderProps) => { 
  
  // Méthodes: en anglais, style camelCase [cite: 11]
  const handleConnection = () => { 
    // Respecter les règles de sécurité ne pas loguer de données sensibles [cite: 39]
    console.log('User connection action initiated'); 
  };

  // Variables: en anglais, style snake_case 
  const menu_items = [ 
    { name: 'Fonctionnalités', route_path: '/features' },
    { name: 'Comment ça marche', route_path: '/how-it-works' },
    { name: 'Sécurité', route_path: '/security' },
    { name: 'Contact', route_path: '/contact' },
  ];

  return (
    // Indentation: 4 espaces (pas de tabulations) [cite: 19]
    // Accolades {} toujours ouvertes à la fin de la ligne de déclaration [cite: 20]
    <header className={styles.header_container}>
      <div className={styles.logo}>ID</div>
      <nav className={styles.nav_menu}>
        {menu_items.map((item) => (
          // Longueur de ligne maximale: 120 caractères [cite: 18]
          <Link key={item.route_path} href={item.route_path}>{item.name}</Link>
        ))}
      </nav>
      <div className={styles.button_group}>
        <button 
          onClick={handleConnection} 
          className={styles.connection_button}
        >
          Connexion
        </button>
        <button className="primary-button">
          Commencer
        </button>
      </div>
    </header>
  );
};

export default Header;