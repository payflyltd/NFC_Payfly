import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

const Leftbar = () => {

  const {pathname} = useLocation();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to='/' className='flex gap-3 items-center'>
          <img src="/assets/images/logo.png" alt="logo" width={150} height={30} />
        </Link>
        {/* {This image should be connected to user profile image} */}
        <Link to='/profile' className='flex items-center gap-3'>
          <img src={'/assets/images/profile.png'} alt="profile image" className='h-14 w-14 rounded-full' />
          <div className="flex flex-col">
            <p className='body-bold'>
              Ajose Damilare {/* name */}
            </p>
            <p className='small-regular text-light-3'>
              @Dakolo14 {/* @username */}
            </p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {

            const isActive = pathname === link.route;

            return (
              <li key={link.label} className={`leftsidebar-link group ${
                isActive && 'bg-primary-500'
              }`}>
                <NavLink to={link.route} className='flex gap-4 items-center p-4'>
                  <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${
                    isActive && 'invert-white'
                  }`} />
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <Button variant="ghost" className='shad-button_ghost'>
        <img src="/assets/icons/logout.svg" alt="logout icon" />
        <p className='small-medium lg:base-medium'>Logout</p>
      </Button>
    </nav>
  )
}

export default Leftbar
