import React, {FC, memo} from 'react';
import styles from './Pagination.module.scss'

interface PaginationProps {
    page: number,
    setPage: (page: number) => void,
    pages: number,
    className?: string
}


const Pagination: FC<PaginationProps> = ({ page, setPage, pages }) => {
    const isFirstPage = page === 1
    const isLastPage = page === pages

    return (
        <>
            {
                (pages !== 1) && (
                    <div className={styles.pagination} data-testid="pagination" >
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={isFirstPage}
                        >
                            { '<' }
                        </button>

                        {
                            page > 1 && <button
                                onClick={() => setPage(1)}
                                disabled={isFirstPage}
                            >
                                1
                            </button>
                        }

                        <button
                            className={styles.current}
                        >
                            { page }
                        </button>

                        {
                            page < pages && <button
                                onClick={() => setPage(page + 1)}
                            >
                                { page + 1 }
                            </button>
                        }

                        {
                            page + 1 < pages
                            && <>
                                <span>...</span>

                                <button
                                    onClick={() => setPage(Number(pages))}
                                    disabled={isLastPage}
                                >
                                    { pages }
                                </button>
                            </>
                        }

                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={isLastPage}
                        >
                            {'>'}
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default memo(Pagination);