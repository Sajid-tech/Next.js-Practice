"use client"

export default function Student({ params }) {
    console.log(params)
    return (

        <main>
            <div>
                <h1>Studnet Details</h1>
                <h3>name:{params.student}</h3>


            </div>
        </main>




    )
}


//how to get dynamic route name
//=> by using params
