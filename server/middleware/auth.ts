export default defineEventHandler(async (event) => {
  event.context.auth = getAuthState(event);
});
