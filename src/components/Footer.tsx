import Link from "next/link"

export const Footer: React.FC = () => (
    <div className="flex justify-end w-full p-2 mt-9">
        <span className="text-violet-900 w-max p-4 rounded-2xl text-lg hover:text-violet-950">
            <Link className="underline" href={`${process.env.NEXT_PUBLIC_GITHUB}`}>
                Made by MOJO
            </Link>
        </span>
    </div>
)