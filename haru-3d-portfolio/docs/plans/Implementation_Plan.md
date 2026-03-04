# Implementation Plan: 3D Interactive Bar Portfolio

**Status**: 🔄 In Progress
**Started**: 2026-03-04
**Last Updated**: 2026-03-04

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
* **Description:** Build a highly polished, interactive 3D WebGL portfolio similar to jesse-zhou.com using the provided `old_bar.glb` model. Users start at the entrance and can click specific 3D objects (Arcade, Jukebox, Telephone, Notice Board) to trigger cinematic camera movements and reveal HTML/CSS Glassmorphism UI overlays indicating different sections (Games, Projects, Contact, About).
* **Success Criteria:**
  - [ ] `old_bar.glb` loads correctly via React Three Fiber.
  - [ ] Cinematic camera entry animation upon loading.
  - [ ] Raycasting (clicking) detects specific target areas or transparent proxy hitboxes.
  - [ ] Smooth GSAP camera transition to the clicked object's view.
  - [ ] Scalable UI overlay that reads from a central data file (`projects.json` or similar) to easily add new projects without touching 3D logic.
* **Architecture Decisions:**
  - **Core Framework:** React + Vite for fast development and state management.
  - **3D Engine:** Three.js wrapped in `@react-three/fiber` (R3F) and `@react-three/drei` for rapid, component-based 3D scene building.
  - **Animation:** `gsap` for easing camera transitions.
  - **Data Structure:** Separating the 3D interaction layer from the Content layer. Content will be driven by a static config file, making it infinitely expandable.

## 📦 Dependencies
* [ ] Required: `react`, `react-dom`, `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `tailwindcss` (for rapid UI styling), `zustand` (optional, for global state like 'currentView').
* [ ] External: 3D Model: `e:\nextharu\old_bar.glb`

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement. (Using Vitest + React Testing Library).
* **Coverage Target:** Unit ≥80% for data mapping and UI state logic (Testing direct WebGL canvas clicks via automated tests is notoriously flaky, so we will focus heavy automated testing on the UI layer and camera state calculation, relying on manual verification for the pure visual 3D interactions).
* **Test File Location:** `src/__tests__/`

---

## 🚀 Implementation Phases

### Phase 1: Foundation & 3D Scene Initialization
**Goal:** Initialize the Vite+React application, setup the Three.js Canvas, and successfully render the `old_bar.glb` with basic lighting and a default camera view.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Test that the main `App` component renders the `<Canvas>` and a fallback `<Loader>`.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.2**: Project scaffolding (`npm create vite@latest haru-3d-portfolio -- --template react`).
- [ ] **Task 1.3**: Install dependencies (`npm i three @react-three/fiber @react-three/drei gsap tailwindcss`).
- [ ] **Task 1.4**: Load and render the GLB model using `useGLTF`. Add ambient and directional lighting.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.5**: Extract the Scene into a separate `BarScene.jsx` component. Optimize model rendering (shadows, materials).

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Project builds via `npm run build`?
- [ ] **TDD Compliance**: 🚦 Tests written BEFORE code? (Red -> Green)
- [ ] **Test Coverage**: 🧪 Tests pass?
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ `npm audit` pass?
- [ ] **Manual Verification**: ✅ Visually confirm the 3D bar scene is rendered correctly in the browser without crashing.

---

### Phase 2: Interactivity & Cinematic Camera Flights
**Goal:** Define the interactive zones (Entrance, Arcade, Jukebox, Telephone, Notice Board) and implement smooth camera transitions using GSAP when these zones are clicked.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [ ] **Test 2.1**: Test the state management logic (e.g., Zustand store) that holds the `currentCameraTarget`.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 2.2**: Map spatial coordinates for the key destinations.
- [ ] **Task 2.3**: Create invisible `<mesh>` objects (Proxy Hitboxes) placed over the Arcade, Jukebox, Phone, and Board to capture `onClick` events.
- [ ] **Task 2.4**: Create a `CameraController` component utilizing `gsap.to(camera.position)` and `gsap.to(camera.rotation)` based on the globally selected target.
- [ ] **Task 2.5**: Implement the "Entrance" intro animation on mount.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 2.6**: Fine-tune GSAP easings (`power3.inOut`) for maximum cinematic feel.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **TDD Compliance**: 🚦 Red-Green-Refactor followed
- [ ] **Test Coverage**: 🧪 State logic tests pass
- [ ] **Manual Verification**: ✅ Clicking the arcade machine precisely flies the camera to the screen? Clicking back returns to entrance?

---

### Phase 3: Scalable Data-Driven UI Overlays
**Goal:** Create sleek HTML/CSS UI overlays that appear when the camera reaches its destination. These UIs will read from a configuration file, allowing infinite future project additions.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [ ] **Test 3.1**: Write tests ensuring the `ProjectListContainer` correctly renders X number of items based on a mocked `projects.json` structure.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 3.2**: Create `src/data/portfolioData.js` defining categories: `games`, `projects`, `contact`, `about`.
- [ ] **Task 3.3**: Build UI components (`GameWidget`, `ProjectWidget`) using TailwindCSS + Glassmorphism style.
- [ ] **Task 3.4**: Integrate Drei's `<Html>` or a fixed Z-index overlay DOM layer that listens to the `currentCameraTarget` state and fades in the appropriate data category.
- [ ] **Task 3.5**: Add internal links/iframes for `app.haruharu.com`, `game.haruharu.com`.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 3.6**: Polish UI animations (framer-motion or CSS transitions).

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **Test Coverage**: 🧪 UI tests pass
- [ ] **Manual Verification**: ✅ Adding a new entry to `portfolioData.js` instantly reflects in the Music Box UI without 3D code changes?

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| 3D Model Performance (7.9MB) | High | Med/High | Implement Drei's `<Suspense>` and `useProgress` for a loading screen. Draco compression if necessary. |
| Complex Camera Gimbal Lock | Low | High | Use Quaternion math or `lookAt` targeting instead of raw Euler rotation tweens in GSAP. |

**Rollback Strategy:**
* Version control via Git. If Phase 2 camera math fails, rollback to static Phase 1 view and re-evaluate matrix math.

## 📝 Notes & Learnings
* [Waiting to begin]
