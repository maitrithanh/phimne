import CardFilm from "@/components/client/CardFilm";
import { useQuery } from "@tanstack/react-query";

export function DataFetch() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://phim.nguonc.com/api/films/phim-moi-cap-nhat").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Đang tải...";

  if (error) return "Có lỗi xảy ra: " + error.message;

  return (
    <>
      {data?.items?.map((film: any) => {
        return (
          <CardFilm
            key={film.slug}
            name={film.name}
            slug={film.slug}
            thumb={film.thumb_url}
            original_name={film.original_name}
          />
        );
      })}
    </>
  );
}
