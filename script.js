// Données des voitures (simulées)
const carsData = [
    {
        id: 1,
        marque: "peugeot",
        modele: "Peugeot 308",
        annee: 2022,
        prix: 18500,
        kilometrage: 35000,
        carburant: "Essence",
        transmission: "Manuelle",
        description: "Berline compacte en excellent état, révision récente",
       image: "images/308.jpg"
    },
    {
        id: 2,
        marque: "renault",
        modele: "Renault Clio",
        annee: 2023,
        prix: 15900,
        kilometrage: 12000,
        carburant: "Diesel",
        transmission: "Automatique",
        description: "Citadine économique, parfaite pour la ville",
       image: "images/Renault.jpg"
    },
    {
        id: 3,
        marque: "citroen",
        modele: "Citroën C3",
        annee: 2021,
        prix: 13200,
        kilometrage: 48000,
        carburant: "Essence",
        transmission: "Manuelle",
        description: "Voiture polyvalente et confortable",
       image : "images/c3.jpg"
    },
    {
        id: 4,
        marque: "volkswagen",
        modele: "Volkswagen Golf",
        annee: 2022,
        prix: 22000,
        kilometrage: 28000,
        carburant: "Hybride",
        transmission: "Automatique",
        description: "Compacte premium avec technologie hybride",
       image : "images/golf.jpg"
    },
    {
        id: 5,
        marque: "peugeot",
        modele: "Peugeot 3008",
        annee: 2023,
        prix: 32500,
        kilometrage: 8000,
        carburant: "Diesel",
        transmission: "Automatique",
        description: "SUV spacieux et moderne, excellent équipement",
        image: "images/3008.jpg"
    },
    {
        id: 6,
        marque: "renault",
        modele: "Renault Captur",
        annee: 2022,
        prix: 19800,
        kilometrage: 22000,
        carburant: "Essence",
        transmission: "Manuelle",
        description: "SUV urbain élégant et pratique",
       image: "images/captur.jpg"
    }
];

let filteredCars = [...carsData];

// Afficher toutes les voitures au chargement
document.addEventListener('DOMContentLoaded', function() {
    displayCars(carsData);
    initializeEventListeners();
});

// Afficher les voitures
function displayCars(cars) {
    const carsGrid = document.getElementById('cars-grid');
    carsGrid.innerHTML = '';

    if (cars.length === 0) {
        carsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #7f8c8d;">Aucune voiture ne correspond à vos critères.</p>';
        return;
    }

    cars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

// Créer une carte de voiture
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.onclick = () => showCarDetails(car);

    card.innerHTML = `
       <div class="car-image">
            <img src="${car.image}" alt="${car.modele}">
        </div>
        <div class="car-info">
            <h3>${car.modele}</h3>
            <p class="car-details">📅 Année: ${car.annee}</p>
            <p class="car-details">⛽ ${car.carburant} | 🔧 ${car.transmission}</p>
            <p class="car-details">📍 ${car.kilometrage.toLocaleString('fr-FR')} km</p>
            <div class="car-price">${car.prix.toLocaleString('fr-FR')} €</div>
            ${car.annee >= 2023 ? '<span class="car-badge">Récent</span>' : ''}
        </div>
    `;

    return card;
}

// Filtrer les voitures
function filterCars() {
    const marqueFilter = document.getElementById('marque-filter').value;
    const prixFilter = document.getElementById('prix-filter').value;

    filteredCars = carsData.filter(car => {
        // Filtre par marque
        if (marqueFilter && car.marque !== marqueFilter) {
            return false;
        }

        // Filtre par prix
        if (prixFilter) {
            if (prixFilter === '0-10000' && car.prix >= 10000) return false;
            if (prixFilter === '10000-20000' && (car.prix < 10000 || car.prix >= 20000)) return false;
            if (prixFilter === '20000-30000' && (car.prix < 20000 || car.prix >= 30000)) return false;
            if (prixFilter === '30000+' && car.prix < 30000) return false;
        }

        return true;
    });

    displayCars(filteredCars);
}

// Afficher les détails d'une voiture dans une modal
function showCarDetails(car) {
    const modal = document.getElementById('car-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div style="text-align: center;">
        <div class="modal-image">
            <img src="${car.image}" alt="${car.modele}">
        </div>   
            <h2>${car.modele}</h2>
            <p style="color: #e74c3c; font-size: 2rem; font-weight: bold; margin: 1rem 0;">
                ${car.prix.toLocaleString('fr-FR')} €
            </p>
        </div>
        <div style="margin-top: 2rem;">
            <h3 style="color: #2c3e50; margin-bottom: 1rem;">Caractéristiques</h3>
            <p><strong>Année:</strong> ${car.annee}</p>
            <p><strong>Kilométrage:</strong> ${car.kilometrage.toLocaleString('fr-FR')} km</p>
            <p><strong>Carburant:</strong> ${car.carburant}</p>
            <p><strong>Transmission:</strong> ${car.transmission}</p>
            <p style="margin-top: 1rem;"><strong>Description:</strong><br>${car.description}</p>
        </div>
        <div style="margin-top: 2rem; text-align: center;">
            <button class="btn-primary" onclick="contactForCar('${car.modele}')">
                Je suis intéressé(e)
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// Fermer la modal
function closeModal() {
    document.getElementById('car-modal').style.display = 'none';
}

// Contact pour une voiture spécifique
function contactForCar(modele) {
    closeModal();
    scrollToSection('contact');
    document.getElementById('message').value = `Bonjour, je suis intéressé(e) par le véhicule ${modele}. Pouvez-vous me fournir plus d'informations ?`;
}

// Scroll fluide vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialiser les écouteurs d'événements
function initializeEventListeners() {
    // Fermer la modal en cliquant sur X
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Fermer la modal en cliquant en dehors
    window.onclick = function(event) {
        const modal = document.getElementById('car-modal');
        if (event.target === modal) {
            closeModal();
        }
    };

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('telephone').value;
            const message = document.getElementById('message').value;

            // Simulation d'envoi (en production, vous enverriez à un serveur)
            alert(`Merci ${nom} ! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.`);
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
}

// Ajouter une animation au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
