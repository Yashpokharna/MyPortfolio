import React from 'react'
import { logo, menu, close } from "../assets";
const Footer = () => {
    return (
        <div className="flex h-32 justify-between">
            <div className='flex'>
            <img src={logo} alt='logo' className='w-24 h-24 object-contain ml-40 my-3 flex justify-center items-center cursor-pointer' />
            <p className='text-sm sm:pl-4 sm:border-l-2 h-16 sm:border-gray-200 mx-3 mt-7 text-slate-400 flex justify-center items-center'>
            © 2023 -
            <a href="https://github.com/Yashpokharna" className='text-secondary-900 ml-1 font-bold'>@Yashpokharna</a>
            </p>
            </div>
            <div className='mr-40 mt-9 '>
            <h1 className="text-secondary-900 my-2 text-slate-400">Made with ❤ by Yash Pokharna</h1>
            </div>
            <div className='fixed bottom-6 right-6 lg:bottom-12 lg:right-12 flex flex-col gap-3 justify-center items-center z-20'>
            <a target="_blank" href="https://github.com/Yashpokharna"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-success hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></h1></a>
            <a target="_blank" href="https://www.linkedin.com/in/yash-pokharna/"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-info hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></h1></a>
            <a target="_blank" href="mailto: yashpokharna2002@gmail.com"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-danger hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></h1></a>
            <a target="_blank" href="https://leetcode.com/yashpokharna/"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-normal hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></h1></a>
            <div class="h-10 lg:h-28 border-gray-400 border-l w-0"></div>
            </div>
            {/* <h1 className="text-secondary-900 font-extrabold">by Yash Pokharna</h1> */}
        </div>
    )
}

export default Footer;