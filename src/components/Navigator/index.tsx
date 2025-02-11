import { Wrapper } from "../Wrapper";

export function Navigator() {
  return (
    <header className="py-2">
      <Wrapper>
        <nav className="flex items-center justify-between">
          <p>HA</p>
          <ul className="flex flex-row items-center gap-3">
            <li>Articles</li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}
