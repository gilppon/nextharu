# Implementation Plan: Cloudflare Asset Optimization

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
* **Description:** Compress the 3D models (`house.glb` - 46MB, `signpost.glb` - 39MB) to bring the total project size well under Cloudflare's 25MB limit.
* **Success Criteria:**
  - [ ] Both GLB models are compressed to ideally under 5-10MB each.
  - [ ] The total `dist` package size is under 25MB.
  - [ ] Compressing the models does NOT break their materials, UVs, or hierarchy (which caused issues in the past for a different project, so we will be careful here).
* **Architecture Decisions:** 
  - We will use `@gltf-transform/cli` or `gltf-pipeline` to apply **Draco compression** (for geometry) and **WebP texture compression** (for textures, which are usually the largest part of GLB models).
  - The React code will need to be updated to load Draco models using a `useGLTF` hook configured with a DRACOLoader if Draco is used. But since `useGLTF` from `@react-three/drei` uses a built-in DRACOLoader CDN by default, we just need to verify it works.

## 📦 Dependencies
* [ ] Required: `gltf-pipeline` or `@gltf-transform/cli` (via npx)
* [ ] External: `public/models/house.glb`, `public/models/signpost.glb`

## 🧪 Test Strategy
* **TDD Principle:** Manual verification required. Compression algorithms can sometimes warp UV maps or break materials. We must load the app in the browser and visually confirm the models look correct.
* **Test File Location:** N/A

---

## 🚀 Implementation Phases

### Phase 1: GLB Texture and Geometry Compression
**Goal:** Drastically reduce model sizes using modern compression.

#### Tasks (TDD Cycle)

**🔴 RED: Write Failing Tests First**
- [ ] **Test 1.1**: Check current file size limits (Currently ~85MB total for models).

**🟢 GREEN: Implement to Make Tests Pass**
- [ ] **Task 1.2**: Compress `house.glb` using WebP/Draco: `npx @gltf-transform/cli webp ...` and `draco ...`
- [ ] **Task 1.3**: Compress `signpost.glb` using WebP/Draco.
- [ ] **Task 1.4**: Overwrite original files or update `ForestScene.jsx` to reference the `-compressed.glb` files.
- [ ] **Task 1.5**: If Draco is used, ensure `@react-three/drei`'s `useGLTF` is properly fetching the Draco decoders (usually default behavior works, but we must verify).

**🔵 REFACTOR: Clean Up Code**
- [ ] **Task 1.6**: Preload the new compressed models in `ForestScene.jsx`. Remove old backups once verified.

#### Quality Gate ✋ (STOP & CHECK)
**⚠️ Do NOT proceed until ALL checks pass**

- [ ] **Build & Compilation**: 🏗️ `npm run build` total size under 25MB?
- [ ] **Manual Verification**: ✅ Visually confirm models load in the browser without texture stretching or missing pieces.

---

## ⚠️ Risk & Rollback
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Draco artifacting | Med | Med | If Draco degrades the mesh too much, we will rely ONLY on WebP texture compression, which is lossless/high-quality and usually saves the most space anyway. |
| Loading errors | Low | High | We have backups of the original uncompressed files (`house.bak.glb`) before modifying. |

**Rollback Strategy:**
* If compression ruins the model: revert to the original files and attempt a less aggressive compression setting, or use Blender to manually reduce texture sizes.

## 📝 Notes & Learnings
* [Waiting to begin]
