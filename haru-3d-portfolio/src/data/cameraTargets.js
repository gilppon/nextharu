/**
 * Camera target positions and lookAt points for the 3D Portfolio.
 * Measurements are estimated based on House scale (9.5) and position (2, 5, 0).
 */
const CAMERA_TARGETS = {
  entrance: {
    position: [0, 4, 10], // Front view, zoomed in
    lookAt: [0, 4, 0],     // Look straight at the house body
    label: 'Welcome',
  },
  orange: {
    position: [0.5, 5.5, 6],
    lookAt: [0.5, 4.5, 1],
    label: '🍊 Orange',
  },
  strawberry: {
    position: [2, 11, 8],
    lookAt: [2, 9, 1],
    label: '🍓 Strawberry',
  },
  grape: {
    position: [-4, 8, 6],
    lookAt: [-2.5, 6.5, 1],
    label: '🍇 Grape',
  },
  apple: {
    position: [4.5, 7, 5],
    lookAt: [4.5, 6.5, 0],
    label: '🍎 Apple',
  },
  terms: {
    position: [4.5, 7, 5],
    lookAt: [4.5, 6.5, 0],
    label: 'Terms of Service',
  },
  privacy: {
    position: [4.5, 7, 5],
    lookAt: [4.5, 6.5, 0],
    label: 'Privacy Policy',
  },
  refund: {
    position: [4.5, 7, 5],
    lookAt: [4.5, 6.5, 0],
    label: 'Refund Policy',
  },
  tokushoho: {
    position: [4.5, 7, 5],
    lookAt: [4.5, 6.5, 0],
    label: 'Tokushoho (Specified Commercial Transactions Act)',
  },
};

export default CAMERA_TARGETS;
