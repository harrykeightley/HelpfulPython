👋🏻 This is the home of HelpfulPython.com - an introductory python/computer-science course for people with no background experience with programming.

## Getting Started Locally
- Install dependencies: `yarn`
- Then run the development server:
```bash
yarn dev
```
- Visit the browser at the port specified in the terminal, and you should see the site. 

## Stack info
- Uses next.js on top of React for static exports/bundling.
- Course pages are automatically generated from markdown files in the content directory.
- Uses remark to transform markdown content into html elements.
- Will be hosted in a Google Storage Bucket.

## Structure
- `content`: Where all the course and page content lives, inside markdown files.
- `pages`: The standard next.js pages

## Contributing
Any help updating typos or incorrect content would be appreciated. Make a pull request and we'll review and merge if we agree.
