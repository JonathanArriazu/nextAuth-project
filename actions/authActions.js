'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export async function updateUser({name, image}) {
    const session = await getServerSession(authOptions);
    if(!session) throw new Error('Unauthorized');

    try {
        const user = await User.findByIdAndUpdate(session?.user?._id, {
            name, image
        }, {new: true}).select('-password');

        if(!user) throw new Error('User not found');

        return {msg:'User updated'}

    } catch (error) {
        redirect(`/errors?error=${error.message}`);
    }
}