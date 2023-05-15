export enum SortBy {
    VIEW = "view",
    RATE = "rate",
    NEWEST = "newest",
}

export interface ApiResponsePure {
    name: string;
    paged: number;
    status: boolean;
    data: MoviePure[];
    pageTitle: string;
    max_num_pages: number;
    pageDescription: string;
}

interface MoviePure {
    id: number;
    slug: string;
    postType: string;
    viewsCount: string;
    reviewsRate: number;
    reviewsType: string;
    reviewsTitle: string;
    under_evaluation: boolean;
    reviewsAgeCategory: number;
    reviewsModifiedTime: string;
    reviewsShortContent: string;
    reviewsThumbnailUrl: string;
}

export type MovieModel = Pick<
    MoviePure,
    "id" | "reviewsRate" | "reviewsTitle" | "reviewsThumbnailUrl"
>;
