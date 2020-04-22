import React from 'react'
import Router from 'next/router'
import SiteLayout from '~/components/SiteLayout'
import SettingsForm from '~/components/SettingsForm'

const onSubmit = (data) => {
  Router.push({
    pathname: `${process.env.base}/learn`,
    query: { config: JSON.stringify(data) }
  })
}

export default function Home() {
  return (
    <SiteLayout>
      <SettingsForm onSubmit={onSubmit} />
    </SiteLayout>
  )
}
