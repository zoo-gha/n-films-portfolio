interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}
interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PortfolioType extends SanityBody{
    _type: "portfolio";
    title: string;
    description: string;
    mainImage: Image;
    publishedAt: date;
    linktoproject: string;
}

export interface TestimonialsType extends SanityBody{
    _type: "testimonials";
    name: string;
    description: string;
    climg: Image;
    publishedAt: date;
}

