// import Link from "next/link"

// export default function StudentList() {
//     return (
//         <div>
//             <h1>Studnet List</h1>
//             <ul>
//                 <li>
//                     <Link href="/studentlist/anil">Anil</Link>
//                 </li>
//                 <li>
//                     <Link href="/studentlist/sajid">Sajid</Link>
//                 </li>
//                 <li>
//                     <Link href="/studentlist/majid">Majid</Link>
//                 </li>
//                 <li>
//                     <Link href="/studentlist/peter">Peter</Link>
//                 </li>
//                 <li>
//                     <Link href="/studentlist/jhon">Jhon</Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }


// by using map array method

import Link from "next/link"

export default function StudentList() {
    const students = ["anil", "sajid", "majid", "peter", "jhon"];

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map((item) => (
                    <li key={item}>
                        <Link href={`/studentlist/${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// why we use dynamic routing
// ans => jb bhi hum log ke pass mutiple list hoti hai aur uksi details page banana chahte hai tb hum log dynamic route use krte hai taki id  ya uska name uske route pe chla jaye aur uske behalf pr details get kr skte hai




