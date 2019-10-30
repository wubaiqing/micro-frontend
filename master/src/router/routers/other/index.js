import p1 from '@/views/other/other-page1.vue';
import p2 from '@/views/other/other-page2.vue';

export default [
  {
    path: '/statistic/department-stats',
    name: '/statistic/department-stats',
    component: p1,
  },
  {
    path: '/statistic/shop-stats',
    name: '/statistic/shop-stats',
    component: p2,
  },
];
