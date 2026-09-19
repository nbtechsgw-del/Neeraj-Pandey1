import styles from "./CSSModule.module.css";

function CSSModule() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>CSS Modules</h2>

      <p>
        This component uses CSS Modules.
      </p>

      <button className={styles.button}>
        Click Me
      </button>
    </div>
  );
}

export default CSSModule;