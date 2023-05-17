import styles from './header.module.css'

const Header: React.FC = () => {
  return (  
    <header className={styles.container}>
      <h1 className={styles.title}>Nextjs + Typescript</h1>
    </header>
  );
}

export default Header;