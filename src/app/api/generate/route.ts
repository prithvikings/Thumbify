import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  // 1. Security Check
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.POLLINATIONS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server missing API key" },
      { status: 500 },
    );
  }

  try {
    const { prompt, aspectRatio, style = "Cinematic" } = await req.json();

    // 2. Map Aspect Ratio to Dimensions
    // We increase resolution to 1280x720 (720p) for better quality
    let width = 1280;
    let height = 720;

    if (aspectRatio === "9:16") {
      width = 720;
      height = 1280;
    } else if (aspectRatio === "1:1") {
      width = 1024;
      height = 1024;
    }

    // 3. Select the Best Model for the Job
    // These specific tags unlock better quality on Pollinations
    let model = "flux-realism"; // Default: Best for photorealistic thumbnails

    if (style === "Anime") model = "flux-anime";
    if (style === "3D Render") model = "flux-3d";
    if (style === "Minimalist") model = "flux-pro"; // Cleaner lines

    // 4. Construct URL with "Enhance" Mode
    // enhance=true tells Pollinations to rewrite your prompt using an LLM to add detail
    const enhancedPrompt = encodeURIComponent(
      `YouTube thumbnail, ${prompt}, 8k resolution, highly detailed, trending on artstation, sharp focus, hdr`,
    );
    const seed = Math.floor(Math.random() * 1000000);

    // Add 'enhance=true' and specific model
    const url = `https://image.pollinations.ai/prompt/${enhancedPrompt}?width=${width}&height=${height}&model=${model}&nologo=true&seed=${seed}&enhance=true`;

    console.log(`Fetching from Pollinations (${model})...`);

    // 5. Fetch and Proxy
    const imageRes = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`, // Your Key unlocks the speed/quality
      },
    });

    if (!imageRes.ok) {
      throw new Error(`Pollinations Error: ${imageRes.statusText}`);
    }

    // 6. Convert to Base64 (High Quality)
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    return NextResponse.json({
      success: true,
      imageUrl: imageUrl,
      model: model,
    });
  } catch (error: any) {
    console.error("Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 },
    );
  }
}
