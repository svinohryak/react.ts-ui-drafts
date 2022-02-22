import { ReactComponent as ShoppingCartIcon } from "./svg/shopping-cart.svg";
import { ReactComponent as XSignIcon } from "./svg/x-sign.svg";
import { ReactComponent as CheckIcon } from "./svg/check.svg";
import { ReactComponent as SettingsIcon } from "./svg/settings.svg";
import { ReactComponent as Bell } from "./svg/bell.svg";
import { ReactComponent as BookOpen } from "./svg/book-open.svg";
import { ReactComponent as Calendar } from "./svg/calendar.svg";
import { ReactComponent as ChevronDown } from "./svg/chevron-down.svg";
import { ReactComponent as ChevronRight } from "./svg/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "./svg/chevron-left.svg";
import { ReactComponent as Circle } from "./svg/circle.svg";
import { ReactComponent as Clipboard } from "./svg/clipboard.svg";
import { ReactComponent as Download } from "./svg/download.svg";
import { ReactComponent as Edit } from "./svg/edit.svg";
import { ReactComponent as EyeOff } from "./svg/eye-off.svg";
import { ReactComponent as Eye } from "./svg/eye.svg";
import { ReactComponent as Grid } from "./svg/grid.svg";
import { ReactComponent as HelpCircle } from "./svg/help-circle.svg";
import { ReactComponent as Home } from "./svg/home.svg";
import { ReactComponent as Lock } from "./svg/lock.svg";
import { ReactComponent as LogOut } from "./svg/log-out.svg";
import { ReactComponent as Mail } from "./svg/mail.svg";
import { ReactComponent as MapPin } from "./svg/map-pin.svg";
import { ReactComponent as Minus } from "./svg/minus.svg";
import { ReactComponent as MoreVertical } from "./svg/more-vertical.svg";
import { ReactComponent as Plus } from "./svg/plus.svg";
import { ReactComponent as Trash } from "./svg/trash-2.svg";
import { ReactComponent as Truck } from "./svg/truck.svg";
import { ReactComponent as UserCheck } from "./svg/user-check.svg";
import { ReactComponent as UserMinus } from "./svg/user-minus.svg";
import { ReactComponent as UserPlus } from "./svg/user-plus.svg";
import { ReactComponent as UserX } from "./svg/user-x.svg";
import { ReactComponent as User } from "./svg/user.svg";
import { ReactComponent as Users } from "./svg/users.svg";

export const ICONS = {
  CHECK: CheckIcon,
  CART: ShoppingCartIcon,
  XSIGN: XSignIcon,
  SETTINGS: SettingsIcon,
  USER: User,
  USERS: Users,
  USER_X: UserX,
  USER_PLUS: UserPlus,
  USER_MINUS: UserMinus,
  USER_CHECK: UserCheck,
  TRUCK: Truck,
  TRASH: Trash,
  PLUS: Plus,
  MORE_VERTICAL: MoreVertical,
  MINUS: Minus,
  MAP_PIN: MapPin,
  MAIL: Mail,
  LOG_OUT: LogOut,
  LOCK: Lock,
  HOME: Home,
  HELP_CIRCLE: HelpCircle,
  GRID: Grid,
  EYE: Eye,
  EYE_OFF: EyeOff,
  EDIT: Edit,
  DOWNLOAD: Download,
  CLIPBOARD: Clipboard,
  CIRCLE: Circle,
  CHEVRON_LEFT: ChevronLeft,
  CHEVRON_RIGHT: ChevronRight,
  CHEVRON_DOWN: ChevronDown,
  CALENDAR: Calendar,
  BOOK_OPEN: BookOpen,
  BELL: Bell
};

export type IconType = keyof typeof ICONS;
