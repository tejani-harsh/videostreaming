import Link from "next/link";
export default function videodialog() {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="relative">
          {/* Video iframe */}
          <iframe
            className="w-full h-64"
            src="/videos/demo-desert.mp4"
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          {/* Close button */}
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={console.log("closed")}
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Video Title</h2>
          <p className="text-gray-700">Video description goes here.</p>
          <Link href={"/"}>go to home</Link>
        </div>
      </div>
    </div>
  );
}
