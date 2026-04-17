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
      id: 'ninja-pattern-slice',
      title: 'Ninja Pattern Slice',
      description: 'High-speed Pattern Slice action where 0.1s makes all the difference! Break your limits now in browser.',
      url: 'https://ninja.next-haru.com',
      thumbnail: '/thumbnails/ninja-pattern-slice.png',
      tags: ['Action', 'Game', 'Roguelike'],
    },
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
    {
      id: 'galaxy-words',
      title: 'Galaxy Words',
      description: 'AI-powered swipe party word game. AI가 실시간으로 생성하는 트렌드 단어로 즐기는 스릴 넘치는 파티 게임!',
      url: 'https://word-dj5.pages.dev/',
      thumbnail: '/thumbnails/galaxy-words.png',
      tags: ['AI', 'Game', 'Party', 'Swipe'],
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
    {
      id: 'aether',
      title: 'Aether',
      description: 'Sync your biological rhythm with celestial insights. AI-driven archetype analysis and spiritual rituals for modern life.',
      url: 'https://aether.next-haru.com',
      thumbnail: '/thumbnails/aether.png',
      tags: ['AI', 'Spiritual', 'Next.js', 'Premium'],
    },
    {
      id: 'kanjigen-ai',
      title: 'KanjiGen AI — Your Heritage Artist',
      description: 'AI-powered authentic Japanese name generation with bespoke Hanko seals and family heritage design.',
      url: 'https://kanji.next-haru.com',
      thumbnail: '/thumbnails/kanjigen-ai.png',
      tags: ['AI', 'Heritage', 'Arts', 'Next.js'],
    },
  ],

  // 🍎 사과 (Apple | HELLO) 클릭 시 표시
  contact: {
    email: 'support@next-haru.com',
    github: 'https://github.com/gilppon',
    twitter: 'https://twitter.com/nextharu',
    LinkedIn: 'https://www.linkedin.com/in/next-haru',
  },
};

export default portfolioData;
