const routes = {
    routes: [
        {name: 'addRefinery', path: '/addRefinery'},
        {name: 'dashboard', path: '/dashboard'},
        {name: 'refinery', path: '/refinery'},
        {name: 'refinery.tab', path: '/tab/:id'}
        // {name: 'refinery', path: '/refinery', children: [
        //     { name: 'id', path: '/:id'}
        // ]}
    ],
    defaultRoute: 'dashboard'
};

export default routes