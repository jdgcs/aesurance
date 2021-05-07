import React from 'react'
import { Helmet } from 'react-helmet'

export const ForumMeta = () => {
  const title = `Forum | Aesurance`
  const description = `The Aesurance forum`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}
