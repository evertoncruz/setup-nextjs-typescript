import Link from 'next/link';
import styles from './navigation.module.css'
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
]

type NavAnchorProps = {
  path: string
  children: ReactNode
}

function NavAnchor ({ path, children }: NavAnchorProps) {
  return (
   <Link legacyBehavior href={path}>
    <a className={styles.navAnchor}>{children}</a>
   </Link> 
  )
}

const Navigation: React.FC = () => {
  const { pathname } = useRouter()

  return (  
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({name, path}) => (
          <li key={path}>
            { path === pathname
             ? <span>{name}</span>
             : <NavAnchor path={path}>{name}</NavAnchor> }  
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;