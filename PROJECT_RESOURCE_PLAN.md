# TRL-2 Project Resource Plan & Budget
## AI-Enabled Personalized Type-2 Diabetic Management System

**Document Version:** 1.0  
**Date:** June 19, 2026  
**Project Duration:** 12 Months  
**TRL Level:** TRL-2 (Technology Concept and Application Formulated)

---

## Table of Contents
1. [Hardware Requirements](#hardware-requirements)
2. [Software Requirements](#software-requirements)
3. [Budget Breakdown](#budget-breakdown)
4. [Project Objectives & Activity Mapping](#project-objectives--activity-mapping)
5. [Cost Justification](#cost-justification)

---

## Hardware Requirements

### 1. Development Infrastructure

| Component | Specification | Quantity | Unit Cost (INR) | Total Cost (INR) | Cost Type |
|-----------|---------------|----------|-----------------|------------------|-----------|
| **High-Performance Workstation** | Intel Xeon W-2295 (18-core), 128GB RAM, NVIDIA RTX A5000 (24GB), 2TB NVMe SSD | 2 | ₹4,50,000 | ₹9,00,000 | B (Non-Recurring) |
| **GPU Server for FL Training** | Dual AMD EPYC 7763, 512GB RAM, 4x NVIDIA A100 (40GB), 8TB NVMe | 1 | ₹28,00,000 | ₹28,00,000 | B (Non-Recurring) |
| **Development Laptops** | Dell Precision 7560 (i9, 64GB RAM, RTX A3000) | 4 | ₹2,20,000 | ₹8,80,000 | B (Non-Recurring) |
| **OCR Testing Scanner** | Epson WorkForce Pro ES-500W (Medical Grade) | 2 | ₹35,000 | ₹70,000 | B (Non-Recurring) |
| **Network Storage (NAS)** | Synology RS3621xs+ (12-bay, 192TB capacity) | 1 | ₹6,50,000 | ₹6,50,000 | B (Non-Recurring) |
| **Backup System** | External RAID Array (48TB) | 2 | ₹1,80,000 | ₹3,60,000 | B (Non-Recurring) |
| **Testing Tablets** | iPad Pro 12.9" (for food image capture testing) | 3 | ₹1,20,000 | ₹3,60,000 | B (Non-Recurring) |
| **Network Equipment** | 10Gbps Switch, Router, Firewall | 1 set | ₹2,50,000 | ₹2,50,000 | B (Non-Recurring) |
| **UPS Systems** | Online UPS 10KVA | 2 | ₹1,80,000 | ₹3,60,000 | B (Non-Recurring) |

**Total Hardware Cost: ₹66,30,000** (Non-Recurring - B)

---

## Software Requirements

### 2. Development Software & Tools

| Software | Purpose | Licensing Model | Annual Cost (INR) | Cost Type |
|----------|---------|-----------------|-------------------|-----------|
| **PyCharm Professional** | Python IDE (5 licenses) | Annual subscription | ₹50,000 | A (Recurring) |
| **Visual Studio Enterprise** | Development IDE (3 licenses) | Annual subscription | ₹3,00,000 | A (Recurring) |
| **MATLAB + Deep Learning Toolbox** | Algorithm prototyping (3 licenses) | Annual subscription | ₹6,00,000 | A (Recurring) |
| **Adobe Creative Cloud** | UI/UX design (2 licenses) | Annual subscription | ₹72,000 | A (Recurring) |
| **Tableau Desktop** | Data visualization (2 licenses) | Annual subscription | ₹1,80,000 | A (Recurring) |
| **Docker Enterprise** | Containerization | Annual subscription | ₹2,40,000 | A (Recurring) |
| **GitLab Ultimate** | Version control & CI/CD (10 users) | Annual subscription | ₹2,00,000 | A (Recurring) |
| **JetBrains All Products** | Development tools (5 licenses) | Annual subscription | ₹1,50,000 | A (Recurring) |

**Total Software Licensing: ₹17,92,000/year** (Recurring - A)

### 3. Cloud Services & APIs

| Service | Purpose | Monthly Cost (INR) | Annual Cost (INR) | Cost Type |
|---------|---------|-------------------|-------------------|-----------|
| **AWS EC2 (p3.8xlarge)** | Model training instances | ₹3,20,000 | ₹38,40,000 | A (Recurring) |
| **AWS S3 + CloudFront** | Data storage & CDN | ₹80,000 | ₹9,60,000 | A (Recurring) |
| **Google Cloud AI Platform** | ML model deployment | ₹1,20,000 | ₹14,40,000 | A (Recurring) |
| **Azure Cognitive Services** | OCR & NLP APIs | ₹60,000 | ₹7,20,000 | A (Recurring) |
| **MongoDB Atlas (M60)** | Database hosting | ₹1,00,000 | ₹12,00,000 | A (Recurring) |
| **Cloudflare Pro** | Security & performance | ₹15,000 | ₹1,80,000 | A (Recurring) |
| **Sentry Enterprise** | Error tracking | ₹25,000 | ₹3,00,000 | A (Recurring) |
| **GitHub Enterprise** | Code repository | ₹30,000 | ₹3,60,000 | A (Recurring) |

**Total Cloud Services: ₹90,00,000/year** (Recurring - A)

### 4. AI/ML Frameworks & Libraries (Open Source - No Cost)

| Framework | Purpose | Version | Cost |
|-----------|---------|---------|------|
| TensorFlow | Deep learning framework | 2.13+ | FREE |
| PyTorch | Neural network library | 2.0+ | FREE |
| OpenCV | Computer vision | 4.8+ | FREE |
| Tesseract OCR | OCR engine | 5.3+ | FREE |
| SpaCy | NLP processing | 3.6+ | FREE |
| FastAPI | API development | 0.104+ | FREE |
| React.js | Frontend framework | 18.2+ | FREE |
| scikit-learn | ML algorithms | 1.3+ | FREE |
| PySyft | Federated learning | 0.8+ | FREE |

**Total Open Source: ₹0**

---

## Budget Breakdown

### Summary Table

| Category | Sub-Category | Amount (INR) | Cost Type | Budget Code |
|----------|--------------|--------------|-----------|-------------|
| **Hardware** | Development Infrastructure | ₹66,30,000 | B (Non-Recurring) | HW-DEV |
| **Software** | Development Tools | ₹17,92,000 | A (Recurring/Year) | SW-TOOLS |
| **Cloud** | Cloud Services & APIs | ₹90,00,000 | A (Recurring/Year) | CLOUD-SVC |
| **Personnel** | Research Team (12 months) | ₹96,00,000 | A (Recurring) | HR-TEAM |
| **Training** | Workshops & Certifications | ₹8,00,000 | A (Recurring) | TR-CERT |
| **Travel** | Conference & Field Visits | ₹6,00,000 | A (Recurring) | TR-CONF |
| **Miscellaneous** | Office supplies, utilities | ₹4,00,000 | A (Recurring) | MISC |
| **Contingency** | 10% buffer | ₹22,22,000 | Mixed | CONT |

### Total Project Cost (12 Months)

| Cost Type | Amount (INR) | Percentage |
|-----------|--------------|------------|
| **A: Recurring Costs** | ₹2,21,92,000 | 77.0% |
| **B: Non-Recurring Costs** | ₹66,30,000 | 23.0% |
| **Total Project Budget** | **₹2,88,22,000** | 100% |

---

## Project Objectives & Activity Mapping

### Objective 1: OCR Module Development for Diabetic Indicator Extraction
**Duration:** Months 1-3 (90 days)  
**Responsible Person:** Dr. Amit Sharma (Lead AI Researcher)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **1.1 Data Collection** | - Collect 1000+ medical reports<br>- Anonymize patient data<br>- Categorize by report types | 3 weeks | • OCR Scanner (2 units)<br>• NAS Storage<br>• Data entry team (2 persons) | Data Manager |
| **1.2 OCR Engine Setup** | - Configure Tesseract OCR<br>- Integrate Azure OCR API<br>- Build preprocessing pipeline | 2 weeks | • Development Workstation<br>• Azure Cognitive Services<br>• Python Developer (1) | ML Engineer |
| **1.3 Medical NER Model** | - Train BiLSTM-CRF model<br>- Fine-tune on medical entities<br>- Validate accuracy (>94%) | 4 weeks | • GPU Server<br>• AWS EC2 instances<br>• ML Framework (PyTorch)<br>• NLP Specialist (1) | NLP Researcher |
| **1.4 Integration & Testing** | - Build API endpoints<br>- Create test suite<br>- Performance optimization | 3 weeks | • Development Laptop<br>• Testing environment<br>• QA Engineer (1) | Backend Developer |

**Budget Allocated:** ₹28,50,000  
**Deliverables:** OCR module with 94.5% accuracy in diabetic indicator extraction

---

### Objective 2: Federated Learning Framework Implementation
**Duration:** Months 3-6 (90 days)  
**Responsible Person:** Dr. Priya Menon (FL Specialist)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **2.1 FL Architecture Design** | - Design FedAvg protocol<br>- Plan differential privacy (ε=0.5)<br>- Define communication protocol | 2 weeks | • Development Workstation<br>• MATLAB (for simulation)<br>• Architecture Diagram Tools | System Architect |
| **2.2 Hospital Node Setup** | - Create 4 virtual hospital nodes<br>- Generate synthetic patient data<br>- Configure local training | 3 weeks | • GPU Server (4 partitions)<br>• Docker containers<br>• MongoDB databases | DevOps Engineer |
| **2.3 Global Model Training** | - Implement secure aggregation<br>- Add differential privacy<br>- Multi-round training (10-20 rounds) | 5 weeks | • AWS p3.8xlarge instances<br>• PySyft framework<br>• TensorFlow/PyTorch<br>• ML Engineers (2) | FL Engineer |
| **2.4 Privacy & Security** | - Implement encryption<br>- Privacy audit<br>- Security testing | 2 weeks | • Security tools<br>• Penetration testing<br>• Security Consultant | Security Analyst |
| **2.5 Validation** | - Accuracy testing (>92%)<br>- Privacy verification<br>- Performance benchmarking | 2 weeks | • Testing infrastructure<br>• QA team (2 persons) | QA Lead |

**Budget Allocated:** ₹42,80,000  
**Deliverables:** FL framework with ε=0.5 differential privacy and 92.5%+ accuracy

---

### Objective 3: Agentic AI System Development
**Duration:** Months 5-8 (120 days)  
**Responsible Person:** Dr. Rajesh Kumar (AI Agent Specialist)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **3.1 Agent Architecture** | - Design 5 specialized agents<br>- Define inter-agent protocol<br>- Create communication framework | 3 weeks | • Development Workstation<br>• UML/Design tools<br>• System Design Documents | Solution Architect |
| **3.2 Medical Report Agent** | - Build OCR processing logic<br>- Entity extraction module<br>- Confidence scoring | 3 weeks | • GPU Workstation<br>• Python/FastAPI<br>• Developer (1) | Agent Dev 1 |
| **3.3 Risk Assessment Agent** | - Develop risk scoring algorithm<br>- Pattern recognition model<br>- Trend analysis engine | 3 weeks | • ML Infrastructure<br>• scikit-learn/PyTorch<br>• Data Scientist (1) | Agent Dev 2 |
| **3.4 Food Analysis Agent** | - Train food recognition CNN<br>- GI/GL calculation module<br>- Portion estimation | 4 weeks | • GPU Server<br>• Food image dataset (5000+)<br>• EfficientNet model<br>• CV Engineer (1) | Agent Dev 3 |
| **3.5 Diet Planner Agent** | - Optimization algorithm<br>- Constraint solver<br>- Personalization engine | 3 weeks | • Development laptop<br>• OR-Tools/PuLP<br>• Algorithm Engineer (1) | Agent Dev 4 |
| **3.6 Health Coach Agent** | - NLP chatbot development<br>- Intent recognition<br>- Response generation | 3 weeks | • Development laptop<br>• SpaCy/Transformers<br>• NLP Engineer (1) | Agent Dev 5 |
| **3.7 Integration** | - Agent orchestration<br>- API gateway<br>- End-to-end testing | 2 weeks | • Full infrastructure<br>• Integration team (3) | Integration Lead |

**Budget Allocated:** ₹52,60,000  
**Deliverables:** 5 functional AI agents with 91-96% accuracy across modules

---

### Objective 4: Food Intelligence System
**Duration:** Months 7-9 (90 days)  
**Responsible Person:** Dr. Lakshmi Reddy (Computer Vision Lead)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **4.1 Dataset Creation** | - Collect 5000+ Indian food images<br>- Label 50 food categories<br>- Nutritional data mapping | 4 weeks | • iPad Pro (for photography)<br>• Labeling tools<br>• Data team (3 persons) | Data Manager |
| **4.2 CNN Model Training** | - EfficientNet-B3 fine-tuning<br>- Transfer learning<br>- Hyperparameter optimization | 4 weeks | • GPU Server (A100)<br>• PyTorch/TensorFlow<br>• ML Engineer (1) | CV Researcher |
| **4.3 GI/GL Calculation** | - Build nutritional database<br>- GI/GL estimation algorithms<br>- Portion size detection | 3 weeks | • Database server<br>• MongoDB<br>• Nutritionist (consultant)<br>• Developer (1) | Backend Dev |
| **4.4 NLP Food Parser** | - Train NLP model for text input<br>- Household measure parser<br>- Multi-language support | 3 weeks | • Development laptop<br>• SpaCy/BERT<br>• NLP Engineer (1) | NLP Dev |
| **4.5 Testing & Validation** | - Accuracy testing (>91%)<br>- Real-world validation<br>- User acceptance testing | 2 weeks | • Testing devices<br>• QA team (2)<br>• Beta testers (10) | QA Lead |

**Budget Allocated:** ₹38,70,000  
**Deliverables:** Food intelligence system with 91.2% image recognition accuracy

---

### Objective 5: Web Application & User Interface
**Duration:** Months 8-11 (120 days)  
**Responsible Person:** Mr. Vikram Iyer (Full-Stack Lead)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **5.1 UI/UX Design** | - Wireframing (12 modules)<br>- User flow design<br>- Accessibility compliance | 3 weeks | • Adobe Creative Cloud<br>• Figma<br>• UI/UX Designer (2) | Design Lead |
| **5.2 Frontend Development** | - React.js implementation<br>- Responsive design<br>- Interactive visualizations | 5 weeks | • Development laptops<br>• VS Code/WebStorm<br>• Frontend Devs (3) | Frontend Lead |
| **5.3 Backend API** | - FastAPI/Node.js backend<br>- RESTful API design<br>- Database integration | 4 weeks | • Development workstation<br>• MongoDB/PostgreSQL<br>• Backend Devs (2) | Backend Lead |
| **5.4 Integration** | - Connect all 5 AI agents<br>- TRL-4 integration bar<br>- Pipeline orchestration | 3 weeks | • Full infrastructure<br>• Integration team (3) | Integration Lead |
| **5.5 Testing** | - Cross-browser testing<br>- Performance testing<br>- Security audit | 3 weeks | • Testing devices<br>• QA team (3)<br>• Security tools | QA Manager |
| **5.6 Deployment** | - AWS/Azure deployment<br>- CDN configuration<br>- Monitoring setup | 2 weeks | • Cloud services<br>• DevOps tools<br>• DevOps Engineer (1) | DevOps Lead |

**Budget Allocated:** ₹45,20,000  
**Deliverables:** Fully functional web application with 12 interactive modules

---

### Objective 6: Documentation & Dissemination
**Duration:** Months 10-12 (90 days)  
**Responsible Person:** Dr. Sunita Devi (Research Coordinator)

| Activity | Sub-Activities | Duration | Resources Required | Responsible |
|----------|---------------|----------|-------------------|-------------|
| **6.1 Technical Documentation** | - API documentation<br>- Architecture guide<br>- Developer manual | 4 weeks | • Documentation tools<br>• Technical Writer (1) | Tech Writer |
| **6.2 Research Papers** | - Write 3-4 conference papers<br>- Journal article drafts<br>- Patent documentation | 6 weeks | • Research team<br>• Academic writing tools<br>• Senior Researchers (2) | PI |
| **6.3 User Guides** | - End-user manual<br>- Video tutorials<br>- FAQs | 3 weeks | • Video equipment<br>• Editing software<br>• Content team (2) | Content Lead |
| **6.4 Conference Presentations** | - Prepare presentations<br>- Attend 2-3 conferences<br>- Poster presentations | 3 weeks | • Travel budget<br>• Conference fees<br>• Presentation materials | PI + Team |
| **6.5 Demo Preparation** | - Live demo refinement<br>- Stakeholder presentations<br>- Funding pitch materials | 2 weeks | • Demo environment<br>• Presentation team | Marketing Lead |

**Budget Allocated:** ₹18,42,000  
**Deliverables:** Complete documentation, 3-4 research papers, conference presentations

---

## Cost Justification

### Hardware Components

#### 1. High-Performance Workstations (₹9,00,000)
**Justification:** Required for simultaneous development, model training, and testing. The NVIDIA RTX A5000 with 24GB VRAM is essential for training mid-sized neural networks locally during prototyping phase.

#### 2. GPU Server (₹28,00,000)
**Justification:** Core infrastructure for federated learning simulation. The 4x NVIDIA A100 GPUs are necessary to simulate 4 hospital nodes simultaneously while maintaining realistic training speeds. AMD EPYC processors provide the parallel processing needed for secure aggregation.

#### 3. Development Laptops (₹8,80,000)
**Justification:** Mobility for 4 team members to work remotely, attend conferences, and conduct field testing. RTX A3000 GPUs enable on-site model inference testing.

#### 4. Network Storage - NAS (₹6,50,000)
**Justification:** Centralized storage for:
- 1000+ medical reports (anonymized)
- 5000+ food images
- Model checkpoints and training logs
- Backup and version control
- Compliance with data retention policies

---

### Software & Cloud Services

#### 1. Development Tools (₹17,92,000/year)
**Justification:** Professional IDEs and tools accelerate development:
- **PyCharm/VS Code:** 40% productivity improvement in coding
- **MATLAB:** Rapid algorithm prototyping before production implementation
- **Adobe CC:** Professional UI/UX design for research demonstration
- **GitLab Ultimate:** Enterprise-grade CI/CD and version control

#### 2. Cloud Services (₹90,00,000/year)
**Justification:** 
- **AWS EC2 p3.8xlarge:** Scalable GPU compute for federated learning rounds (estimate 200+ training hours)
- **Cloud Storage:** Compliant with data privacy regulations, automatic backups
- **AI APIs:** Faster development with pre-trained OCR and NLP models
- **Monitoring:** Essential for TRL-2 validation and performance metrics

#### 3. Open Source Frameworks (₹0)
**Justification:** Leveraging established frameworks reduces development time by 60% and ensures reproducibility in research.

---

### Personnel Costs (₹96,00,000)

| Role | Count | Monthly Salary | 12-Month Cost | Justification |
|------|-------|----------------|---------------|---------------|
| **Principal Investigator** | 1 | ₹2,00,000 | ₹24,00,000 | Overall project leadership, research direction |
| **Senior ML Engineers** | 2 | ₹1,20,000 | ₹28,80,000 | Core AI/ML development, model architecture |
| **Full-Stack Developers** | 3 | ₹80,000 | ₹28,80,000 | Web application development, integration |
| **Data Scientists** | 2 | ₹90,000 | ₹21,60,000 | Data analysis, algorithm design, validation |
| **QA Engineers** | 2 | ₹60,000 | ₹14,40,000 | Testing, quality assurance, documentation |
| **UI/UX Designers** | 2 | ₹50,000 | ₹12,00,000 | Interface design, user experience |
| **Project Coordinator** | 1 | ₹70,000 | ₹8,40,000 | Project management, coordination |
| **DevOps Engineer** | 1 | ₹90,000 | ₹10,80,000 | Infrastructure, deployment, monitoring |
| **Research Assistants** | 3 | ₹40,000 | ₹14,40,000 | Data collection, literature review, testing |

**Total Personnel:** 17 team members  
**Justification:** Cross-functional team required for integrated system spanning OCR, FL, AI agents, and web development.

---

### Training & Development (₹8,00,000)

| Item | Cost (INR) | Justification |
|------|------------|---------------|
| **AWS Certifications** | ₹2,00,000 | 4 team members - ML Specialty, Solutions Architect |
| **Federated Learning Workshop** | ₹3,00,000 | Specialized training from industry experts |
| **Medical AI Ethics Training** | ₹1,50,000 | Compliance with healthcare regulations |
| **Security Certifications** | ₹1,50,000 | HIPAA, GDPR compliance training |

---

### Travel & Conferences (₹6,00,000)

| Item | Cost (INR) | Justification |
|------|------------|---------------|
| **International Conferences** (2) | ₹4,00,000 | NeurIPS, ICML, CVPR - dissemination of research |
| **National Conferences** (3) | ₹1,20,000 | AAAI India, IEEE conferences |
| **Field Visits to Hospitals** | ₹80,000 | Requirements gathering, validation testing |

---

### Contingency (₹22,22,000 - 10%)
**Justification:** 
- Hardware failures or upgrades
- Unexpected cloud cost overruns
- Additional data collection needs
- Extended testing periods
- Emergency bug fixes

---

## Resource Allocation Timeline

```
Month | Obj 1 (OCR) | Obj 2 (FL) | Obj 3 (Agents) | Obj 4 (Food) | Obj 5 (Web) | Obj 6 (Doc)
------|-------------|------------|----------------|--------------|-------------|-------------
  1   |   ████████  |            |                |              |             |
  2   |   ████████  |            |                |              |             |
  3   |   ████████  |  ████████  |                |              |             |
  4   |             |  ████████  |                |              |             |
  5   |             |  ████████  |    ████████    |              |             |
  6   |             |  ████████  |    ████████    |              |             |
  7   |             |            |    ████████    |   ████████   |             |
  8   |             |            |    ████████    |   ████████   |  ████████   |
  9   |             |            |                |   ████████   |  ████████   |
 10   |             |            |                |              |  ████████   |  ████████
 11   |             |            |                |              |  ████████   |  ████████
 12   |             |            |                |              |             |  ████████
```

---

## Risk Management & Mitigation

| Risk | Probability | Impact | Mitigation Strategy | Budget Reserve |
|------|-------------|--------|---------------------|----------------|
| **Hardware failure** | Medium | High | Backup systems, extended warranties | ₹5,00,000 |
| **Cloud cost overrun** | High | Medium | Monitor usage, optimize workloads | ₹8,00,000 |
| **Key personnel leaving** | Low | High | Knowledge documentation, backup training | ₹3,00,000 |
| **Model accuracy below target** | Medium | High | Extended training, larger datasets | ₹4,00,000 |
| **Data privacy issues** | Low | Critical | Legal consultation, security audits | ₹2,22,000 |

---

## Success Metrics & KPIs

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| **OCR Accuracy** | 94.5% | Precision/Recall on test set (200 reports) |
| **FL Global Accuracy** | 92.5% | Classification accuracy on validation set |
| **FL Privacy Budget** | ε=0.5 | Differential privacy measurement |
| **Food Recognition** | 91.2% | Top-1 accuracy on 1000 test images |
| **System Uptime** | 99% | Monitoring dashboard (Sentry) |
| **Response Time** | <500ms | API latency measurements |
| **User Satisfaction** | >4.0/5.0 | Demo feedback surveys (50+ users) |
| **Research Output** | 3-4 papers | Conference acceptances |

---

## Approval & Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Principal Investigator** | Dr. [PI Name] | _____________ | __________ |
| **Finance Officer** | | _____________ | __________ |
| **Dean/Director** | | _____________ | __________ |
| **Funding Agency Representative** | | _____________ | __________ |

---

## Appendices

### A. Vendor Quotations
- Hardware quotations from Dell, HP, Lenovo
- Cloud service pricing from AWS, Azure, GCP
- Software licensing quotes

### B. Technical Specifications
- Detailed hardware specs
- Network architecture diagrams
- Software stack details

### C. Personnel Resumes
- CV of Principal Investigator
- Team member qualifications
- Consultant credentials

### D. Compliance Certificates
- Ethics committee approval
- Data privacy compliance
- Institution approval letters

---

**Document Status:** Ready for Review  
**Next Review Date:** [To be determined]  
**Version Control:** v1.0 - Initial Draft

