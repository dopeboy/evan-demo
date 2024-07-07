import { UserGroupIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, CalculatorIcon, ChartBarIcon, ScaleIcon, BeakerIcon, UserCircleIcon, PaperClipIcon, MicrophoneIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex flex-col max-w-screen-2xl mx-auto">
        <header className="sticky top-0 flex h-16 items-center gap-4 bg-background">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <BeakerIcon className="size-6 text-blue-500" />
              <span className="">Evan</span>
            </Link>
          </nav>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <UserCircleIcon className="size-6" />
              </div>
            </form>
          </div>
        </header>
      </div >
    </div>
  )
}

export default Header