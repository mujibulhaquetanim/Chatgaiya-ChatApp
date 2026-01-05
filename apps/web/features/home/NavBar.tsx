import { useAppStore } from "@/hooks/state";
import { Button } from "@workspace/ui/components/button";
import { Bell, Home, User } from "lucide-react";
import { generateMockUser } from "@/lib/apis"

interface NavigationProps { className?: string; }

// Navigation Component
export const Navigation: React.FC<NavigationProps> = ({className}) => {
  const { currentPage, navigateTo } = useAppStore();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t md:relative md:border-t-0 md:border-r md:w-20 lg:w-64 md:h-screen ${className}`}>
      <div className="flex md:flex-col justify-around md:justify-start md:pt-8 py-2 md:py-0">
        <Button
          variant="ghost"
          className={`flex items-center gap-3 justify-center md:justify-start md:w-full py-6 ${
            currentPage === 'feed' ? 'font-bold' : ''
          }`}
          onClick={() => navigateTo('feed')}
        >
          <Home className="h-6 w-6" />
          <span className="hidden lg:inline">Home</span>
        </Button>
        
        <Button
          variant="ghost"
          className={`flex items-center gap-3 justify-center md:justify-start md:w-full py-6 ${
            currentPage === 'notifications' ? 'font-bold' : ''
          }`}
          onClick={() => navigateTo('notifications')}
        >
          <Bell className="h-6 w-6" />
          <span className="hidden lg:inline">Notifications</span>
        </Button>
        
        <Button
          variant="ghost"
          className={`flex items-center gap-3 justify-center md:justify-start md:w-full py-6 ${
            currentPage === 'profile' ? 'font-bold' : ''
          }`}
          onClick={() => navigateTo('profile', generateMockUser(1))}
        >
          <User className="h-6 w-6" />
          <span className="hidden lg:inline">Profile</span>
        </Button>
      </div>
    </div>
  );
};