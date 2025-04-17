import { AxiosResponse } from "axios"

import { API_PATHS } from "../API_PATHS"
import { request } from "../utils"
import { IMainCategoriesSearchRes } from "@/types/categories"

export const getMainSearchCategories = (searchString?: string, signal?: AbortSignal): Promise<AxiosResponse<IMainCategoriesSearchRes>> => {
    return request({
        method: 'GET',
        url: API_PATHS.categories(searchString),
        signal
    })
}