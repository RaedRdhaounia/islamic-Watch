export function StatusAction(status) {
  switch (status) {
    case 'in progress':
      return 'see details';
    case 'not started':
      return 'start a challenge';
    case 'success':
      return 'get your badge';
    case 'failed':
      return 'challenge again';
    case 'abondanned':
      return 're-challenge';
    default:
      return 'wihte';
  }
}
