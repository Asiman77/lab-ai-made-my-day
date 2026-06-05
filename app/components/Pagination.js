import styles from "./Pagination.module.css";

// Prev / Next pagination controls.
export default function Pagination({ page, onPrev, onNext }) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={onPrev}
        disabled={page === 1}
        className={page === 1 ? `${styles.button} ${styles.buttonDisabled}` : styles.button}
      >
        Previous
      </button>

      <span className={styles.pageLabel}>Page {page}</span>

      <button onClick={onNext} className={styles.button}>
        Next
      </button>
    </div>
  );
}
