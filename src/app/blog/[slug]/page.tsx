import fs from 'fs';
import path from 'path';
// import { markdownToHtml } from '~/lib/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import DirectoryTree from '~/components/ui/fake-dir';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), 'posts', `${slug}.md`),
    'utf-8'
  );
  console.log(markdownContent)

  return (
    <>
    <div className="absolute top-2 left-0">
    <DirectoryTree />
    </div>
    <div className="bg-neutral-950 min-h-screen flex justify-center items-center ">
      
      <div className="bg-neutral-950 p-8 max-w-3xl mx-auto rounded shadow-lg text-white font-mono">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
      </div>
    </div>
    </>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}