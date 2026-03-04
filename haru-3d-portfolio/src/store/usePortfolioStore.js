import { create } from 'zustand';

/**
 * Global state store for the 3D portfolio.
 * Controls camera target, UI overlay visibility, and current section.
 */
const usePortfolioStore = create((set) => ({
  // Current camera target name: 'entrance', 'arcade', 'jukebox', 'phone', 'board'
  currentTarget: 'entrance',
  
  // Whether the UI overlay panel is visible
  isOverlayVisible: false,
  
  // Whether the intro animation has completed
  introComplete: false,

  // Set the camera target and hide overlay during transition
  setTarget: (target) => set({ currentTarget: target, isOverlayVisible: false }),
  
  // Show the overlay (called after camera arrives)
  showOverlay: () => set({ isOverlayVisible: true }),
  
  // Hide overlay
  hideOverlay: () => set({ isOverlayVisible: false }),

  // Mark intro as complete
  completeIntro: () => set({ introComplete: true }),
}));

export default usePortfolioStore;
