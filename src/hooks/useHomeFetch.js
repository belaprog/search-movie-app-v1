import { useState, useEffect } from "react";
import API from "../API";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prevState) => ({
        ...movies,
        results:
          page > 1
            ? [...prevState.results, ...movies.results]
            : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Initial render and search
  useEffect(() => {
    setState({
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    });
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};
