// page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Settings,
} from "lucide-react";

interface SplineControlsProps {
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onFullscreen: () => void;
  onSettings: () => void;
  isPlaying: boolean;
}

const SplineControls: React.FC<SplineControlsProps> = ({
  onPlay,
  onPause,
  onReset,
  onFullscreen,
  onSettings,
  isPlaying,
}) => (
  <div className="absolute bottom-4 left-4 flex gap-2 bg-black/20 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button
      onClick={isPlaying ? onPause : onPlay}
      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
      title={isPlaying ? "Pause Animation" : "Play Animation"}
    >
      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
    </button>
    <button
      onClick={onReset}
      className="p-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
      title="Reset View"
    >
      <RotateCcw size={16} />
    </button>
    <button
      onClick={onFullscreen}
      className="p-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
      title="Fullscreen"
    >
      <Maximize2 size={16} />
    </button>
    <button
      onClick={onSettings}
      className="p-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
      title="Settings"
    >
      <Settings size={16} />
    </button>
  </div>
);

export default function BusinessSolutionsPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    // Simulate spline loading
    const timer = setTimeout(() => setSplineLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, you'd communicate with the Spline iframe
    console.log("Playing Spline animation");
  };

  const handlePause = () => {
    setIsPlaying(false);
    console.log("Pausing Spline animation");
  };

  const handleReset = () => {
    console.log("Resetting Spline view");
    // Reset camera position and animation state
  };

  const handleFullscreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-3xl z-10">
          <div className="mb-6">
            <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">
              Our Services
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            We Provide Best{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Business
            </span>{" "}
            Solutions
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl">
            We deliver top-notch business solutions tailored to meet your unique
            needs, ensuring efficiency, growth, and success. Our expert team
            leverages innovative strategies and technologies to drive your
            business forward and achieve outstanding results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg">
              Learn More
              <ChevronDown
                className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300"
                size={16}
              />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Spline 3D Model Container */}
        <div className="flex-1 relative group">
          <div className="relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            {/* Loading State */}
            {!splineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                  <p className="text-gray-400">Loading 3D Experience...</p>
                </div>
              </div>
            )}

            {/* Spline iframe */}
            <iframe
              src="https://my.spline.design/websitedeveloper-mIXTgAnKxlO5spxFrD9bUMDk "
              // src="https://app.spline.design/file/13c30943-7443-49a9-b821-5d087705d7cd"
              frameBorder="0"
              width="100%"
              height="100%"
              className={`transition-opacity duration-1000 ${
                splineLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setSplineLoaded(true)}
              title="Interactive 3D Business Model"
            />

            {/* Interactive Controls */}
            <SplineControls
              onPlay={handlePlay}
              onPause={handlePause}
              onReset={handleReset}
              onFullscreen={handleFullscreen}
              onSettings={handleSettings}
              isPlaying={isPlaying}
            />

            {/* Settings Panel */}
            {showSettings && (
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 w-64 text-white">
                <h3 className="font-semibold mb-3">3D Settings</h3>

                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-2">
                    Animation Speed
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={animationSpeed}
                    onChange={(e) =>
                      setAnimationSpeed(parseFloat(e.target.value))
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-400">
                    {animationSpeed}x
                  </span>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={autoRotate}
                      onChange={(e) => setAutoRotate(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm">Auto Rotate</span>
                  </label>
                </div>

                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            )}

            {/* Interaction Hint */}
            <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">
                🖱️ Click & drag to rotate
                <br />
                🖱️ Scroll to zoom
                <br />
                ⌨️ Use controls for more options
              </p>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Solutions
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Experience",
                description:
                  "Engage with our 3D models and interactive demonstrations",
                icon: "🎮",
              },
              {
                title: "Cutting-edge Technology",
                description:
                  "Built with Next.js 15, TypeScript, and modern web standards",
                icon: "🚀",
              },
              {
                title: "Responsive Design",
                description:
                  "Perfect experience across all devices and screen sizes",
                icon: "📱",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}