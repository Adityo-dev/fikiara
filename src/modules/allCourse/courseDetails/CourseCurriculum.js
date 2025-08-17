"use client";
import { modulesData } from "@/data/modulesData";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";
import { useState } from "react";

export default function CourseModules() {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);
  const [openVideoIndex, setOpenVideoIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
    setOpenVideoIndex(null); // reset video when switching modules
  };

  const toggleVideo = (index) => {
    setOpenVideoIndex(openVideoIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Course Curriculum
      </h2>

      {modulesData.map((module, moduleIndex) => (
        <div
          key={module.id}
          className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
        >
          {/* Module Header */}
          <div
            className="flex justify-between items-center bg-gray-50 px-4 py-3 cursor-pointer"
            onClick={() => toggleModule(moduleIndex)}
          >
            <div>
              <p className="text-xs uppercase text-gray-500">
                Module {moduleIndex + 1}
              </p>
              <h3 className="text-gray-900 font-medium">
                {module.title}{" "}
                <span className="text-gray-600 text-sm">
                  ({module.subtitle})
                </span>
              </h3>
              <p className="text-xs text-gray-500">{module.duration}</p>
            </div>
            <div className="flex items-center gap-2">
              {module.locked && <Lock className="w-4 h-4 text-gray-400" />}
              {openModuleIndex === moduleIndex ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </div>

          {/* Module Content */}
          {openModuleIndex === moduleIndex && (
            <div className="p-4 bg-white">
              {module.items.map((item, videoIndex) => (
                <div key={item.id} className="mb-3">
                  {/* Video List Item */}
                  <div
                    className="flex justify-between items-center border rounded-lg p-3 cursor-pointer"
                    onClick={() => !module.locked && toggleVideo(videoIndex)}
                  >
                    <div>
                      <h4 className="text-gray-800 font-medium">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.type} • {item.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.free ? (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Free
                        </span>
                      ) : (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                      {openVideoIndex === videoIndex ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Only the clicked video expands */}
                  {openVideoIndex === videoIndex &&
                    item.free &&
                    !module.locked && (
                      <div className="mt-2">
                        <video
                          src={item.videoUrl}
                          controls
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
