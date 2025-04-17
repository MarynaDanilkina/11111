export interface IMainCategoriesSearchRes {
    ok: boolean;
    data: IMainCategories[];
}

export interface IMainCategories {
    id: number;
    title: string
    description: string
    url: string
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    icon: string
}