export type ItemCategory = "Weapon" | "Hat" | "Robe" | "Boots" | "Charm";
export class Item<R = Instance> {
    public Purchased = false;
    public constructor(
        public readonly Name: string,
        public readonly Category: ItemCategory,
        public readonly Description: string,
        public readonly Reference: R,
        public readonly Price: number
    ) {} 
}