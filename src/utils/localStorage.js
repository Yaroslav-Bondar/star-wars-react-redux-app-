export const getLocalStorage = key => {
    const data = localStorage.getItem(key);
    if (data !== null) return JSON.parse(data);
    return {};
};

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}