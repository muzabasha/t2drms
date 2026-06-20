/**
 * Synthetic Datasets for TRL-2 Research Demonstration
 * AI-Enabled Personalized Type-2 Diabetic Management System
 * 
 * WARNING: All data is synthetically generated. Not for clinical use.
 */

const SyntheticData = {
    // ==================== MEDICAL REPORTS (100+) ====================
    medicalReports: [
        { id: 'REP-001', patientName: 'Rajesh Kumar', age: 45, gender: 'Male', date: '2026-01-15', hba1c: 7.2, fbs: 142, ppbs: 198, risk: 'Moderate', bmi: 27.5, bloodPressure: '130/85', cholesterol: 190 },
        { id: 'REP-002', patientName: 'Priya Sharma', age: 52, gender: 'Female', date: '2026-01-18', hba1c: 8.5, fbs: 168, ppbs: 235, risk: 'High', bmi: 29.8, bloodPressure: '145/90', cholesterol: 210 },
        { id: 'REP-003', patientName: 'Amit Patel', age: 38, gender: 'Male', date: '2026-01-20', hba1c: 6.8, fbs: 128, ppbs: 175, risk: 'Low', bmi: 25.2, bloodPressure: '125/80', cholesterol: 175 },
        { id: 'REP-004', patientName: 'Sunita Devi', age: 60, gender: 'Female', date: '2026-02-01', hba1c: 9.1, fbs: 185, ppbs: 260, risk: 'Critical', bmi: 32.1, bloodPressure: '155/95', cholesterol: 235 },
        { id: 'REP-005', patientName: 'Vikram Singh', age: 42, gender: 'Male', date: '2026-02-05', hba1c: 7.8, fbs: 152, ppbs: 210, risk: 'Moderate', bmi: 28.0, bloodPressure: '135/85', cholesterol: 195 },
        { id: 'REP-006', patientName: 'Meena Reddy', age: 35, gender: 'Female', date: '2026-02-10', hba1c: 6.2, fbs: 115, ppbs: 155, risk: 'Low', bmi: 23.5, bloodPressure: '118/76', cholesterol: 165 },
        { id: 'REP-007', patientName: 'Suresh Nair', age: 55, gender: 'Male', date: '2026-02-15', hba1c: 8.8, fbs: 172, ppbs: 245, risk: 'High', bmi: 30.5, bloodPressure: '148/92', cholesterol: 225 },
        { id: 'REP-008', patientName: 'Lakshmi Krishnan', age: 48, gender: 'Female', date: '2026-02-20', hba1c: 7.5, fbs: 145, ppbs: 200, risk: 'Moderate', bmi: 27.8, bloodPressure: '132/86', cholesterol: 188 },
        { id: 'REP-009', patientName: 'Arun Joshi', age: 62, gender: 'Male', date: '2026-03-01', hba1c: 6.5, fbs: 122, ppbs: 168, risk: 'Low', bmi: 24.8, bloodPressure: '128/82', cholesterol: 170 },
        { id: 'REP-010', patientName: 'Kavita Desai', age: 40, gender: 'Female', date: '2026-03-05', hba1c: 9.5, fbs: 195, ppbs: 275, risk: 'Critical', bmi: 33.5, bloodPressure: '160/98', cholesterol: 245 },
        { id: 'REP-011', patientName: 'Deepak Verma', age: 50, gender: 'Male', date: '2026-03-10', hba1c: 7.0, fbs: 135, ppbs: 185, risk: 'Low', bmi: 26.5, bloodPressure: '126/82', cholesterol: 182 },
        { id: 'REP-012', patientName: 'Anita Gupta', age: 58, gender: 'Female', date: '2026-03-15', hba1c: 8.2, fbs: 162, ppbs: 228, risk: 'High', bmi: 29.2, bloodPressure: '142/88', cholesterol: 215 },
        { id: 'REP-013', patientName: 'Rohan Das', age: 33, gender: 'Male', date: '2026-03-20', hba1c: 5.8, fbs: 108, ppbs: 142, risk: 'Normal', bmi: 22.5, bloodPressure: '115/75', cholesterol: 155 },
        { id: 'REP-014', patientName: 'Pooja Jain', age: 47, gender: 'Female', date: '2026-04-01', hba1c: 7.6, fbs: 148, ppbs: 205, risk: 'Moderate', bmi: 28.2, bloodPressure: '134/84', cholesterol: 192 },
        { id: 'REP-015', patientName: 'Manoj Tiwari', age: 56, gender: 'Male', date: '2026-04-05', hba1c: 9.0, fbs: 180, ppbs: 255, risk: 'High', bmi: 31.0, bloodPressure: '152/94', cholesterol: 230 },
    ],
    
    generateMoreReports: function(count) {
        const firstNames = ['Ravi', 'Neha', 'Sanjay', 'Deepa', 'Vijay', 'Anjali', 'Raj', 'Kiran', 'Alok', 'Bhavna', 'Chetan', 'Divya', 'Esha', 'Farhan', 'Geeta', 'Harish', 'Isha', 'Jatin', 'Kavya', 'Lalit'];
        const lastNames = ['Sharma', 'Patel', 'Gupta', 'Reddy', 'Singh', 'Verma', 'Joshi', 'Nair', 'Das', 'Desai', 'Mehta', 'Saxena', 'Agarwal', 'Bhat', 'Chopra', 'Dubey', 'Ghosh', 'Iyer', 'Kapoor', 'Malhotra'];
        const reports = [];
        let id = 16;
        for (let i = 0; i < count; i++) {
            const age = 25 + Math.floor(Math.random() * 45);
            const hba1c = 4.5 + Math.random() * 6.5;
            const fbs = 80 + Math.random() * 140;
            const ppbs = fbs + 30 + Math.random() * 80;
            let risk = 'Normal';
            if (hba1c > 8) risk = 'Critical';
            else if (hba1c > 7) risk = 'High';
            else if (hba1c > 6) risk = 'Moderate';
            else if (hba1c > 5.5) risk = 'Low';
            const gender = Math.random() > 0.5 ? 'Male' : 'Female';
            const month = 1 + Math.floor(Math.random() * 6);
            const day = 1 + Math.floor(Math.random() * 28);
            const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
            const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
            reports.push({
                id: `REP-${String(id++).padStart(3, '0')}`,
                patientName: `${fn} ${ln}`,
                age, gender,
                date: `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
                hba1c: Math.round(hba1c * 10) / 10,
                fbs: Math.round(fbs),
                ppbs: Math.round(ppbs),
                risk, bmi: Math.round((18.5 + Math.random() * 16) * 10) / 10,
                bloodPressure: `${110 + Math.floor(Math.random() * 50)}/${70 + Math.floor(Math.random() * 30)}`,
                cholesterol: Math.round(140 + Math.random() * 120)
            });
        }
        this.medicalReports = this.medicalReports.concat(reports);
        return reports;
    },

    // ==================== PATIENT RECORDS (500+) ====================
    patients: [],
    
    generatePatients: function(count) {
        const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Ananya', 'Diya', 'Myra', 'Ishita', 'Reyansh', 'Shiv', 'Ayaan', 'Krishna', 'Ishaan', 'Sara', 'Aadhya', 'Riya', 'Avni', 'Yash'];
        const lastNames = ['Sharma', 'Verma', 'Patel', 'Reddy', 'Singh', 'Gupta', 'Joshi', 'Nair', 'Das', 'Desai', 'Mehta', 'Saxena', 'Agarwal', 'Bhat', 'Chopra', 'Dubey', 'Ghosh', 'Iyer', 'Kapoor', 'Malhotra'];
        const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'];
        const hospitals = ['City General Hospital', 'Unity Medical Center', 'Sparsh Hospital', 'Aarogya Healthcare', 'LifeCare Hospital', 'MediCentra', 'Sanjeevani Hospital', 'Nova Medical Center'];
        const diets = ['Vegetarian', 'Non-Vegetarian', 'Eggetarian', 'Vegan', 'Flexitarian'];
        const lifestyles = ['Sedentary', 'Moderately Active', 'Active', 'Highly Active'];
        const occupations = ['IT Professional', 'Teacher', 'Business Owner', 'Healthcare Worker', 'Student', 'Homemaker', 'Retired', 'Government Employee', 'Private Sector', 'Freelancer'];
        
        for (let i = 0; i < count; i++) {
            const age = 18 + Math.floor(Math.random() * 60);
            const hba1c = 4.0 + Math.random() * 8.0;
            const fbs = 75 + Math.random() * 160;
            const bmi = Math.round((17 + Math.random() * 20) * 10) / 10;
            let riskLevel = 'Normal';
            let diabetesStatus = 'No Diabetes';
            let riskScore = Math.floor(Math.random() * 30);
            
            if (hba1c >= 8.0 || fbs >= 180) {
                riskLevel = 'Critical';
                diabetesStatus = 'Type-2 Diabetic (Uncontrolled)';
                riskScore = 80 + Math.floor(Math.random() * 20);
            } else if (hba1c >= 7.0 || fbs >= 140) {
                riskLevel = 'High';
                diabetesStatus = 'Type-2 Diabetic';
                riskScore = 65 + Math.floor(Math.random() * 15);
            } else if (hba1c >= 6.0 || fbs >= 110) {
                riskLevel = 'Moderate';
                diabetesStatus = 'Pre-Diabetic';
                riskScore = 45 + Math.floor(Math.random() * 20);
            } else if (hba1c >= 5.5 || fbs >= 95) {
                riskLevel = 'Low';
                diabetesStatus = 'At Risk';
                riskScore = 25 + Math.floor(Math.random() * 20);
            } else {
                riskScore = Math.floor(Math.random() * 25);
            }
            
            const gender = Math.random() > 0.5 ? 'Male' : 'Female';
            const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
            const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
            
            this.patients.push({
                id: `PAT-${String(i + 1).padStart(4, '0')}`,
                name: `${fn} ${ln}`,
                age, gender, bmi,
                hba1c: Math.round(hba1c * 10) / 10,
                fbs: Math.round(fbs),
                ppbs: Math.round(fbs + 30 + Math.random() * 70),
                bloodPressure: `${110 + Math.floor(Math.random() * 50)}/${65 + Math.floor(Math.random() * 35)}`,
                cholesterol: Math.round(140 + Math.random() * 130),
                location: locations[Math.floor(Math.random() * locations.length)],
                hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
                diet: diets[Math.floor(Math.random() * diets.length)],
                lifestyle: lifestyles[Math.floor(Math.random() * lifestyles.length)],
                occupation: occupations[Math.floor(Math.random() * occupations.length)],
                diabetesStatus, riskLevel, riskScore,
                medication: Math.random() > 0.6 ? 'Metformin' + (Math.random() > 0.5 ? ' 500mg' : ' 1000mg') : 'None',
                familyHistory: Math.random() > 0.6 ? 'Yes' : 'No',
                lastCheckup: `2026-${String(1 + Math.floor(Math.random() * 6)).padStart(2, '0')}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, '0')}`
            });
        }
        return this.patients;
    },

    // ==================== FOOD DATASET (50+) ====================
    foods: [
        { id: 'FOOD-001', name: 'Idli (2 pieces)', category: 'Breakfast', calories: 156, protein: 5.1, carbs: 34.2, fat: 0.4, fiber: 1.8, gi: 60, gl: 20.5, servingSize: '2 pieces (160g)', diabeticFriendly: true },
        { id: 'FOOD-002', name: 'Dosa (Plain)', category: 'Breakfast', calories: 132, protein: 3.9, carbs: 25.8, fat: 1.8, fiber: 1.2, gi: 55, gl: 14.2, servingSize: '1 medium (100g)', diabeticFriendly: true },
        { id: 'FOOD-003', name: 'Chapati (1 piece)', category: 'Lunch', calories: 107, protein: 3.2, carbs: 20.1, fat: 1.5, fiber: 2.5, gi: 52, gl: 10.5, servingSize: '1 piece (40g)', diabeticFriendly: true },
        { id: 'FOOD-004', name: 'White Rice (1 bowl)', category: 'Lunch', calories: 206, protein: 4.2, carbs: 45.1, fat: 0.4, fiber: 0.6, gi: 73, gl: 32.9, servingSize: '1 bowl (180g)', diabeticFriendly: false },
        { id: 'FOOD-005', name: 'Brown Rice (1 bowl)', category: 'Lunch', calories: 216, protein: 5.0, carbs: 44.8, fat: 1.8, fiber: 3.5, gi: 50, gl: 22.4, servingSize: '1 bowl (180g)', diabeticFriendly: true },
        { id: 'FOOD-006', name: 'Dal (1 bowl)', category: 'Lunch', calories: 118, protein: 9.1, carbs: 17.3, fat: 1.2, fiber: 5.5, gi: 32, gl: 5.5, servingSize: '1 bowl (150g)', diabeticFriendly: true },
        { id: 'FOOD-007', name: 'Mixed Vegetable Curry', category: 'Lunch', calories: 98, protein: 2.8, carbs: 14.2, fat: 3.5, fiber: 4.8, gi: 40, gl: 5.7, servingSize: '1 bowl (150g)', diabeticFriendly: true },
        { id: 'FOOD-008', name: 'Mango Juice (1 glass)', category: 'Beverages', calories: 128, protein: 0.8, carbs: 31.5, fat: 0.1, fiber: 0.5, gi: 65, gl: 20.5, servingSize: '1 glass (250ml)', diabeticFriendly: false },
        { id: 'FOOD-009', name: 'Buttermilk (1 glass)', category: 'Beverages', calories: 42, protein: 3.3, carbs: 4.8, fat: 1.1, fiber: 0, gi: 25, gl: 1.2, servingSize: '1 glass (200ml)', diabeticFriendly: true },
        { id: 'FOOD-010', name: 'Sambar (1 bowl)', category: 'Lunch', calories: 85, protein: 4.2, carbs: 12.8, fat: 2.1, fiber: 4.2, gi: 35, gl: 4.5, servingSize: '1 bowl (150g)', diabeticFriendly: true },
        { id: 'FOOD-011', name: 'Roti (1 piece)', category: 'Lunch', calories: 112, protein: 3.5, carbs: 21.0, fat: 1.8, fiber: 2.8, gi: 50, gl: 10.5, servingSize: '1 piece (45g)', diabeticFriendly: true },
        { id: 'FOOD-012', name: 'Poha (1 bowl)', category: 'Breakfast', calories: 258, protein: 5.6, carbs: 48.2, fat: 5.2, fiber: 3.2, gi: 62, gl: 29.9, servingSize: '1 bowl (200g)', diabeticFriendly: false },
        { id: 'FOOD-013', name: 'Upma (1 bowl)', category: 'Breakfast', calories: 280, protein: 6.2, carbs: 52.1, fat: 5.8, fiber: 4.1, gi: 58, gl: 30.2, servingSize: '1 bowl (200g)', diabeticFriendly: false },
        { id: 'FOOD-014', name: 'Apple (1 medium)', category: 'Fruits', calories: 95, protein: 0.5, carbs: 25.1, fat: 0.3, fiber: 4.4, gi: 36, gl: 9.0, servingSize: '1 medium (180g)', diabeticFriendly: true },
        { id: 'FOOD-015', name: 'Banana (1 medium)', category: 'Fruits', calories: 105, protein: 1.3, carbs: 27.0, fat: 0.4, fiber: 3.1, gi: 52, gl: 14.0, servingSize: '1 medium (120g)', diabeticFriendly: false },
        { id: 'FOOD-016', name: 'Orange (1 medium)', category: 'Fruits', calories: 62, protein: 1.2, carbs: 15.4, fat: 0.2, fiber: 3.1, gi: 42, gl: 6.5, servingSize: '1 medium (130g)', diabeticFriendly: true },
        { id: 'FOOD-017', name: 'Grapes (1 cup)', category: 'Fruits', calories: 100, protein: 1.1, carbs: 27.3, fat: 0.2, fiber: 1.4, gi: 55, gl: 15.0, servingSize: '1 cup (150g)', diabeticFriendly: false },
        { id: 'FOOD-018', name: 'Papaya (1 cup)', category: 'Fruits', calories: 55, protein: 0.9, carbs: 13.7, fat: 0.2, fiber: 2.5, gi: 38, gl: 5.2, servingSize: '1 cup (140g)', diabeticFriendly: true },
        { id: 'FOOD-019', name: 'Curd/Yogurt (1 bowl)', category: 'Dairy', calories: 98, protein: 11.2, carbs: 5.8, fat: 4.2, fiber: 0, gi: 25, gl: 1.5, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-020', name: 'Milk (1 glass)', category: 'Dairy', calories: 148, protein: 8.1, carbs: 12.3, fat: 8.0, fiber: 0, gi: 35, gl: 4.3, servingSize: '1 glass (250ml)', diabeticFriendly: true },
        { id: 'FOOD-021', name: 'Tea (without sugar)', category: 'Beverages', calories: 2, protein: 0.1, carbs: 0.4, fat: 0.0, fiber: 0, gi: 10, gl: 0, servingSize: '1 cup (240ml)', diabeticFriendly: true },
        { id: 'FOOD-022', name: 'Coffee (without sugar)', category: 'Beverages', calories: 2, protein: 0.3, carbs: 0, fat: 0.0, fiber: 0, gi: 10, gl: 0, servingSize: '1 cup (240ml)', diabeticFriendly: true },
        { id: 'FOOD-023', name: 'Nuts Mix (handful)', category: 'Snacks', calories: 168, protein: 5.2, carbs: 6.1, fat: 14.8, fiber: 3.1, gi: 15, gl: 0.9, servingSize: '1 handful (30g)', diabeticFriendly: true },
        { id: 'FOOD-024', name: 'Samosa (1 piece)', category: 'Snacks', calories: 262, protein: 5.8, carbs: 32.1, fat: 12.5, fiber: 2.1, gi: 60, gl: 19.3, servingSize: '1 piece (70g)', diabeticFriendly: false },
        { id: 'FOOD-025', name: 'Biryani (1 plate)', category: 'Lunch', calories: 485, protein: 18.2, carbs: 62.1, fat: 18.5, fiber: 2.8, gi: 68, gl: 42.2, servingSize: '1 plate (350g)', diabeticFriendly: false },
        { id: 'FOOD-026', name: 'Chicken Curry (1 bowl)', category: 'Dinner', calories: 285, protein: 28.2, carbs: 5.8, fat: 16.5, fiber: 1.2, gi: 30, gl: 1.7, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-027', name: 'Fish Curry (1 bowl)', category: 'Dinner', calories: 245, protein: 26.1, carbs: 4.2, fat: 13.8, fiber: 0.8, gi: 28, gl: 1.2, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-028', name: 'Paneer (100g)', category: 'Dinner', calories: 265, protein: 18.3, carbs: 6.5, fat: 20.1, fiber: 0.5, gi: 18, gl: 1.2, servingSize: '100g', diabeticFriendly: true },
        { id: 'FOOD-029', name: 'Green Salad (1 bowl)', category: 'Dinner', calories: 55, protein: 2.8, carbs: 8.5, fat: 1.8, fiber: 4.2, gi: 15, gl: 1.3, servingSize: '1 bowl (150g)', diabeticFriendly: true },
        { id: 'FOOD-030', name: 'Raita (1 bowl)', category: 'Lunch', calories: 65, protein: 3.2, carbs: 5.8, fat: 3.5, fiber: 0.5, gi: 22, gl: 1.3, servingSize: '1 bowl (120g)', diabeticFriendly: true },
        { id: 'FOOD-031', name: 'Chapati (2 pieces)', category: 'Lunch', calories: 214, protein: 6.4, carbs: 40.2, fat: 3.0, fiber: 5.0, gi: 52, gl: 20.9, servingSize: '2 pieces (80g)', diabeticFriendly: true },
        { id: 'FOOD-032', name: 'Paratha (1 piece)', category: 'Breakfast', calories: 255, protein: 5.1, carbs: 32.5, fat: 11.2, fiber: 2.8, gi: 58, gl: 18.9, servingSize: '1 piece (80g)', diabeticFriendly: false },
        { id: 'FOOD-033', name: 'Chole Bhature', category: 'Lunch', calories: 585, protein: 15.2, carbs: 72.1, fat: 25.5, fiber: 8.2, gi: 62, gl: 44.7, servingSize: '1 plate (350g)', diabeticFriendly: false },
        { id: 'FOOD-034', name: 'Dosa (Masala)', category: 'Breakfast', calories: 248, protein: 5.8, carbs: 38.2, fat: 8.2, fiber: 2.5, gi: 58, gl: 22.2, servingSize: '1 medium (150g)', diabeticFriendly: false },
        { id: 'FOOD-035', name: 'Vada (2 pieces)', category: 'Snacks', calories: 182, protein: 4.8, carbs: 22.1, fat: 8.5, fiber: 2.2, gi: 55, gl: 12.2, servingSize: '2 pieces (80g)', diabeticFriendly: false },
        { id: 'FOOD-036', name: 'Coconut Water', category: 'Beverages', calories: 46, protein: 0.7, carbs: 8.9, fat: 0.5, fiber: 0.5, gi: 42, gl: 3.7, servingSize: '1 glass (240ml)', diabeticFriendly: true },
        { id: 'FOOD-037', name: 'Lassi (Sweet)', category: 'Beverages', calories: 185, protein: 6.2, carbs: 25.8, fat: 6.5, fiber: 0, gi: 55, gl: 14.2, servingSize: '1 glass (250ml)', diabeticFriendly: false },
        { id: 'FOOD-038', name: 'Khichdi (1 bowl)', category: 'Lunch', calories: 245, protein: 8.5, carbs: 42.1, fat: 4.8, fiber: 5.5, gi: 48, gl: 20.2, servingSize: '1 bowl (250g)', diabeticFriendly: true },
        { id: 'FOOD-039', name: 'Sprouts (1 bowl)', category: 'Snacks', calories: 128, protein: 9.2, carbs: 21.5, fat: 2.1, fiber: 6.8, gi: 30, gl: 6.5, servingSize: '1 bowl (150g)', diabeticFriendly: true },
        { id: 'FOOD-040', name: 'Egg Curry (2 eggs)', category: 'Dinner', calories: 218, protein: 16.2, carbs: 5.8, fat: 14.5, fiber: 1.2, gi: 25, gl: 1.5, servingSize: '2 eggs with gravy (150g)', diabeticFriendly: true },
        { id: 'FOOD-041', name: 'Grilled Chicken Salad', category: 'Dinner', calories: 285, protein: 32.1, carbs: 8.5, fat: 13.2, fiber: 4.5, gi: 20, gl: 1.7, servingSize: '1 bowl (250g)', diabeticFriendly: true },
        { id: 'FOOD-042', name: 'Oats Porridge (1 bowl)', category: 'Breakfast', calories: 158, protein: 5.8, carbs: 27.2, fat: 2.8, fiber: 4.2, gi: 42, gl: 11.4, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-043', name: 'Smoothie Bowl', category: 'Breakfast', calories: 195, protein: 6.2, carbs: 28.5, fat: 6.8, fiber: 5.2, gi: 38, gl: 10.8, servingSize: '1 bowl (250g)', diabeticFriendly: true },
        { id: 'FOOD-044', name: 'Mango (1 medium)', category: 'Fruits', calories: 150, protein: 1.4, carbs: 35.2, fat: 0.6, fiber: 3.7, gi: 56, gl: 19.7, servingSize: '1 medium (200g)', diabeticFriendly: false },
        { id: 'FOOD-045', name: 'Watermelon (1 cup)', category: 'Fruits', calories: 46, protein: 0.9, carbs: 11.5, fat: 0.2, fiber: 0.6, gi: 72, gl: 8.3, servingSize: '1 cup (150g)', diabeticFriendly: false },
        { id: 'FOOD-046', name: 'Guava (1 medium)', category: 'Fruits', calories: 62, protein: 2.6, carbs: 14.3, fat: 0.9, fiber: 5.4, gi: 28, gl: 4.0, servingSize: '1 medium (160g)', diabeticFriendly: true },
        { id: 'FOOD-047', name: 'Sweet Potato (1 medium)', category: 'Snacks', calories: 112, protein: 2.1, carbs: 26.2, fat: 0.1, fiber: 3.9, gi: 44, gl: 11.5, servingSize: '1 medium (150g)', diabeticFriendly: true },
        { id: 'FOOD-048', name: 'Dhokla (2 pieces)', category: 'Snacks', calories: 148, protein: 5.2, carbs: 24.5, fat: 3.8, fiber: 2.8, gi: 48, gl: 11.8, servingSize: '2 pieces (100g)', diabeticFriendly: true },
        { id: 'FOOD-049', name: 'Pulses Soup (1 bowl)', category: 'Dinner', calories: 95, protein: 7.2, carbs: 14.8, fat: 1.2, fiber: 5.2, gi: 28, gl: 4.1, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-050', name: 'Quinoa Bowl (1 bowl)', category: 'Lunch', calories: 268, protein: 9.1, carbs: 42.5, fat: 3.8, fiber: 6.2, gi: 35, gl: 14.9, servingSize: '1 bowl (200g)', diabeticFriendly: true },
        { id: 'FOOD-051', name: 'Cucumber Salad', category: 'Snacks', calories: 28, protein: 1.2, carbs: 5.8, fat: 0.2, fiber: 1.8, gi: 12, gl: 0.7, servingSize: '1 bowl (120g)', diabeticFriendly: true },
        { id: 'FOOD-052', name: 'Roasted Chickpeas', category: 'Snacks', calories: 135, protein: 7.2, carbs: 22.5, fat: 2.1, fiber: 6.5, gi: 28, gl: 6.3, servingSize: '1 handful (30g)', diabeticFriendly: true },
    ],

    // ==================== HOSPITALS FOR FEDERATED LEARNING ====================
    hospitals: [
        {
            id: 'HOSP-A', name: 'City General Hospital', location: 'Delhi', beds: 450,
            patients: [], specialties: ['Endocrinology', 'Cardiology', 'Internal Medicine'],
            accuracy: 0, dataSize: 0
        },
        {
            id: 'HOSP-B', name: 'Unity Medical Center', location: 'Mumbai', beds: 380,
            patients: [], specialties: ['Diabetes Care', 'Nutrition', 'Preventive Medicine'],
            accuracy: 0, dataSize: 0
        },
        {
            id: 'HOSP-C', name: 'Sparsh Hospital', location: 'Bangalore', beds: 320,
            patients: [], specialties: ['Endocrinology', 'Nephrology', 'Ophthalmology'],
            accuracy: 0, dataSize: 0
        },
        {
            id: 'HOSP-D', name: 'Aarogya Healthcare', location: 'Chennai', beds: 280,
            patients: [], specialties: ['Diabetes Management', 'Dietetics', 'Cardiology'],
            accuracy: 0, dataSize: 0
        },
    ],

    // ==================== AGENT SYSTEM ====================
    agents: [
        {
            id: 'AGENT-1', name: 'Medical Report Agent', type: 'Analysis',
            description: 'Processes medical reports and extracts diabetic indicators',
            status: 'active', accuracy: 94.5,
            capabilities: ['OCR Processing', 'Entity Recognition', 'Value Extraction', 'Status Detection']
        },
        {
            id: 'AGENT-2', name: 'Risk Assessment Agent', type: 'Prediction',
            description: 'Evaluates patient risk based on extracted parameters',
            status: 'active', accuracy: 92.8,
            capabilities: ['Risk Scoring', 'Pattern Recognition', 'Trend Analysis', 'Stratification']
        },
        {
            id: 'AGENT-3', name: 'Food Analysis Agent', type: 'Analysis',
            description: 'Analyzes meal images and estimates nutritional content',
            status: 'active', accuracy: 91.2,
            capabilities: ['Image Recognition', 'Calorie Estimation', 'GI Calculation', 'Portion Sizing']
        },
        {
            id: 'AGENT-4', name: 'Diet Planner Agent', type: 'Planning',
            description: 'Generates personalized diet recommendations',
            status: 'active', accuracy: 96.1,
            capabilities: ['Meal Planning', 'Nutrition Optimization', 'Preference Learning', 'Schedule Generation']
        },
        {
            id: 'AGENT-5', name: 'Health Coach Agent', type: 'Interaction',
            description: 'Provides health insights and lifestyle recommendations',
            status: 'active', accuracy: 93.5,
            capabilities: ['NLP Understanding', 'Insight Generation', 'Motivational Feedback', 'Progress Tracking']
        },
    ],

    // ==================== AGENT COLLABORATION GRAPH ====================
    agentCollaborations: [
        { from: 'AGENT-1', to: 'AGENT-2', type: 'data' },
        { from: 'AGENT-2', to: 'AGENT-4', type: 'insight' },
        { from: 'AGENT-3', to: 'AGENT-4', type: 'data' },
        { from: 'AGENT-4', to: 'AGENT-5', type: 'plan' },
        { from: 'AGENT-1', to: 'AGENT-3', type: 'context' },
        { from: 'AGENT-2', to: 'AGENT-5', type: 'risk' },
    ],

    // ==================== NLP EXAMPLE SENTENCES ====================
    nlpHouseholdFoods: {
        'chapatis': { food: 'Chapati', qty: 2, multiplier: 2 },
        'chapati': { food: 'Chapati', qty: 1, multiplier: 1 },
        'roti': { food: 'Roti', qty: 1, multiplier: 1 },
        'rice': { food: 'White Rice', qty: 1, multiplier: 1 },
        'dosa': { food: 'Dosa (Plain)', qty: 1, multiplier: 1 },
        'idli': { food: 'Idli (2 pieces)', qty: 2, multiplier: 1 },
        'sambar': { food: 'Sambar', qty: 1, multiplier: 1 },
        'dal': { food: 'Dal', qty: 1, multiplier: 1 },
        'curry': { food: 'Mixed Vegetable Curry', qty: 1, multiplier: 1 },
        'mango juice': { food: 'Mango Juice', qty: 1, multiplier: 1 },
        'tea': { food: 'Tea (without sugar)', qty: 1, multiplier: 1 },
        'coffee': { food: 'Coffee (without sugar)', qty: 1, multiplier: 1 },
        'milk': { food: 'Milk', qty: 1, multiplier: 1 },
        'chicken': { food: 'Chicken Curry', qty: 1, multiplier: 1 },
        'fish': { food: 'Fish Curry', qty: 1, multiplier: 1 },
        'paneer': { food: 'Paneer', qty: 1, multiplier: 1 },
        'salad': { food: 'Green Salad', qty: 1, multiplier: 1 },
        'yogurt': { food: 'Curd/Yogurt', qty: 1, multiplier: 1 },
        'curd': { food: 'Curd/Yogurt', qty: 1, multiplier: 1 },
        'fruits': { food: 'Apple', qty: 1, multiplier: 1 },
        'apple': { food: 'Apple', qty: 1, multiplier: 1 },
        'banana': { food: 'Banana', qty: 1, multiplier: 1 },
        'eggs': { food: 'Egg Curry (2 eggs)', qty: 2, multiplier: 1 },
        'egg': { food: 'Egg Curry (2 eggs)', qty: 1, multiplier: 0.5 },
        'bread': { food: 'Chapati', qty: 2, multiplier: 2 },
        'paratha': { food: 'Paratha', qty: 1, multiplier: 1 },
        'noodles': { food: 'Upma', qty: 1, multiplier: 1 },
        'pasta': { food: 'Upma', qty: 1, multiplier: 1 },
        'biryani': { food: 'Biryani', qty: 1, multiplier: 1 },
        'sweet': { food: 'Mango (1 medium)', qty: 1, multiplier: 1 },
        'snacks': { food: 'Samosa', qty: 1, multiplier: 1 },
        'chutney': { food: 'Idli (2 pieces)', qty: 0.5, multiplier: 0.5 },
        'juice': { food: 'Mango Juice', qty: 1, multiplier: 1 },
        'water': { food: 'Coconut Water', qty: 1, multiplier: 1 },
        'lassi': { food: 'Lassi (Sweet)', qty: 1, multiplier: 1 },
        'coconut water': { food: 'Coconut Water', qty: 1, multiplier: 1 },
        'mixed vegetable curry': { food: 'Mixed Vegetable Curry', qty: 1, multiplier: 1 },
        'chicken curry': { food: 'Chicken Curry', qty: 1, multiplier: 1 },
        'fish curry': { food: 'Fish Curry', qty: 1, multiplier: 1 },
        'egg curry': { food: 'Egg Curry (2 eggs)', qty: 1, multiplier: 1 },
        'green salad': { food: 'Green Salad', qty: 1, multiplier: 1 },
        'sweet potato': { food: 'Sweet Potato', qty: 1, multiplier: 1 },
        'roasted chickpeas': { food: 'Roasted Chickpeas', qty: 1, multiplier: 1 },
        'cucumber salad': { food: 'Cucumber Salad', qty: 1, multiplier: 1 },
    },

    // ==================== GENERATE DATA ====================
    init: function() {
        this.generateMoreReports(90);
        this.generatePatients(520);
        
        // Assign patients to hospitals
        const hospitals = ['City General Hospital', 'Unity Medical Center', 'Sparsh Hospital', 'Aarogya Healthcare'];
        this.patients.forEach((p, i) => {
            p.hospital = hospitals[i % 4];
        });
        
        // Initialize hospital data
        hospitals.forEach((name, idx) => {
            const h = this.hospitals[idx];
            h.patients = this.patients.filter(p => p.hospital === name);
            h.dataSize = h.patients.length;
            h.accuracy = 75 + Math.random() * 15;
        });

        return this;
    }
};

// Initialize data
SyntheticData.init();

console.log('Synthetic Data Loaded:', {
    medicalReports: SyntheticData.medicalReports.length,
    patients: SyntheticData.patients.length,
    foods: SyntheticData.foods.length,
    hospitals: SyntheticData.hospitals.length
});
