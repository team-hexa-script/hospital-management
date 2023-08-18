import createJWT from '@/createJWT';
import useAuth from '@/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const { googleLogin, githubSignIn } = useAuth();

    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();
    // sign in With google
    const handleGoogleSignIn = async () => {
        const toastId = toast.loading("Loading...")
        try {
            const { user } = await googleLogin();
            createJWT({ email: user.email })
            toast.dismiss(toastId);
            toast.success("user signed in successfully")
            replace(from);
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "user not signed in")
        }
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    }

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold text-center  text-gray-800 mb-4">
                Login with Social Accounts
            </h2>
            <div className="flex flex-col space-y-4">

                <button onClick={handleGoogleSignIn} className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
                    Sign up with Google
                </button>
                <button onClick={handleGithubSignIn} className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md">
                    Sign up with GitHub
                </button>

            </div>
        </div>
    )
}

export default SocialLogin