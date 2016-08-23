export function PAPIError(message) {
  this.message = message
}


export function handleError(error, node, errorMessages = {}) {
  const messages = Object.assign(errorMessages, {
      GENERIC: 'Произошла ошибка'
  })

  console.log(error)

  if (error instanceof PAPIError) {
    node.innerHTML = messages[error.message] || messages.GENERIC
  } else {
    node.innerHTML = messages.GENERIC
    throw (error)
  }
}
