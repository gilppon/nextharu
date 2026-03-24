# Implementation Plan: 3D NEXTHARU Loading Screen

**Status**: 🔄 In Progress
**Started**: 2026-03-06
**Last Updated**: 2026-03-06

---

**⚠️ CRITICAL INSTRUCTIONS**: After completing each phase:
1. ✅ Check off completed task checkboxes
2. 🧪 Run all quality gate validation commands
3. ⚠️ Verify ALL quality gate items pass
4. 📅 Update "Last Updated" date above
5. 📝 Document learnings in Notes section
6. ➡️ Only then proceed to next phase

⛔ **DO NOT skip quality gates or proceed with failing checks**

---

## 📋 Overview
* **Description:** Replace the current "Growing Tree" loading screen with a high-end "NEXTHARU" loading screen using the 8 image assets provided by the user. The letters will appear one-by-one with a 'pop' effect using GSAP.
* **Success Criteria:**
  - [ ] 8 image assets (N, E, X, T, H, A, R, U) are loaded and displayed.
  - [ ] GSAP staggered animation makes each letter "pop" into view.
  - [ ] CSS 3D transforms and shadows are applied to enhance the chunky volume effect.
  - [ ] Smooth fade-out transition to the main portfolio scene when loading reaches 100%.
* **Architecture Decisions:** 
  - Use React components + Framer Motion/GSAP instead of a full Three.js canvas for the loading screen to ensure it overlays smoothly and performs well while the main Three.js scene loads in the background.
  - Since the provided assets are JPEGs (which lack transparency), we will use CSS `mix-blend-mode: screen` (assuming a black background) or `multiply` (assuming white) to blend them into the dark loading screen background, or display them as distinct stylized Polaroid/cards if the background doesn't blend well.

## 📦 Dependencies
* [ ] Required: `gsap` (already in project)
* [ ] Required: `framer-motion` (already in project)

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement. (UI component testing primarily involves visual verification, but we will ensure the component renders without crashing).
* **Coverage Target:** Integration (Critical Paths for loading screen unmounting).
* **Test File Location:** `N/A` (Visual UI feature)

---

## 🚀 Implementation Phases

### Phase 1: [Loading Screen UI Overhaul]
**Goal:** Replace existing tree loading logic with the new NEXTHARU image array and GSAP animations.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: (Manual) LoadingScreen component should render 8 image tags.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.3**: Import the 8 specific images in `LoadingScreen.jsx` with their exact extensions (`N.jpg`, `E.jpg`, `X.jpg`, `T.jpeg`, `H.jpeg`, `A.jpeg`, `R.jpeg`, `U.jpeg`).
- [ ] **Task 1.4**: Map over the images to create chunky 3D-styled image containers.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.5**: Apply CSS `mix-blend-mode` and 3D transform properties in `LoadingScreen.css` to mock the requested depth.

#### Quality Gate ✋ (STOP & CHECK)
**⚠️ Do NOT proceed until ALL checks pass**

- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦
- [ ] **Test Coverage**: 🧪 
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ 
- [ ] **Manual Verification**: ✅ Letters pop in sequentially and fade out gracefully?

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| JPEG transparency issue | High | Med | Use `mix-blend-mode: screen` if images have black backgrounds, or apply a clever mask/border styling. |

**Rollback Strategy:**
* If Phase 1 fails: `git checkout src/components/LoadingScreen.jsx src/components/LoadingScreen.css` to revert to the tree loading screen.

## 📝 Notes & Learnings
* 

---

## 📏 Quality Gate Standards (품질 검문소 세부 기준)
... (standard skipped for brevity)
