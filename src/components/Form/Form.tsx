

import { useState } from 'react'
import { Container, ContainerSuccess } from './styles'

export function Form() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Just set submitted to true (dummy action)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <ContainerSuccess>
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to the top
        </button>
      </ContainerSuccess>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Send a message to get started."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  )
}
