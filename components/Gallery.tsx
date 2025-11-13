import React, { useState } from 'react';
import type { GalleryVideo, GalleryPhoto } from '../types';

const videos: GalleryVideo[] = [
  { id: '3tmd-ClpJxA', title: 'A Day at a Child Friendly Space' },
  { id: '6_b7RDuLwcI', title: 'Women Empowerment Workshop' },
  { id: 'sc2608d-p6s', title: 'Jal Jeevan Mission Impact' },
  { id: 'i_P5lI-a_iA', title: 'KFORD Community Outreach' },
];

const photos: GalleryPhoto[] = [
  { src: 'https://picsum.photos/id/1015/600/400', alt: 'Children learning in a classroom' },
  { src: 'https://picsum.photos/id/1025/600/400', alt: 'A community health check-up' },
  { src: 'https://picsum.photos/id/103/600/400', alt: 'Women participating in a skill-building program' },
  { src: 'https://picsum.photos/id/1043/600/400', alt: 'Clean water initiative' },
  { src: 'https://picsum.photos/id/1047/600/400', alt: 'A group of smiling children' },
  { src: 'https://picsum.photos/id/1050/600/400', alt: 'Flood relief supplies distribution' },
  { src: 'https://picsum.photos/id/106/600/400', alt: 'Team meeting with local community leaders' },
  { src: 'https://picsum.photos/id/1084/600/400', alt: 'A rehabilitated inclusive center' },
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'photos'>('videos');

  return (
    <section id="gallery" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Media Gallery
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            A glimpse into our work and the communities we serve.
          </p>
        </div>

        <div className="flex justify-center mb-8 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 font-semibold text-lg border-b-2 transition-colors duration-300 ${activeTab === 'videos' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-slate-500 hover:text-cyan-500'}`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-3 font-semibold text-lg border-b-2 transition-colors duration-300 ${activeTab === 'photos' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-slate-500 hover:text-cyan-500'}`}
          >
            Photos
          </button>
        </div>

        <div>
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map(video => (
                <div key={video.id} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800">{video.title}</h3>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <p className="p-4 text-white text-sm bg-gradient-to-t from-black/60 to-transparent w-full">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
