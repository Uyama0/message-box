import { MessageList } from "../../components/messageList/MessageList";
import { useSelector } from "react-redux";

import styles from "../mail.module.css";
import { RootState } from "@/types/mailTypes";

export const Mail = () => {
  // rewrite for memo
  // https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

  const messageData = useSelector(
    (state: RootState) => state.mails.data.Inbox || []
  );

  return (
    <section className={styles.mail}>
      <header className={styles.mail_header}>
        <h1>Inbox</h1>
      </header>
      <MessageList messageData={messageData} />
    </section>
  );
};
