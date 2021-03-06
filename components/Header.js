import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header'>
      <Navigation />

      <div className='header__logo-box'>
        <Link href='/'>
          <a>
            <Image
              src='/images/roma-text.png'
              alt='Roma'
              width='175'
              height='60px'
              className='logo-image'
            />
          </a>
        </Link>
      </div>
      <Link href='/sacola' passHref>
        <div className='header__button header__button--left'>
          <i className='header__icon fas fa-shopping-bag'></i>
        </div>
      </Link>
    </header>
  );
};

export default Header;
