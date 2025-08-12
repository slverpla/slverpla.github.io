// Utility function for conditional class names
const className = (...args: any[]) => {
  return args
    .filter(Boolean)
    .map((arg) => {
      if (typeof arg === 'string') return arg;
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([, condition]) => condition)
          .map(([cls]) => cls)
          .join(' ');
      }
      return '';
    })
    .join(' ');
};

export { className };
