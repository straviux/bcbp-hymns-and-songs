import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import ManagePage from '../views/ManagePage.vue'
import SongViewPage from '../views/SongViewPage.vue'
import { Storage } from '@ionic/storage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/verify-access',
    component: ()=>import('@/views/VerifyAccessPage.vue')
  },
  {
    path: '/',
    redirect: '/manage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/songs'
      },
      {
        path: 'songs',
        component: () => import('@/views/SongListPage.vue')
      },
      
      {
        path: 'category',
        component: () => import('@/views/CategoryListPage.vue')
      },
      {
        path: 'chords',
        component: () => import('@/views/ChordListPage.vue')
      }
    ],
  },
  {
    path: '/song/:songid/:type?',
    component: SongViewPage
  },
  {
    path: '/manage/',
    redirect: '/manage/list',
    component: ManagePage,
    children: [
      {
        path: '',
        redirect: '/manage/list'
      },
      {
        path: 'list',
        component: () => import('@/views/ManagePage/SongList.vue')
      },
      {
        path: 'new-song',
        component: () => import('@/views/ManagePage/AddSong.vue')
      },
      {
        path: 'update-song/:songid',
        component: () => import('@/views/ManagePage/UpdateSong.vue')
      },
      {   
        path: 'update-song-chord/:songid',
        component: () => import('@/views/ManagePage/UpdateSongChords.vue')
      },
      {
        path: 'category',
        component: () => import('@/views/ManagePage/AddCategory.vue')
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
    const publicPages = ['/verify-access'];
    const authRequired = !publicPages.includes(to.path);
    const store = new Storage();
    await store.create();
    const is_activated =  await store.get('bcbp-app-activated');
    // console.log(is_activated)
    if (authRequired && !is_activated) {
        // auth.returnUrl = to.fullPath;
        return '/verify-access';
    } 
});

export default router
