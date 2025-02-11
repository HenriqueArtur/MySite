import { JSX } from "react"

interface Props {
  children: JSX.Element[] | JSX.Element
}

export function Wrapper(props: Props) {
  return (
    <div className="m-[0_auto] max-w-4xl px-6">
      {props.children}
    </div>
  )
}
