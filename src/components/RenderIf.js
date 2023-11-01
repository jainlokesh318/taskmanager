export default function RenderIf({ children, condition, elseRender }) {
    return condition ? children : elseRender ? elseRender : null
}