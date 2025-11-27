// // app/(client)/blog/[id]/page.tsx
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { BLOGS } from "@/constants/blogs";

// // SEO metadata – dinamik (paramları any saxlayırıq ki, PageProps constraint ilə dava etməsin)
// export function generateMetadata({ params }: any): Metadata {
//   const blog = BLOGS.find((b) => String(b.id) === String(params?.id));

//   if (!blog) {
//     return {
//       title: "Məqalə tapılmadı | Simurq Parapsixologiya",
//       description: "Axtardığınız məqalə tapılmadı.",
//     };
//   }

//   const shortExcerpt =
//     blog.excerpt.length > 180
//       ? blog.excerpt.slice(0, 177) + "..."
//       : blog.excerpt;

//   return {
//     title: `${blog.title} | Simurq Parapsixologiya`,
//     description: shortExcerpt,
//     openGraph: {
//       title: `${blog.title} | Simurq Parapsixologiya`,
//       description: shortExcerpt,
//       images: [
//         {
//           url: `/${blog.imageUrl}`,
//         },
//       ],
//     },
//   };
// }

// // İstəsən bunu da saxlaya bilərsən – typesiz qoymuşam
// export function generateStaticParams() {
//   return BLOGS.map((blog) => ({
//     id: String(blog.id),
//   }));
// }

// export default function BlogDetailPage({ params }: { params: { id: string } }) {
//   const blog = BLOGS.find((b) => String(b.id) === String(params?.id));

//   if (!blog) {
//     notFound();
//   }

//   const relatedBlogs = BLOGS.filter((b) => b.id !== blog!.id).slice(0, 3);

//   return (
//     <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 py-10">
//       <div className="container mx-auto max-w-4xl px-4">
//         {/* Geri link */}
//         <div className="mb-4 text-sm">
//           <Link
//             href="/blog"
//             className="text-sky-600 dark:text-sky-400 hover:underline"
//           >
//             ← Bütün bloqlara qayıt
//           </Link>
//         </div>

//         {/* Başlıq və müəllif */}
//         <header>
//           <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
//             Blog · Simurq Parapsixologiya
//           </p>
//           <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-snug">
//             {blog!.title}
//           </h1>
//           <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
//             {blog!.authorName}
//           </p>
//         </header>

//         {/* Şəkil */}
//         <div className="mt-6">
//           <img
//             src={`/${blog!.imageUrl}`}
//             alt={blog!.title}
//             className="w-full rounded-xl shadow-md shadow-slate-200 dark:shadow-slate-900 object-cover max-h-[420px]"
//           />
//         </div>

//         {/* Kontent – hazırda excerpt (1-ci blogda bu faktiki full məqalədir) */}
//         <article className="mt-8 leading-relaxed text-base md:text-lg space-y-4 text-slate-800 dark:text-slate-200">
//           <p className="whitespace-pre-line">{blog!.excerpt}</p>
//         </article>

//         {/* CTA */}
//         <section className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 px-6 py-5">
//           <h2 className="text-lg font-semibold mb-2">
//             Mövzu ilə bağlı sualın var?
//           </h2>
//           <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
//             Əgər bu yazıda toxunulan mövzular sənin həyatında da özünü
//             göstərirsə, professional yanaşma ilə bu prosesi birlikdə
//             dəyərləndirə bilərik.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
//           >
//             Konsultasiya üçün müraciət et
//           </Link>
//         </section>

//         {/* Oxşar bloqlar */}
//         {relatedBlogs.length > 0 && (
//           <section className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
//             <h3 className="text-lg font-semibold mb-4">Oxşar digər bloqlar</h3>
//             <div className="grid md:grid-cols-3 gap-5">
//               {relatedBlogs.map((item) => (
//                 <Link
//                   key={item.id}
//                   href={item.href}
//                   className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-sky-400/70 transition"
//                 >
//                   <div className="h-24 w-full overflow-hidden">
//                     <img
//                       src={`/${item.imageUrl}`}
//                       alt={item.title}
//                       className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-3">
//                     <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.14em] line-clamp-1">
//                       {item.authorName}
//                     </p>
//                     <p className="mt-1 text-sm font-semibold line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-300">
//                       {item.title}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }
