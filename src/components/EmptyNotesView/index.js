import {
  EmptyNotesViewContainer,
  EmptyNotesViewImage,
  EmptyNotesViewHeading,
  EmptyNotesViewParagraph,
} from './styledComponents'

const EmptyNotesView = () => (
  <EmptyNotesViewContainer>
    <EmptyNotesViewImage
      src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
      alt="notes empty"
    />
    <EmptyNotesViewHeading>No Notes Yet</EmptyNotesViewHeading>
    <EmptyNotesViewParagraph>
      Notes you add will appear here
    </EmptyNotesViewParagraph>
  </EmptyNotesViewContainer>
)

export default EmptyNotesView
