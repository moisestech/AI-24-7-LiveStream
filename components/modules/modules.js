// Modules
import ModuleImage from './moduleImage/moduleImage'
import ModuleText from './moduleText/moduleText'

const Modules = ({ modules }) => {
    return (
        <>
            {modules?.map((module) => {
                switch (module._type) {
                    case 'moduleImage':
                        return <ModuleImage module={module} key={module._key} />
                        break
                    case 'moduleText':
                        return <ModuleText module={module} key={module._key} />
                        break
                    default:
                        return
                }
            })}
        </>
    )
}

export default Modules
