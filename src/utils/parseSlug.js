export default (string) => {
    return string.replace(/\s/, '_').replace(/\W/, '').toLowerCase();
}