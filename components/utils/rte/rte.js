import { PortableText } from '@portabletext/react'

const RTE = ({ text }) => {
    const myPortableTextComponents = {
        marks: {
            link: ({ children, value }) => {
                return (
                    <a href={value.href} className="rte__link">{children}</a>
                )
            },
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="rte__li">
                    {children}
                </li>
            ),
        },
    }

    return <PortableText value={text} components={myPortableTextComponents} />
}

export default RTE
