export function missingSwitchCaseHandling(x: never): never {
    throw new Error(`Non-exhaustive match: case ${x} was not handled.`);
}