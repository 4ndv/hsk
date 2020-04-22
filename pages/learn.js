import React, { useMemo } from 'react'
import { useRouter } from 'next/router'

import { buildFromConfig } from '~/lib/learn'

import Learn from '~/components/Learn'
import SiteLayout from '~/components/SiteLayout'

const LearnPage = () => {
  const { query: { config } } = useRouter()

  const data = useMemo(() => {
    if (!config) return null

    return buildFromConfig(JSON.parse(config))
  }, [config])

  if (!data) return <SiteLayout><h1>Loading...</h1></SiteLayout>

  return (
    <SiteLayout>
      <Learn data={data} />
    </SiteLayout>
  )
}

export default LearnPage
