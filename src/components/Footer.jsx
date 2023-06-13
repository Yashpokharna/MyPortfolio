import React from 'react'
import { logo, menu, close } from "../assets";
const Footer = () => {
    return (
        <div className="sm:flex sm:h-32  flex-col sm:flex-row">
            <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='flex flex-col sm:flex-row sm:mr-96'>
                <a href="#">
                    <img src={logo} alt='logo' className='w-24 h-24 object-contain ml-40 my-3 flex justify-center items-center cursor-pointer' />
                </a>
                <p className='text-sm sm:pl-4 sm:border-l-2 h-16 sm:border-gray-200 sm:mx-3 sm:mt-7 text-slate-400 flex justify-center items-center'>
                    © 2023 -
                    <a href="https://github.com/Yashpokharna" className='text-secondary-900 ml-1 font-bold'>@Yashpokharna</a>
                </p>
            </div>
            <div className='flex justify-center items-center sm:ml-36'>
                <h1 className="text-secondary-900  text-slate-400">Made with ❤ by Yash Pokharna</h1>
            </div>
            </div>
            <div className='fixed bottom-6 right-6 lg:bottom-12 lg:right-12 flex flex-col gap-3 justify-center items-center z-20'>
                <a target="_blank" href="https://github.com/Yashpokharna"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-success hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></h1></a>
                <a target="_blank" href="https://www.linkedin.com/in/yash-pokharna/"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-info hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></h1></a>
                <a target="_blank" href="mailto: yashpokharna2002@gmail.com"><h1 class="text-secondary-100 text-3xl hover:-translate-y-2 transition ease-in-out hover:text-danger hover:animate-bounce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></h1></a>
                <div class="h-10 lg:h-28 border-gray-400 border-l w-0"></div>
            </div>
            {/* <h1 className="text-secondary-900 font-extrabold">by Yash Pokharna</h1> */}
        </div>
    )
}

export default Footer;