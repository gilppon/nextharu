# Implementation Plan: Content Mapping Correction

**Status**: ✅ Completed
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
* **Description:** Correct the mapping between 3D signpost hitboxes (fruits) and the HTML overlay panels.
* **Success Criteria:**
  - [x] Clicking **ROOTS (Orange)** opens **About Me** panel.
  - [x] Clicking **TREASURE (Grape)** opens **Projects** panel.
  - [x] Clicking **HELLO (Apple)** opens **Contact Us** panel.
  - [x] Clicking **ADVENTURE (Strawberry)** opens **Games** panel.
* **Architecture Decisions:** Keep the current fruit-based internal naming but update the conditional rendering logic in `OverlayUI.jsx`.

## 📦 Dependencies
* [x] N/A

## 🧪 Test Strategy
* **Manual Verification:** Use the browser to click each sign/fruit and verify the overlay title and content.
* **TDD Principle:** Since this is a UI mapping fix, we will rely on browser-based verification (Playwright/Manual).

---

## 🚀 Implementation Phases

### Phase 1: Correcting the Mapping
**Goal:** Align UI panels with the physical signpost labels.

#### Tasks (TDD Cycle)

**🔴 RED: Verify current wrong state**
- [x] **Test 1.1**: Use browser to confirm `orange` opens `Projects` (Confirmed wrong initially).

**🟢 GREEN: Implement correct mapping**
- [x] **Task 1.2**: Update [OverlayUI.jsx](file:///e:/nextharu/haru-3d-portfolio/src/components/OverlayUI.jsx) to match user request:
  - `orange` -> `AboutPanel`
  - `strawberry` -> `GamesPanel`
  - `grape` -> `ProjectsPanel`
  - `apple` -> `ContactPanel`
- [x] **Task 1.3**: Update comments in [portfolioData.js](file:///e:/nextharu/haru-3d-portfolio/src/data/portfolioData.js).
- [x] **Task 1.4**: Update comments in [ForestScene.jsx](file:///e:/nextharu/haru-3d-portfolio/src/components/ForestScene.jsx).

**🔵 REFACTOR: Clean Up**
- [x] **Task 1.5**: Ensure panel titles match the signpost labels precisely if needed.

#### Quality Gate ✋ (STOP & CHECK)
- [x] **Manual Verification**: ✅ ROOTS opens About Me?
- [x] **Manual Verification**: ✅ TREASURE opens Projects?
- [x] **Manual Verification**: ✅ HELLO opens Contact?
- [x] **Manual Verification**: ✅ ADVENTURE opens Games?

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| User clicks wrong sign | Low | Med | Clear hitbox placement |

**Rollback Strategy:**
* Revert to previous git commit or backup files.

## 📝 Notes & Learnings
* Signpost labels (from top to bottom): ROOTS, ADVENTURE, TREASURES, HELLO.
* Fruit positions (from top to bottom): Orange, Strawberry, Grape, Apple.
