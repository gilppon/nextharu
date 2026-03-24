# Implementation Plan: 3D Signpost & Fruit Camera Interaction

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
* **Description:** Implement 3D click interactions on the Signpost text boards to move the camera seamlessly to specific fruit locations on the house model.
* **Mappings:**
  * ROOTS ➡️ Orange (오렌지)
  * ADVENTURE ➡️ Strawberry (딸기)
  * TREASURES ➡️ Grape (포도)
  * HELLO ➡️ Apple (사과)
* **Success Criteria:**
  - [ ] Clicking each signboard text triggers camera movement.
  - [ ] Camera lands precisely centered on the respective fruit.
  - [ ] Smooth transition using GSAP inside `CameraController.jsx`.
* **Architecture Decisions:** Use invisible BoxGeometry meshes (`visible={false}`) covering the signpost text words to act as hitboxes, maintaining a clean visual while mapping the `onClick` pointer events.

## 📦 Dependencies
* [ ] Required: `@react-three/fiber` (for `onClick` events), `gsap` (for camera transitions).
* [ ] External: `zustand` (for global `cameraTarget` state management).

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement. (In 3D context, this means defining the target coordinates and logging them, or visually testing via browser subagent before committing).
* **Coverage Target:** Visual Interactive testing of all 4 signs.
* **Test File Location:** Visual Verification via `npm run dev` in browser.

---

## 🚀 Implementation Phases

### Phase 1: Define Camera Targets & State
**Goal:** Map out the exact 3D coordinates for the 4 fruits on the house model and add them to the global store/constants.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Define empty targets in `cameraTargets.js` for `orange`, `strawberry`, `grape`, `apple`.
**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.2**: Update `src/data/cameraTargets.js` with precise `position` and `lookAt` coordinates for each fruit (requires visual calibration).
**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.3**: Ensure `cameraTargets.js` structure is clean.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦 State/Targets defined before usage?
- [ ] **Test Coverage**: 🧪 Data structure valid?
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ No issues.
- [ ] **Manual Verification**: ✅ Targets defined correctly.

---

### Phase 2: Signpost Invisible Hitboxes
**Goal:** Place invisible clickable meshes over the text on the signpost model.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [ ] **Test 2.1**: Add simple visible boxes on the signpost to visually debug their placement.
**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 2.2**: In `ForestScene.jsx`, overlay `<mesh>` elements on ROOTS, ADVENTURE, TREASURES, HELLO.
- [ ] **Task 2.3**: Attach `onClick` and `onPointerOver`/`onPointerOut` events to map to the new camera targets and show a pointer cursor.
**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 2.4**: Set hitboxes to `visible={false}` to make them invisible for final polish.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **TDD Compliance**: 🚦 Red-Green-Refactor followed
- [ ] **Test Coverage**: 🧪 Interaction logic verifies
- [ ] **Code Quality**: 🧹 Lint & Types OK
- [ ] **Security Check**: 🛡️ No Vulnerabilities
- [ ] **Manual Verification**: ✅ Clicking hitboxes successfully moves the camera to the specified fruits.

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Hitboxes misaligned | High | Med | Temporarily make them visible (red opacity) to calibrate precisely against the model texture. |
| Camera clipping inside models | Med | High | Test final positions carefully and adjust `cameraTargets` coordinates. |

**Rollback Strategy:**
* If Phase 1/2 fails: Revert `ForestScene.jsx` and `cameraTargets.js` to previous commit using git.

## 📝 Notes & Learnings
* 

---

## 📏 Quality Gate Standards
(All standard Kodari conditions apply)
