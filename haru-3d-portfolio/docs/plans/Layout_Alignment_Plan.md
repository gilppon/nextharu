# Implementation Plan: 3D Layout Alignment (Jesse Zhou style)

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
* **Description:** Update model positioning and camera angles to perfectly mimic the reference site (jesse-zhou.com).
* **Success Criteria:**
  - [ ] House is positioned centrally.
  - [ ] Camera is placed at an isometric 3/4 angle, looking down slightly (e.g., [X: 30, Y: 15, Z: 35]).
  - [ ] The signpost is placed immediately to the left of the house to create a single focal cluster.
  - [ ] The composition feels perfectly centered and tightly grouped.
* **Architecture Decisions:** Adjust fixed positioning in `ForestScene.jsx` and the introductory view in `CameraController.jsx` / `cameraTargets.js`.

## 📦 Dependencies
* [ ] Required: Canvas and Three Fiber dependencies already met.
* [ ] External: N/A

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement. (In this visual context, "testing" is visually capturing the composition).
* **Coverage Target:** Visual 100% matched to reference composition.

---

## 🚀 Implementation Phases

### Phase 1: Camera Angle Modification
**Goal:** Achieve the isometric 3/4 perspective.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [x] **Test 1.1**: Manually run subagent to capture current view (currently straight on).
**🟢 GREEN: Implement to Make Tests Pass**
- [x] **Task 1.2**: Modify `CameraController.jsx` starting position to an isometric angle (e.g., `position.set(35, 15, 35)`).
- [x] **Task 1.3**: Modify `cameraTargets.js` so the `entrance` target is at the same isometric angle.
**🔵 REFACTOR: Clean Up Code**
- [x] **Task 1.4**: Ensure Z/X depth feels correct (e.g., Z: 40, X: 40). Verify variables.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **Test Coverage**: 🧪 N/A (Visual)
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Manual Verification**: ✅ Feature visually works as expected?

---

### Phase 2: Signpost Positioning
**Goal:** Tightly group the signpost with the left side of the tree/house.

#### Tasks (TDD Cycle)
**🔴 RED: Write Failing Tests First**
- [x] **Test 2.1**: See current view where signpost overlaps or feels detached.
**🟢 GREEN: Implement to Make Tests Pass**
- [x] **Task 2.2**: Adjust `signpost.scene` position in `ForestScene.jsx` to be flush left with the house (e.g., `[-12, 0, 8]`), testing values visually to see what looks best alongside the `10.5` scaled house.
- [x] **Task 2.3**: Adjust signpost scale slightly if necessary.
**🔵 REFACTOR: Clean Up Code**
- [x] **Task 2.4**: Remove hard-coded values into variables if possible.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **TDD Compliance**: 🚦 Red-Green-Refactor followed
- [ ] **Code Quality**: 🧹 Lint & Types OK
- [ ] **Manual Verification**: ✅ Functional visual check.

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scale misalignment | High | High | Iteratively test with the subagent using screenshots. |

**Rollback Strategy:**
* If it fails: `git checkout src/components/ForestScene.jsx src/components/CameraController.jsx src/data/cameraTargets.js`

## 📝 Notes & Learnings
* Reference uses rotation to see the front and the right side of the main structure.

---

## 📏 Quality Gate Standards (품질 검문소 세부 기준)
1.  **빌드 & 컴파일 (Build & Compilation):** 에러(Error) 0개 필수.
2.  **보안 (Security):** N/A for visual layout.
3.  **기능성 (Functionality):** 요구사항대로 정상 작동 확인.
