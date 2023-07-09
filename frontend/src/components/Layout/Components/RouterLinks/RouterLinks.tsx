import { NavLink } from 'react-router-dom'
import { RouterNames } from 'src/router'
import { RouterLinksInterface } from './RouterLinksInterface'

const RouterLinks = ({ onClick }: RouterLinksInterface) => {
    return (
        <>
            <NavLink to={RouterNames.HOME} onClick={onClick}>
                Home
            </NavLink>
            <NavLink to={RouterNames.ALLCOURSES} onClick={onClick}>
                Cursuri
            </NavLink>
            <NavLink to={RouterNames.TESTS} onClick={onClick}>
                Teste
            </NavLink>
            <NavLink to={RouterNames.REVIEW} onClick={onClick}>
                Video Recenzii
            </NavLink>
            <NavLink to={RouterNames.TEAM} onClick={onClick}>
                Echipa
            </NavLink>
            <NavLink to={RouterNames.CAREER} onClick={onClick}>
                Carieră
            </NavLink>
            <NavLink to={RouterNames.CONTACTS} onClick={onClick}>
                Contacte
            </NavLink>
        </>
    )
}

export default RouterLinks
