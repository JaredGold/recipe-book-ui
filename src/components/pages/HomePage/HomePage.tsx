export const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-semibold text-gray-800">Recipe Book</h1>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Field 1</dt>
                <dd className="mt-1 text-sm text-gray-900">Value 1</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
