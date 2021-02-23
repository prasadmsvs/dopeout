export function getList() {
  return fetch('/api/projects')
    .then(data => data.json())
}