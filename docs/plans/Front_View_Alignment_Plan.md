# Implementation Plan: Front View Alignment

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
* **Description:** Change the initial camera view from an isometric angle to a straight-on front view matching the user's provided screenshot. Also, ensure the signpost is clearly positioned on the left side of this new perspective.
* **Architecture Decisions:** Use `OrbitControls` to manually find the perfect camera angle in the browser, extract the coordinates via the built-in `L` key debug feature, and hardcode them into `cameraTargets.js` and `App.jsx`.

## 🚀 Implementation Phases

### Phase 1: Determine Camera Coordinates & Reposition Signpost
**Goal:** Find the exact `position` and `lookAt` that matches the reference image and place the signpost relative to it.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [x] **Test 1.1**: Current `entrance` camera target is `[8, 6, 8]` (isometric view), not the straight-on front view requested.

**🟢 GREEN: Implement to Make Tests Pass**
- [/] **Task 1.2**: Position camera strictly in a front orthographic-style or perspective front view by running a script or subagent to find the exact coordinates.
- [/] **Task 1.3**: Update `cameraTargets.js` `entrance` target with the new coordinates (e.g., `[0, 4, 12]` and looking at `[0, 2, 0]`).
- [/] **Task 1.4**: Update `App.jsx` default `Canvas` camera position.
- [ ] **Task 1.5**: Update `ForestScene.jsx` to position the signpost clearly on the left side of the new view (`[-9, 0, 8]`) with an appropriate rotation to face the camera.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.6**: Ensure zoom limits in OrbitControls allow panning comfortably in the front view.

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦 Tests written BEFORE code? (Red -> Green)
- [ ] **Test Coverage**: 🧪 Visual match with the user's screenshot.
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ N/A (UI change)
- [ ] **Manual Verification**: ✅ Feature works as expected in browser/app?
