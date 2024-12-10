'use client';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='container max-w-[1300px] mx-auto md:px-[20px] px-[15px]'>
      {children}
    </div>
  );
};

export default Container;
