// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire - Version vB1

export const templateSurveyQuestions = [
 {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2" },
            { id: 2, text: "Je viens de descendre du train", next: "end" },
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q2_NON_VOYAGEUR" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare...)", next: "Q2_NON_VOYAGEUR" }
        ]
    },

    // === MONTANTS (Q1 = 1) ===

    // 📍 Q2 - Origine du déplacement (pour les montants)
    {
        id: "Q2",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Yffiniac", next: "Q2a" },
            { id: 2, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune
    {
        id: "Q2_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🏘️ Q2a - Nom de rue à Yffiniac
    {
        id: "Q2a",
        text: "De quelle rue d'Yffiniac venez-vous ?",
        type: 'street',
        next: "Q3"
    },

    // 🚗 Q3 - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q3",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4" },
            { id: 5, text: "En bus/car", next: "Q3b" },
            { id: 6, text: "À vélo", next: "Q4" },
            { id: 7, text: "En trottinette", next: "Q4" },
            { id: 8, text: "En Taxi/VTC", next: "Q4" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q4"
    },

    // 🅿️ Q3a - Lieu de stationnement (pour conducteurs et motocyclistes)
    {
        id: "Q3a",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur le parking de la gare", next: "Q3a_prime" },
            { id: 2, text: "Autre", next: "Q3a_Autre" }
        ]
    },

    // 📝 Q3a - Autre stationnement
    {
        id: "Q3a_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu de stationnement...",
        next: "Q3a_prime"
    },

    // ⏱️ Q3a' - Durée de stationnement
    {
        id: "Q3a_prime",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4" },
            { id: 4, text: "2 à 3 jours", next: "Q4" },
            { id: 5, text: "3 à 6 jours", next: "Q4" },
            { id: 6, text: "1 semaine ou plus", next: "Q4" }
        ]
    },

    // 🚌 Q3b - Ligne de bus utilisée
    {
        id: "Q3b",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Ligne BreizhGo 203", next: "Q4" },
            { id: 2, text: "Ligne BreizhGo 208", next: "Q4" }
        ]
    },

    // 🎫 Q4 - Abonnement TER
    {
        id: "Q4",
        text: "Possédez-vous un abonnement TER ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui", next: "Q5" },
            { id: 2, text: "Non", next: "Q5" }
        ]
    },

    // 🚉 Q5 - Gare de destination finale
    {
        id: "Q5",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Saint-Brieuc", next: "Q6" },
            { id: 2, text: "Rennes", next: "Q6" },
            { id: 3, text: "Guingamp", next: "Q6" },
            { id: 4, text: "Paris-Montparnasse", next: "Q6" },
            { id: 5, text: "Morlaix", next: "Q6" },
            { id: 6, text: "Brest", next: "Q6" },
            { id: 7, text: "Dinan", next: "Q6" },
            { id: 8, text: "Lamballe", next: "Q6" },
            { id: 9, text: "Lannion", next: "Q6" },
            { id: 10, text: "Autre", next: "Q5_Autre" }
        ]
    },

    // 🚄 Q5 - Autre gare de destination
    {
        id: "Q5_Autre",
        text: "Préciser :",
        type: 'gare',
        next: "Q6"
    },

    // 🎯 Q6 - Motif du déplacement en train
    {
        id: "Q6",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q7" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q7" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q6a" },
            { id: 4, text: "Déplacement professionnel", next: "Q7" },
            { id: 5, text: "Loisirs, tourisme", next: "Q7" },
            { id: 6, text: "Autres", next: "Q6_Autre" }
        ]
    },

    // 📝 Q6 - Autre motif
    {
        id: "Q6_Autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q7"
    },

    // 🏠 Q6a - Raison de la venue à Yffiniac (pour ceux qui rentrent chez eux)
    {
        id: "Q6a",
        text: "Quel était la raison de votre venue à Yffiniac ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q7" },
            { id: 2, text: "Études", next: "Q7" },
            { id: 3, text: "Déplacement professionnel", next: "Q7" },
            { id: 4, text: "Loisirs, tourisme", next: "Q7" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q7" }
        ]
    },

    // 💡 Q7 - Suggestions d'amélioration
    {
        id: "Q7",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // === NON-VOYAGEURS (Q1 = 3 ou 4) ===

    // 📍 Q2 (Non-voyageurs) - Origine
    {
        id: "Q2_NON_VOYAGEUR",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Yffiniac", next: "Q2a_NON_VOYAGEUR" },
            { id: 2, text: "Autre commune", next: "Q2_NON_VOYAGEUR_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune (non-voyageurs)
    {
        id: "Q2_NON_VOYAGEUR_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3_NON_VOYAGEUR"
    },

    // 🏘️ Q2a (Non-voyageurs) - Nom de rue
    {
        id: "Q2a_NON_VOYAGEUR",
        text: "De quelle rue d'Yffiniac venez-vous ?",
        type: 'street',
        next: "Q3_NON_VOYAGEUR"
    },

    // 🚗 Q3 (Non-voyageurs) - Mode de transport
    {
        id: "Q3_NON_VOYAGEUR",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4_NON_VOYAGEUR" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a_NON_VOYAGEUR" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4_NON_VOYAGEUR" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4_NON_VOYAGEUR" },
            { id: 5, text: "En bus/car", next: "Q4_NON_VOYAGEUR" },
            { id: 6, text: "À vélo", next: "Q4_NON_VOYAGEUR" },
            { id: 7, text: "En trottinette", next: "Q4_NON_VOYAGEUR" },
            { id: 8, text: "En Taxi/VTC", next: "Q4_NON_VOYAGEUR" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a_NON_VOYAGEUR" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4_NON_VOYAGEUR" },
            { id: 11, text: "Autre", next: "Q3_NON_VOYAGEUR_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport (non-voyageurs)
    {
        id: "Q3_NON_VOYAGEUR_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q4_NON_VOYAGEUR"
    },

    // 🅿️ Q3a (Non-voyageurs) - Lieu de stationnement
    {
        id: "Q3a_NON_VOYAGEUR",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur le parking de la gare", next: "Q4_NON_VOYAGEUR" },
            { id: 2, text: "Autre", next: "Q3a_NON_VOYAGEUR_Autre" }
        ]
    },

    // 📝 Q3a - Autre stationnement (non-voyageurs)
    {
        id: "Q3a_NON_VOYAGEUR_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le lieu de stationnement...",
        next: "Q4_NON_VOYAGEUR"
    },

    // 💡 Q4 (Non-voyageurs) - Suggestions d'amélioration
    {
        id: "Q4_NON_VOYAGEUR",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];
