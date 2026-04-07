import React from 'react';
import { RouteObject } from 'react-router-dom';
import InterviewPage from '@/pages/Interview';
import DebounceTestPage from '@/pages/DebounceTest';
import TransitionTestPage from '@/pages/TransitionTest';

export const routes: RouteObject[] = [
  { path: '/', element: React.createElement(InterviewPage) },
  { path: '/dev/debounce', element: React.createElement(DebounceTestPage) },
  { path: '/dev/transition', element: React.createElement(TransitionTestPage) },
];
