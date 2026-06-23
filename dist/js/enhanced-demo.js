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


// ==================== FOOD INTELLIGENCE PROCESSING ==================== 
function startFoodProcessing() {
    // Show pipeline and technical panels
    document.getElementById('food-pipeline').style.display = 'block';
    document.getElementById('tech-details-panel').style.display = 'block';

    // Disable button during processing
    const btn = document.getElementById('start-food-btn');
    btn.disabled = true;
    btn.textContent = '⏳ Processing...';

    // Processing stages configuration
    const stages = [
        {
            id: 1,
            name: 'Image Input',
            model: 'Camera/File Upload',
            processing: 'Capturing food image (1920x1080)',
            confidence: 100,
            duration: 800
        },
        {
            id: 2,
            name: 'Vision AI Processing',
            model: 'ResNet-50 CNN (Transfer Learning)',
            processing: 'Extracting 2048 visual features',
            confidence: 94,
            duration: 1200
        },
        {
            id: 3,
            name: 'Food Recognition',
            model: 'Multi-class SVM Classifier',
            processing: 'Classifying 50 Indian food categories',
            confidence: 91,
            duration: 1000
        },
        {
            id: 4,
            name: 'Nutrition Database Query',
            model: 'IFCT 2024 Indian Food Database',
            processing: 'Retrieving macronutrient composition',
            confidence: 98,
            duration: 600
        },
        {
            id: 5,
            name: 'Glycemic Index Analysis',
            model: 'Sydney GI Database + ML Predictor',
            processing: 'Computing GI and glycemic load',
            confidence: 89,
            duration: 800
        },
        {
            id: 6,
            name: 'Personalized Recommendation',
            model: 'Patient Profile Algorithm',
            processing: 'Adjusting for HbA1c, BMI, and risk',
            confidence: 95,
            duration: 700
        }
    ];

    // Process each stage sequentially
    let currentStageIndex = 0;

    function processStage() {
        if (currentStageIndex >= stages.length) {
            // All stages complete
            setTimeout(() => {
                showFoodResults();
            }, 500);
            return;
        }

        const stage = stages[currentStageIndex];

        // Update stage visual
        const stageElem = document.getElementById(`food-stage-${stage.id}`);
        const statusElem = document.getElementById(`status-food-${stage.id}`);

        stageElem.classList.add('processing');
        statusElem.textContent = 'Processing...';
        statusElem.classList.add('processing');

        // Animate arrow before this stage
        if (stage.id > 1) {
            const arrows = document.querySelectorAll('.pipeline-arrow-food');
            if (arrows[stage.id - 2]) {
                arrows[stage.id - 2].classList.add('flowing');
            }
        }

        // Update technical details panel
        updateTechnicalDetails(stage);

        // Simulate processing time
        setTimeout(() => {
            // Mark stage as complete
            stageElem.classList.remove('processing');
            stageElem.classList.add('completed');
            statusElem.textContent = '✓ Complete';
            statusElem.classList.remove('processing');
            statusElem.classList.add('completed');

            // Move to next stage
            currentStageIndex++;
            processStage();
        }, stage.duration);
    }

    // Start processing
    processStage();
}

function updateTechnicalDetails(stage) {
    document.getElementById('current-stage-name').textContent = stage.name;
    document.getElementById('current-model').textContent = stage.model;
    document.getElementById('current-processing').textContent = stage.processing;
    document.getElementById('current-confidence').textContent = stage.confidence;

    // Animate confidence
    const confElem = document.getElementById('current-confidence');
    confElem.style.color = stage.confidence >= 90 ? '#34a853' : (stage.confidence >= 80 ? '#fbbc04' : '#ea4335');
}

function showFoodResults() {
    // Simulate detected foods (Idli + Sambar)
    const detectedFoods = ['idli', 'sambar'];

    // Auto-select detected foods
    detectedFoods.forEach(foodId => {
        const foodItem = document.querySelector(`.food-item[onclick*="${foodId}"]`);
        if (foodItem) {
            foodItem.classList.add('selected');
        }
    });

    // Calculate and display nutrition
    updateFoodAnalysisEnhanced(detectedFoods);

    // Show results
    document.getElementById('processing-info').style.display = 'block';
    document.getElementById('food-recommendation').style.display = 'block';

    // Re-enable button
    const btn = document.getElementById('start-food-btn');
    btn.disabled = false;
    btn.textContent = '✓ Analysis Complete - Try Again';

    // Update tech details to show completion
    document.getElementById('current-stage-name').textContent = 'All Stages Complete';
    document.getElementById('current-model').textContent = 'End-to-End Pipeline';
    document.getElementById('current-processing').textContent = 'Ready for personalized diet generation';
    document.getElementById('current-confidence').textContent = '92';
    document.getElementById('current-confidence').style.color = '#34a853';
}

function updateFoodAnalysisEnhanced(selectedFoods) {
    // Nutrition database (enhanced with more details)
    const nutritionDB = {
        idli: {
            calories: 39, protein: 2, carbs: 8, fat: 0.2,
            gi: 60, fiber: 0.8, sodium: 15, serving: 'per piece'
        },
        dosa: {
            calories: 120, protein: 3, carbs: 18, fat: 4,
            gi: 68, fiber: 1.2, sodium: 25, serving: 'per piece'
        },
        sambar: {
            calories: 86, protein: 4, carbs: 11, fat: 3,
            gi: 42, fiber: 3.5, sodium: 320, serving: 'per bowl'
        },
        rice: {
            calories: 130, protein: 2.7, carbs: 28, fat: 0.3,
            gi: 73, fiber: 0.4, sodium: 1, serving: 'per bowl'
        },
        dal: {
            calories: 104, protein: 7, carbs: 15, fat: 2,
            gi: 38, fiber: 4.2, sodium: 180, serving: 'per bowl'
        },
        curry: {
            calories: 67, protein: 2.5, carbs: 9, fat: 2.8,
            gi: 45, fiber: 2.8, sodium: 220, serving: 'per bowl'
        }
    };

    let totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
    let totalGI = 0, totalGL = 0;
    let count = 0;

    selectedFoods.forEach(food => {
        const nutrition = nutritionDB[food];
        if (nutrition) {
            // Calculate for 2 servings of idli
            const multiplier = (food === 'idli') ? 2 : 1;

            totalCal += nutrition.calories * multiplier;
            totalProtein += nutrition.protein * multiplier;
            totalCarbs += nutrition.carbs * multiplier;
            totalFat += nutrition.fat * multiplier;
            totalGI += nutrition.gi;
            totalGL += (nutrition.gi * nutrition.carbs * multiplier) / 100;
            count++;
        }
    });

    const avgGI = count > 0 ? Math.round(totalGI / count) : 0;

    // Update displays with animation
    animateValue('total-calories', 0, totalCal, 1000);
    animateValue('avg-gi', 0, avgGI, 1000);
    animateValue('total-gl', 0, Math.round(totalGL), 1000);

    // Update macronutrient bars
    const maxMacro = Math.max(totalProtein, totalCarbs, totalFat);
    setTimeout(() => {
        document.getElementById('total-protein').textContent = totalProtein.toFixed(1) + 'g';
        document.getElementById('protein-bar').style.width = ((totalProtein / maxMacro) * 100) + '%';

        document.getElementById('total-carbs').textContent = totalCarbs.toFixed(1) + 'g';
        document.getElementById('carbs-bar').style.width = ((totalCarbs / maxMacro) * 100) + '%';

        document.getElementById('total-fat').textContent = totalFat.toFixed(1) + 'g';
        document.getElementById('fat-bar').style.width = ((totalFat / maxMacro) * 100) + '%';
    }, 500);

    // Update glucose impact meter
    const glucoseImpact = Math.min(100, (totalGL / 20) * 100); // GL of 20 = 100%
    setTimeout(() => {
        document.getElementById('glucose-impact-fill').style.width = glucoseImpact + '%';

        let impactText = '';
        if (glucoseImpact < 40) {
            impactText = '✓ Low glycemic impact - Suitable for diabetic patients';
        } else if (glucoseImpact < 70) {
            impactText = '⚠ Moderate glycemic impact - Monitor blood glucose';
        } else {
            impactText = '⚠ High glycemic impact - Consider alternatives';
        }
        document.getElementById('glucose-impact-text').textContent = impactText;
        document.getElementById('glucose-impact-text').style.color = glucoseImpact < 40 ? '#34a853' : (glucoseImpact < 70 ? '#fbbc04' : '#ea4335');
    }, 800);

    // Generate personalized recommendation
    if (selectedPatientData) {
        let recommendation = '';
        if (selectedPatientData.hba1c > 7.5) {
            recommendation = `For HbA1c ${selectedPatientData.hba1c}%, this meal has moderate GL (${Math.round(totalGL)}). Consider reducing portion size by 20% or pairing with high-fiber vegetables.`;
        } else if (selectedPatientData.hba1c > 7.0) {
            recommendation = `This meal is acceptable for HbA1c ${selectedPatientData.hba1c}%. Monitor blood glucose 2 hours post-meal. Aim for <140 mg/dL.`;
        } else {
            recommendation = `Excellent choice for HbA1c ${selectedPatientData.hba1c}%. This meal aligns well with your glycemic control goals.`;
        }

        setTimeout(() => {
            document.getElementById('food-rec-text').textContent = recommendation;
        }, 1200);
    }
}

function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = range / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 16);
}

// ==================== ENHANCED TOGGLE FOOD FUNCTION ====================
// Override the existing toggleFood function to integrate with enhanced analysis
(function () {
    window.toggleFoodEnhanced = function (foodId) {
        const element = event.currentTarget;
        element.classList.toggle('selected');

        // Collect all selected foods
        const selectedElements = document.querySelectorAll('.food-item.selected');
        const selectedFoods = [];

        selectedElements.forEach(elem => {
            const onclick = elem.getAttribute('onclick');
            const match = onclick.match(/toggleFood\('([^']+)'\)/);
            if (match) {
                selectedFoods.push(match[1]);
            }
        });

        // Update analysis
        if (selectedFoods.length > 0) {
            updateFoodAnalysisEnhanced(selectedFoods);
            document.getElementById('food-recommendation').style.display = 'block';
            document.getElementById('processing-info').style.display = 'block';
        } else {
            // Reset displays
            document.getElementById('total-calories').textContent = '0';
            document.getElementById('avg-gi').textContent = '0';
            document.getElementById('total-gl').textContent = '0';
            document.getElementById('total-protein').textContent = '0g';
            document.getElementById('total-carbs').textContent = '0g';
            document.getElementById('total-fat').textContent = '0g';
            document.getElementById('protein-bar').style.width = '0%';
            document.getElementById('carbs-bar').style.width = '0%';
            document.getElementById('fat-bar').style.width = '0%';
            document.getElementById('glucose-impact-fill').style.width = '0%';
            document.getElementById('food-recommendation').style.display = 'none';
            document.getElementById('processing-info').style.display = 'none';
        }
    };
})();
