import styles from "./TempUnitToggle.module.css";

function TempUnitToggle({ isCelsius, handleToggle }) {
  return (
    <div>
      <label className={styles.toggle}>
        <input type="checkbox" checked={isCelsius} onChange={handleToggle} />
        <span className={styles.slider}>
          <span className={styles.unit}>°F</span>
          <span className={styles.unit}>°C</span>
        </span>
      </label>
    </div>
  );
}

export default TempUnitToggle;
