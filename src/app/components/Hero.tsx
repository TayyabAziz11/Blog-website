import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    // Main div
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8 md:py-16 gap-8 max-w-7xl mx-auto">
      {/* Left div */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to Tayyab<span className='text-blue-500'>Blog</span> 
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Your go-to destination for the latest insights on Web Development, AI, and Technology.
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          At TayyabBlog, we believe in simplifying complex tech concepts and making them accessible to everyone. Whether you&apose; a beginner or an experienced developer, our in-depth articles, tutorials, and expert insights will keep you ahead of the curve in this ever-evolving digital world.
        </p>
        <Link href="/Blogs">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-10 rounded-lg font-medium transition-colors">
           Blogs
          </button>
        </Link>
      </div>

      {/* Right div */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full aspect-square max-w-lg">
          <Image 
            src="/blog.png"
            alt="Hero Image"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero