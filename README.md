# react-typescript-overmind-counter-example

A minimal React + TypeScript counter showing how Overmind state fits together — state, actions, a typed helper and two components reading from it. Nothing else in the way.

## What's included

- **React** via Create React App, in TypeScript
- **Overmind** — `OvermindState`, `OvermindActions` and a typed `useAppState` / `useActions` helper
- **Two components** reading the same state, so you can see it stay in sync
- **Material-UI** for the bits of UI there are

## Project layout

```
src/index.tsx               Overmind provider
src/App.tsx                 the app shell
src/Components/Counter.tsx  increments the counter
src/Components/Fayaz.tsx    reads the same state
src/Overmind/OvermindState.ts     the state
src/Overmind/OvermindActions.ts   the actions
src/Overmind/OvermindHelper.ts    createOvermind + typed hooks
```

## Getting started

```bash
git clone https://github.com/p32929/react-typescript-overmind-counter-example.git
cd react-typescript-overmind-counter-example
npm install
npm start          # http://localhost:3000
```

## Related boilerplates

- [expo-overmind-counter-example](https://github.com/p32929/expo-overmind-counter-example) — the same idea in Expo / React Native
- [react-native-overmind-counter-example](https://github.com/p32929/react-native-overmind-counter-example) — bare React Native
- [react-typescript-materialui-overmind-boilerplate](https://github.com/p32929/react-typescript-materialui-overmind-boilerplate) — the same stack as a starting boilerplate

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/react-typescript-overmind-counter-example/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/react-typescript-overmind-counter-example/)
