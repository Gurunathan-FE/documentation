import { createContext, useContext } from 'react'

export const DocPageContext = createContext({ standalone: false })

export function useDocPageContext() {
  return useContext(DocPageContext)
}
