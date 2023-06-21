type PageContainerProps = {
  children?: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="px-4 py-5 sm:px-6">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
