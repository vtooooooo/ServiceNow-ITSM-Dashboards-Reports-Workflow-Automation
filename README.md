# 🖥️ ServiceNow ITSM – Dashboards, Reports & Workflow Automation

![ServiceNow](https://img.shields.io/badge/ServiceNow-Zurich-green?style=for-the-badge&logo=servicenow)
![Platform](https://img.shields.io/badge/Platform-Personal%20Developer%20Instance-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

---

## 📌 Project Overview

This project demonstrates hands-on experience with **ServiceNow** — one of the leading IT Service Management (ITSM) platforms used by enterprise organizations worldwide. Using a free **Personal Developer Instance (PDI)** on the Zurich release, I configured dashboards, built reports, automated workflows, and performed administrative tasks to simulate real-world IT operations.

This project directly mirrors the skills required in roles such as **Business Analyst**, **Data Analyst**, **IT Operations Analyst**, and **ServiceNow Administrator**.

---

## 🎯 Objectives

- Configure data-driven dashboards to visualize IT incident trends
- Build reports for key performance indicators (KPIs) across incident categories, priorities, and states
- Automate workflows using Flow Designer to improve operational efficiency
- Perform administrative tasks including data entry, system validation, and user management
- Simulate real-world ITSM operations using 135+ realistic incident records

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| **ServiceNow (Zurich)** | ITSM Platform |
| **Flow Designer** | Workflow Automation |
| **Platform Analytics** | Dashboard & Reporting |
| **Import Sets & Transform Maps** | Data Import & Validation |
| **Background Scripts** | Bulk Data Entry & Testing |
| **GitHub** | Version Control & Portfolio |

---

## 📊 Reports Created

### 1. Incidents by Category (Bar Chart)
- Visualizes incident distribution across Software, Hardware, Network, Database, and Security
- Data source: Active Incidents
- Helps identify which categories generate the most tickets

### 2. Incidents by Priority (Pie Chart)
- Breaks down incidents by priority level (Critical, High, Moderate, Low)
- Enables quick identification of high-impact issues requiring immediate attention

### 3. Incidents by State (Bar Chart)
- Shows current incident pipeline across New, In Progress, and Resolved states
- Helps track team workload and resolution progress

---

## 📋 Dashboard Configuration

**Dashboard Name:** IT Operations Dashboard

Built using **ServiceNow Platform Analytics (Inline Editor)** with the following widgets:

- 📊 Incidents by Category — Bar Chart
- 🥧 Incidents by Priority — Pie Chart
- 📊 Incidents by State — Bar Chart

---

## ⚙️ Workflow Automation

**Workflow Name:** Auto-Assign Critical Incidents

Built using **Flow Designer** with the following logic:

```
Trigger:    Record Created → Incident Table
Condition:  Priority = 1 (Critical)
Action:     Assign to → Service Desk Group
            Set State → In Progress
            Send Notification → Assignment Group
```

**Business Value:** Eliminates manual triage of critical incidents, reduces response time, and ensures no high-priority ticket goes unassigned.

---

## 🗃️ Data & System Testing

### Data Entry
- Created **135 realistic incident records** covering:
  - 5 categories: Software, Network, Hardware, Database, Security
  - All priority levels: Critical, High, Moderate, Low
  - All states: New, In Progress, Resolved
  - Date range: January 2–21, 2026

### Data Import Process
- Designed a **CSV import template** with 15 mapped fields
- Configured **Import Sets** and **Transform Maps** for data validation
- Used **Background Scripts** for bulk data insertion and system testing

### Validation Tasks
- Verified report filters captured correct incident subsets
- Validated workflow triggers fired on Critical incident creation
- Checked System Logs for errors and audit trails
- Confirmed SLA rules applied correctly to imported records

---

## 👤 Administrative Tasks

- Created and configured test user accounts
- Assigned roles and permissions (ITIL, Admin)
- Managed assignment groups for workflow routing
- Configured notification rules for incident assignments
- Reviewed and resolved import errors during data validation

---

## 📁 Repository Structure

```
📦 servicenow-itsm-project
 ┣ 📂 data
 ┃ ┗ 📄 servicenow_incidents.csv       # 200-row sample incident dataset
 ┣ 📂 dashboard
 ┃ ┗ 📄 IT_Operations_Dashboard.pptx   # Exported dashboard screenshots
 ┣ 📂 scripts
 ┃ ┗ 📄 bulk_incident_insert.js        # Background script for data entry
 ┣ 📄 README.md
```

---

## 📸 Dashboard Preview

> *See `dashboard/IT_Operations.pptx` for full dashboard export*

---

## 🔑 Key Learnings

- Gained hands-on experience with **ServiceNow Zurich** — the latest enterprise release
- Understood the difference between **Platform Analytics** and legacy reporting modules
- Practiced **ITSM best practices** including SLA management, incident categorization, and priority-based routing
- Learned how **Import Sets and Transform Maps** work for enterprise data migrations
- Built and activated **automated workflows** using Flow Designer

---

## 🔗 Related Skills

`ServiceNow` `ITSM` `Flow Designer` `Platform Analytics` `Dashboards` `Reports` `Data Entry` `System Testing` `Workflow Automation` `Business Analysis` `KPI Reporting` `IT Operations`

---

## 👨‍💻 Author

**Darshan**
Master's in Data Science | University of New Haven
📧 [vdars1@unh.newhaven.edu]
🔗 [https://www.linkedin.com/in/vitturamadasudarshan]
🌐 [https://github.com/vtooooooo/portfolio/]

---

> *This project was completed on a free ServiceNow Personal Developer Instance (PDI) for learning and portfolio purposes.*
