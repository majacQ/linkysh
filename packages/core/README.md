# @linkysh/core

`@linkysh/core` is the core backend module that handles user access control and all CRUD interactions with the database.

It does so by exposing a REST API that can be used by any frontend application. This means that any person can create their own application to interact with and extend `@linkysh/core`.

> Authentication and authorization is not handled directly by `@linkysh/core`. Instead, a Cloudfoundry UAA instance (that's linked to this module) is responsible.

## OpenAPI root file

`/openapi.json` and `/openapi.yaml` are exposed at the root path to aid with documentation and code generation.

## API Explorer

`/explorer` is a web-based API explorer that inteperets the  OpenAPI root file to aid with documentation and "trying out the API". It is safe to keep it enabled.
