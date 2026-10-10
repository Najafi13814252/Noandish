import CardSlider from './card-slider'
import { getCoursesWithMeta } from '@/data/courses'

async function PopularCourses() {
    const courses = await getCoursesWithMeta()
    return (
        <CardSlider courses={courses} />
    )
}

export default PopularCourses