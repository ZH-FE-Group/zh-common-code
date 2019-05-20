/**
 * 存储localStorage
 */
export const setLocalStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getLocalStore = name => {
  if (!name) return;
  if (typeof name !== 'string') {
    return JSON.parse(window.localStorage.getItem(name));
  } else {
    return window.localStorage.getItem(name)
  }
}