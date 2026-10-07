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
      id: 'deceptive-guide',
      title: 'Deceptive Guide (거짓말하는 튜토리얼)',
      description: 'Never trust your guide. A psychological meta-deduction puzzle adventure with 6 physical laws. Play directly in your browser or download for Windows on itch.io!',
      url: 'https://nextharu.itch.io/deceptive-guide',
      thumbnail: '/optimized/thumbnails/deceptive-guide.webp',
      tags: ['Psychological', 'Puzzle', 'Meta', 'itch.io', 'HTML5'],
    },
    {
      id: 'ninja-pattern-slice',
      title: 'Ninja Pattern Slice',
      description: 'High-speed Pattern Slice action where 0.1s makes all the difference! Break your limits now in browser.',
      url: 'https://ninja.next-haru.com',
      thumbnail: '/optimized/thumbnails/ninja-pattern-slice.webp',
      tags: ['Action', 'Game', 'Roguelike'],
    },
    {
      id: 'vocal-orbit',
      title: 'Vocal Orbit',
      description: 'A voice-controlled space flight game. Pilot your spaceship using your own voice!',
      url: 'https://vocal.next-haru.com',
      thumbnail: '/optimized/thumbnails/vocal-orbit.webp',
      tags: ['Voice Control', 'Game', 'Expo Web'],
    },
    {
      id: 'japan-run-fit',
      title: 'Japan Run Fit',
      description: 'A fitness running game that lets you travel through Japan while you run.',
      url: 'https://fit.next-haru.com',
      thumbnail: '/optimized/thumbnails/japan-run-fit.webp',
      tags: ['Fitness', 'Game'],
    },
    {
      id: 'galaxy-words',
      title: 'Galaxy Words',
      description: 'AI-powered swipe party word game. AI가 실시간으로 생성하는 트렌드 단어로 즐기는 스릴 넘치는 파티 게임!',
      url: 'https://word-dj5.pages.dev/',
      thumbnail: '/optimized/thumbnails/galaxy-words.webp',
      tags: ['AI', 'Game', 'Party', 'Swipe'],
    },
  ],

  // 🍊 오렌지 (Orange | ROOTS) 클릭 시 표시
  about: {
    name: 'Next Haru',
    title: 'Enterprise AI Systems Architect & Founder',
    bio: `Enterprise AI systems architect and deep-tech founder building on-premise AI platforms, private SLM workflows, hybrid retrieval, and agent security tools. Focused on practical data control, resilient knowledge systems, and clear operational boundaries.`,
    skills: ['Enterprise RAG', 'Private SLM (LoRA)', 'On-Prem Security', 'AI Agent Security', 'ChromaDB / BM25', 'Python / PyTorch', 'React', 'Three.js', 'Node.js / FastAPI'],
  },

  // 🍇 포도 (Grape | TREASURES) 클릭 시 표시
  projects: [
    {
      id: 'kodari-local-rag-os',
      title: 'KODARI LOCAL RAG OS (Enterprise Suite)',
      description: 'On-premise AI platform for private SLM workflows and hybrid retrieval, designed for teams that need to keep knowledge processing under local control.',
      url: 'https://rag.next-haru.com',
      thumbnail: '/optimized/thumbnails/kodari-rag-os.webp',
      tags: ['Enterprise AI', 'On-Prem', 'Private SLM', 'ChromaDB', 'Defense'],
      featured: true,
    },
    {
      id: 'ai-security-control-plane',
      title: 'AI Security Control Plane (Cyber War-Room)',
      description: 'In-process SDK and defensive control plane for autonomous agents, with demonstrations of prompt-injection, tool-privilege, and credential-exposure defenses.',
      url: 'https://ai-security.next-haru.com',
      thumbnail: '/optimized/thumbnails/ai-security.webp',
      tags: ['AI Security', 'Control Plane', 'Defensive AI', 'FastAPI', 'Cyber War-Room'],
      featured: true,
    },
    {
      id: 'localbank',
      title: 'LocalBank',
      description: 'A premium, secure offline vault for financial assets with PayPal and Email integration.',
      url: 'https://localbank.next-haru.com',
      thumbnail: '/optimized/thumbnails/localbank.webp',
      tags: ['Next.js', 'FinTech', 'Premium'],
    },
    {
      id: 'aether',
      title: 'Aether',
      description: 'Sync your biological rhythm with celestial insights. AI-driven archetype analysis and spiritual rituals for modern life.',
      url: 'https://aether.next-haru.com',
      thumbnail: '/optimized/thumbnails/aether.webp',
      tags: ['AI', 'Spiritual', 'Next.js', 'Premium'],
    },
    {
      id: 'kanjigen-ai',
      title: 'KanjiGen AI — Your Heritage Artist',
      description: 'AI-powered authentic Japanese name generation with bespoke Hanko seals and family heritage design.',
      url: 'https://kanji.next-haru.com',
      thumbnail: '/optimized/thumbnails/kanjigen-ai.webp',
      tags: ['AI', 'Heritage', 'Arts', 'Next.js'],
    },
  ],

  // 🍎 사과 (Apple | HELLO) 클릭 시 표시
  contact: {
    email: 'support@next-haru.com',
    github: 'https://github.com/gilppon',
    twitter: 'https://twitter.com/nextharu',
    linkedin: 'https://www.linkedin.com/in/next-haru',
  },

  // 🖼️ 챕터 초상 이미지 — public/art/ 폴더의 파일과 연결됨 (3:4 비율 권장)
  chapterArt: {
    strawberry: '/optimized/art/chapter-games.webp',
    orange: '/optimized/art/chapter-about.webp',
    grape: '/optimized/art/chapter-projects.webp',
    apple: '/optimized/art/chapter-contact.webp',
  },
};

export default portfolioData;
