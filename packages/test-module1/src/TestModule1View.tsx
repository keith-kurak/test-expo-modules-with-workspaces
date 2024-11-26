import { requireNativeView } from 'expo';
import * as React from 'react';

import { TestModule1ViewProps } from './TestModule1.types';

const NativeView: React.ComponentType<TestModule1ViewProps> =
  requireNativeView('TestModule1');

export default function TestModule1View(props: TestModule1ViewProps) {
  return <NativeView {...props} />;
}
