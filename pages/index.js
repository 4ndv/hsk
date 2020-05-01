import React from 'react'
import Router from 'next/router'

import MainNav from '~/components/MainNav'
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
      <MainNav activeLink="learn" />
      <SettingsForm onSubmit={onSubmit} />
    </SiteLayout>
  )
}
