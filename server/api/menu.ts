export default defineEventHandler(() => {
  return [
    {
      title: "Docs",
      children: [
        { title: "Getting Started", link: "/docs/getting-started" },
        {
          title: "Guide",
          children: [
            { title: "Introduction", link: "/docs/guide/introduction" },
            { title: "Advanced Topics", link: "/docs/guide/advanced" },
          ],
        },
        { title: "Examples", link: "/docs/examples" },
      ],
    },
    {
      title: "Ecosystem",
      children: [
        {
          title: "Modules",
          children: [
            { title: "Official Modules", link: "/ecosystem/modules/official" },
            {
              title: "Community Modules",
              link: "/ecosystem/modules/community",
            },
          ],
        },
        { title: "Themes", link: "/ecosystem/themes" },
      ],
    },
    {
      title: "Community",
      children: [
        { title: "Events", link: "/community/events" },
        { title: "Partners", link: "/community/partners" },
      ],
    },
  ];
});
