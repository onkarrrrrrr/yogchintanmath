import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import w1 from "@/assets/WhatsApp Image 2026-03-25 at 12.22.58 AM (1).jpeg";
import w2 from "@/assets/WhatsApp Image 2026-03-25 at 12.22.59 AM.jpeg";
import w3 from "@/assets/WhatsApp Image 2026-03-25 at 12.23.01 AM.jpeg";

// Mock API for static data
export const api = {
  getGalleryImages: async () => {
    // All available gallery images
    return [
      { id: 1, src: g1, alt: "Temple Image 1" },
      { id: 2, src: g2, alt: "Temple Image 2" },
      { id: 3, src: g3, alt: "Temple Image 3" },
      { id: 4, src: g4, alt: "Temple Image 4" },
      { id: 5, src: g5, alt: "Temple Image 5" },
      { id: 6, src: g6, alt: "Temple Image 6" },
      { id: 7, src: h1, alt: "Hero Image 1" },
      { id: 8, src: h2, alt: "Hero Image 2" },
      { id: 9, src: h3, alt: "Hero Image 3" },
      { id: 10, src: w1, alt: "WhatsApp Image 1" },
      { id: 11, src: w2, alt: "WhatsApp Image 2" },
      { id: 12, src: w3, alt: "WhatsApp Image 3" },
    ];
  },
  getServices: async () => {
    // Mock services data
    return [
      {
        id: 1,
        title: "Gurucharitra Parayan",
        description: "Experience the divine teachings through sacred Gurucharitra Parayan sessions conducted by learned scholars.",
        icon: "📖",
        image: g1,
        details: [
          "Daily Parayan sessions with expert scholars",
          "Interactive Q&A sessions",
          "Spiritual guidance and counseling",
          "Community participation opportunities"
        ]
      },
      {
        id: 2,
        title: "Accommodation",
        description: "Peaceful and comfortable accommodation facilities for spiritual seekers and devotees.",
        icon: "🏠",
        image: g2,
        details: [
          "Clean and comfortable rooms",
          "Peaceful environment for meditation",
          "Reasonable pricing",
          "24/7 security and maintenance"
        ]
      },
      {
        id: 3,
        title: "Puja Services",
        description: "Traditional puja ceremonies and rituals performed with devotion and authenticity.",
        icon: "🙏",
        image: g3,
        details: [
          "Traditional Vedic ceremonies",
          "Special occasion pujas",
          "Personalized rituals",
          "Experienced priests and pandits"
        ]
      },
    ];
  },
};