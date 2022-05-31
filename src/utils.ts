export function sum(a: number, b: number) {
  return a + b;
}

export const fetchData = async (url: string, cb: (a: any) => void ) => {
  const data = await fetch(url);
  const json = await data.json();
  cb(json.results);
};

// 