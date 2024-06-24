// Write your code here

import {
  NoteListItem,
  NoteItemTitle,
  NoteItemDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails} = props
  console.log(noteItemDetails)
  const {noteTitle, noteDescription} = noteItemDetails

  return (
    <NoteListItem>
      <NoteItemTitle>{noteTitle}</NoteItemTitle>
      <NoteItemDescription>{noteDescription}</NoteItemDescription>
    </NoteListItem>
  )
}

export default NoteItem
