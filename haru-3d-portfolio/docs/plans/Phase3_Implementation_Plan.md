# Implementation Plan: Phase 3 - Content & UI Mapping

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
* **Description:** Update the React UI to correctly render content when the newly implemented 3D fruit targets (`orange`, `strawberry`, `grape`, `apple`) are clicked, replacing the old arcade/jukebox mappings. Enhance the Glassmorphism CSS for a more natural, premium aesthetic.
* **Success Criteria:**
  - [ ] Clicking the Orange displays the Games or Projects panel.
  - [ ] Clicking the Strawberry displays another panel.
  - [ ] Clicking the Apple displays the About panel.
  - [ ] Clicking the Grape displays the Contact panel.
  - [ ] OverlayUI CSS reflects an upgraded Glassmorphism design.
* **Architecture Decisions:** Map the fruit target names (`orange`, `strawberry`, `apple`, `grape`) to the existing semantic data categories (`games`, `projects`, `contact`, `about`) in `OverlayUI.jsx` so that `portfolioData.js` remains a clean source of truth.

## 📦 Dependencies
* [ ] Required: React, existing `usePortfolioStore`
* [ ] External: None

## 🧪 Test Strategy
* **TDD Principle:** Manual verification will be critical here due to the visual nature of the UI map to 3D targets. Overlays should trigger appropriately without console errors.
* **Coverage Target:** Validate overlay UI transitions manually.
* **Test File Location:** N/A for this visual mapping phase.

---

## 🚀 Implementation Phases

### Phase 1: Update UI Mapping for Fruit Targets
**Goal:** Modify `OverlayUI.jsx` to respond to the new 3D targets instead of the old bar targets.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Manually verify clicking a fruit opens the UI (currently fails because UI expects 'arcade', 'jukebox', etc.).

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.2**: Update `OverlayUI.jsx` conditionals:
  - `currentTarget === 'orange'` -> `<ProjectsPanel />`
  - `currentTarget === 'strawberry'` -> `<GamesPanel />`
  - `currentTarget === 'apple'` -> `<AboutPanel />`
  - `currentTarget === 'grape'` -> `<ContactPanel />`

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.3**: Refine `OverlayUI.css` for a more natural glassmorphism aesthetic (softer blur, better borders, better contrast).

#### Quality Gate ✋ (STOP & CHECK)
**⚠️ Do NOT proceed until ALL checks pass**

- [ ] **Build & Compilation**: 🏗️ Project builds without errors?
- [ ] **TDD Compliance**: 🚦 Manual verification setup?
- [ ] **Test Coverage**: 🧪 N/A (Manual visual check)
- [ ] **Code Quality**: 🧹 Linting clean?
- [ ] **Security Check**: 🛡️ No issues?
- [ ] **Manual Verification**: ✅ UI opens correctly for each fruit, back button works, and CSS looks premium.

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| UI state mismatch | Low | Med | Revert `OverlayUI.jsx` to previous state via Git. |

**Rollback Strategy:**
* If Phase 1 fails: `git restore src/components/OverlayUI.jsx src/components/OverlayUI.css`

## 📝 Notes & Learnings
* [Waiting to begin]

---

## 📏 Quality Gate Standards (품질 검문소 세부 기준)
1. **빌드 & 컴파일 (Build & Compilation):** 에러 0개.
2. **TDD 준수 (TDD Compliance):** 테스트 코드 먼저.
3. **테스트 커버리지 (Test Coverage):** 80% 이상.
4. **코드 품질 (Code Quality):** 린트 에러 0.
5. **보안 (Security):** `npm audit` 패스.
6. **기능성 (Functionality):** 정상 작동 확인.
