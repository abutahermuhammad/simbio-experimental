import { MenuItemType } from "@/types";
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { ChevronDown20Regular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

export interface AddNewMenuPropsType {
  menu: MenuItemType[];
}

const AddNewMenu: FC<AddNewMenuPropsType> = ({ menu }: AddNewMenuPropsType) => {
  const router = useRouter();

  return (
    <Menu positioning="below-end">
      <MenuTrigger disableButtonEnhancement>
        <Button
          style={{ width: "max-content" }}
          icon={<ChevronDown20Regular />}
          iconPosition="after"
        >
          Add new
        </Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {menu.map((e, i) => (
            <MenuItem key={i} icon={e.icon} onClick={() => router.push(e.url)}>
              {e.title}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default memo(AddNewMenu);
