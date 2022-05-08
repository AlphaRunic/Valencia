import { ClientRemoteSignal, KnitServer as Knit, RemoteSignal } from "@rbxts/knit";
import { Store } from "shared/Classes/DataBase";
import { Remotes } from "shared/Remotes";
import { Item } from "../../shared/Classes/Item";

declare global {
    interface KnitServices {
        InventoryService: typeof InventoryService;
    }
}

const storage: Item[] = [];
const InventoryService = Knit.CreateService({
    Name: "InventoryService",
    Data: Knit.GetService("DataService"),

    Client: {
        Get<R extends Instance = Instance>(p: Player, itemName: string): Item<R> | undefined {
            return this.Server.Get(p, itemName);
        },
        Add<R extends Instance = Instance>(p: Player, name: string, model: R): Item<R> {
            return this.Server.Add(p, name, model);
        },
        Remove(p: Player, name: string): Item<Instance> | undefined {
            return this.Server.Remove(p, name);
        }
    },

    Update(p: Player): void {
        const inv = this.Data.GetStore<Item[]>(p, "Inventory");
        inv.Set(storage);
    },

    Get<R extends Instance = Instance>(p: Player, itemName: string): Item<R> | undefined {
        return storage.find(i => i.Name === itemName) as Item<R> | undefined;
    },

    Add<R extends Instance = Instance>(p: Player, name: string, model: R): Item<R> {
        const item = new Item<R>(name, model)
        storage.push(item);
        this.Update(p);
        return item;
    },

    Remove(p: Player, name: string): Item<Instance> | undefined {
        const item = this.Get(p, name);
        if (item) {
            const idx = storage.indexOf(item);
            const e = storage.remove(idx);
            this.Update(p);
            return e;
        } else
            warn(`Attempted to remove "${name}", could not find item in inventory.`);
    }
});

export = InventoryService;