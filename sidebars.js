// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  researchSidebar: [
    {
      type: 'category',
      label: 'Research Experience',
      items: [
        'research/project1',
        'research/project2',
        'research/project3',
        'research/project4',
        'research/project5',
        'research/project6',
        // 添加更多研究项目...
      ],
    },
  ],
  publicationSidebar: [
    {
      type: 'category',
      label: 'Publications',
      items: [
        'publication/papers'
        // 添加更多出版物类型...m
      ],
    },
  ],
  competitionSidebar: [
    {
      type: 'category',
      label: 'Competitions',
      items: [
        'competitions/competition1',
        'competitions/competition2',
        // 添加更多出版物类型...m
      ],
    },
  ],
  additionalSidebar: [
    {
      type: 'category',
      label: 'Addtional Experience',
      items: [
        'additional/additional1',
        'additional/additional2',
        // 添加更多出版物类型...m
      ],
    },
  ],
};

export default sidebars;
