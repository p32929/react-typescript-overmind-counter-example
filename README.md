# react-typescript-overmind-counter-example

A tiny React and TypeScript counter that shows how Overmind state works: state, actions, a typed helper, and two components reading the same state. It is an example to learn from, with nothing else in the way.

It was made in 2020 with Create React App and the Overmind versions of that time.

## What's included

1. **React** via Create React App, in TypeScript
2. **Overmind** — `OvermindState`, `OvermindActions` and a typed `useAppState` / `useActions` helper
3. **Two components** reading the same state, so you can see it stay in sync
4. **Material-UI** for the bits of UI there are

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

1. [expo-overmind-counter-example](https://github.com/p32929/expo-overmind-counter-example) — the same idea in Expo / React Native
2. [react-native-overmind-counter-example](https://github.com/p32929/react-native-overmind-counter-example) — bare React Native
3. [react-typescript-materialui-overmind-boilerplate](https://github.com/p32929/react-typescript-materialui-overmind-boilerplate) — the same stack as a starting boilerplate

## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make this example better.

## You might also like

<a href="https://openstore.pfay.workers.dev/cards/p32929?n=4&amp;repo=react-typescript-overmind-counter-example"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929.svg?n=4&amp;repo=react-typescript-overmind-counter-example&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929.svg?n=4&amp;repo=react-typescript-overmind-counter-example&amp;theme=light" width="100%" alt="More apps by p32929 on OpenStore"></picture></a>

<p><a href="https://p32929.github.io/share/?repo=react-typescript-overmind-counter-example"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
