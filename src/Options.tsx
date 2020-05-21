interface Option {
    value: string;
}

export interface StringOption extends Option {
    name: string;
}

export interface NumberOption extends Option {
    name: number;
}

export interface Options {
    country: StringOption[];
    category: StringOption[];
    pageSize: NumberOption[];
}

const options: Options = {
    country: [
        { value: "", name: 'not specified' },
        { value: "us", name: 'USA' },
        { value: "de", name: 'Germany' },
        { value: "gb", name: 'Great Britain' },
        { value: "ru", name: 'Russia' },
        { value: "ua", name: 'Ukraine' },
        { value: "it", name: 'Italy' },
        { value: "nl", name: 'Netherlands' },
        { value: "fr", name: 'France' },
        { value: "ar", name: 'Argentina' },
        { value: "at", name: 'Austria' },
        { value: "au", name: 'Australia' },
        { value: "be", name: 'Belgium' },
        { value: "br", name: 'Brazil' },
        { value: "ca", name: 'Canada' },
        { value: "ch", name: 'Switzerland' },
        { value: "cn", name: 'China' },
        { value: "hk", name: 'Hong Kong' },
        { value: "cu", name: 'Cuba' },
        { value: "cz", name: 'Czech Republic' },
        { value: "eg", name: 'Egypt' },
        { value: "id", name: 'Indonesia' },
        { value: "il", name: 'Israel' },
        { value: "in", name: 'India' },
        { value: "jp", name: 'Japan' },
        { value: "kr", name: 'South Korea' },
        { value: "mx", name: 'Mexico' },
        { value: "my", name: 'Malasia' },
        { value: "no", name: 'Norway' },
        { value: "nz", name: 'New Zeland' },
        { value: "pl", name: 'Poland' },
        { value: "sa", name: 'Saudi Arabia' },
        { value: "sg", name: 'Singapore' },
        { value: "tr", name: 'Turkey' },
        { value: "za", name: 'South Africa' }
    ],

    category: [
        { value: "", name: 'not specified' },
        { value: "business", name: 'Business' },
        { value: "entertainment", name: 'Entertainment' },
        { value: "general", name: 'General' },
        { value: "health", name: 'Health' },
        { value: "science", name: 'Science' },
        { value: "sports", name: 'Sports' },
        { value: "technology", name: 'Technology' }
    ],

    pageSize: [
        { value: "20", name: 20 },
        { value: "30", name: 30 },
        { value: "40", name: 40 },
        { value: "50", name: 50 },
        { value: "60", name: 60 },
        { value: "70", name: 70 },
        { value: "80", name: 80 },
        { value: "90", name: 90 },
        { value: "100", name: 100 }
    ]
}

export default options;