import React from "react";
import css from "./Navbar.module.scss";
import IconBtn from "../../styled/icon-btn/IconBtn";
// import { useSelectItems$ } from "../../store/browse/selectItemsStore";
// import SelectItemBar from "./select-item-bar/SelectItemBar";
import { currentUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiAccount, mdiPlus, mdiViewGrid } from "@mdi/js";

const Navbar = async () => {
  const user = await currentUser();

  const showSelectedItemsBar = false; //useSelectItems$((s) => s.turnedOn);

  return (
    <header className={css.navbar}>
      <div className={css.navbarBg}>
        <div className={css.navbarFlex}>
          <div style={{ flex: 1 }}>
            <h1 className="h5">Cerebro</h1>
          </div>

          {user && (
            <IconBtn as={Link} href="/import" title="Import media">
              <Icon path={mdiPlus} />
            </IconBtn>
          )}

          <IconBtn as={Link} href="/browse" title="Browse media">
            <Icon path={mdiViewGrid} />
          </IconBtn>

          <IconBtn as={Link} href="/login">
            <Icon path={mdiAccount} />
          </IconBtn>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      {/*{showSelectedItemsBar && <SelectItemBar />}*/}
    </header>
  );
};

export default Navbar;
