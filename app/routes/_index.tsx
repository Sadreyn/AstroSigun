import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Astro Sigun" },
    { name: "Sigun Danışmanlık", content: "Astro Sigun - Danışmanlık Hizmetleri" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      Selam
      <button className="border">Devamke</button>
    </div>
  );
}
