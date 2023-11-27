import React from "react";
import css from "./Navbar.module.scss";
import IconBtn from "../../styled/icon-btn/IconBtn";
import { currentUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCog, mdiUpload, mdiViewGrid } from "@mdi/js";

const Navbar = async () => {
  const user = await currentUser();

  const showSelectedItemsBar = false; //useSelectItems$((s) => s.turnedOn);

  return (
    <header className={css.navbar}>
      <div className={css.navbarBg}>
        <div className={css.navbarFlex}>
          <Link style={{ flex: 1 }} href="/">
            <h1 className="h5">Cerebro</h1>
          </Link>

          <IconBtn as={Link} href="/upload" title="Upload">
            <Icon path={mdiUpload} />
          </IconBtn>

          <IconBtn as={Link} href="/browse" title="Browse">
            <Icon path={mdiViewGrid} />
          </IconBtn>

          <IconBtn as={Link} href="/settings" title="Settings">
            <Icon path={mdiCog} />
          </IconBtn>

          {user && (
            <div style={{ width: 32, height: 32 }}>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
      {/*{showSelectedItemsBar && <SelectItemBar />}*/}
    </header>
  );
};

export default Navbar;
