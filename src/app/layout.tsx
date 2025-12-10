'use client'; 

import React, { useState } from 'react';
import { Inter } from 'next/font/google';

import Header from '@/components/layout/Header';
import GlobalNotification from '@/components/layout/GlobalNotification'; 

import './globals.css';
import './page.module.css';

const inter = Inter({ subsets: ['latin'] });

// Les métadonnées DOIVENT être définies en dehors du composant client
// pour être reconnues par Next.js, ou nous les gérons simplement dans l'en-tête HTML
const METADATA = {
  title: 'ID Verification App - Valide votre document en secondes.', 
  description: 'Solution de vérification d\'identité en temps réel, conforme aux normes européennes.',
};

// Fonction principale du Layout en PascalCase
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // État pour la notification globale 
  const [global_error, set_global_error] = useState<string | null>(null); 

  const handle_close_notification = () => set_global_error(null); 

  // Contrainte: Remplacer le `lang="fr"` pour l'accessibilité
  return (
    <html lang="fr"> 
      <head>
          <title>{METADATA.title}</title>
          <meta name="description" content={METADATA.description} />
      </head>
      <body className={inter.className}>
        {/* Composant de notification globale */}
        <GlobalNotification 
            error_message={global_error} 
            on_close={handle_close_notification}
        />
        
        {/* set_global_error est passé au Header */}
        <Header set_global_error={set_global_error} /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}