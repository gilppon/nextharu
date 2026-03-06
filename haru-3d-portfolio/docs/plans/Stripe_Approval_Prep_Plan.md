# Implementation Plan: Stripe Approval Preparation & Nav Bug Fix

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
* **Description:** Fixing the UI bug where legal pages appear as main 3D navigation buttons, and implementing final requirements for Stripe review (Phone Number in Tokushoho, and a permanent footer link to legal pages).
* **Success Criteria:**
  - [ ] Legal pages ('terms', 'privacy', 'refund', 'tokushoho') no longer appear in the bottom 3D navigation menu.
  - [ ] Tokushoho page contains a dedicated slot for the customer service Phone Number.
  - [ ] A discreet footer link is added to the main UI to access legal pages without needing to navigate via the 3D scene, ensuring Stripe reviewers can always find them.
* **Architecture Decisions:** 
  - `App.jsx` `NavHints` will explicitly filter out legal page keys from `CAMERA_TARGETS`.
  - A new `FooterLegalLinks` component will be added to `App.jsx` or `OverlayUI.jsx` to render permanent text links at the bottom of the screen.

## 📦 Dependencies
* [ ] Required: None
* [ ] External: None

## 🧪 Test Strategy
* **TDD Principle:** Write tests FIRST, then implement. (UI changes will be verified manually via Subagent).
* **Coverage Target:** N/A for minor view changes.
* **Test File Location:** Manual visual tests.

---

## 🚀 Implementation Phases

### Phase 1: Fix NavHints Bug & Add Footer Links
**Goal:** Remove legal pages from the bottom navigation array and provide a global footer for them.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Manually verify the buttons exist in the bottom nav.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.3**: Edit `src/App.jsx` -> `NavHints` to exclude `['terms', 'privacy', 'refund', 'tokushoho']`.
- [ ] **Task 1.4**: In `src/App.jsx`, add a permanent footer for "Terms | Privacy | Refund | Tokushoho" with `onClick` matching the `setTarget` logic.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.5**: Ensure footer styling is unobtrusive (e.g., small, gray text at the very bottom absolute position).

#### Quality Gate ✋ (STOP & CHECK)
**⚠️ Do NOT proceed until ALL checks pass**

- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦
- [ ] **Test Coverage**: 🧪 
- [ ] **Code Quality**: 🧹 Linting clean? Type checks pass?
- [ ] **Security Check**: 🛡️ SQLi/XSS check, No hardcoded secrets, `npm audit` pass?
- [ ] **Manual Verification**: ✅ Feature works as expected in browser/app?

---

### Phase 2: Update Tokushoho (Requires User Action)
**Goal:** Add a phone number field for Japanese Specified Commercial Transactions Act compliance.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 2.1**: Check `Tokushoho.jsx` for phone number.

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 2.3**: Update `src/components/Tokushoho.jsx` to include `{ label: 'Phone Number', value: '[USER_PROVIDED_NUMBER]' }`.

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 2.5**: N/A

#### Quality Gate ✋ (STOP & CHECK)
- [ ] **Build & Compilation**: 🏗️ Build Success
- [ ] **TDD Compliance**: 🚦 Red-Green-Refactor followed
- [ ] **Test Coverage**: 🧪 Tests Pass & Coverage met
- [ ] **Code Quality**: 🧹 Lint & Types OK
- [ ] **Security Check**: 🛡️ No Vulnerabilities
- [ ] **Manual Verification**: ✅ Functional Check

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Footer overlaps game UI | Low | Med | Use proper z-index and absolute positioning at bottom. |

**Rollback Strategy:**
* If Phase 1 fails: Revert `App.jsx` changes.

## 📝 Notes & Learnings
* Legal pages were added to `cameraTargets` to prevent `CameraController` from erroring out, which automatically generated buttons. Filtering them out in `NavHints` logic is the cleanest fix.
---

## 📏 Quality Gate Standards (품질 검문소 세부 기준)
...
