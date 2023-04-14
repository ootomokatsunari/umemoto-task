import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#about" className={styles.navLink}>About</a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </li>
        </ul>
      </nav>
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.heading}>かっくんのポートフォリオ</h1>
        <p className={styles.intro}>
          はじめまして、私はかっくんです。このポートフォリオでは、私のプロジェクトやスキルを紹介します。
        </p>
        <Image
          src="/profile.jpg"
          alt="プロフィール画像"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <p className={styles.profileBio}>
          私はフロントエンド開発に興味を持っており、ReactやNext.jsなどのフレームワークを使用してWebアプリケーションを開発しています。
        </p>
      </section>
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.subheading}>プロジェクト</h2>
        <ul className={styles.projectsList}>
          <li className={styles.project}>
            <h3 className={styles.projectTitle}>プロジェクト1</h3>
            <p className={styles.projectDescription}>
              これはプロジェクト1の説明です。
            </p>
          </li>
          <li className={styles.project}>
            <h3 className={styles.projectTitle}>プロジェクト2</h3>
            <p className={styles.projectDescription}>
              これはプロジェクト2の説明です。
            </p>
          </li>
        </ul>
      </section>
      <section id="contact" className={styles.contactSection}>
        <h2 className={styles.subheading}>お問い合わせ</h2>
        <p className={styles.contactDescription}>
          ご質問やご要望があれば、お気軽にお問い合わせください。
        </p>
        <form className={styles.contactForm}>
          <label htmlFor="name">名前</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">メッセージ</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit" className={styles.submitButton}>送信</button>
          </form>
      </section>
      <footer className={styles.footer}>
        <p>Copyright © 2023 
          <a href="https://example.com" className={styles.footerLink}>
            かっくん
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  )
}

