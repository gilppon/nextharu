/**
 * ============================================================
 * 📦 PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * ============================================================
 * 대표님! 여기 이 파일만 수정하시면 3D 화면 UI에 자동 반영됩니다!
 * 새 프로젝트를 추가하고 싶으시면 해당 카테고리 배열에 객체 하나만 추가하세요.
 * ============================================================
 */

const portfolioData = {
  // 🎮 오락기 (Arcade Machine) 클릭 시 표시
  games: [
    {
      id: 'animal-world-cup',
      title: 'Animal World Cup',
      description: '동물들의 월드컵 대결! 귀여운 동물 캐릭터로 축구를 즐기세요.',
      url: 'https://game.haruharu.me',
      thumbnail: '/thumbnails/animal-world-cup.png',
      tags: ['Game', 'Mobile', 'Unity'],
    },
    {
      id: 'japan-run-fit',
      title: 'Japan Run Fit',
      description: '달리면서 일본을 여행하는 피트니스 러닝 게임.',
      url: 'https://fit.haruharu.me',
      thumbnail: '/thumbnails/japan-run-fit.png',
      tags: ['Fitness', 'Game', 'Flutter'],
    },
  ],

  // 🎵 주크박스 (Jukebox) 클릭 시 표시
  projects: [
    {
      id: 'diet-app',
      title: '식단 관리 & 가계부',
      description: '일상의 식단과 가계부를 한 곳에서 관리하는 올인원 앱.',
      url: 'https://app.haruharu.me',
      thumbnail: '/thumbnails/diet-app.png',
      tags: ['Web App', 'React', 'Firebase'],
    },
  ],

  // 📞 전화기 (Phone) 클릭 시 표시
  contact: {
    email: 'hello@haruharu.me',
    github: 'https://github.com/haruharu',
    linkedin: 'https://linkedin.com/in/haruharu',
    twitter: 'https://twitter.com/haruharu',
  },

  // 📋 게시판 (Board) 클릭 시 표시
  about: {
    name: 'HaruHaru',
    title: 'AI 1인 기업 대표 & Full-Stack Developer',
    bio: '게임, 앱, 피트니스 분야를 아우르는 크리에이터입니다. 기술과 창의성의 교차점에서 새로운 경험을 만들어갑니다.',
    skills: ['React', 'Flutter', 'Unity', 'Firebase', 'Three.js', 'Node.js'],
  },
};

export default portfolioData;
