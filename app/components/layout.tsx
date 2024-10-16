'use client'
import Header from "./header";
import Leftpart from "./left-part";
import useViewportWidth from "./use-viewport-width";

interface layout {
    children: React.ReactNode;
}
const Layout: React.FC<layout> = ({ children }) => {
    const viewport = useViewportWidth();
    return (
        <>
            <div className="min-h-screen flex flex-col pt-16 lg:pt-0">
                {viewport <= 1023 &&
                    <Header />
                }
                <div className="lg:pl-[320px] xl:pl-[448px] bg-slate-950 flex flex-col flex-1 ">
                    <div className="hidden lg:flex">
                        <Leftpart />
                    </div>
                    <main className="flex-1 flex justify-center items-center">
                        <div className='container p-4 xl:px-5 w-full'>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout