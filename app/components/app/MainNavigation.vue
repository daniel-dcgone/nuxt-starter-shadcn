<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
</script>

<template>
  <NavigationMenu
    class="w-full max-w-[1280px] mx-auto block"
    :disable-hover-trigger="true"
    :disable-pointer-leave-close="true"
  >
    <NavigationMenuList class="w-full flex">
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <NuxtLink to="/">Home</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem class="ml-auto">
        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink as-child>
            <NuxtLink to="/services/consulting">Consulting</NuxtLink>
          </NavigationMenuLink>
          <NavigationMenuLink as-child>
            <NuxtLink to="/services/design">Design</NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <NuxtLink to="/about">About</NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
