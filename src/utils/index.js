import React from 'react';
import { Spinner } from 'reactstrap';

export const withLoader = wrappedComponent => condition => condition ? <Spinner color="primary" /> : wrappedComponent
