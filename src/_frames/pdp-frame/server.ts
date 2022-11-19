type PdpInputModel = {
    variationId: string;
    price: string;
};

type PdpOutputModel = {
    price: string;
};

const convertPrice = (price: string): string => {
    const decimal = price.substring(0, price.length - 2);
    const floating = price.substring(price.length - 2);
    return `${decimal},${floating}`;
}

export const map = (inputModel: PdpInputModel): PdpOutputModel => {
    return {
        price: convertPrice(inputModel.price),
    };
}
