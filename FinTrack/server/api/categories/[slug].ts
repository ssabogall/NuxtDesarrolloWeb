// ruta migrada a server/api/categories/[id].ts
export default defineEventHandler(() => {
  throw createError({ statusCode: 410, statusMessage: 'Use /api/categories/:id' })
})
