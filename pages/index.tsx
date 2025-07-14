
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white font-retro">
      <Head>
        <title>Hippie Site 🌈</title>
      </Head>
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold neon">Welcome to Hippie 🌿</h1>
        <p className="mt-6 text-xl max-w-xl">Your vaporwave gateway to retro bliss, powered by Next.js & TailwindCSS.</p>
      </main>
    </div>
  )
}
