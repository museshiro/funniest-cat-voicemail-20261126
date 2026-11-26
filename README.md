# Funniest Cat Voicemail Greeting

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/museshiro/funniest-cat-voicemail-20261126/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/museshiro/funniest-cat-voicemail-20261126/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

Entry for the [Funniest Cat Voicemail Greeting](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443) bounty on make.fun.

## The line

> You've reached Chairman Meow. The human is asleep; I screened your call. Verdict: not food. Goodbye.

100 characters. One voicemail greeting, recorded by a cat who has appointed himself
the household's call screener — and who only takes food-related calls. The full
design rationale is in [DESIGN.md](DESIGN.md).

## How it works

`main.ts` writes the line to `/output/entry.txt` and nothing else. Run with Node 22:

```sh
node main.ts
```

See [DESIGN.md](DESIGN.md) for the design rationale and novelty check.
