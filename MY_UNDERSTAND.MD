## Part of nest
|Parts of nest| Description|
|----|-----|
|Controller| Handles incoming request|
|Service | Handel data access and business logic|
|Modules| Group together code|
|Pipes| Validate incoming data|
|Filters| Handles error that occur during request handling|
|Guards|Handles authentication|
|Interceptors| Adds extra logic to incoming request or outgoing response|
|Repositories| Handles data stored in db|

1. It is automatically crate the structure (mostly follows angular way)
2. automatically eslint and base unit test case will be add
3. normal node we need to crate all the structure. but here it will automatically create
4. automatically throw the 500 error if anything fails
5. you no need specify the status code, it will take automatically. like post means 201 and get means 200 it is giving.
6. to receive the body we will use req.body in normal js. but here it will automatically extract from there.
7. if it the bad request, like the body we are sending number instead of string, then it automatically throw the bad request.