"use server";

// import { getVideoIdFromUrl } from "@/lib/youtube/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyzeYouTubeVideo(formData: FormData) {
    const url = formData.get("url")?.toString()
    if (!url) return;

    const videoId = 'abc'; // TODO: fix this
    if (!videoId) return;

    redirect(`/video/${videoId}/analysis`);
};
