import { getCourse } from '@/data/courses';
import BasicCourseInfo from './_components/basic-course-info';

async function CourseCreatePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  const course = await getCourse(courseId)

  return (
    <div
      className='grid grid-cols-1 gap-6 lg:grid-cols-3'
      data-course-id={courseId}
    >
      {/* فرم‌های تکمیل دوره (2/3 صفحه) */}
      <div className='lg:col-span-2'>
        <BasicCourseInfo initialData={course ?? undefined} courseId={courseId} />
      </div>

      {/* پیش‌نمایش دوره (1/3 صفحه) - در پرامپت‌های بعدی تکمیل می‌شود */}
      <aside className='lg:col-span-1' />
    </div>
  );
}

export default CourseCreatePage;
