import {MdSearch, MdHome} from 'react-icons/md'
import {IoHomeOutline} from 'react-icons/io5'
import Link from 'next/link'



function Sidebar() {
    return (
        <nav className='w-64 h-screen bg-white shadow-xl top-0 left-0 fixed z-10 overflow-x-hidden'>
            <div className='h-fit'>
                <div className=' mt-6 mx-6 mb-14 '>
                    <div className='flex'>
                        <div className='bg-primary rounded-lg w-11 h-11 text-white flex items-center justify-center'>
                        AF
                        </div>

                        <div className='ml-2 font-bold text-md'>
                            Animated Fred
                            <div className='w-36 overflow-hidden text-sm font-normal'>
                                animated@demo.com
                            </div>
                        </div>
                    </div>
                </div>

                        <div className='w-52 mx-4 p-3 bg-light max-h-12 rounded-lg'>
                            <div className='flex'>
                                <MdSearch className='w-6 h-6 mr-4'/>
                                <input id='search' type="search" placeholder='Search' className='bg-light w-36 outline-none border-none'/>
                            </div>
                        </div>

                        <div className='mt-4 mx-4 w-52'>
                            <div>
                                <Link href="dashboard">
                                    <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                        <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                                    </div>
                                </Link>
                            </div>
                            <div className='mt-4'>
                                <Link href="dashboard">
                                    <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                        <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                                    </div>
                                </Link>
                            </div>
                            <div className='mt-4'>
                                <Link href="dashboard">
                                    <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                        <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                                    </div>
                                </Link>
                            </div>
                            <div className='mt-4'>
                                <Link href="dashboard">
                                    <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                        <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

            <div className='mt-24 w-52 h-32 mx-4'>
                 <div>
                        <Link href="dashboard">
                            <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                            </div>
                        </Link>
                 </div>

                 <div className='mt-4'>
                            <div className='w-full bg-white h-12 rounded-lg hover:bg-light'>
                                <div className='flex items-center p-3 cursor-pointer '><IoHomeOutline className='mr-4 h-5 w-5 text-base'/> Dashboard</div>
                            </div>
                 </div>
            </div>
            </div>

        </nav>
    );
}

export default Sidebar;