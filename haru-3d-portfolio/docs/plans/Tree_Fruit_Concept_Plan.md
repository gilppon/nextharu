# Implementation Plan: Forest House & Signpost Interactive Portfolio

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
* **Description:** Transition the 3D portfolio to a dual-model "Forest House" concept using `house.glb` and `signpost.glb`. The user starts facing the signpost and the house. Clicking a signpost text OR the corresponding fruit directly triggers a cinematic camera zoom to that fruit, displaying related UI content.
* **Dual-Trigger Mapping:**
  - `ROOTS` (Signpost) <--> **Apple** (House) -> "About" Content
  - `ADVENTURE` (Signpost) <--> **Strawberry** (House) -> "Games" Content
  - `HELLO` (Signpost) <--> **Orange** (House) -> "Contact" Content
  - `TREASURE` (Signpost) <--> **Grape** (House) -> "Projects" Content
* **Success Criteria:**
  - [ ] `house.glb` and `signpost.glb` load correctly and are positioned naturally together.
  - [ ] 3D Text or textures on the signpost clearly display the 4 navigation options.
  - [ ] Clicking a signpost option flies the camera to the corresponding house fruit.
  - [ ] Clicking the fruit directly flies the camera to that exact same view.
  - [ ] Glassmorphism UI overlays display correct matching data.
  - [ ] "Back" resets the camera to the main view containing both the house and signpost.
* **Architecture Decisions:**
  - **Shared Target State:** Both the signpost meshes and the fruit proxy-hitboxes will dispatch the exact same `setTarget(fruitId)` global state command.
  - **Camera Logic:** Target coordinates will be focused purely on the fruits. The signpost acts strictly as a remote control.

## 📦 Dependencies
* [ ] Required: `@react-three/drei` (specifically `Text` or `Text3D` for signpost labels if not baked into the texture), `gsap`, `zustand`.
* [ ] External: `house.glb`, `signpost.glb` (both located in `e:\nextharu\`).

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement.
* **Coverage Target:** Unit ≥80% for state management ensuring both triggers update the same target state.
* **Test File Location:** `src/__tests__/`

---

## 🚀 Implementation Phases

### Phase 1: Dual Model Foundation & Placement
**Goal:** Load both the house and the signpost into the React Three Fiber canvas. Position them so the initial camera view looks great.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Test that `App.jsx` renders `Scene.jsx` without crashing when loading multiple GLB models.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.2**: Move `house.glb` and `signpost.glb` from `e:\nextharu\` into the project's `public/models/` folder.
- [ ] **Task 1.3**: Update `Scene.jsx` to load both models using `useGLTF`.
- [ ] **Task 1.4**: Position, scale, and rotate `signpost.glb` so it sits nicely in the foreground or beside `house.glb`.
- [ ] **Task 1.5**: Update lighting (ambient, directional) to suit the whimsical forest aesthetic.
- [ ] **Task 1.6**: Set the initial default camera position to frame both models perfectly.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.7**: Ensure models share materials where possible or use `<Suspense>` efficiently.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦 Tests written BEFORE code? (Red -> Green)
- [ ] **Test Coverage**: 🧪 All tests pass (100%) & Logic coverage ≥ 80%?
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ No hardcoded secrets, `npm audit` pass?
- [ ] **Manual Verification**: ✅ Visually confirm both models are rendered beautifully side-by-side.

---

### Phase 2: Signpost Text & Dual Interactivity (Hitboxes)
**Goal:** Add text to the signpost, define proxy hitboxes for the fruits, and link both to the camera controller.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 2.1**: Test the state management (`usePortfolioStore`) correctly updates `currentTarget` whether the source is a fruit click or a signpost click.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 2.2**: Use `@react-three/drei` `<Text>` components to attach "ROOTS", "ADVENTURE", "HELLO", "TREASURE" to the `signpost.glb` mesh. Add `onClick` handlers to these texts or the signpost plates.
- [ ] **Task 2.3**: In `HitboxZones.jsx`, map invisible proxy hitboxes over the Apple, Strawberry, Orange, and Grape on the `house.glb`.
- [ ] **Task 2.4**: Link all `onClick` handlers (both signpost and fruits) to the global `setTarget()` state.
- [ ] **Task 2.5**: Define the `cameraTargets.js` coordinates for the 4 fruits so `CameraController.jsx` knows where to fly using GSAP.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 2.6**: Optimize raycasting by only making the proxy hitboxes and signpost text interactive (ignore complex house geometry).

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **TDD Compliance**: 🚦 Red-Green-Refactor followed
- [ ] **Test Coverage**: 🧪 Tests Pass & Coverage met
- [ ] **Manual Verification**: ✅ Functional Check: Clicking "ROOTS" on the signpost OR clicking the Apple flies the camera to the exact same Apple view.

---

### Phase 3: UI Integration & Content Mapping
**Goal:** Display the matching Glassmorphism UI when the camera focuses on a fruit.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 3.1**: Write tests ensuring `OverlayUI.jsx` displays ROOT content for Apple target, ADVENTURE for Strawberry, etc.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 3.2**: Update `portfolioData.js` to structure content around the 4 new conceptual keys (roots, adventure, hello, treasure).
- [ ] **Task 3.3**: Update `OverlayUI.jsx` to select the right data based on `currentCameraTarget`.
- [ ] **Task 3.4**: Ensure the "Back to Forest" button fades out the UI and triggers a GSAP flight back to the initial dual-model framing.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 3.5**: Adjust CSS/HTML for UI overlays to fit the whimsical forest mood.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **Test Coverage**: 🧪 Tests Pass
- [ ] **Manual Verification**: ✅ Functional Check: Full flow works flawlessly (Sign/Fruit Click -> Fly -> UI Shows -> Back Click -> Reset).

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GLB File Size (Heavy combined load) | High | High | We have ~74MB combined. Must use Draco compression (`gltf-pipeline`) on house.glb and signpost.glb to reduce size significantly before production. |
| Raycast overlapping | Med | Med | Ensure hitboxes are slightly oversized and pushed forward, use `e.stopPropagation()` on clicks. |

**Rollback Strategy:**
* If dual models drop FPS significantly, merge them in Blender to reduce draw calls, or revert to single model approach.

## 📝 Notes & Learnings
* [Waiting to begin]
