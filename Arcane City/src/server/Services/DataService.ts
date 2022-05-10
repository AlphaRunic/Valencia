import { KnitServer as Knit } from "@rbxts/knit";
import { Players } from "@rbxts/services";
import { DataBase } from "shared/Classes/DataBase";
import { Item } from "shared/Classes/Item";
import { GameStats } from "shared/Classes/Stats";
import StrictMap from "shared/Utility/Classes/StrictMap";

declare global {
    interface KnitServices {
        DataService: typeof DataService;
    }
}

interface DataStores {
    Gold: number;
    Crystals: number;
    Inventory: Item[];
    Stats: GameStats;
}

const databases = new StrictMap<Player, DataBase>();
const DataService = Knit.CreateService({
    Name: "DataService",

    Client: {
        Get(p: Player, name: keyof DataStores, defaultValue?: DataStores[typeof name]): DataStores[typeof name] {
            return this.Server.Get(p, name, defaultValue);
        },
        Set(p: Player, name: keyof DataStores, value: DataStores[typeof name]): void {
            return this.Server.Set(p, name, value);
        }
    },

    Get(p: Player, name: keyof DataStores, defaultValue?: DataStores[typeof name]): DataStores[typeof name] {
        const db = databases.Get(p)
        const value = db.Get(name, defaultValue);
        return value!;
    },

    Set(p: Player, name: keyof DataStores, value: DataStores[typeof name]): void {
        const db = databases.Get(p)
        db.Set(name, value);
    },

    KnitStart() {
        Players.PlayerAdded.Connect(p => {
            p.CharacterAdded.Connect(() => {
                const names = ["gold", "crystals", "inventory", "stats"];
                const db = new DataBase(p, ...names);
                db.InitStore(names[0], 350);
                db.InitStore(names[1], 0);
                db.InitStore(names[2], []);
                db.InitStore(names[3], {
                    Level: 1,
                    XP: 0,
                    Health: 600,
                    MaxHealth: 600,
                    Damage: 0,
                    Resist: 0
                });

                databases.Set(p, db);
            });
        });
    }
});

export = DataService;