'use client'

import { useFormik } from 'formik';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './SearchBlock.module.scss'
import { SearchAppList } from '../SearchAppList';
import { getMainSearchCategories } from '@/api/inde';
import { CustomInput } from "@/components/CustomInput"
import { WidthWrapper } from '@/components/WidthWrapper';
import { IMainCategories } from '@/types/categories'

interface IProps {
    categoriesList: IMainCategories[] | null;
}

export const SearchBlock: FC<IProps> = ({ categoriesList }) => {
    const [searchList, setSearchList] = useState<IMainCategories[] | null>(null)

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    const activeRequest = useRef<AbortController | null>(null)

    const formik = useFormik({
        initialValues: {
            searchValue: ''
        },
        onSubmit: () => {

        }
    })

    const getSearchValue = async (searchValue: string) => {
        if (!searchValue) {
            setSearchList(null);

            return;
        }

        if (activeRequest.current) {
            activeRequest.current.abort()
        }

        const abortController = new AbortController();
        activeRequest.current = abortController;

        try {
            const data = await getMainSearchCategories(searchValue, abortController.signal);

            setSearchList(data.data.data);
        } catch (error) {
            if (error instanceof Error) {
                if (error.name !== 'AbortError') {
                    setSearchList(null);
                }
            }
        }
    }

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
        }

        debounceTimeout.current = setTimeout(() => {
            getSearchValue(formik.values.searchValue);
        }, 3000)

        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current)
            }
        }

    }, [formik.values.searchValue])

    return <section className={styles.root}>
        <WidthWrapper className={styles.wrapper}>
            <>
                <form onSubmit={formik.handleSubmit}>
                    <CustomInput
                        id='mainSearchInput'
                        name='searchValue'
                        theme='search'
                        placeholder="Поиск игр и приложений"
                        className={styles.searchInput}
                        value={formik.values.searchValue}
                        onChange={formik.handleChange}
                    />
                </form>
                {categoriesList && <SearchAppList categoriesList={searchList ?? categoriesList} />}
            </>
        </WidthWrapper>
    </section>
}