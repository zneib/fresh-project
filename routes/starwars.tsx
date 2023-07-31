import { Handlers, PageProps } from "$fresh/server.ts";

interface Movie {
  title: string;
}

export const handler: Handlers<Movie | null> = {
  async GET(_req, ctx) {
    const res = await fetch(`https://swapi.dev/api/films/1/`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const data = await res.json();
    console.log(data)
    // return new Response(data?.title);
    return ctx.render(data)
  }
};

export default function StarWars(props: PageProps<Movie>) {
  return (
    <div>{props.data.title}</div>
  )
}