export const init = (callback: () => void): void => {
    console.log("default initializaation finished")
    callback()
    console.log("all initialization finished.")
}