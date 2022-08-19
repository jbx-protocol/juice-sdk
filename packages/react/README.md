# juice-hooks

🧃 A React Hooks library for the
[Juicebox V2 protocol](https://github.com/jbx-protocol/juice-contracts-v2).

Built on `juice-sdk`.

> ⚠️ This library is experimental and we provide no guarantees. Use at your own
> risk.

## Overview

`juice-hooks` provides a selection of React Hooks to interact with the Juicebox
V2 contracts.

## Installation

```bash
npm install juice-hooks
```

## Usage

1. Give your app `JuiceProvider` context.

```tsx
const infuraKey = 'YOUR INFURA ID';
export const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

function App() {
  const provider = new JsonRpcProvider(rpcUrl);

  return (
    <JuiceProvider provider={provider}>
      <YourApp />
    </JuiceProvider>
  );
}
```

2. Use a hook.

```tsx
// MyComponent.tsx
import { useProjectOwner, useProjectMetadataContent } from 'juice-hooks';

export default function MyComponent() {
  const { data: owner } = useProjectOwner({ projectId: 2 });

  return <span>Owner: {owner}</span>;
}
```
