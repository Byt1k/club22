import Link from 'next/link'

const Page = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <p>Тут когда-то будет страница авторизации</p>
            <Link href="/admin/users" className="text-blue-500 underline mt-3">
                Skip
            </Link>
        </div>
    )
}

export default Page
