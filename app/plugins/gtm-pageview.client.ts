export default defineNuxtPlugin(() => {
  const router = useRouter()

  let previousUrl: string | null = null

  router.beforeEach((to, from, next) => {
    previousUrl = window.location.origin + from.fullPath
    next()
  })

  const { proxy } = useScriptGoogleTagManager()

  useScriptEventPage(({ title, path }) => {
    proxy.dataLayer.push({
      event: "pageview",
      title,
      path,
      pageUrl: window.location.href,
      previousUrl,
    })
    console.log(
      `[Nuxt Scripts GTM]: Dispatching pageview`,
      { title, path, pageUrl: window.location.href, previousUrl },
    )
  })
})
