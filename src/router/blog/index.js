/*
 * author: RitaWong
 * date: 2018-12-29
 */

import layout from '@/components/layout';
import blog from '@/pages/blog/index';
import passageDetail from '@/pages/blog/detail';
import logPage from '@/pages/log';

export default [
  {
    path: '/blog',
    name: '',
    component: layout,
    children: [
      {
        path: ':type',
        component: blog
      },
      {
        path: ':type/:index',
        component: passageDetail
      }
    ],
  },
  {
    path: '/log',
    component: logPage
  }
];
