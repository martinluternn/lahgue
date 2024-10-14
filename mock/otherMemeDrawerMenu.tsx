import { DrawerMenuEntity } from "@/entity/drawerMenuEntity";
import ThemeColor from "@/themes/color";
import Svg, { Circle, Path } from "react-native-svg";

export const otherMemeDrawerMenu: DrawerMenuEntity[] = [
    {
      key: "peringkat",
      name: "Peringkat",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.lightGrey}
          stroke={ThemeColor.lightGrey}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"
          />
        </Svg>
      ),
    },
    {
      key: "tersimpan",
      name: "Tersimpan",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.lightGrey}
          stroke={ThemeColor.lightGrey}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path stroke="none" d="M11.024 11.536 10 10l-2 3h9l-3.5-5z" />
          <Circle cx={9.503} cy={7.497} r={1.503} stroke="none" />
          <Path
            stroke="none"
            d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"
          />
        </Svg>
      ),
    },
    {
      key: "acak",
      name: "Acak",
      image: (
        <Svg
          width={16}
          height={16}
          fill={ThemeColor.lightGrey}
          stroke={ThemeColor.lightGrey}
          strokeWidth={0}
          viewBox="0 0 24 24"
        >
          <Path
            stroke="none"
            d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"
          />
          <Path
            stroke="none"
            d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"
          />
        </Svg>
      ),
    },
  ];