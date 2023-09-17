import custom from '../custom.module.css'
import other from '../other.module.css'
import outside from "@/style/outside.module.css"
export default function Page() {
    return (
        <main>
            <h1 className={other.main}>MOdular css </h1>
            <h2 className={custom.main}>MOdular css with next .js </h2>
            <h3 className={outside.main}>outside css</h3>
        </main>
    )
}  