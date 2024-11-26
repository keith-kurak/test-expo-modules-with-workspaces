import * as React from 'react';

import { TestModule1ViewProps } from './TestModule1.types';

export default function TestModule1View(props: TestModule1ViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
