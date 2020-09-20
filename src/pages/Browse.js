import React from 'react'
import BrowseContainer from '../container/BrowseContainer';
import { useContent } from '../hooks';
import {selectionFilter} from '../utils';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({series, films});

  return (
    <div>
      <BrowseContainer slides={slides} />
    </div>
  )
}

export default Browse
