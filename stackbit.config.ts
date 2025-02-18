import { defineStackbitConfig } from '@stackbit/types';
import { docsCollection } from './src/content.config';

export default defineStackbitConfig({
  stackbitVersion: '\~0.6.0',
  ssgName: 'astro',
  nodeVersion: '16',
  contentSources: [
    {
      type: 'astro-content',
      rootDir: './src/content',
      collections: [docsCollection] // 直接引用你的 content.config.ts 中的集合
    }
  ],
  modelExtensions: [
    {
      name: 'page',
      type: 'page',
      urlPath: '/{slug}',
      filePath: 'src/content/docs/{slug}.md'
    }
  ]
});
