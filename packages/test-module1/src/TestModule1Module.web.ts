import { registerWebModule, NativeModule } from 'expo';

import { TestModule1ModuleEvents } from './TestModule1.types';

class TestModule1Module extends NativeModule<TestModule1ModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(TestModule1Module);
