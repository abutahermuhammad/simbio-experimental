"use client";
import { Avatar, Menu, MenuPopover, MenuTrigger, Text, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { WeatherSunny24Regular, Person24Regular, Settings24Regular, SignOut24Regular } from "@fluentui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

interface UserMenuPropsType {
    className?: string;
}

const UserMenu: FC<UserMenuPropsType> = ({ className }: UserMenuPropsType) => {
    const router = useRouter();

    const changeTheme = (theme: string): void => {
        console.log("Theme Changed");
    };

    const logoutHandler = () => {
        console.log("CLICKED: Sign Out");
    };

    return (
        <div>
            <Menu>
                <MenuTrigger>
                    <Avatar aria-label="Avatar" icon={<Person24Regular />} />
                </MenuTrigger>

                <MenuPopover className="h-[280px] min-h-[270px] w-full min-w-[320px] max-w-[320px] p-0 bg-white rounded border-0 shadow-lg">
                    <div className="inherit flex h-[268px] min-h-[220px] flex-col items-center justify-center p-[14px]">
                        <Avatar
                            className="mx-[10] my-[15]"
                            name="Abu Taher Muhammad"
                            image={{ src: "/image/logo/bss.jpg" }}
                            size={72}
                        />

                        <div className="mb-[15px]">
                            <p className="subtitle1 mb-0.5 text-center">
                                Abu Taher Muhammad
                            </p>
                            <p className="body1 text-center">
                                Software Engineer
                            </p>
                            <Link href={"/clubs/232"}>
                                <p className="body1Strong text-center">
                                    Blood Solider Society
                                </p>
                            </Link>
                        </div>

                        <Toolbar>
                            <ToolbarButton
                                title="Profile"
                                icon={<Person24Regular />}
                                onClick={() => router.push("/user/profile")}
                            />
                            <ToolbarButton
                                title="Profile"
                                icon={<WeatherSunny24Regular />}
                                onClick={() => changeTheme}
                            />
                            <ToolbarButton
                                title="Settings"
                                icon={<Settings24Regular />}
                                onClick={() => router.push("/user/settings")}
                            />
                            <ToolbarButton title="Logout" icon={<SignOut24Regular />} onClick={logoutHandler} />
                        </Toolbar>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center bg-[#f5f5f5]">
                        <Text className="caption1 text-[13px] leading-7 text-[#1b1b1b]">
                            All rights reserved by <Link href="https://dot9.dev">Dot9</Link>
                        </Text>
                    </div>
                </MenuPopover>
            </Menu>
        </div>
    );
};

export default memo(UserMenu);