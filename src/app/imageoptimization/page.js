import Image from "next/image"
import Profile from "@/../../public/vercel.svg"

export default function Page() {
    console.log(Profile)
    return (
        <main>
            <h1>Image optimizations</h1>
            <Image
                src={Profile}
            // width={500}
            // height={500}
            />
            {/* <img src={Profile} />  // cant use becz it has more properties in picture */}
            {/* to use this do this */}
            <img src={Profile.src} /> {/*// image is not optimized  */}


            {/* img taking from url  */}

            <Image
                src={"https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"}
                width={500}
                height={200}
            />

        </main>
    )
}