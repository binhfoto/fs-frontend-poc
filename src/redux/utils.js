export function createTableWrapperReducer(reducerFunction, reducerName) {
    return (state, action) => {
        const { name } = action;
        const isInitializationCall = state === undefined;
        if (name !== reducerName && !isInitializationCall) return state;

        return reducerFunction(state, action);
    };
}
