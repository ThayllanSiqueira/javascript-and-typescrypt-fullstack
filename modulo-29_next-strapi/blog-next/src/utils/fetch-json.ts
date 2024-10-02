export const fetchDataJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData.data;
};

export const fetchMetaJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();
  return jsonData.meta;
};
