import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./haeder";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = "/section13/13-01-library-icon";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenHeader && <LayoutBanner />}
      {!isHiddenHeader && <LayoutNavigation />}
      <div style={{ height: "500px", display: "flex " }}>
        {!isHiddenHeader && (
          <div style={{ width: "30%", background: "orange" }}>side bar</div>
        )}

        <div style={{ width: "79%", overflow: "auto;" }}>{props.children}</div>
      </div>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
