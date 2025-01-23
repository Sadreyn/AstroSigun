import type { MetaFunction } from "@remix-run/node";
import DarkModeButton from "~/components/dark-mode-button/DarkModeButton";
import Header from "~/components/header/Header";


export const meta: MetaFunction = () => {
  return [
    { title: "Astro Sigun" },
    { name: "Sigun Danışmanlık", content: "Astro Sigun - Danışmanlık Hizmetleri" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-tr from-[#102A56] to-[#4B6D90] dark:from-[#0A2A49] dark:to-[#253D53]">
    <DarkModeButton/>
    <Header/>
  
      
    </div>
  );
}
