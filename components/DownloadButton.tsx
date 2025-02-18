import { ReactNode } from 'react'
import styles from './DownloadButton.module.css'

interface DownloadButtonProps {
  href: string
  label?: string
}

export function DownloadButton({ href, label }: DownloadButtonProps) {
  return (
    <span className={styles.wrapper}>
      <a
        href={href}
        className={styles.downloadButton}
      >
        Download
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2M11 8l-3 3-3-3M8 11V2" />
        </svg>
      </a>
    </span>
  )
} 