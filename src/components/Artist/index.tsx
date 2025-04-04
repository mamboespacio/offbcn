import styles from './style.module.css';

interface ArtistProps {
  index: number;
  name: string;
  // setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}

export default function Artist({ index, name }: ArtistProps) {
  return (
    <div
      className={styles.artist}
      // onMouseEnter={() => { setModal({ active: true, index }) }}
      // onMouseLeave={() => { setModal({ active: false, index }) }}
    >
      {name}
    </div>
  )
}