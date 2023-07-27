export interface DataInt {
    slug: string;
    h1: string;
    h2: string;
    navigate?: string;
    content: {
        link: string;
        img: string;
        imgW?: string;
        type: string;
        h3: string;
        p?: string;
        span?: string;
    }[]
}