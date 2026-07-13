# Motivation

this is my first React/JavaScript application.

# TODOs

## UX

### Elegantly handle compute attempts with empty fields (DONE)

it's really all about expressing intent. I have fields such as `hasTD` and `hasTP` and I must use those to infer if a field is required or not but since those live in the `Course` class which doesn not compute the grade, it merely stores informations about it, trimbaling arround boolean values shared between two classes is kidn of confusing and i still need a way to know if a field is required at runtime to when the user clicks the `compute` button. So, the solution is to explicitly pass the knowledge of the type using the `COURSE_TYPE` enumerator

### Input validation (0 <= grade <= 20)

## Arch
- Add a year by year structure
- Add some kind of database to handle arbitrary semesters

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
