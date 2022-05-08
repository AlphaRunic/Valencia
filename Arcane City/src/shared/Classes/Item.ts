export class Item<R = Instance> {
    public constructor(
        public readonly Name: string,
        public readonly Reference: R
    ) { }
}
