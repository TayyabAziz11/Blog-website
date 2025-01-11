import Navbar from "@/app/components/Navbar";
import { fullBlog } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { console } from "node:inspector/promises";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    tileImage
} [0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({params}: {params : {slug: string } }){
    const data: fullBlog = await getData(params.slug)

    return (
      <>  
          <Navbar/>
        <div className="mt-10">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                    Tayyab - <span className="text-blue-500">Blog</span> 
                </span>

                <span className="mt-10 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>

            <Image src={urlFor(data.tileImage).url()} 
               alt="" 
               width={800} 
               height={800}
               priority
               className="rounded-lg mt-10 border-2 lg:ml-[350px] md:ml-20"
             />

               <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-500 lg:ml-[350px] md:ml-20">
                 <PortableText value={data.content} />
               </div>
        </div>
    </>   
    )
}