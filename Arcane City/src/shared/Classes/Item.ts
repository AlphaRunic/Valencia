export class Item<R = Instance> {
    public Purchased = false;
    public constructor(
        public readonly Name: string,
        public readonly Reference: R,
        public readonly Price: number,
        public readonly Description: string
    ) {} 
}
