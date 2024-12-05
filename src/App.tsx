import { ChangeEvent, useState } from 'react';
import { Layout } from './components/Layout';

import { useCategories } from './state/categories';
import { useLocales } from './state/settings';
import { Articles } from './components/Articles';
import { useArticlesSearch, useViewedArticles } from './state/articles';
import { Fallback } from './components/Fallback';
import { Input } from './uikit/Input';

function App() {
  const { locale, isLoading: isLoadingLocales, error: localesError } = useLocales();
  const { categories, isLoading: isLoadingCategories, error: categoriesError } = useCategories();
  const [search, setSearch] = useState('');
  const { fetchArticles, articles, isPadding, error: articleSearchError } = useArticlesSearch();
  const { viewedArticles, setViewedArticle } = useViewedArticles();

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    fetchArticles({ search: newSearch, category: categories.map((el) => el.id) });
  };

  if (localesError || categoriesError) {
    return (
      <Layout>
        <Layout.Block>Произошла ошибка, попробуйте перезагрузить страницу</Layout.Block>
      </Layout>
    );
  }

  if (isLoadingLocales || isLoadingCategories || !locale) {
    return (
      <Layout>
        <Fallback />
      </Layout>
    );
  }

  const getContent = () => {
    if (isPadding) {
      return <Fallback />;
    }

    if (articleSearchError) {
      return <div>Произошла ошибка, попробуйте перезагрузить страницу</div>;
    }

    return (
      <Articles
        articles={articles}
        locale={locale}
        onArticleClick={setViewedArticle}
        viewed={viewedArticles}
      />
    );
  };

  return (
    <Layout>
      <Layout.Block>
        <Input value={search} onChange={onChangeSearch} />
      </Layout.Block>

      <Layout.Block>{getContent()}</Layout.Block>
    </Layout>
  );
}

export default App;
