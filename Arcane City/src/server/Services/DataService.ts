import { KnitServer as Knit } from "@rbxts/knit";
import { Players } from "@rbxts/services";
import { DataBase, Store } from "shared/Classes/DataBase";
import { Item } from "shared/Classes/Item";

declare global {
    interface KnitServices {
        DataService: typeof DataService;
    }
}

interface DataStores {
    Gold?: Store<number>;
    Crystals?: Store<number>;
    Inventory?: Store<Item[]>;
}

const stores = new Map<Player, DataStores>();
const DataService = Knit.CreateService({
    Name: "DataService",

    Client: {
        GetStore<T = unknown>(p: Player, store: keyof DataStores): Store<T> {
            return this.Server.GetStore<T>(p, store);
        }, 
        GetStores(p: Player): DataStores | undefined {
            return this.Server.GetStores(p);
        }
    },

    GetStore<T = unknown>(p: Player, store: keyof DataStores): Store<T> {
        const stores = this.GetStores(p)!;
        return <Store<T>><unknown>stores[store]!;
    },

    GetStores(p: Player): DataStores | undefined {
        return stores.get(p);
    },

    KnitStart() {
        Players.PlayerAdded.Connect(p => {
            p.CharacterAdded.Connect(() => {
                const names = ["gold", "crystals", "inventory"];
                const db = new DataBase(p, ...names);
                stores.set(p, {
                    Gold: db.InitStore<number>(names[0], 350),
                    Crystals: db.InitStore<number>(names[1], 0),
                    Inventory: db.InitStore<Item[]>(names[2], [])
                });
            });
        });
    }
});

export = DataService;