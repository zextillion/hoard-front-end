import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) =>
  usePlatforms().data?.results.find((p) => p.id === id);

export default usePlatform;
