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
        return DataStore2<T>(name, this.player);
    }

    public InitStore<T = unknown>(name: string, defaultValue?: T): Store<T> {
        const store = this.GetStore<T>(name);
        store.Save();

        const updateClient = (storeName: string, value: T): void => {
            store.Save();
            this.Update.SendToPlayer(this.player, storeName, value);
        }

        store.OnUpdate((value: T) => updateClient(name, value));
        if (defaultValue !== undefined) {
            const value = store.Get(defaultValue);
            store.Set(value);
        }

        return store;
    }

    public async Get<T = unknown>(name: string, defaultValue?: T): Promise<T> {
        return this.GetStore<T>(name).GetAsync(defaultValue);
    }

    public Set<T = unknown>(name: string, value: T): T{
        this.GetStore<T>(name).Set(value)
        return value;
    }
}