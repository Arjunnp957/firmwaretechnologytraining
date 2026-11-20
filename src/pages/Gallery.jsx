
import { useState, useMemo } from 'react'
import { Eye, Sparkles } from 'lucide-react'
import SEO from '../components/common/SEO'
import PageHeader from '../components/common/PageHeader'
import ImageModal from '../components/gallery/ImageModal'
import CTASection from '../components/home/CTASection'
import gallery from '../data/gallery'
import { getActiveSorted } from '../utils/dataHelpers'

export default function Gallery() {
  const allImages = useMemo(() => getActiveSorted(gallery), [])
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <SEO
        title="Campus & Computer Lab Gallery"
        description="Take a visual tour of our modern computer labs, classrooms, project demo sessions, and student workshops."
        canonicalUrl="/gallery"
      />

      <PageHeader
        badge="Campus Life"
        title="Our Labs, Classrooms & Learning Environment"
        description="Take a visual walkthrough of our high-tech training infrastructure, interactive sessions, and collaborative workspace."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100 cursor-pointer shadow-xs hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.svg'
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold text-brand-300 flex items-center gap-1 mb-1">
                  <Sparkles size={13} />
                  {item.caption.replace('Placeholder: ', '')}
                </span>

                <p className="text-xs text-slate-300 line-clamp-1 flex items-center gap-1">
                  <Eye size={12} />
                  Click to expand photo
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <CTASection />
    </div>
  )
}
