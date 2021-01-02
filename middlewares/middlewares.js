import { send } from '../deps.js';
import { getTime } from '../routes/controller/timeController.js'

//middleware for error handling (loggs errors whenever the program encounters them)
const errorMiddleware = async(context, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
  }
}

//middleware for logging the requests made
const requests = async({session, request}, next) => {
    let id = await session.get('user')
    id ? id = 'user id' + id.id : id = 'anonymous' 
    const time = getTime()
    console.log(`${time} - ${request.method} - ${request.url.pathname} - ${id}`)
    await next();
}

//middleware for serving static files
const serveStaticFilesMiddleware = async(context, next) => {
  if (context.request.url.pathname.startsWith('/static')) {
    const path = context.request.url.pathname.substring(7);
  
    await send(context, path, {
      root: `${Deno.cwd()}/static`
    });
  
  } else {
    await next();
  }
}

//middleware limiting access, checks that the user is authenticated when accessing user-specific sites

const limitAccessMiddleware = async(context, next) => {
  /*
    const path = context.request.url.pathname
    if (path !=='/' && !path.startsWith('/api') && !path.startsWith('/auth')) {
      if (await context.session.get('authenticated')) {
        await next();
      } else {
        context.response.redirect('/auth/login')
      }
    } else {
      await next();
    }
    */
  }

export { errorMiddleware, serveStaticFilesMiddleware, limitAccessMiddleware, requests };