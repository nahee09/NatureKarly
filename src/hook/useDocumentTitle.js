import { useLayoutEffect } from 'react';

/**
 * 문서 제목 변경 React 커스텀 훅
 * @param {string} title 웹 문서 제목
 */
export const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
};
