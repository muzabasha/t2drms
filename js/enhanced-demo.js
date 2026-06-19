// ==================== ENHANCED FEDERATED LEARNING DEMO ====================
function runEnhancedFLDemo() {
    if (!selectedPatientData) return;

    // Update patient name
    document.getElementById('fl-patient-name').textContent = selectedPatientData.name;

    // Training parameters
    const totalRounds = 10;
    let currentRound = 0;

    // Hospital training configurations
    const hospitals = [
        { id: 1, patients: 130, initialLoss: 0.85, initialAcc: 75 },
        { id: 2, patients: 95, initialLoss: 0.88, initialAcc: 73 },
        { id: 3, patients: 80, initialLoss: 0.82, initialAcc: 77 },
        { id: 4, patients: 70, initialLoss: 0.90, initialAcc: 71 }
    ];

    // Start training rounds
    const roundInterval = setInterval(() => {
        currentRound++;

        // Update round indicator
        document.getElementById('fl-round-indicator').textContent = `Round ${currentRound} of ${totalRounds}`;
        document.getElementById('fl-rounds-display').textContent = currentRound;

        // Train each hospital sequentially with animation
        hospitals.forEach((hosp, index) => {
            setTimeout(() => {
                trainHospital(hosp, currentRound);
            }, index * 800);
        });

        // After all hospitals train, aggregate
        setTimeout(() => {
            aggregateModels(currentRound, totalRounds);
        }, hospitals.length * 800 + 500);

        // Stop after all rounds
        if (currentRound >= totalRounds) {
            clearInterval(roundInterval);
            setTimeout(() => {
                showFinalPrediction();
            }, (hospitals.length * 800) + 1500);
        }
    }, (hospitals.length + 2) * 1000);
}

function trainHospital(hosp, round) {
    const hospitalNode = document.getElementById(`hospital-${hosp.id}`);
    const statusText = document.getElementById(`status-text-${hosp.id}`);
    const progressBar = document.getElementById(`fl-progress-${hosp.id}`);
    const lossValue = document.getElementById(`loss-${hosp.id}`);
    const accValue = document.getElementById(`acc-${hosp.id}`);

    // Add training class for animation
    hospitalNode.classList.add('training');
    statusText.textContent = 'Training...';
    statusText.style.color = '#1a73e8';

    // Create data particles flowing from hospital
    createFLParticles(hosp.id);

    // Simulate training progress
    let progress = 0;
    const trainingInterval = setInterval(() => {
        progress += 20;
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(trainingInterval);

            // Calculate improved metrics
            const loss = (hosp.initialLoss - (round * 0.03)).toFixed(3);
            const acc = Math.min(95, hosp.initialAcc + (round * 2)).toFixed(1);

            lossValue.textContent = loss;
            accValue.textContent = acc + '%';

            statusText.textContent = 'Complete ✓';
            statusText.style.color = '#34a853';
            hospitalNode.classList.remove('training');
        }
    }, 150);
}

function createFLParticles(hospitalId) {
    const container = document.getElementById('fl-particles-container');
    if (!container) return;

    const particleCount = 10;

    // Get hospital position (approximate)
    const hospitalNode = document.getElementById(`hospital-${hospitalId}`);
    const rect = hospitalNode.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'fl-particle';

        // Position at hospital
        const startX = rect.left - containerRect.left + rect.width / 2;
        const startY = rect.top - containerRect.top + rect.height / 2;

        // Target center of container
        const endX = containerRect.width / 2;
        const endY = containerRect.height - 200; // Approximate central server position

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        // Animate to center
        particle.style.animation = `particleToCenter 2s ease-in-out ${i * 0.1}s`;

        container.appendChild(particle);

        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 2000 + (i * 100));
    }
}

function aggregateModels(round, totalRounds) {
    // Show aggregation visualization
    const aggViz = document.getElementById('aggregation-viz');
    if (aggViz) {
        aggViz.style.display = 'flex';

        // Animate model weights
        for (let i = 1; i <= 4; i++) {
            const weight = document.getElementById(`weight-${i}`);
            if (weight) weight.classList.add('aggregating');
        }

        // Animate global weight
        const globalWeight = document.getElementById('weight-global');
        if (globalWeight) globalWeight.classList.add('aggregating');
    }

    // Update global accuracy
    const globalAcc = Math.min(95, 75 + (round * 2));
    setTimeout(() => {
        const accBar = document.getElementById('global-accuracy-bar');
        const accDisplay = document.getElementById('fl-accuracy-display');

        if (accBar) {
            accBar.style.width = globalAcc + '%';
            accBar.textContent = globalAcc.toFixed(1) + '%';
        }
        if (accDisplay) {
            accDisplay.textContent = globalAcc.toFixed(1);
        }

        // Remove aggregating class
        for (let i = 1; i <= 4; i++) {
            const weight = document.getElementById(`weight-${i}`);
            if (weight) weight.classList.remove('aggregating');
        }
        const globalWeight = document.getElementById('weight-global');
        if (globalWeight) globalWeight.classList.remove('aggregating');

        // Hide after animation
        if (round === totalRounds && aggViz) {
            setTimeout(() => {
                aggViz.style.display = 'none';
            }, 2000);
        }
    }, 1000);
}

function showFinalPrediction() {
    if (!selectedPatientData) return;

    // Calculate and show risk prediction
    const riskScore = selectedPatientData.riskScore;
    const riskLevel = selectedPatientData.risk;

    // Animate risk score counting up
    let currentScore = 0;
    const scoreInterval = setInterval(() => {
        currentScore += 2;
        if (currentScore >= riskScore) {
            currentScore = riskScore;
            clearInterval(scoreInterval);
        }
        const scoreElem = document.getElementById('risk-score');
        if (scoreElem) scoreElem.textContent = currentScore;
    }, 30);

    // Update risk level badge
    const riskElem = document.getElementById('risk-level');
    if (riskElem) {
        riskElem.textContent = riskLevel;
        const badgeClass = riskLevel === 'High' ? 'badge-red' : (riskLevel === 'Low' ? 'badge-green' : 'badge-orange');
        riskElem.className = badgeClass;
        riskElem.style.padding = '10px 20px';
        riskElem.style.fontSize = '1.1rem';
    }
}

// ==================== DATA FLOW VISUALIZATION ====================
function updateDataFlow(stepNumber) {
    const flowViz = document.getElementById('data-flow-viz');

    // Show flow visualization once patient is selected
    if (stepNumber >= 1 && flowViz && flowViz.style.display === 'none') {
        flowViz.style.display = 'block';
    }

    // Update active stage
    for (let i = 1; i <= 6; i++) {
        const stage = document.getElementById(`flow-${getStageId(i)}`);
        if (stage) {
            if (i === stepNumber) {
                stage.classList.add('active');
            } else if (i < stepNumber) {
                stage.classList.remove('active');
                stage.style.opacity = '0.6';
            } else {
                stage.classList.remove('active');
                stage.style.opacity = '1';
            }
        }
    }

    // Animate arrows
    for (let i = 1; i < stepNumber; i++) {
        const arrow = document.getElementById(`arrow-${i}`);
        if (arrow) {
            arrow.classList.add('flowing');
        }
    }

    // Update status text
    const statusMessages = {
        1: 'Patient data selected - Ready for processing',
        2: 'Extracting medical data with OCR...',
        3: 'Training privacy-preserving AI model across hospitals...',
        4: 'Analyzing food and nutritional content...',
        5: 'Generating personalized diet recommendations...',
        6: 'Complete AI pipeline - Results ready!'
    };

    const statusText = document.getElementById('flow-status-text');
    if (statusText) {
        statusText.textContent = statusMessages[stepNumber] || '';
    }
}

function getStageId(stepNum) {
    const stageIds = ['', 'patient', 'ocr', 'fl', 'food', 'diet', 'complete'];
    return stageIds[stepNum] || '';
}

// ==================== HOOK INTO EXISTING NAVIGATION ====================
// Enhance the existing nextStep function to update data flow
(function () {
    const originalNextStep = window.nextStep;
    if (typeof originalNextStep === 'function') {
        window.nextStep = function () {
            originalNextStep();
            // Update data flow after navigation
            setTimeout(() => {
                const currentStep = parseInt(document.querySelector('.step.active')?.dataset.step || 1);
                updateDataFlow(currentStep);
            }, 100);
        };
    }

    // Also update on step indicator clicks
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function () {
            setTimeout(() => {
                const stepNum = parseInt(this.dataset.step);
                updateDataFlow(stepNum);
            }, 100);
        });
    });

    // Initialize data flow on patient selection
    const originalSelectPatient = window.selectPatient;
    if (typeof originalSelectPatient === 'function') {
        window.selectPatient = function (patientId) {
            originalSelectPatient(patientId);
            setTimeout(() => {
                updateDataFlow(1);
            }, 100);
        };
    }
})();
