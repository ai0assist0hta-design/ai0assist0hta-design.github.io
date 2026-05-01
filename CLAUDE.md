# ANTIGRAVITY — Project Master Context

## What is this file?
This is the single source of truth for the ANTIGRAVITY project. It tracks design principles, implemented features, and future goals.

---

## 1. Project Definition
**Name**: ANTIGRAVITY (Semantic Redaction)
**One-liner**: An interactive archival experience exploring Solzhenitsyn's themes of truth, lies, and the human heart through brutalist UI and 3D physics.
**Category**: Data Visualization × Interactive Archive × WebGL

---

## 2. Core Themes (Implemented)
| ID | Subject | Status | Visual Mechanism |
|----|---------|--------|------------------|
| 1 | THE STRUCTURE OF LIES | Implemented | 3D Utility Pole / Kinetic Typography |
| 2 | IDEOLOGY AS JUSTIFICATION | Implemented | CRT Screen Wall / Holographic Trails |
| 3 | THE GULAG AND IMPRISONMENT | Implemented | Binary Sphere / Elastic Tension Core |
| 4 | CONSCIENCE | **IN PROGRESS** | 3D Division Symbol / Good vs Evil Physics |
| 5 | RESISTANCE | Planned | TBD |
| 6 | BUT NOT THROUGH ME | Planned | TBD |

---

## 3. Design Principles
- **Brutalist Aesthetic**: White/Gray backgrounds, Crimson Red (#dc143c) accents.
- **Semantic Redaction**: Interactive text where truth is hidden/redacted and violence is exposed.
- **Physics-Driven Interaction**: Each subpage features a unique 3D/2D physics interaction representing the theme.
- **Asymmetrical Layout**: 8-column grid system with fixed sidebars.

---

## 4. Setup & Execution
This is a static project. To run locally:
```bash
# Using Python
python3 -m http.server 8000
# Then open http://localhost:8000/website/index.html
```
