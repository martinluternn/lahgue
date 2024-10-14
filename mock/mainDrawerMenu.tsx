import { DrawerMenuEntity } from "@/entity/drawerMenuEntity";
import ThemeColor from "@/themes/color";
import { Path, Svg } from "react-native-svg";

export const mainDrawerMenu: DrawerMenuEntity[] = [
    {
      key: "home",
      name: "Home",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
          />
        </Svg>
      ),
    },
    {
      key: "fresh",
      name: "Fresh",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
          />
          <Path stroke="none" d="M13 7h-2v6h6v-2h-4z" />
        </Svg>
      ),
    },
    {
      key: "trending",
      name: "Trending",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"
          />
        </Svg>
      ),
    },
    {
      key: "topic",
      name: "Topik",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.white}
          stroke={ThemeColor.white}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"
          />
          <Path
            stroke="none"
            d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"
          />
        </Svg>
      ),
    },
  ];