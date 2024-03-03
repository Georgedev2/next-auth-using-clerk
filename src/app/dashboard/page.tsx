import { auth, currentUser } from '@clerk/nextjs';

import styles from './dashboard.module.css';

const DashBoardPage = async () => {
  const user = await currentUser();
  return (
    <div>
      <>
        <div className={styles.main}>
          <div className={styles.user}>Hello,  {user?.lastName} {user?.firstName}  !</div>
        </div>
      </>
    </div>
  );
};

export default DashBoardPage;
