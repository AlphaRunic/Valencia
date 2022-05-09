import { KnitServer as Knit } from "@rbxts/knit";
import { Players } from "@rbxts/services";
import { DataBase, Store } from "shared/Classes/DataBase";
import { Item } from "shared/Classes/Item";
import { GameStats } from "shared/Classes/Stats";

declare global {
    interface KnitServices {
        DataService: typeof DataService;
    }
}

interface DataStores {
    Gold?: Store<number>;
    Crystals?: Store<number>;
    Inventory?: Store<Item[]>;
    Stats?: Store<GameStats>;
}

const stores = new Map<Player, DataStores>();
const DataService = Knit.CreateService({
    Name: "DataService",

    Client: {
        GetStore<T = unknown>(p: Player, store: keyof DataStores): Store<T> {
            return this.Server.GetStore<T>(p, store)!;
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
                const names = ["gold", "crystals", "inventory", "stats"];
                const db = new DataBase(p, ...names);
                stores.set(p, {
                    Gold: db.InitStore<number>(names[0], 350),
                    Crystals: db.InitStore<number>(names[1], 0),
                    Inventory: db.InitStore<Item[]>(names[2], []),
                    Stats: db.InitStore<GameStats>(names[3], {
                        Level: 1,
                        XP: 0,
                        Health: 600,
                        MaxHealth: 600,
                        Damage: 0,
                        Resist: 0
                    })
                });
            });
        });
    }
});

export = DataService;