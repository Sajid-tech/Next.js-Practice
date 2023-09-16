"use client"
export default function Lecture({ params }) {
    console.log(params)
    return (
        <div>

            <h1>Day of colelge{params.lecture[0]}</h1>
            <h2>Lecture No. {params.lecture[1]}</h2>
            <h2>Lecture No. {params.lecture[2]}</h2>
            <h2>Lecture No. {params.lecture[3]}</h2>
            <h2>Lecture No. {params.lecture[5]}</h2>

            {/*  use map array to show dynamically */}


        </div>
    )
}