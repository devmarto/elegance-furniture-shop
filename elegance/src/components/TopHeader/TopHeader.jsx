import { TopHeaderContainer } from './top-header-style'

const TopHeader = ({ children }) => {
  return (
    <TopHeaderContainer>
      {children}
    </TopHeaderContainer>
  )
}

export default TopHeader;