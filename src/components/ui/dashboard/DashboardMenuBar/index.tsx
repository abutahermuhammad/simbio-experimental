import { Avatar } from "@fluentui/react-components";
import {
  HomeMore24Regular,
  DocumentBulletList24Regular,
  CalendarError24Regular,
  PeopleTeam24Regular,
  People24Regular,
  HomeMore24Filled,
  BookContacts24Regular,
  MoneyHand24Regular,
} from "@fluentui/react-icons";
import { FC, RefObject, memo, useEffect, useRef, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { IMenuItem } from "@/types";
import AddNewMenu from "./AddNewMenu";
import OptionalMenu from "./OptionalMenu";

interface IMenuBarProps {
  className?: string;
  rest?: object;
}

const profileMenu: IMenuItem[] = [
  {
    title: "Profile",
    url: "/profile",
    icon: <People24Regular />,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: <People24Regular />,
  },
  {
    title: "Users",
    url: "/users",
    icon: <People24Regular />,
  },
  {
    title: "Teams",
    url: "/teams",
    icon: <PeopleTeam24Regular />,
  },
  {
    title: "Members",
    url: "/members",
    icon: <People24Regular />,
  },
  // Now `Team` is accessible through `Teams` directory.
  // {
  //   title: "Team",
  //   url: "/team",
  //   icon: <PeopleTeam24Regular />,
  // },
  {
    title: "Funds",
    url: "/funds",
    icon: <MoneyHand24Regular />,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: <BookContacts24Regular />,
  },
  {
    title: "Clubs",
    url: "/clubs",
    icon: <HomeMore24Filled />,
  },
  {
    title: "Collection Centers",
    url: "/collection-centers",
    icon: <HomeMore24Regular />,
  },
];

const optionalProfileMenu: IMenuItem[] = [
  {
    title: "Report error",
    url: "/report/error",
    icon: <CalendarError24Regular />,
  },
  {
    title: "Help",
    url: "/doc/help",
    icon: <DocumentBulletList24Regular />,
  },
];

const profileActionMenu: IMenuItem[] = [
  {
    title: "Add member",
    url: "/members/new",
    icon: <People24Regular />,
  },
  {
    title: "Add club",
    url: "/clubs/new",
    icon: <HomeMore24Filled />,
  },
  {
    title: "Add team member",
    url: "/team/new",
    icon: <PeopleTeam24Regular />,
  },
  {
    title: "Add Donation",
    url: "funds/new ",
    icon: <MoneyHand24Regular />,
  },
  {
    title: "Add contact",
    url: "/contacts/new",
    icon: <BookContacts24Regular />,
  },
  {
    title: "Add collection center",
    url: "/collection-center/new",
    icon: <HomeMore24Regular />,
  },
  {
    title: "New donation",
    url: "/donations/new",
    icon: <HomeMore24Regular />,
  },
  {
    title: "New blood request",
    url: "/blood-requests/new",
    icon: <HomeMore24Regular />,
  },
];

const DashboardMenuBar: FC<IMenuBarProps> = ({
  className,
  ...rest
}: IMenuBarProps) => {
  const [showAvatar, setShowAvatar] = useState(false);
  const menuBarRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);

      return () => {
        mainElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    if (menuBarRef.current) {
      let top: any = menuBarRef.current.getBoundingClientRect().y;

      if (top <= 48) {
        setShowAvatar(true);
      } else {
        setShowAvatar(false);
      }
    }
  };

  return (
    <header
      className="sticky top-0 z-1 w-full border-b border-b-[#e0e0e0] bg-[#f5f5f5] max-md:w-screen"
      ref={menuBarRef}
      {...rest}
    >
      <div className="flex h-full w-full flex-row flex-nowrap items-start justify-between px-4 py-2">
        <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-3">
          {/* This is member profile avatar. This will be visible when
                    user page get scrolled and profile header is not in the viewport. */}
          {showAvatar && (
            <Avatar
              aria-label="Avatar"
              image={{ src: "/image/logo/bss.jpg" }}
            />
          )}

          {/* Dropdown Menu */}
          <OptionalMenu menu={profileActionMenu} />

          <ProfileMenu menu={profileMenu} />
        </div>

        <div>
          {/* Right side */}
          <AddNewMenu menu={profileActionMenu} />
        </div>
      </div>
    </header>
  );
};

export default memo(DashboardMenuBar);
