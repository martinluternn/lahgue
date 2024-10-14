import { DrawerMenuEntity } from "@/entity/drawerMenuEntity";
import ThemeColor from "@/themes/color";
import Svg, { Path } from "react-native-svg";

export const priorityChoiceProfileMenu = (
  activeSelection: string
): DrawerMenuEntity[] => [
  {
    key: "login",
    name: "Login",
    image: (
      <Svg
        width={18}
        height={18}
        fill={
          activeSelection == "login"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        stroke={
          activeSelection == "login"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3zm6.002 16H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"
        />
      </Svg>
    ),
  },
  {
    key: "lahgueplus",
    name: "Lahgue Plus",
    image: (
      <Svg
        width={18}
        height={18}
        fill={
          activeSelection == "lahgueplus"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        stroke={
          activeSelection == "lahgueplus"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="m20.43 5.76-8-3.56a1 1 0 0 0-.82 0l-8 3.56a1 1 0 0 0-.59.9c0 2.37.44 10.8 8.51 15.11a1 1 0 0 0 1 0c8-4.3 8.58-12.71 8.57-15.1a1 1 0 0 0-.67-.91zm-4.43 7h-3v3h-2v-3H8v-2h3v-3h2v3h3z"
        />
      </Svg>
    ),
  },
];

export const regularChoiceProfileMenu = (
  activeSelection: string
): DrawerMenuEntity[] => [
  {
    key: "download",
    name: "Download aplikasi",
    image: (
      <Svg
        width={18}
        height={18}
        fill={
          activeSelection == "download"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        stroke={
          activeSelection == "download"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"
        />
      </Svg>
    ),
  },
  {
    key: "setting",
    name: "Pengaturan",
    image: (
      <Svg
        width={18}
        height={18}
        fill={
          activeSelection == "setting"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        stroke={
          activeSelection == "setting"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"
        />
        <Path
          stroke="none"
          d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"
        />
      </Svg>
    ),
  },
  {
    key: "contactus",
    name: "Hubungi kami",
    image: (
      <Svg
        width={18}
        height={18}
        fill={
          activeSelection == "contactus"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        stroke={
          activeSelection == "contactus"
            ? ThemeColor.primaryColor
            : ThemeColor.lightGrey
        }
        strokeWidth={0}
        viewBox="0 0 24 24"
      >
        <Path
          stroke="none"
          d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"
        />
        <Path stroke="none" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
      </Svg>
    ),
  },
];
