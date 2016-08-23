export function PAPIError(message) {
  this.message = message;
}


export function handleError(error, node, errorMessages = {}) {
  const element = node;
  const messages = Object.assign(errorMessages, {
    GENERIC: 'Произошла ошибка',
  });

  if (error instanceof PAPIError) {
    element.innerHTML = messages[error.message] || messages.GENERIC;
  } else {
    element.innerHTML = messages.GENERIC;
    throw (error);
  }
}
