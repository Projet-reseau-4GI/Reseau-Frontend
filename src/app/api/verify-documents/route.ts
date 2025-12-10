import { NextResponse } from 'next/server';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const SIMULATED_RESPONSE_TIME_MS = 3000;

export async function POST(request: Request) {
    // Simule le temps de traitement
    await delay(SIMULATED_RESPONSE_TIME_MS); 

    try {
        const form_data = await request.formData();
        const recto = form_data.get('recto');
        const verso = form_data.get('verso');

        if (!recto || !verso) {
            console.error('API Simulation: Recto ou verso manquant.');
            return NextResponse.json(
                { status: 'error', message: 'Les deux fichiers (recto et verso) sont requis.' }, 
                { status: 400 }
            );
        }
        
        // NOUVEAUTÉ: Simuler un échec aléatoire 50% du temps
        const should_fail = Math.random() < 0.5; // Vrai si le nombre aléatoire est inférieur à 0.5

        if (should_fail) {
             console.log('API Simulation: Échec simulé du document.');
             return NextResponse.json(
                 { 
                     status: 'rejected', 
                     message: 'Documents non valides ou illisibles.',
                     reason: 'Document illisible ou ne correspond pas au format attendu.'
                 }, 
                 { status: 403 } // Forbidden
             );
        }

        // Cas de Succès (50% du temps)
        const result_data = {
            status: 'validated',
            reference_id: `VER-${Date.now()}`,
            details: {
                recto_name: (recto as File).name,
                verso_name: (verso as File).name,
                match_score: 98.5,
                issuing_country: 'FR',
            }
        };

        return NextResponse.json(result_data, { status: 200 });

    } catch (error) {
        console.error('API Simulation: Erreur interne lors du traitement.', error);
        return NextResponse.json(
            { status: 'error', message: 'Erreur inattendue du serveur de vérification.' }, 
            { status: 500 }
        );
    }
}