import { Suspense, useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar, SideBar, Main, ResponsiveMenu, LoadScreen } from "../components";

export const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const onMenu = useCallback(() => {
    setMenuIsOpen(!menuIsOpen);
  }, [menuIsOpen]);

  return (
    <Suspense fallback={<LoadScreen />}>
      <BrowserRouter>
        <div className="main-layout">
          <NavBar onMenu={onMenu} menuIsOpen={menuIsOpen} />
          <SideBar />
          <ResponsiveMenu
            open={menuIsOpen}
            onClose={() => {
              setMenuIsOpen(false);
            }}
          />
          <Main />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
