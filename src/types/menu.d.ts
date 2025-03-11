interface SubMenuItem {
  title: string;
  href: string;
  subMenu?: SubMenuItem[];
}

interface MegaMenuItem {
  title: string;
  href?: string;
  items: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href: string;
  subMenu?: SubMenuItem[];
  megaMenu?: MegaMenuItem[];
}

interface MenuData {
  menuItems: MenuItem[];
}
