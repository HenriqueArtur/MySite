'use client'

import { Wrapper } from "./Wrapper"

export default function Footer() {
  return (
    <footer>
      <Wrapper>
        <div className="flex items-center justify-between py-4 text-sm text-neutral-500">
          <span>Henrique Artur © {new Date().getFullYear()}</span>

          <div className="flex items-center">
            aaa
          </div>
        </div>
      </Wrapper>
    </footer>)
}
