const routes = {
    routes: [
        {name: 'addRefinery', path: '/addRefinery'},
        {name: 'dashboard', path: '/dashboard'},
        {name: 'refinery', path: '/refinery', children: [
            { name: 'id', path: '/:id'}
        ]}
    ],
    defaultRoute: 'refinery'
};

export default routes