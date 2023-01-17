export default [
    {
        name: '登录',
        path: '/login',
        component: '@/pages/login/login.tsx',
        layout: false,
        hideInMenu: true
    },
    {
        name: '首页',
        path: '/',
        component: '@/pages/index/index.tsx',
        icon: 'HomeOutlined',
    },
    {
        name: '博客管理',
        path: '/blog',
        icon: 'ContainerOutlined',
        routes: [
            {
                name: '博客类型列表',
                path: '/blog/blogtypelist',
                component: '@/pages/blog/listBlogType/listBlogType.tsx'
            },
            {
                name: '文章列表',
                path: '/blog/articlelist',
                component: '@/pages/blog/listArticle/listArticle.tsx'
            },
            {
                name: '新增博客类型',
                path: '/blog/addblogtype',
                component: '@/pages/blog/addBlogType/addBlogType.tsx'
            },
            {
                name: '新增文章',
                path: '/blog/addarticle',
                component: '@/pages/blog/addArticle/addArticle.tsx'
            },
        ]
    }
]
