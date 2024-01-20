import Link from 'next/link'

const Login = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <p>Тут когда-то будет страница авторизации</p>
            <Link href="/root/users" className="text-blue-500 underline mt-3">
                Skip
            </Link>
        </div>
    )
}

export default Login
