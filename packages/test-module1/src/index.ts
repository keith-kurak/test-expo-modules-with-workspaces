// Reexport the native module. On web, it will be resolved to TestModule1Module.web.ts
// and on native platforms to TestModule1Module.ts
export { default } from './TestModule1Module';
export { default as TestModule1View } from './TestModule1View';
export * from  './TestModule1.types';
