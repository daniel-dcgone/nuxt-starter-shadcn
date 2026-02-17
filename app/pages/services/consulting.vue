<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const VideoDialogOpen = ref(false)

useSeoMeta({
  title: "Bravica | Our Services | Consulting",
  description: "Our Services: Consulting",
})
</script>

<template>
  <AppContainer class="pt-10">
    <h1 class="text-4xl">
      Consulting
    </h1>

    <h2 class="text-xl mt-10">
      Dialogs/Modals
    </h2>
    <div class="py-5 flex flex-row gap-4">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="default">
            Dialog Trigger
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button
        variant="default"
        @click="VideoDialogOpen = true"
      >
        Video Dialog
      </Button>
      <AppVideoDialog
        :open="VideoDialogOpen"
        video-src="/videos/flower.mp4"
        title="Some Title"
        description="Some description"
        @update:open="VideoDialogOpen = $event"
      />
    </div>

    <div class="py-10">
      <h2 class="text-xl mb-5">
        Side Sheet
      </h2>

      <Sheet>
        <SheetTrigger as-child>
          <Button variant="secondary">
            Open Side Sheet
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </AppContainer>
</template>
