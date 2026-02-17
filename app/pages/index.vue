<script setup>
useSeoMeta({
  title: "Bravica | Home",
  description: "Home Page",
})
</script>

<template>
  <AppContainer class="pt-10">
    <h1 class="text-4xl">
      Hello World
    </h1>

    <div class="py-10 flex flex-col space-y-5">
      <h2 class="text-xl">
        CTAs
      </h2>

      <h3 class="text-lg">
        Nuxt Page Links
      </h3>
      <div class="flex flex-wrap gap-4 items-center mr-auto">
        <Button
          id="home-nuxt-link-1"
          class="mr-auto"
          variant="default"
          as-child
        >
          <NuxtLink to="/services/consulting">View Consulting Services</NuxtLink>
        </Button>
        <Button
          id="home-nuxt-link-1"
          class="mr-auto"
          variant="default"
          as-child
        >
          <NuxtLink to="/services/design">View Design Services</NuxtLink>
        </Button>
        <Button
          id="home-nuxt-link-1"
          class="mr-auto"
          variant="secondary"
          as-child
        >
          <NuxtLink to="/about">Learn more about us</NuxtLink>
        </Button>
      </div>

      <h3 class="text-lg">
        External Nuxt Links
      </h3>
      <div class="flex gap-4 items-center mr-auto">
        <NuxtLink
          to="https://www.google.com/"
          target="_blank"
          class="underline"
        >
          Google (Opens in new tab)</NuxtLink>
        <NuxtLink
          to="https://www.yahoo.com/"
          class="underline"
        >Yahoo</NuxtLink>
      </div>

      <h3 class="text-lg">
        Regular External Links
      </h3>
      <div class="flex gap-4 items-center mr-auto">
        <a
          href="https://www.google.com/"
          class="underline"
          target="_blank"
        >Google (Opens in new tab)</a>
        <a
          href="https://www.yahoo.com/"
          class="underline"
        >Yahoo</a>
      </div>
    </div>
  </AppContainer>
</template>
