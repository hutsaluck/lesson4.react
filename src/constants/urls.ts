const baseUrl: string = `https://jsonplaceholder.typicode.com`;

type IUrls = {
    usersUrls: {
        all: string
        oneById: (id: number) => string,
        withPosts: (id: number) => string,
    },
    postsUrls: {},
    commentsUrls: {}
}

const urls: IUrls = {
    usersUrls: {
        all: `/users`,
        oneById: (id: number): string => `/users/${id}`,
        withPosts: (id: number): string => `/users/${id}/posts`,
    },
    postsUrls: {},
    commentsUrls: {}
}

export {urls, baseUrl}