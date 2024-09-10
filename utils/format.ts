export function formatQuantity(quantity: number, noun: string): string {
    return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
}