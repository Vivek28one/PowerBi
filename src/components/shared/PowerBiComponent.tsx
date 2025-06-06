import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'
import {powerBiConfig} from '@/constants/homeData'

const PowerBiComponent = ({tileId}: {tileId: string}) => {
  return (
    <div className="aspect-video rounded-xl bg-muted/50 relative w-full h-full shadow overflow-hidden" >
          <PowerBIEmbed
            embedConfig={{
              type: 'tile',
              id: tileId,
              dashboardId: powerBiConfig.dashboardId,
              embedUrl: powerBiConfig.embedUrl,
              accessToken: powerBiConfig.accessToken,
              tokenType: models.TokenType.Aad,
            }}
            eventHandlers={
              new Map([
                ['loaded', () => console.log('Tile loaded')],
                ['error', (event: any) => console.error(event?.detail)],
              ])
            }
            cssClassName="powerbi-tile absolute inset-0 w-full h-full "
            getEmbeddedComponent={(embeddedTile) => {
              console.log('Embedded tile instance:', embeddedTile);
            }}
          />
        </div>
  )
}

export default PowerBiComponent
