import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (request, {params}) => {
    const headersList = headers();
    const referer = headersList.get('referer');
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate("creator");

        if(!prompt) return new Response("Prompt Not Found", {
            status: 404, 
            headers: {
            referer: referer,
            'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
          }})

        return new Response(JSON.stringify(prompt), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    const {prompt, tag} =await request.json();
    const headersList = headers();
    const referer = headersList.get('referer');

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id)

        if(!existingPrompt) return new Response("Prompt Not Found", {status: 404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {status: 200, headers: {
            referer: referer,
            'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
          }})

    } catch (error) {
        return new Response("Failed to update response", {status: 500})
    }
}

export const DELETE = async (request, {params}) =>{

    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt Deleted Successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to delete prompt", {status: 500})
    }
}