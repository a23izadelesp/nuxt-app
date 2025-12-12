export const useSearch = () => {
  const api = useApi();
  const query = ref("");
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const search = async (q) => {
    if (q !== undefined) query.value = q;
    
    loading.value = true;
    error.value = null;
    results.value = [];

    try {
      if (!query.value) {
        // Initial load: get list then details
        const response = await api.get('pokemon?limit=20&offset=0');
        // response.results is the array of { name, url }
        const promises = response.results.map(p => api.get(`pokemon/${p.name}`));
        const detailed = await Promise.all(promises);
        results.value = detailed;
      } else {
        // Search by name
        const response = await api.get(`pokemon/${query.value.toLowerCase()}`);
        results.value = [response];
      }
    } catch (e) {
      if (!query.value) {
        error.value = 'Error al cargar la lista de Pokémon.';
      } else {
        error.value = `No se encontró ningún Pokémon llamado "${query.value}".`;
      }
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  return { query, results, loading, error, search };
};
