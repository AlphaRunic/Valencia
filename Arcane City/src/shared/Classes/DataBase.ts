import { Remotes } from "shared/Remotes";
import DataStore2 from "@rbxts/datastore2"

export type Store<T> = DataStore2<T>;

export class DataBase {
    private readonly Update = Remotes.Server.Get("DataBaseUpdate");
    
    public constructor(
        private readonly player: Player, 
        ...dataNames: string[]
    ) {
        DataStore2.Combine("DATA", ...dataNames);
    }

    private GetStore<T = unknown>(name: string): Store<T> {
        return DataStore2<T>(<string>name, this.player);
    }

    public InitStore<T = unknown>(name: string, defaultValue?: T): Store<T> {
        const store = this.GetStore<T>(name);
        
        const updateClient = (storeName: string, value: T): void => {
            this.Update.SendToPlayer(this.player, <string>storeName, value);
            store.Save();
        }
        
        store.OnUpdate((value: unknown) => updateClient(name, <T>value));
        if (defaultValue !== undefined) {
            const value = store.Get(defaultValue);
            store.Set(value);
        }
        
        store.Save();
        return store;
    }

    public Get<T = unknown>(name: string, defaultValue?: T): T | undefined {
        return this.GetStore<T>(name).Get(defaultValue);
    }

    public Set<T = unknown>(name: string, value: T): T {
        this.GetStore<T>(name).Set(value);
        return value;
    }
}