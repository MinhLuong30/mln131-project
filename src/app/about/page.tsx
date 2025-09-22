export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Welcome to our MLN131 project! This is a demonstration of Next.js routing
              and component structure.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This project showcases:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>Next.js 15 with App Router</li>
              <li>TypeScript integration</li>
              <li>Tailwind CSS for styling</li>
              <li>Responsive navigation</li>
              <li>Dark mode support</li>
              <li>Modern React patterns</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to explore the different pages and see how the routing works
              in this modern Next.js application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}