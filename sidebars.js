const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: ['intro', 'architecture', 'quickstart'],
    },
    {
      type: 'category',
      label: '🐍 Backend',
      items: [
        'backend/overview',
        'backend/setup',
        'backend/structure',
        'backend/config',
        'backend/api-reference',
        'backend/algorithms',
        'backend/testing',
        'backend/deployment',
        'backend/adding-features',
      ],
    },
    {
      type: 'category',
      label: '⚛️ Frontend',
      items: [
        'frontend/overview',
        'frontend/setup',
        'frontend/structure',
        'frontend/config',
        'frontend/components',
        'frontend/hooks',
        'frontend/features',
        'frontend/deployment',
        'frontend/adding-pages',
      ],
    },
    {
      type: 'category',
      label: '📦 Domain Knowledge',
      items: [
        'domain/box-styles',
        'domain/flat-size',
        'domain/algorithms',
        'domain/tumble-layout',
      ],
    },
    {
      type: 'category',
      label: '🗺️ Roadmap',
      items: [
        'roadmap/current',
        'roadmap/future',
        'roadmap/changelog',
      ],
    },
  ],
};

module.exports = sidebars;