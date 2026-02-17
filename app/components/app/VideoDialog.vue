<script setup>
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { VisuallyHidden } from "reka-ui"

const props = defineProps({
  open: { type: Boolean, required: true },
  videoSrc: { type: String, required: true },
  title: { type: String, default: "Video" },
  description: { type: String, default: "Watch an interview with a Chef" },
  vtt: { type: String, default: "" },
  poster: { type: String, default: "" },
})
const emit = defineEmits(["update:open"])
</script>

<template>
  <Dialog
    :open="props.open"
    @update:open="emit('update:open', $event)"
  >
    <DialogContent
      class="w-full max-w-[1280px] mx-auto"
      data-lenis-prevent
    >
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>{{ props.title }}</DialogTitle>
          <DialogDescription>
            {{ props.description }}
          </DialogDescription>
        </DialogHeader>
      </VisuallyHidden>

      <video
        :src="props.videoSrc"
        :poster="props.poster"
        controls
        autoplay
        playsinline
        class="w-full aspect-video focus-visible:outline-dashed focus-visible:outline-offset-3 focus-visible:outline-white"
      >
        <track
          v-if="props.vtt"
          kind="subtitles"
          :src="props.vtt"
          srclang="en"
          label="English"
          default
        />
      </video>
    </DialogContent>
  </Dialog>
</template>
