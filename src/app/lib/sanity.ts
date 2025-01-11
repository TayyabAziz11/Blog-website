import { apiVersion } from "@/sanity/env";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    apiVersion: '2025-01-05',
    dataset: 'production',
    projectId: 'bd1l79rg',
    useCdn: false,
})

const builder=imageUrlBuilder(client);

export function urlFor(source:any){

    return builder.image(source)
}