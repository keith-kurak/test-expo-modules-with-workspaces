import { NativeModule, requireNativeModule } from 'expo';

import { TestModule1ModuleEvents } from './TestModule1.types';

declare class TestModule1Module extends NativeModule<TestModule1ModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<TestModule1Module>('TestModule1');
