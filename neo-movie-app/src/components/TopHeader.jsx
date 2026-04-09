import { Search, ChevronDown, Bell } from 'lucide-react';

const TopHeader = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex w-full min-h-[80px] border-b-4 border-borderBlack z-10 relative bg-bgCream">
      {/* Search Bar Area */}
      <div className="flex-grow bg-accentYellow flex items-center px-8 border-r-4 border-borderBlack relative overflow-hidden">
        {/* Decorative brutalist lines */}
        <div className="absolute top-0 right-0 w-16 h-full bg-stripes-black opacity-10"></div>
        
        <div className="relative w-full max-w-2xl group flex">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <Search size={24} className="text-gray-200" />
          </div>
          <input 
            type="text" 
            placeholder="Type to search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 py-4 bg-[#14002B] neo-border font-mono text-base border-b-[4px] border-r-[4px] shadow-none focus:outline-none focus:border-accentOrange focus:-translate-y-1 focus:shadow-neo-lg transition-all"
          />
        </div>
      </div>

      {/* User Profile Area */}
      <div className="w-[350px] bg-navCream flex items-center justify-between px-6 shrink-0 border-l-0">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-[#14002B] p-2 border-2 border-transparent hover:border-borderBlack hover:shadow-neo transition-all rounded-sm group">
          <div className="w-12 h-12 neo-border bg-accentNeon overflow-hidden border-[3px] group-hover:scale-105 transition-transform">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Rohith&backgroundColor=C084FC" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-extrabold text-sm leading-tight uppercase tracking-wide">Rohith</p>
            <p className="text-xs text-white font-mono font-bold bg-[#14002B] border border-borderBlack px-1 mt-0.5 shadow-[1px_1px_0px_rgba(0,0,0,1)]">PRO MEMBER</p>
          </div>
          <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
        </div>
        
        <button className="w-12 h-12 neo-border bg-[#14002B] flex items-center justify-center neo-hover-effect relative border-b-[4px] border-r-[4px] active:translate-y-[2px] active:border-b-2 active:border-r-2 active:shadow-none">
          <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border border-borderBlack animate-pulse"></div>
          <Bell size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
