<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

useSeoMeta({
  title: "Bravica | About Us",
  description: "About Page",
})
</script>

<template>
  <AppContainer class="pt-10">
    <h1 class="text-4xl">
      About Us
    </h1>

    <div class="py-10">
      <h2 class="text-xl">
        Our Mission
      </h2>
      <Tabs default-value="account">
        <TabsList>
          <TabsTrigger value="account">
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  </AppContainer>
</template>
