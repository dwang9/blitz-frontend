/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>

            <main className={styles.main}>{props.children}</main>

            <footer className={styles.footer}>
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  );
}
