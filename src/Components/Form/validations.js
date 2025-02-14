export const validateName = (name) => {
    if (!name.trim()) return "Nome é obrigatório";
    if (/\d/.test(name)) return "Nome não pode conter números";
    return "";
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "E-mail é obrigatório";
    if (!emailRegex.test(email)) return "E-mail inválido";
    return "";
};

export const validateCep = (cep) => {
    if (!cep.trim()) return "CEP é obrigatório";
    if (!/^\d{8}$/.test(cep)) return "CEP deve conter 8 números";
    return "";
};
