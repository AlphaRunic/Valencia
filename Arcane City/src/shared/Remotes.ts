import { Definitions } from "@rbxts/net";
import { Item } from "shared/Classes/Item";

const Remotes = Definitions.Create({
    DataBaseUpdate: Definitions.ServerToClientEvent<[name: string, newValue: unknown]>()
});

export { Remotes };