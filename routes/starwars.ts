import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const res = await fetch(`https://swapi.dev/api/films/1/`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const data = await res.json();
    console.log(data)
    return new Response(data?.title);
    // return ctx.render(data)
  }
}

// export default function Page(data) {
//   if (!data) {
//     return <h1>No data found</h1>;
//   }

//   return (
//     <div>
//       <img src={data.avatar_url} width={64} height={64} />
//       <h1>{data.name}</h1>
//       <p>{data.login}</p>
//     </div>
//   );
// }