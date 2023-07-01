export function orElseThrow(fn: Function, message: string) {
    function throwError(error: string) {
        throw new Error(error);
    }

    return fn() || throwError(message);
};
