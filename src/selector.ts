export type RouterState = { router: string };

export const locationStateSelector = <T extends RouterState = {router: string}>(state: T) => state.router;
