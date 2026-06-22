interface Window {
    selectPatient: (patientId: string) => void;
    runOCRDemo: () => void;
    runEnhancedFLDemo: () => void;
    nextStep: () => void;
    toggleFood: (foodId: string) => void;
    toggleFoodEnhanced: (foodId: string) => void;
}

declare var selectedPatientData: any;
declare var foodData: any;
