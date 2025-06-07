export default function Header() {
    return (
        <header className="absolute lg:w-full bg-white outline-2 outline-slate-200">
            <div className="max-w-5xl mx-auto py-1 flex items-center">
                <img src="img/Size=Large.svg" alt="logo" className="hidden md:block " />
                <img src="img/Size=Small.svg" alt="mobile_logo" className="block sm:hidden" />
            </div>
        </header>
    )
}