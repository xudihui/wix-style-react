export default ({element}) => ({
  exists: () => !!element,
  getChildren: () => element.innerHTML
});
