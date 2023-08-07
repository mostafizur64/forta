const Container = ({children}) => {
  return (
    <div className="max-w-[1728px] mx-auto xl:px-[100px] md:px-[70px] sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
