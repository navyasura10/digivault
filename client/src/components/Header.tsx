import { ShoppingCart, Moon, Sun, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "wouter";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onCategoryClick?: (category: string) => void;
}

export default function Header({ cartItemCount = 0, onCartClick, onCategoryClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [, setLocation] = useLocation();
  const { user, isAuthenticated } = useAuth();

  const categories = [
    { label: "All Products", path: "/products" },
    { label: "Study Planners", path: "/products?category=study-planners" },
    { label: "Daily Planners", path: "/products?category=daily-planners" },
    { label: "UI/UX Templates", path: "/products?category=ui-templates" },
    { label: "Research Papers", path: "/products?category=research-papers" },
    { label: "Design Assets", path: "/products?category=design-assets" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-2xl font-display font-bold text-primary cursor-pointer hover-elevate" data-testid="text-logo">
                DesignMarket
              </h1>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((category) => (
                <Button
                  key={category.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setLocation(category.path);
                    onCategoryClick?.(category.label);
                  }}
                  data-testid={`button-category-${category.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover-elevate"
                >
                  {category.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="w-64 pl-9"
                data-testid="input-search"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="button-theme-toggle"
              className="hover-elevate"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              data-testid="button-cart"
              className="relative hover-elevate"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover-elevate"
                    data-testid="button-user-menu"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} className="object-cover" />
                      <AvatarFallback>
                        {user.firstName?.[0] || user.email?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} className="object-cover" />
                      <AvatarFallback>
                        {user.firstName?.[0] || user.email?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium" data-testid="text-user-name">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground" data-testid="text-user-email">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLocation('/seller')} data-testid="menu-seller-dashboard">
                    <User className="h-4 w-4 mr-2" />
                    Seller Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/api/logout" data-testid="menu-logout">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="default"
                size="sm"
                asChild
                data-testid="button-login"
                className="hover-elevate active-elevate-2"
              >
                <a href="/api/login">Log In</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
