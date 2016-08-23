export function PAPIError(message) {
  this.message = message;
}


export function handleError(error, node, errorMessages = {}) {
  const element = node;
  const messages = Object.assign(errorMessages, {
    GENERIC: 'Произошла ошибка',
  });
  const errorText = messages[error.message] || messages.GENERIC;

  element.innerHTML = `<div class="alert alert-danger" role="alert">${errorText}</div>`;

  if (error instanceof PAPIError) {
    return false;
  }
  throw (error);
}
