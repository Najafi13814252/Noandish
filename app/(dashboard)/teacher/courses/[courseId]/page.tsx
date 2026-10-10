import { getCourse, getCourseFormOptions } from '@/data/courses';
import BasicCourseInfo from './_components/basic-course-info';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import CourseDescriptions from './_components/course-descriptions';
import CourseImage from './_components/course-image';
import CourseChapters from './_components/course-chapters';

type Params = Promise<{ courseId: string }>;

function CourseCreatePage({ params }: { params: Params }) {

  return (
    <div
      className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
      {/* فرم‌های تکمیل دوره (2/3 صفحه) */}
      <div className='lg:col-span-2 space-y-6'>
        <Suspense fallback={null}>
          <CourseDetailsHandle params={params} />
        </Suspense>
      </div>

      {/* پیش‌نمایش دوره (1/3 صفحه) - در پرامپت‌های بعدی تکمیل می‌شود */}
      <aside className='lg:col-span-1' />
    </div>
  );
}

export default CourseCreatePage;

async function CourseDetailsHandle({ params }: { params: Params }) {

  const { courseId } = await params;

  const [course, options] = await Promise.all([
    getCourse(courseId),
    getCourseFormOptions(),
  ])

  if (!course) notFound()
  return (
    <>
      <BasicCourseInfo
        initialData={course}
        courseId={courseId}
        categories={options.categories}
        levels={options.levels}
      />

      <CourseDescriptions
        courseId={courseId}
        initialData={course}
      />

      <CourseImage
        courseId={courseId}
        initialImageUrl={course.imageUrl}
      />

      <CourseChapters
        courseId={courseId}
        initialChapters={course.chapters.map(chapter => ({
          id: chapter.id,
          title: chapter.title,
          lessons: chapter.lessons.map(lesson => ({
            id: lesson.id,
            title: lesson.title,
            videoUrl: lesson.videoUrl ?? "",
            duration: lesson.duration ?? null,
            isFree: lesson.isFree,
          })),
        }))}
      />

    </>

  )
}
