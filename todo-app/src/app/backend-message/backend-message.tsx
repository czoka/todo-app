import { useEffect, useState } from 'react';
import styles from './backend-message.module.css';

/* eslint-disable-next-line */
export interface BackendMessageProps {}

export function BackendMessage(props: BackendMessageProps) {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    alert(message);
  }, [message]);

  const onClick = () => {
    fetch('http://localhost:3000/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'no-cors': 'true',
      },
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setMessage(data.message);
      });
    });
  };

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <button onClick={onClick} className={styles.button}>
      Get Message
    </button>
  );
}

export default BackendMessage;
