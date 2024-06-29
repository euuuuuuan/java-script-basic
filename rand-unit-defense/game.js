// Constants
const MAX_UNITS = 5; // Maximum number of units that can be selected
const MONSTER_SPAWN_INTERVAL = 3000; // Milliseconds for monster spawn interval
const MONSTER_MOVEMENT_SPEED = 1; // Pixel per move
const MAX_MONSTERS = 150; // Maximum number of monsters before game over

// DOM Elements
const unitListElement = document.getElementById('unitList');
const startButton = document.getElementById('startButton');
const scoreElement = document.getElementById('score');
const statusElement = document.getElementById('status');
const playerArea = document.querySelector('.player-area');
const monsterPath = document.querySelector('.monster-path');

let selectedUnits = []; // Array to store selected units
let score = 0; // Score tracker
let monsterCount = 0; // Counter for monsters spawned
let gameOver = false; // Flag for game over state

// Unit types (for demonstration purposes)
const unitTypes = [
    { id: 1, name: 'Archer', damage: 10 },
    { id: 2, name: 'Knight', damage: 15 },
    { id: 3, name: 'Mage', damage: 20 },
    { id: 4, name: 'Golem', damage: 25 },
    { id: 5, name: 'Dragon', damage: 30 }
];

// Function to initialize unit selection
function initializeUnitSelection() {
    unitTypes.forEach(unit => {
        const unitElement = document.createElement('div');
        unitElement.classList.add('unit');
        unitElement.setAttribute('data-id', unit.id);
        unitElement.innerText = unit.name;
        unitElement.addEventListener('click', () => toggleUnitSelection(unit.id));
        unitListElement.appendChild(unitElement);
    });
}

// Function to toggle unit selection
function toggleUnitSelection(unitId) {
    const unitIndex = selectedUnits.indexOf(unitId);
    if (unitIndex === -1 && selectedUnits.length < MAX_UNITS) {
        selectedUnits.push(unitId);
    } else if (unitIndex !== -1) {
        selectedUnits.splice(unitIndex, 1);
    }
    updateUnitSelection();
}

// Function to update unit selection UI
function updateUnitSelection() {
    const unitElements = document.querySelectorAll('.unit');
    unitElements.forEach(unitElement => {
        const unitId = parseInt(unitElement.getAttribute('data-id'));
        if (selectedUnits.includes(unitId)) {
            unitElement.classList.add('selected');
        } else {
            unitElement.classList.remove('selected');
        }
    });
}

// Function to start the game
function startGame() {
    if (selectedUnits.length === 0) {
        alert('Please select at least one unit to start the game.');
        return;
    }

    statusElement.innerText = 'Game started! Defend your territory!';
    startButton.disabled = true;

    // Start spawning monsters
    setInterval(() => {
        if (!gameOver) {
            spawnMonster();
        }
    }, MONSTER_SPAWN_INTERVAL);
}

// Function to spawn a new monster
function spawnMonster() {
    if (monsterCount >= MAX_MONSTERS) {
        endGame();
        return;
    }

    monsterCount++;

    const monsterElement = document.createElement('div');
    monsterElement.classList.add('monster');
    monsterElement.style.left = '-50px'; // Initial position outside player area
    monsterPath.appendChild(monsterElement);

    // Animate monster movement
    let position = -50;
    const movementInterval = setInterval(() => {
        if (position >= 450) { // Reached end of path
            clearInterval(movementInterval);
            monsterElement.remove();
            monsterCount--;
        } else {
            position += MONSTER_MOVEMENT_SPEED;
            monsterElement.style.left = position + 'px';
        }
    }, 10);
}

// Function to end the game
function endGame() {
    gameOver = true;
    statusElement.innerText = 'Game over! Too many monsters breached your defense!';
    startButton.disabled = true;
}

// Event listeners
startButton.addEventListener('click', startGame);

// Initialize unit selection on page load
initializeUnitSelection();
