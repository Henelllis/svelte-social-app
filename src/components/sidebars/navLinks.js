import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
import TiGroupOutline from "svelte-icons/ti/TiGroupOutline.svelte";
import TiCogOutline from "svelte-icons/ti/TiCogOutline.svelte";
import TiBell from "svelte-icons/ti/TiBell.svelte";
import TiZoomOutline from "svelte-icons/ti/TiZoomOutline.svelte";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: TiHomeOutline
  },
  {
    name: "Profile",
    path: "/",
    icon: TiGroupOutline
  },
  {
    name: "More",
    path: "/",
    icon: TiCogOutline
  },
  {
    name: "Notification",
    path: "/",
    icon: TiBell
  },
  {
    name: "Discover",
    path: "/",
    icon: TiZoomOutline
  }
];
