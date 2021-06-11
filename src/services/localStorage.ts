export const getItemFromStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string)
}

interface IItemToStorage {
    key: string;
    value: any;
}

export const SetItemToStorage = (key: string, value: any) : void => {
    localStorage.setItem(key, JSON.stringify(value))
}

