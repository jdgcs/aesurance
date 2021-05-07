import * as PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

type PostPageMetaProps = {
  commentTitle?: string
  commentContent?: string
}

export const PostPageMeta = ({ commentTitle, commentContent }: PostPageMetaProps) => {
  const title = `${commentTitle} | Aesurance`
  const description = commentContent

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

PostPageMeta.propTypes = {
  commentTitle: PropTypes.string,
  commentContent: PropTypes.string,
}

PostPageMeta.defaultProps = {
  commentTitle: 'Aesurance',
  commentContent: 'Buy insurances with 0% fee',
}
