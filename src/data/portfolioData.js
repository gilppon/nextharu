/**
 * ============================================================
 * 📦 PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * ============================================================
 * 대표님! 여기 이 파일만 수정하시면 3D 화면 UI에 자동 반영됩니다!
 * 새 프로젝트를 추가하고 싶으시면 해당 카테고리 배열에 객체 하나만 추가하세요.
 * ============================================================
 */

const portfolioData = {
  // 🍓 딸기 (Strawberry | ADVENTURE) 클릭 시 표시
  games: [
    {
      id: 'vocal-orbit',
      title: 'Vocal Orbit',
      description: 'A voice-controlled space flight game. Pilot your spaceship using your own voice!',
      url: 'https://vocal.next-haru.com',
      thumbnail: '/thumbnails/vocal-orbit.png',
      tags: ['Voice Control', 'Game', 'Expo Web'],
    },
    {
      id: 'japan-run-fit',
      title: 'Japan Run Fit',
      description: 'A fitness running game that lets you travel through Japan while you run.',
      url: 'https://fit.next-haru.com',
      thumbnail: '/thumbnails/japan-run-fit.png',
      tags: ['Fitness', 'Game'],
    },
  ],

  // 🍊 오렌지 (Orange | ROOTS) 클릭 시 표시
  about: {
    name: 'Next Haru',
    title: 'AI Crafting Digital Solutions for Everyday Life',
    bio: `As a Korean developer and father of two living in Japan, my greatest inspiration comes from the chaos and beauty of real life. Whether it’s an AI tool for busy parents, an immersive game, or a fitness app that moves the soul, I create at the synergy of technology and human experience. I believe that the best code is written with empathy, designed to make every "Nextharu" (Next Day) better than the last`,
    skills: ['React', 'Flutter', 'Expo', 'Firebase', 'Three.js', 'Node.js'],
  },

  // 🍇 포도 (Grape | TREASURES) 클릭 시 표시
  projects: [
    {
      id: 'localbank',
      title: 'LocalBank',
      description: 'A premium, secure offline vault for financial assets with PayPal and Email integration.',
      url: 'https://localbank.next-haru.com',
      thumbnail: '/thumbnails/localbank.png',
      tags: ['Next.js', 'FinTech', 'Premium'],
    },
  ],

  // 🍎 사과 (Apple | HELLO) 클릭 시 표시
  contact: {
    email: 'support@next-haru.com',
    github: 'https://github.com/gilppon',
    twitter: 'https://twitter.com/nextharu',
  },
};

export default portfolioData;
