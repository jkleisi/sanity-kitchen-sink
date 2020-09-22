export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f69ca5eef0709dbdab02f72',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qccq4hur',
                  apiId: '12cc8350-7d3b-4d2b-a1bc-338a9933b7eb'
                },
                {
                  buildHookId: '5f69ca5f5471a91f5ae184a9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-febg8qqi',
                  apiId: 'ac0fe11c-ce95-4492-94ed-bf9034fcc8be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkleisi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-febg8qqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
