import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import Courses from 'src/components/Courses/Courses'

const AllCoursesPage = () => {
    return (
        <div>
            <Breadcrumbs current='Toate Cursurile' />
            <Courses />
        </div>
    )
}

export default AllCoursesPage
