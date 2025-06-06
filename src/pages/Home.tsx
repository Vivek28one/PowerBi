import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import PowerBiComponent from '@/components/shared/PowerBiComponent';
import { riskManagementData, recommendationData, chartData, quickAccessData } from '@/constants/homeData';
import QuickLinkCard from '@/components/shared/QuickLinkCard';
import Chart from '@/components/shared/Chart';
import Tile from '@/components/shared/tile';
import { Helmet } from 'react-helmet-async';
export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home | Analytics</title>
    </Helmet>
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h2 className="font-semibold">Risk Management</h2>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {riskManagementData?.cards.map((card) => (
          <Tile title={card.title} centerValue={card.Units_Failed_NonBlank} bottomValue={card.Units_Failed_MOM__Changes} />
        ))}
      </div>

      <h2 className="font-semibold">Recommendation</h2>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {recommendationData.cards.map((card) => (
          <PowerBiComponent tileId={card.id} />
        ))}
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <Chart />
      </div>

      {/* Quick Access Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{quickAccessData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickAccessData.cards.map((card) => (
            <QuickLinkCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
    </>
  )
} 