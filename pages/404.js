import { useEffect } from 'react'
import { useRouter } from 'next/router'
 

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='notFound'>
            <h2>
                Oops !
            </h2>
        </div>
    )
}

export default NotFound;