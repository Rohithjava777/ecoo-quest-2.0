import { Home as HomeIcon, Compass, BookOpen, Download, Bookmark, Settings, LifeBuoy, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: HomeIcon, group: 'main', path: '/' },
    { name: 'Category', icon: Compass, group: 'main', path: '/category' },
    { name: 'Saved', icon: Bookmark, group: 'main', path: '/saved' },
    { name: 'Library', icon: BookOpen, group: 'main', path: '/saved' },
    { name: 'Download', icon: Download, group: 'main', path: '/saved' },
    { name: 'Settings', icon: Settings, group: 'bottom', path: '#' },
    { name: 'Support', icon: LifeBuoy, group: 'bottom', path: '#' },
    { name: 'Logout', icon: LogOut, group: 'bottom', path: '#' },
  ];

  return (
    <div className="w-[220px] h-screen bg-navCream border-r-4 border-borderBlack flex flex-col py-8 justify-between fixed left-0 top-0 z-20 overflow-y-auto">
      
      <div className="flex flex-col gap-8 w-full px-4">
        {/* Logo Text */}
        <NavLink to="/" className="w-full flex items-center justify-center bg-[#14002B] neo-border border-b-[6px] border-r-[4px] shadow-neo mb-6 cursor-pointer hover:-translate-y-1 hover:shadow-glow transition-all py-3">
          <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
            NEO<br/><span className="text-accentOrange">MOVIES</span>
          </span>
        </NavLink>

        {/* Top Menu */}
        <div className="flex flex-col gap-4 w-full">
          {menuItems.filter(i => i.group === 'main').map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 cursor-pointer transition-all duration-200 w-full neo-border px-4 py-3 bg-[#14002B] font-bold text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] active:translate-y-[2px] active:shadow-none ${
                  isActive && item.path !== '#' 
                  ? 'border-b-[4px] border-r-[4px] bg-accentOrange text-white' 
                  : 'text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} className={isActive && item.path !== '#' ? "text-white" : "text-white"} />
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="flex flex-col gap-4 w-full px-4 mt-12">
        {menuItems.filter(i => i.group === 'bottom').map((item) => (
          <div 
            key={item.name}
            className={`flex items-center gap-4 cursor-pointer transition-all duration-200 w-full neo-border px-4 py-3 bg-[#14002B] font-bold text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] active:translate-y-[2px] active:shadow-none text-white ${item.name === 'Logout' ? 'bg-red-900' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
