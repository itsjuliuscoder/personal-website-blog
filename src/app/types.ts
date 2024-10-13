// types.ts
export interface Author {
    name: string;
    picture: {
        fields: {
            file: {
                url: string;
                details: {
                    image: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
    };
}

export interface CoverImage {
    fields: {
        title: string;
        file: {
            url: string;
            details: {
                image: {
                    width: number;
                    height: number;
                };
            };
        };
    };
}

export interface Post {
    fields: {
        contentTypeId: string;
        title: string;
        slug: string;
        author: Author;
        excerpt: string;
        coverImage: CoverImage;
        content: Document; // or whatever type you're using for content
    };
}
