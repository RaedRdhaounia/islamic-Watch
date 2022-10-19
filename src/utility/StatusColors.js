export function StatusColors(status) {
  switch (status) {
    case 'in progress':
      return 'yellow';
    case "not started":
      return 'wihte';
    case "success":
      return 'green';
    case "failed":
      return 'red';
    case "abondanned":
      return 'gray';
    default:
     return "wihte"
  }
}
