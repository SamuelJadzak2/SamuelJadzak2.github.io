import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import { TypewriterEffect } from "~/components/ui/typewriter-effect";
import DirectoryTree from "~/components/ui/fake-dir";



export default async function Home() {
  const words = "Samuel Jadzak"

  const words3 = [
    {
      text: "A",
    },
    {
      text: "creative",
    },
    {
      text: "software",
    },
    {
      text: "engineer",
    },
    {
      text: "with",
    },
    {
      text: "interests",
    },
    {
      text: "in",
    },
    {
      text: "web",
    },
    {
      text: "development,",
    },
    {
      text: "AI,",
    },
    {
      text: "and",
    },
    {
      text: "robotics.",
    }
  ];
  return (

    <main className="flex flex-col items-center overflow-hidden justify-center bg-neutral-950 console-text">
      <div className=" mb-20 z-50 bg-neutral-950 crt">
      <div className="absolute top-2 left-0">
  <DirectoryTree />
  </div>
      <div className="container flex flex-col items-center justify-center z-50">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <TextGenerateEffect words={words} />
        </h1>
      </div>
      <div className="max-w-2xl mx-auto mb-5 text-sm dark:text-slate-200 text-lg ">
          <h2 className=" text-2xl pb-1 mb-4 border-b border-slate-800 bg-green-500 text-green-950">about me</h2>
          <div style={{width: '600px', height:"50px", display: 'block', margin: '0 auto'}}> {/* Adjust this width as needed */}
    <TypewriterEffect words={words3} />
  </div>

          <Link className="flex text-green-800 text-2xl pb-1 mb-4 items-center justify-center mt-5 fade-in color-pulse" href="/about">
                  learn more
          </Link>
          </div>
        

        
      <p className="text-2xl pb-1 mb-4 border-b border-slate-800 bg-green-500 text-green-950">projects</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 justify-items-center">

        <Card className="w-[300px]">
      <Link
            className="flex rounded-xl bg-zinc-950 p-4"
            href={`/blog/${1}`}
          >
      <CardHeader>
        <CardTitle>AVNS</CardTitle>
        <CardDescription>USV navigation</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">

            </div>
            <div className="flex flex-col space-y-1.5">

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">

      </CardFooter>
      </Link>
    </Card>

    <Card className="w-[300px]">

      <Link
            className="flex rounded-xl bg-zinc-950 p-4"
            href={`/blog/${2}`}
          >
      <CardHeader>
        <CardTitle>mokt</CardTitle>
        <CardDescription>open source ai mock interview platform</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">

            </div>
            <div className="flex flex-col space-y-1.5">

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">

      </CardFooter>
      </Link>
    </Card>
        </div>
        


      </div>

      <footer className="flex">
      <Link
            className="flex bg-zinc-950 p-4 hover:bg-green-500"
            href="https://github.com/SamuelJadzak"
            target="_blank"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#15803d" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
</svg>
          </Link>

          <Link
            className="flex bg-zinc-950 p-4 hover:bg-green-500"
            href="https://www.linkedin.com/in/samueljadzak/"
            target="_blank"
          >
          <svg className="w-6 h-6 text-green-600 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#15803d" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
</Link>


      </footer>
      {/* <div>
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠏⣸⡸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⢰⡭⣧⣻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢁⣿⢲⡽⣏⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣀⡼⠇⣼⢣⣿⣞⣿⣘⠦⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡠⡄⠒⠊⡁⠤⣐⢎⣳⣻⢾⣽⣿⣿⣿⣷⣶⣭⣕⡲⠤⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⣥⣀⠈⠛⠶⢧⣕⣮⡝⣷⢿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣛⣯⡼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠉⠒⠳⠤⣤⣭⡙⢿⣿⣯⣿⣿⢟⣿⣽⠖⠛⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⡘⣿⣿⣿⡿⣾⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⢹⣿⣿⣻⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡆⢿⣧⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⣼⣇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣘⣼⠁⠀⠀⠀              ⣦⣾⡹⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀           ⣦⣿⢳⣧⢸⡂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⢀⣀⡤⢿⣫⣟⡿⣧⣟⡦⠤⣀⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠠⣶⣯⣯⣒⡿⢯⣷⣯⢿⡽⡿⢽⣟⣠⠟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⣿⣦⢿⣿⠗⡿⠿⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⣿⡎⡏⣿⠃⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⣥⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⡟⠃⠀⠀⠀⠀⠀⠀⠀



      </div> */}

    </main>


  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
