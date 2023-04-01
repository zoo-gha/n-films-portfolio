export interface Post {
    _id: string;
    _createdAt: string;
    author: {
        name: string;
        image: string;
    };
    description: Text;
}
