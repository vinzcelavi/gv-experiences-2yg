import React from 'react';

const Topographic: React.FC = () => {
  return (
    <div className="z-0 absolute top-0 left-1/2 -translate-x-1/2 w-full h-[645px] bg-gradient-to-b from-sand via-sand to-white">
      <div className="opacity-40 [mask-image:radial-gradient(900px_circle_at_top,white,transparent)] [mask-repeat:no-repeat] [-webkit-mask-image:radial-gradient(900px_circle_at_top,white,transparent)] [-webkit-mask-repeat:no-repeat]">
        <img src="/topographic-lines.svg" alt="Topographic" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Topographic;