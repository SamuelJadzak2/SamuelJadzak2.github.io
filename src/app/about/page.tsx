import React from 'react';
import Image from 'next/image';
import DirectoryTree from '~/components/ui/fake-dir';
const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-8 font-mono">
            <div className="absolute top-2 left-0">
                <DirectoryTree />
            </div>
            
            <Image src="/headshot.jpg" alt="Your Name" className="mb-8 w-64 h-64 object-cover rounded-full mx-auto" width={256} height={256} />
            <div className="flex justify-center">
            <h1 className="text-4xl">Sam Jadzak</h1>
            </div>
            <div className="flex justify-center">
            <h2 className="text-2xl mb-10">Fullstack Engineer</h2>
            </div>

            <div className="flex flex-col justify-center mr-20 ml-20">
            <p className="mb-8">
            I am a driven and passionate software developer with a commitment to continuous learning and a love for technology. I recently graduated from Oregon State University with a Bachelor&apos; degree in Computer Science, where I built a robust foundation in developing cloud applications, implementing data structures and algorithms, and analyzing their time and space complexity.
            </p>
            <p className="mb-8">
            Through internships and personal projects, I have honed my skills in diverse areas, including autonomous navigation systems, operating system development, embedded systems programming, and full-stack web development using modern frameworks such as React.js. I am proficient in several programming languages, including Python, Java, JavaScript, C/C++, and SQL, which equips me to tackle a wide range of technical challenges.
            </p>
            <p className="mb-8">
            Beyond programming, I thrive on staying active through weight training, rock climbing, and training for marathons. I also enjoy unwinding with a good book, playing the piano, and the occasional video game. My diverse interests and dedication to growth make me a valuable asset to any team.
            </p>
            </div>
            <div className="mr-20 ml-20">
            {/* <object data="/resume.pdf" type="application/pdf" width="100%" height="600px">
                <p>It appears you don't have a PDF plugin for this browser. You can <a href="/resume.pdf">click here to download the PDF file.</a></p>
            </object> */}
            </div>
        </div>
    );
};

export default Page;