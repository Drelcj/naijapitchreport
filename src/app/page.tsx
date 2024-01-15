import Carousel from '@/components/carousel/Carousel'
import Hero from '@/components/hero/Hero'
import Image from 'next/image'
import Table from "@/components/table/Table";
import Cardcarousel from "@/components/card/Cardcarousel";
import Timeline from "@/components/timeline/Timeline";
import Divider from "@/components/divider/Divider";
import Stats from "@/components/stats/Stats";
import Newsletter from "@/components/newsletter/Newsletter";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 bg-white text-gray-700" >
      <section className="hero">
      {/* Headline, subheadline, and call-to-action */}
      <Hero />
    </section>

    {/* Latest News Section */}
    <section className="latest-news">
      {/* Cards or list of latest articles */}
              <Divider/>
    </section>

    {/* Featured Match Reports Section */}
    <section className="featured-match-reports">
      {/* Highlights of recent matches */}
         <Stats />
    </section>

    {/* Player Profiles Section */}
    <section className="player-profiles">
      {/* Spotlight on key players */}
        <Cardcarousel />
    </section>

    {/* League Standings Section */}
    <section className="league-standings">
      {/* Current team rankings */}
      <Table />
    </section>

     {/* Opinion Pieces Section */}
     <section className="opinion-pieces">
      {/* Editorial content */}
      <Timeline />
    </section>

    {/* Subscription Call-to-Action */}
    <section className="subscription-cta">
      {/* Newsletter signup form */}
        <Newsletter />
    </section>
    </main>
  )
}
