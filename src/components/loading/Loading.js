import React from 'react'
import { Spinner, LockBody, Picture, ReleaseBody } from './LoadingStyles';

function Loading({src, ...restProps}) {
  return (
      <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
      </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody({children, ...restProps}) {
return <ReleaseBody>{children}</ReleaseBody>
}
export default Loading
