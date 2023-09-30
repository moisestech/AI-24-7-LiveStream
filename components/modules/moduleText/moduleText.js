import RTE from '../../utils/rte/rte'

const ModuleText = ({ module }) => {
    return (
        <section className="module moduleText rte">
            <div className="moduleText__title">
                {module.title}
            </div>
            <div className="moduleText__content">
                <RTE text={module.text} />
            </div>
        </section>
    )
}

export default ModuleText
