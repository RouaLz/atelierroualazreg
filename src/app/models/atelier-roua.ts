export interface AtelierRoua {
    id?: string;
    nom: string;
    emailFormateur: string;
    nbrParticipant: number;
    statut: boolean;
}

export class atelierRouavalidator {
    static validateAll(item: AtelierRoua): { valid: boolean; errors: { [key: string]: string } } {
        const errors: { [key: string]: string } = {};

        if (!item.nom || item.nom.length < 5) {
            errors['nom'] = 'Le nom doit contenir au minimum 5 caractères';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.emailFormateur)) {
            errors['emailFormateur'] = "L'email n'est pas au format valide";
        }
        if (item.nbrParticipant <= 15) {
            errors['nbrParticipants'] = 'Le nombre de participants doit être supérieur à 15';
        }

        return { valid: Object.keys(errors).length === 0, errors };
    }
}

export const DEFAULT_STATUS = true;