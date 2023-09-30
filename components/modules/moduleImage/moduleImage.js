import ImageCms from "../../utils/imageCms/imageCms"

const ModuleImage = ({ module }) => {
    // console.log(module)

    return (
        <section className="moduleImage module">
            <ImageCms image={module.imageDesktop} />
        </section>
    )
}

export default ModuleImage
