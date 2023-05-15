import { Dispatch, SetStateAction } from "react";

export enum SortBy {
    VIEW = "view",
    RATE = "rate",
    NEWEST = "newest",
}

export interface ServerResponsePure<T> {
    name: string;
    paged: number;
    status: boolean;
    data: T[];
    pageTitle: string;
    max_num_pages: number;
    pageDescription: string;
}

export interface MoviePure {
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

export interface ContextModel {
    sortBy: SortBy;
    setSortBy: Dispatch<SetStateAction<SortBy>>;
}
