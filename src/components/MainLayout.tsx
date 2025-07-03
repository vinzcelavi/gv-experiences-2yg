import { useState } from 'react';
import ExperienceGrid from './ExperienceGrid';
import MapPlaceholder from './MapPlaceholder';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-100 relative max-w-[90rem] mx-auto px-6 pb-8">
      <div className="flex gap-8 min-h-screen">
        {/* Left Column - 66% */}
        <div className="w-full lg:w-2/3">
          {/* Floating mobile map button */}
          <div className="block lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-mine-shaft text-primary-foreground text-sm font-medium shadow-2xl"
                  onClick={() => setOpen(true)}
                >
                  Afficher la carte
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="p-0 h-[80vh] max-h-[90vh] flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <MapPlaceholder />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <ExperienceGrid />
        </div>
        
        {/* Right Column - 33% (hidden on mobile) */}
        <div className="hidden lg:block w-1/3 min-w-[450px]">
          <div className="sticky top-[100px] h-[calc(100vh-132px)]">
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;