export default function GetTweenPos<T = UDim2>(instance: Instance): { Open: T, Closed: T } {
    return {
        Open: instance.GetAttribute<T>("OpenPos"),
        Closed: instance.GetAttribute<T>("ClosedPos")
    }
}