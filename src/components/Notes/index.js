// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import EmptyNotesView from '../EmptyNotesView'
import NoteItem from '../NoteItem'
import {
  NotesContainer,
  NotesHeading,
  InputFormContainer,
  NameInputElement,
  NoteTextAreaElement,
  AddButton,
  NoteItemContainer,
} from './styledComponents'

const Notes = () => {
  const [noteTitle, setNameTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [notesList, setAddNotesList] = useState([])
  console.log(noteTitle)
  console.log(noteDescription)
  console.log(notesList)

  const onChangeNoteTitle = event => {
    setNameTitle(event.target.value)
  }

  const onChangeNoteDescription = event => {
    setNoteDescription(event.target.value)
  }

  const onSubmitAddNotesListItem = event => {
    event.preventDefault()
    const newNoteItem = {
      id: uuidv4(),
      noteTitle,
      noteDescription,
    }
    setAddNotesList(prevState => [...prevState, newNoteItem])
    setNameTitle('')
    setNoteDescription('')
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>

      <InputFormContainer onSubmit={onSubmitAddNotesListItem}>
        <NameInputElement
          placeholder="Title"
          onChange={onChangeNoteTitle}
          value={noteTitle}
        />
        <NoteTextAreaElement
          rows={10}
          placeholder="Take a Note..."
          onChange={onChangeNoteDescription}
          value={noteDescription}
        />
        <AddButton type="submit">Add</AddButton>
      </InputFormContainer>
      <NoteItemContainer>
        {notesList.length === 0 ? (
          <EmptyNotesView />
        ) : (
          notesList.map(eachNoteItem => (
            <NoteItem key={eachNoteItem.id} noteItemDetails={eachNoteItem} />
          ))
        )}
      </NoteItemContainer>
    </NotesContainer>
  )
}

export default Notes
