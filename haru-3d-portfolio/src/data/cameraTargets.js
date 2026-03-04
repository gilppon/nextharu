/**
 * Camera target positions and lookAt points.
 * Model is scaled to 0.5 and offset by Y=-1.5
 * 
 * Layout (from screenshots):
 * Far Left:  Arcade machine, sports memorabilia wall
 * Center-Left: Vend-o-mat (green machine), door
 * Center: Tables, chairs, green carpet floor
 * Center-Right: Bar counter with bottles, "Good Ol' Days" sign
 * Far Right: TV screen, jukebox area
 */
const CAMERA_TARGETS = {
  entrance: {
    position: [0, 1.2, 2.0], // Positioned inside the bar
    lookAt: [0, 0.8, -1.0],  // Looking straight forward (not at the floor)
    label: 'Welcome',
  },
  arcade: {
    position: [-1.8, 0.6, 1.5],
    lookAt: [-2.5, 0.3, 0],
    label: '🎮 Games',
  },
  jukebox: {
    position: [1.8, 0.6, 1.5],
    lookAt: [2.5, 0.3, 0],
    label: '🎵 Projects',
  },
  phone: {
    position: [0.5, 0.6, 0.5],
    lookAt: [1.5, 0.3, -0.8],
    label: '📞 Contact',
  },
  board: {
    position: [-0.5, 0.6, 0.5],
    lookAt: [-1.5, 0.5, -0.8],
    label: '📋 About Me',
  },
};

export default CAMERA_TARGETS;
