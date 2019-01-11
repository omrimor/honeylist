import React from 'react';
import { isFunction } from 'lodash';

export const withLoaderState = ({
  loaderComponent: LoaderComp,
  loaderPredicate,
  emptyComponent: EmptyComp,
  emptyPredicate,
}) => WrappedComponent => props =>
  isFunction(emptyPredicate) && emptyPredicate(props) ? (
    <EmptyComp />
  ) : isFunction(loaderPredicate) && loaderPredicate(props) ? (
    <LoaderComp />
  ) : (
    <WrappedComponent {...props} />
  );
