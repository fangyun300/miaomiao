export default{
	path:'/movie',
	name:'movie',
	component:() => import('@/views/Movie'),
	children:[
		{
			path:'city',
			name:'city',
			component:() => import('@/components/City')
		},
		{
			path:'nowplaying',
			name:'nowplaying',
			component:() => import('@/components/NowPlaying')
		},
		{
			path:'commingsoon',
			name:'commingsoon',
			component:() => import('@/components/CommingSoon')
		},
		{
			path:'search',
			name:'search',
			component:() => import('@/components/Search')
		},
		{
			path:'/movie',
			redirect:'/movie/nowplaying'
		}
	]
}