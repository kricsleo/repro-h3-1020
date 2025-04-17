export default defineCachedEventHandler(async (event) => {
  return getQuery(event)
},
{
  maxAge: 31_536_000 // 1 year
})