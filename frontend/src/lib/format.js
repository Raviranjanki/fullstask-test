export const formatCurrency = (value) => {
    return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "INR",
    }).format(value);
};

export const formatDate = (date) => new Date(date).toLocaleDateString();
