export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const get = (endpoint) => {
    // Ensure we don't double slashes if endpoint starts with /
    const path = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    return $fetch(`${baseURL}${path}`);
  };

  return { get };
};
